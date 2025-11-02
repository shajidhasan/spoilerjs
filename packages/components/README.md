# spoilerjs

**A fast, lightweight web component for creating spoiler text with particle effects.**

[![NPM](https://img.shields.io/npm/v/spoilerjs?style=flat-square)](https://www.npmjs.com/package/spoilerjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/spoilerjs?style=flat-square)](https://bundlephobia.com/package/spoilerjs)

spoilerjs is a dependency-free web component that lets you hide text with a spoiler warning. When a user clicks on the spoiler, the text is revealed with a configurable particle effect inspired by the Telegram app.

## Installation

```bash
npm install spoilerjs
```

## Quick Start

```javascript
import 'spoilerjs/spoiler-span';
```

```html
<p>
    Be careful, here's a spoiler:
    <spoiler-span>
        Snape kills Dumbledore.
    </spoiler-span>
</p>
```

## Customization

| Attribute          | Description                                                    | Default   |
| ------------------ | -------------------------------------------------------------- | --------- |
| `scale`            | Scale factor for particle size.                                | `1`       |
| `min-velocity`     | Minimum velocity for particles (pixels per frame).             | `0.01`    |
| `max-velocity`     | Maximum velocity for particles (pixels per frame).             | `0.05`    |
| `particle-lifetime`| Particle lifetime in frames (e.g., 60 frames = 1 second).      | `120`     |
| `density`          | Target particle density (particles per 100 square pixels).     | `8`       |
| `reveal-duration`  | Text fade-in duration in milliseconds when revealing.          | `300`     |
| `spawn-stop-delay` | Delay in milliseconds before stopping particle spawning after click. | `0`       |
| `monitor-position` | Continuously monitor position for hover effects and transforms. | `false`   |
| `fps`              | Target frames per second for particle animation. Lower values improve performance on slower devices. | `60`      |

### Example

```html
<spoiler-span
    density="15"
    particle-lifetime="200"
    reveal-duration="1000"
>
    This spoiler has a higher particle density and a longer reveal time.
</spoiler-span>
```

## Documentation

For full documentation, examples, and demos, visit: [https://spoilerjs.sh4jid.me](https://spoilerjs.sh4jid.me)

## License

MIT