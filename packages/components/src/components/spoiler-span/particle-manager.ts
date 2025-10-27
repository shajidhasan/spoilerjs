import { Particle, ParticleConfig } from './types';

export class ParticleManager {
    private particles: Particle[] = [];
    private config: ParticleConfig;
    private width: number;
    private height: number;
    private spawningEnabled: boolean = true;
    private particleSizes = [
        { width: 1, height: 1 },
        { width: 1, height: 2 },
        { width: 2, height: 1 },
        { width: 2, height: 2 },
    ];

    constructor(config: ParticleConfig, width: number, height: number) {
        this.config = config;
        this.width = width;
        this.height = height;
        this.initializeParticles();
    }

    /**
     * Update dimensions when canvas size changes
     */
    updateDimensions(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    private initializeParticles() {
        // Calculate number of particles based on area and density
        const area = this.width * this.height;
        const targetCount = Math.ceil((area / 100) * this.config.density);

        // Pre-populate with some particles at various life stages
        const initialCount = Math.ceil(targetCount * 0.5);
        for (let i = 0; i < initialCount; i++) {
            const particle = this.createParticle();
            // Randomize initial life stage for staggered appearance
            particle.life = Math.random() * particle.maxLife;
            this.particles.push(particle);
        }
    }

    private createParticle(): Particle {
        // Random particle size from the predefined sizes
        const sizeTemplate = this.particleSizes[Math.floor(Math.random() * this.particleSizes.length)];
        const scaledSize = this.config.scale;

        // Calculate actual particle dimensions
        const particleWidth = sizeTemplate.width * scaledSize;
        const particleHeight = sizeTemplate.height * scaledSize;

        // Spawn randomly inside the canvas, ensuring the entire particle stays within bounds
        const padding = 2; // pixels from edge
        const maxX = this.width - particleWidth - padding;
        const maxY = this.height - particleHeight - padding;
        const x = padding + Math.random() * Math.max(0, maxX - padding);
        const y = padding + Math.random() * Math.max(0, maxY - padding);

        // Random velocity in any direction
        const speed = Math.random() * (this.config.maxVelocity - this.config.minVelocity) + this.config.minVelocity;
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;

        // Random lifetime variation (±50% of base lifetime for more variety)
        const lifetimeVariation = 0.5;
        const minLifetime = this.config.particleLifetime * (1 - lifetimeVariation);
        const maxLifetime = this.config.particleLifetime * (1 + lifetimeVariation);
        const lifetime = Math.random() * (maxLifetime - minLifetime) + minLifetime;

        // 50% of particles will have reduced opacity (0.3-0.6), others full opacity (1.0)
        const maxAlpha = Math.random() < 0.5 ? 1.0 : 0.3 + Math.random() * 0.3;

        const particle = {
            x,
            y,
            vx,
            vy,
            width: particleWidth,
            height: particleHeight,
            life: lifetime,
            maxLife: lifetime,
            alpha: 0, // Start invisible
            maxAlpha,
        };

        return particle;
    }

    update() {
        const area = this.width * this.height;
        const targetCount = Math.ceil((area / 100) * this.config.density);

        // Update existing particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Update lifetime
            p.life--;

            // Calculate alpha based on life stage for smooth fade in/out
            const fadeInDuration = p.maxLife * 0.2; // 20% of lifetime for fade in
            const fadeOutDuration = p.maxLife * 0.2; // 20% of lifetime for fade out

            if (p.life > p.maxLife - fadeInDuration) {
                // Fade in
                const fadeProgress = (p.maxLife - p.life) / fadeInDuration;
                p.alpha = fadeProgress * p.maxAlpha;
            } else if (p.life < fadeOutDuration) {
                // Fade out
                const fadeProgress = p.life / fadeOutDuration;
                p.alpha = fadeProgress * p.maxAlpha;
            } else {
                // Full opacity (respecting maxAlpha)
                p.alpha = p.maxAlpha;
            }

            // Remove particles that are dead or way out of bounds
            const margin = Math.max(this.width, this.height) * 0.5;
            const outOfBounds =
                p.x < -margin ||
                p.x > this.width + margin ||
                p.y < -margin ||
                p.y > this.height + margin;

            if (p.life <= 0 || outOfBounds) {
                this.particles.splice(i, 1);
            }
        }

        // Spawn new particles to maintain density (only if spawning is enabled)
        if (this.spawningEnabled) {
            while (this.particles.length < targetCount) {
                this.particles.push(this.createParticle());
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.config.textColor;

        this.particles.forEach(p => {
            if (p.alpha > 0) {
                ctx.globalAlpha = p.alpha;
                ctx.fillRect(Math.round(p.x), Math.round(p.y), Math.ceil(p.width), Math.ceil(p.height));
            }
        });

        ctx.globalAlpha = 1;
    }

    stopSpawning() {
        this.spawningEnabled = false;
    }

    hasParticles(): boolean {
        return this.particles.length > 0;
    }

    getMaxParticleLifetime(): number {
        if (this.particles.length === 0) return 0;
        let max = 0;
        for (const p of this.particles) {
            if (p.life > max) max = p.life;
        }
        return max;
    }

    getParticles(): Particle[] {
        return this.particles;
    }

    clear() {
        this.particles = [];
    }
}