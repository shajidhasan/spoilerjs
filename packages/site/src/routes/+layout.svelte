<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/space-grotesk';

	let { children } = $props();
</script>

<svelte:head>
	<title>spoilerjs | Beautiful Spoiler Effects</title>
	<meta
		name="description"
		content="A framework-agnostic web component for creating beautiful spoiler effects with Telegram-inspired particle animations. Easily integrates into React, Vue, Svelte, or vanilla JS."
	/>
	<meta
		name="keywords"
		content="spoiler, web component, spoiler alert, javascript spoiler, spoiler tag, particle animation"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://spoilerjs.sh4jid.me" />
	<meta property="og:title" content="spoilerjs | Beautiful Spoiler Effects" />
	<meta
		property="og:description"
		content="A framework-agnostic web component for creating beautiful spoiler effects with Telegram-inspired particle animations. Easily integrates into React, Vue, Svelte, or vanilla JS."
	/>
	<meta property="og:image" content="https://spoilerjs.sh4jid.me/og_image.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://spoilerjs.sh4jid.me" />
	<meta property="twitter:title" content="spoilerjs | Beautiful Spoiler Effects" />
	<meta
		property="twitter:description"
		content="A framework-agnostic web component for creating beautiful spoiler effects with Telegram-inspired particle animations. Easily integrates into React, Vue, Svelte, or vanilla JS."
	/>
	<meta property="twitter:image" content="https://spoilerjs.sh4jid.me/og_image.png" />
</svelte:head>

{@render children?.()}
