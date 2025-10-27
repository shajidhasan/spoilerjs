<script lang="ts">
	import Header from '$lib/components/shared/Header.svelte';

	const features = [
		{
			icon: '🌸',
			title: 'Looks Pretty',
			description:
				'Beautiful particle effects that enhance your UI without overwhelming it. Subtle yet engaging.'
		},
		{
			icon: '🎯',
			title: 'Zero Config',
			description:
				'Works out of the box. Just import and use. Sensible defaults with full customization when you need it.'
		},
		{
			icon: '🔌',
			title: 'Framework Agnostic',
			description:
				'Built on Web Components standard. Works seamlessly with React, Vue, Svelte, Angular, or vanilla JS.'
		},
		{
			icon: '🎨',
			title: 'Customizable',
			description:
				'Control particle density, velocity, lifetime, and reveal animations through simple HTML attributes.'
		},
		{
			icon: '📱',
			title: 'Mobile Optimized',
			description:
				'Touch-friendly interactions with responsive particle scaling. Perfect on phones, tablets, and desktops.'
		},
		{
			icon: '🌙',
			title: 'Theme Aware',
			description:
				'Automatically adapts particles to match your text color. Works beautifully in light and dark themes.'
		}
	];
</script>

<section id="features" class="md:py-30 sm:py-15 py-10 px-4">
	<Header title="Features" subtitle="Built for developers who value simplicity and performance" />

	<div class="max-w-6xl mx-auto">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each features as feature}
				<div class="card preset-filled-surface-100-900 p-6 space-y-3">
					<div class="text-4xl">{feature.icon}</div>
					<h4 class="h4">{feature.title}</h4>
					<p class="text-surface-700-300">
						{feature.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
