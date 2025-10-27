export const hero = {
  initial: `import 'spoilerjs/spoiler-span';

export default function App() {
  return (
    <h1>
      Beautiful spoiler effects
    </h1>
  );
}`,
  final: `import 'spoilerjs/spoiler-span';

export default function App() {
  return (
    <h1>
      Beautiful
      <spoiler-span>
        spoiler effects
      </spoiler-span>
    </h1>
  );
}`
}

export const installation = {
  npm: 'npm install spoilerjs',
  cdn: `<script
  type="module"
  src="https://unpkg.com/spoilerjs/dist/components/spoiler-span.js">
</script>`
}

export const examples = {
  react: `import 'spoilerjs/spoiler-span';

export default function App() {
  return (
    <div>
      <h1>Spoiler Alert!</h1>
      <p>
        The truth is <spoiler-span>hidden</spoiler-span>
      </p>
    </div>
  );
}`,
  vue: `<script setup>
  import 'spoilerjs/spoiler-span';
</script>

<template>
  <div>
    <h1>Spoiler Alert!</h1>
    <p>
      The truth is <spoiler-span>hidden</spoiler-span>
    </p>
  </div>
</template>`,
  svelte: `<script>
  import 'spoilerjs/spoiler-span';
</script>

<div>
  <h1>Spoiler Alert!</h1>
  <p>
    The truth is <spoiler-span>hidden</spoiler-span>
  </p>
</div>`,
  vanilla: `<script type="module" src="https://unpkg.com/spoilerjs/dist/components/spoiler-span.js"></script>

<div>
  <h1>Spoiler Alert!</h1>
  <p>
    The truth is <spoiler-span>hidden</spoiler-span>
  </p>
</div>`
}
