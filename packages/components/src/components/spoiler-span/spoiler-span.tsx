import { Component, State, Prop, Element, h } from '@stencil/core';
import { BoundingBox, ParticleConfig } from './types';
import { ParticleManager } from './particle-manager';

@Component({
    tag: 'spoiler-span',
    styleUrl: 'spoiler-span.css',
    shadow: true,
})
export class SpoilerSpan {
    @Element() el: HTMLElement;

    /**
     * Scale factor for particle size
     */
    @Prop() scale: number = 1;

    /**
     * Minimum velocity for particles (pixels per frame)
     */
    @Prop() minVelocity: number = 0.01;

    /**
     * Maximum velocity for particles (pixels per frame)
     */
    @Prop() maxVelocity: number = 0.05;

    /**
     * Particle lifetime in frames (60fps = 1 second per 60 frames)
     */
    @Prop() particleLifetime: number = 120;

    /**
     * Target particle density (particles per 100 square pixels)
     */
    @Prop() density: number = 8;

    /**
     * Text fade-in duration in milliseconds when revealing
     */
    @Prop() revealDuration: number = 300;

    /**
     * Delay in milliseconds before stopping particle spawning after click (default: 300ms)
     */
    @Prop() spawnStopDelay: number = 0;

    /**
     * Enable continuous position monitoring for hover effects and CSS transforms.
     * When false, position updates only on scroll/resize events (better performance).
     * When true, uses RAF loop to track position changes every frame (handles transforms/animations).
     */
    @Prop() monitorPosition: boolean = false;

    /**
     * Target frames per second for particle animation (default: 60).
     * Lower values improve performance on slower devices.
     */
    @Prop() fps: number = 60;

    /**
     * State to track if the spoiler is currently revealing (text fading in)
     */
    @State() revealing: boolean = false;

    /**
     * State to track if the spoiler has been fully revealed
     */
    @State() revealed: boolean = false;

    private canvases: HTMLCanvasElement[] = [];
    private contexts: CanvasRenderingContext2D[] = [];
    private particleManagers: ParticleManager[] = [];
    private animationFrameId: number | null = null;
    private textColor: string = '#000000';
    private slotElement: HTMLSlotElement;
    private containerDiv: HTMLDivElement;
    private resizeObserver: ResizeObserver;
    private scrollHandler: () => void;
    private resizeHandler: () => void;
    private updateDebounceTimer: number | null = null;
    private setupDebounceTimer: number | null = null;
    // Cache DPR at setup time
    private dpr: number = window.devicePixelRatio || 1;
    // Track last known dimensions for intelligent updates
    private lastKnownWidth: number = 0;
    private lastKnownHeight: number = 0;
    // RAF loop for continuous position monitoring (only when needed)
    private positionMonitorId: number | null = null;
    private isMonitoringPosition: boolean = false;
    // Frame throttling for FPS control
    private lastFrameTime: number = 0;
    private frameInterval: number = 1000 / 60; // Will be updated based on fps prop

    componentDidLoad() {
        // Calculate frame interval based on fps prop
        this.frameInterval = 1000 / Math.max(1, this.fps);
        this.setupSpoiler();

        // ResizeObserver for container size changes
        this.resizeObserver = new ResizeObserver((entries) => {
            if (this.revealed) return;

            for (const entry of entries) {
                const newWidth = entry.contentRect.width;
                const newHeight = entry.contentRect.height;

                // Check if dimensions actually changed (avoid false triggers)
                if (newWidth !== this.lastKnownWidth || newHeight !== this.lastKnownHeight) {
                    this.lastKnownWidth = newWidth;
                    this.lastKnownHeight = newHeight;
                    this.handleSizeChange();
                }
            }
        });
        this.resizeObserver.observe(this.containerDiv);

        // Scroll handler for position updates
        this.scrollHandler = () => {
            if (!this.revealed) {
                this.debouncedUpdateCanvasPositions();
            }
        };

        // Window resize handler - triggers particle regeneration
        this.resizeHandler = () => {
            if (!this.revealed) {
                this.handleSizeChange();
            }
        };

        window.addEventListener('scroll', this.scrollHandler, { passive: true });
        window.addEventListener('resize', this.resizeHandler, { passive: true });

        // Start position monitoring only if enabled (for hover effects and transforms)
        if (this.monitorPosition) {
            this.startPositionMonitoring();
        }
    }

