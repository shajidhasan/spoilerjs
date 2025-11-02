<script lang="ts">
	import ArrowDownIcon from '@lucide/svelte/icons/arrow-down';
	import { hero } from '$lib/codes';
	import TypeIt from 'typeit';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-jsx';

	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	let spoiler: boolean = $state(false);
	let codeBlock: HTMLElement | null = null;
	const initial = $derived(Prism.highlight(hero.initial, Prism.languages['jsx'], 'jsx'));
	const final = $derived(Prism.highlight(hero.final, Prism.languages['jsx'], 'jsx'));

	onMount(() => {
		setTimeout(() => {
			if (!codeBlock) return;
			new TypeIt(codeBlock, {
				speed: 80,
				startDelete: true,
				deleteSpeed: 0,
				lifeLike: true,
				afterComplete: (instance: TypeIt) => {
					instance.destroy();
				}
			})
				.delete(2, { instant: true })
				.type(initial, { instant: true })
				.pause(400)
				.move(-32, { instant: true })
				.pause(500)
				.type('\n        ', { instant: true })
				.pause(300)
				.type('\n        ', { instant: true })
				.move(-11, { instant: true })
				.pause(400)
				.type('&lt;spoiler-span&gt;')
				.pause(500)
				.move(26, { instant: true })
				.pause(500)
				.type('\n      ', { instant: true })
				.pause(400)
				.type('&lt;/spoiler-span&gt;', {
					afterComplete: () => {
						spoiler = true;
					}
				})
				.move(17, { instant: true })
				.delete(200, { instant: true })
				.type(final, { instant: true })
				.move(-17, { instant: true })
				.go();
		}, 200);
	});
</script>

<section class="px-4 md:py-30 sm:py-15 py-10">
	<div class="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
		<div class="space-y-6 flex-1">
			<div class="badge preset-tonal-secondary">Web Components API</div>

			<h1 class="h1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
				Beautiful
				{#if spoiler}
					<spoiler-span
						scale="4"
						density="1"
						particle-lifetime="100"
						min-velocity="0.4"
						max-velocity="0.8">spoiler effects</spoiler-span
					>
				{:else}
					<span>spoiler effects</span>
				{/if}
			</h1>

			<p class="text-lg md:text-xl text-surface-700-300">
				Framework-agnostic web component with Telegram-inspired particle animations. Drop it into
				React, Vue, Svelte, or vanilla JavaScript in seconds.
			</p>

			<div class="flex flex-wrap gap-4">
				<a href="#demo" class="btn preset-filled-primary-500 px-6 py-3">
					<span>See Demos</span>
					<ArrowDownIcon class="w-5 h-5" />
				</a>
				<a href="#docs" class="btn preset-tonal-surface px-6 py-3"> Quick Start </a>
			</div>
		</div>

		<div class="card preset-filled-surface-100-900 overflow-hidden flex-1 w-full">
			<div class="preset-filled-surface-200-800 px-4 py-3 flex items-center justify-between">
				<div class="flex gap-2">
					<span class="w-3 h-3 rounded-full bg-red-500"></span>
					<span class="w-3 h-3 rounded-full bg-yellow-500"></span>
					<span class="w-3 h-3 rounded-full bg-green-500"></span>
				</div>
				<span class="text-sm text-surface-700-300">App.tsx</span>
			</div>
			<div class="overflow-x-auto h-80">
				<pre class="overflow-x-auto p-4 bg-transparent! my-0! h-full"><code
						bind:this={codeBlock}
						class="language-jsx">{@html initial}</code
					></pre>
			</div>
		</div>
	</div>
</section>
