export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    width: number;
    height: number;
    life: number;
    maxLife: number;
    alpha: number;
    maxAlpha: number;
}

// Captures document-level coordinates for positioning the particle canvases.
export interface BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ParticleConfig {
    scale: number;
    minVelocity: number;
    maxVelocity: number;
    particleLifetime: number;
    density: number;
    textColor: string;
}