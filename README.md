# spoilerjs

**A fast, lightweight web component for creating spoiler text with particle effects.**

[![NPM](https://img.shields.io/npm/v/spoilerjs?style=flat-square)](https://www.npmjs.com/package/spoilerjs)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/spoilerjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/shajidhasan/spoilerjs?style=flat-square)](https://github.com/shajidhasan/spoilerjs/issues)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/spoilerjs?style=flat-square)](https://bundlephobia.com/package/spoilerjs)

spoilerjs is a dependency-free web component that lets you hide text with a spoiler warning. When a user clicks on the spoiler, the text is revealed with a configurable particle effect inspired by the Telegram app. It's performant, easy to use, and works in any modern browser.

![spoilerjs Demo](demo/demo.gif)

[More demos available here](https://spoilerjs.sh4jid.me/#demo)

## Features

-   **Lightweight and Performant:** No dependencies, just pure Web Components.
-   **Easy to Use:** Simply wrap your text in a `<spoiler-span>` tag.
-   **Customizable:** Control the particle effects, colors, and more.
-   **Accessible:** Designed with accessibility in mind.
-   **Framework Agnostic:** Works with any framework or no framework at all.

## Similar Projects

After creating this, I discovered [spoiled](https://github.com/molefrog/spoiled), another excellent spoiler text library also inspired by Telegram's spoiler effect. However, this project is still viable because `spoiled` is only for React, and uses the CSS Houdini API which may not be completely supported yet.


## Getting Started

### Installation

You can install spoilerjs from npm:

```bash
npm install spoilerjs
```

### Usage

1.  **Import the component:**

    ```javascript
    import 'spoilerjs/spoiler-span';
    ```

2.  **Use it in your HTML:**

    ```html
    <p>
        Be careful, here's a spoiler:
        <spoiler-span>
            Snape kills Dumbledore.
        </spoiler-span>
    </p>
    ```

    That's it! You now have a working spoiler.

## Customization

You can customize the appearance and behavior of the spoiler using attributes on the `<spoiler-span>` element.

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

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

spoilerjs is licensed under the [MIT License](LICENSE).

## Acknowledgements

-   The particle reveal effect is inspired by the spoiler effect in the **Telegram** messaging app.
-   The documentation website was built with help from these amazing open-source projects:
    -   [Skeleton UI](https://www.skeleton.dev/)
    -   [TypeIt](https://typeitjs.com/)
    -   [PrismJS](https://prismjs.com/)
    -   [Lucide Icons](https://lucide.dev/)