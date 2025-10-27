<script lang="ts">
	const options = [
		{
			parameter: 'scale',
			type: 'number',
			description: 'Particle size multiplier',
			default: 1
		},
		{
			parameter: 'density',
			type: 'number',
			description: 'Particles per 100px²',
			default: 8
		},
		{
			parameter: 'min-velocity',
			type: 'number',
			description: 'Min particle speed (px/frame)',
			default: 0.01
		},
		{
			parameter: 'max-velocity',
			type: 'number',
			description: 'Max particle speed (px/frame)',
			default: 0.05
		},
		{
			parameter: 'particle-lifetime',
			type: 'number',
			description: 'Duration in frames (60fps)',
			default: 120
		},
		{
			parameter: 'reveal-duration',
			type: 'number',
			description: 'Fade-in time (ms)',
			default: 500
		},

		{
			parameter: 'monitor-position',
			type: 'boolean',
			description:
				'Enable RAF loop for tracking hover/transform effects. Better if you keep it disabled unless necessary.',
			default: false
		}
	];

	const advancedOption = $derived(options[options.length - 1]);
</script>

<div class="max-w-6xl mx-auto mt-12">
	<h3 class="h3">Customization Attributes</h3>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 md:mt-12">
		{#each options.slice(0, -1) as option}
			<div class="card p-5 preset-filled-surface-100-900">
				<div>
					<span class="badge text-base preset-tonal-primary">{option.parameter}</span>
					<span class="italic text-surface-500 ms-2 text-sm">{option.type}</span>
				</div>
				<p class="mt-5 text-surface-800-200">{option.description}</p>
				<p class="mt-5 text-surface-500 text-sm">Default: {option.default}</p>
			</div>
		{/each}
	</div>

	<div class="card p-5 preset-filled-surface-100-900 mt-5">
		<div>
			<span class="badge text-base preset-tonal-secondary">{advancedOption.parameter}</span>
			<span class="italic text-surface-500 ms-2 text-sm">{advancedOption.type}</span>
		</div>
		<p class="mt-5 text-surface-800-200">{advancedOption.description}</p>
		<p class="mt-5 text-surface-500 text-sm">Default: {advancedOption.default}</p>
	</div>
</div>
