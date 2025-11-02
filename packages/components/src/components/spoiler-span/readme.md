# spoiler-span

The `spoiler-span` component is used to hide spoiler text until the user clicks on it.

## Usage

```html
<p>Hello, this is a spoiler: <spoiler-span>Iron-man dies!</spoiler-span></p>
```

The text inside the component will be hidden with a black background. When clicked, it will be revealed.

## Features

- Text is hidden by default with a black background
- Click to reveal the hidden text
- Smooth transition animation
- Once revealed, the text remains visible
- Hover effect on hidden text

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                                                                                 | Type      | Default |
| ------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `density`          | `density`           | Target particle density (particles per 100 square pixels)                                                                                                                                                                                                   | `number`  | `8`     |
| `fps`              | `fps`               | Target frames per second for particle animation (default: 60). Lower values improve performance on slower devices.                                                                                                                                          | `number`  | `60`    |
| `maxVelocity`      | `max-velocity`      | Maximum velocity for particles (pixels per frame)                                                                                                                                                                                                           | `number`  | `0.05`  |
| `minVelocity`      | `min-velocity`      | Minimum velocity for particles (pixels per frame)                                                                                                                                                                                                           | `number`  | `0.01`  |
| `monitorPosition`  | `monitor-position`  | Enable continuous position monitoring for hover effects and CSS transforms. When false, position updates only on scroll/resize events (better performance). When true, uses RAF loop to track position changes every frame (handles transforms/animations). | `boolean` | `false` |
| `particleLifetime` | `particle-lifetime` | Particle lifetime in frames (60fps = 1 second per 60 frames)                                                                                                                                                                                                | `number`  | `120`   |
| `revealDuration`   | `reveal-duration`   | Text fade-in duration in milliseconds when revealing                                                                                                                                                                                                        | `number`  | `300`   |
| `scale`            | `scale`             | Scale factor for particle size                                                                                                                                                                                                                              | `number`  | `1`     |
| `spawnStopDelay`   | `spawn-stop-delay`  | Delay in milliseconds before stopping particle spawning after click (default: 300ms)                                                                                                                                                                        | `number`  | `0`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