    disconnectedCallback() {
        this.cleanup();
        this.stopPositionMonitoring();

        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }

        // Clear any pending debounce timers
        if (this.updateDebounceTimer !== null) {
            clearTimeout(this.updateDebounceTimer);
        }
        if (this.setupDebounceTimer !== null) {
            clearTimeout(this.setupDebounceTimer);
        }

        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.resizeHandler);
    }

    private cleanup() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.canvases.forEach(canvas => {
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }
        });
        this.canvases = [];
        this.contexts = [];
        this.particleManagers = [];
    }

    /**
     * Handle size changes - regenerate particles with minimal debounce
     */
    private handleSizeChange() {
        if (this.setupDebounceTimer !== null) {
            clearTimeout(this.setupDebounceTimer);
        }
        this.setupDebounceTimer = window.setTimeout(() => {
            this.setupSpoiler();
            this.setupDebounceTimer = null;
        }, 50); // Reduced from 100ms for faster response
    }

    /**
     * Start continuous position monitoring for hover effects and transforms
     */
    private startPositionMonitoring() {
        if (this.isMonitoringPosition) return;
        this.isMonitoringPosition = true;
        this.monitorPositionLoop();
    }

    /**
     * Stop continuous position monitoring
     */
    private stopPositionMonitoring() {
        this.isMonitoringPosition = false;
        if (this.positionMonitorId !== null) {
            cancelAnimationFrame(this.positionMonitorId);
            this.positionMonitorId = null;
        }
    }

    /**
     * Continuous position monitoring loop (RAF-based)
     * Only updates when positions actually change
     */
    private monitorPositionLoop = () => {
        if (!this.isMonitoringPosition || this.revealed) {
            this.positionMonitorId = null;
            return;
        }

        // Check if any canvas position needs updating
        this.updateCanvasPositions();

        this.positionMonitorId = requestAnimationFrame(this.monitorPositionLoop);
    };

    /**
     * Debounced version of updateCanvasPositions to prevent excessive calls
     */
    private debouncedUpdateCanvasPositions() {
        if (this.updateDebounceTimer !== null) {
            clearTimeout(this.updateDebounceTimer);
        }
        this.updateDebounceTimer = window.setTimeout(() => {
            this.updateCanvasPositions();
            this.updateDebounceTimer = null;
        }, 16); // ~60fps for smooth scrolling
    }

    private setupSpoiler() {
        // Clear existing canvases
        this.cleanup();

        // Get computed styles from the host element (parent) to get the actual text color
        // since the container div has color: transparent
        const hostStyle = window.getComputedStyle(this.el);
        this.textColor = hostStyle.color;

        // Get bounding boxes for text relative to container
        const boundingBoxes = this.getTextBoundingBoxes();

        if (boundingBoxes.length === 0) {
            return;
        }

        // Update tracked dimensions
        const containerRect = this.containerDiv.getBoundingClientRect();
        this.lastKnownWidth = containerRect.width;
        this.lastKnownHeight = containerRect.height;

        // Create particle config
        const config: ParticleConfig = {
            scale: this.scale,
            minVelocity: this.minVelocity,
            maxVelocity: this.maxVelocity,
            particleLifetime: this.particleLifetime,
            density: this.density,
            textColor: this.textColor,
        };

        // Create canvases for each bounding box, absolutely positioned inside the
        // container so they move with it when any ancestor scrolls
        boundingBoxes.forEach((box) => {
            const canvas = document.createElement('canvas');
            // Use device pixel ratio for sharp rendering
            canvas.width = box.width * this.dpr;
            canvas.height = box.height * this.dpr;
            canvas.style.width = `${box.width}px`;
            canvas.style.height = `${box.height}px`;
            canvas.style.position = 'absolute';
            canvas.style.left = `${box.x}px`;
            canvas.style.top = `${box.y}px`;
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '1';

            this.containerDiv.appendChild(canvas);

            const ctx = canvas.getContext('2d', { alpha: true });
            if (!ctx) {
                console.error('Failed to get 2D context for spoiler canvas');
                canvas.remove();
                return;
            }

            // Scale context for device pixel ratio
            ctx.scale(this.dpr, this.dpr);

            this.canvases.push(canvas);
            this.contexts.push(ctx);

            // Create particle manager for this canvas
            const manager = new ParticleManager(config, box.width, box.height);
            this.particleManagers.push(manager);
        });

        // Start animation
        this.animate();
    }

    private updateCanvasPositions() {
        const boxes = this.getTextBoundingBoxes();
        const count = Math.min(boxes.length, this.canvases.length);

        for (let i = 0; i < count; i++) {
            const canvas = this.canvases[i];
            const currentLeft = parseFloat(canvas.style.left);
            const currentTop = parseFloat(canvas.style.top);

            // Only update if position changed (avoid unnecessary style updates)
            if (Math.abs(boxes[i].x - currentLeft) > 0.5 || Math.abs(boxes[i].y - currentTop) > 0.5) {
                canvas.style.left = `${boxes[i].x}px`;
                canvas.style.top = `${boxes[i].y}px`;
            }
        }
    }

    /**
     * Measure where left: 0 / top: 0 actually lands for absolutely positioned
     * children of the container. The container is an inline element, so its
     * containing block origin is the first line fragment — not the union rect
     * that getBoundingClientRect() returns for wrapped text.
     */
    private getCanvasOrigin(): { x: number; y: number } {
        const probe = document.createElement('span');
        probe.style.position = 'absolute';
        probe.style.left = '0';
        probe.style.top = '0';
        probe.style.width = '0';
        probe.style.height = '0';
        probe.style.pointerEvents = 'none';

        this.containerDiv.appendChild(probe);
        const rect = probe.getBoundingClientRect();
        probe.remove();

        return { x: rect.left, y: rect.top };
    }

    private getTextBoundingBoxes(): BoundingBox[] {
        const boxes: BoundingBox[] = [];
        const slotNodes = this.slotElement.assignedNodes();

        if (slotNodes.length === 0) return boxes;

        const range = document.createRange();
        const origin = this.getCanvasOrigin();

        const pushRects = (rects: DOMRectList) => {
            for (let i = 0; i < rects.length; i++) {
                const rect = rects[i];
                if (rect.width > 0 && rect.height > 0) {
                    boxes.push({
                        x: rect.left - origin.x,
                        y: rect.top - origin.y,
                        width: rect.width,
                        height: rect.height,
                    });
                }
            }
        };

        slotNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                range.selectNodeContents(node);
                pushRects(range.getClientRects());
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                pushRects((node as HTMLElement).getClientRects());
            }
        });

        return boxes;
    }

    private animate = (currentTime: number = 0) => {
        if (this.revealed) return;

        // Throttle to target FPS
        const elapsed = currentTime - this.lastFrameTime;
        if (elapsed < this.frameInterval) {
            this.animationFrameId = requestAnimationFrame(this.animate);
            return;
        }

        // Update last frame time, accounting for any drift
        this.lastFrameTime = currentTime - (elapsed % this.frameInterval);

        // Check if all particles have died naturally
        const allParticlesDead = this.particleManagers.every(manager => !manager.hasParticles());

        if (this.revealing && allParticlesDead) {
            // All particles are gone, clean up and mark as fully revealed
            this.revealed = true;
            this.stopPositionMonitoring();
            this.cleanup();
            this.canvases.forEach(canvas => canvas.remove());
            return;
        }

        this.particleManagers.forEach((manager, index) => {
            const ctx = this.contexts[index];
            const canvas = this.canvases[index];

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width / this.dpr, canvas.height / this.dpr);

            // Update and draw particles
            manager.update();
            manager.draw(ctx);
        });

        this.animationFrameId = requestAnimationFrame(this.animate);
    };

    private handleClick = () => {
        if (this.revealed || this.revealing) return;

        // Start revealing - fade in text immediately
        this.revealing = true;

        // Stop spawning new particles after a delay
        setTimeout(() => {
            this.particleManagers.forEach(manager => {
                manager.stopSpawning();
            });
        }, this.spawnStopDelay);

        // Continue the animation loop - it will clean up when all particles are gone
        // The animation loop is already running, so we don't need to restart it
    };

    private handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleClick();
        }
    };

    render() {
        const className = this.revealed ? 'revealed' : this.revealing ? 'revealing' : 'hidden';
        const style = this.revealing ? { '--reveal-duration': `${this.revealDuration}ms` } : {};

        return (
            <div
                ref={el => this.containerDiv = el}
                class={className}
                style={style}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                role="button"
                tabindex={this.revealed ? -1 : 0}
                aria-label={this.revealed ? undefined : "Click to reveal spoiler"}
                aria-pressed={this.revealed}
            >
                <slot ref={el => this.slotElement = el as HTMLSlotElement} />
            </div>
        );
    }
}
