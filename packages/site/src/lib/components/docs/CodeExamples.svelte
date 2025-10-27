<script lang="ts">
	import { examples } from '$lib/codes';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import CodeBlock from '$lib/components/shared/CodeBlock.svelte';
	import CopyButton from '$lib/components/shared/CopyButton.svelte';

	const tabs = [
		{
			value: 'react',
			label: 'React',
			language: 'jsx',
			code: examples.react
		},
		{
			value: 'vue',
			label: 'Vue',
			language: 'markup',
			code: examples.vue
		},
		{
			value: 'svelte',
			label: 'Svelte',
			language: 'markup',
			code: examples.svelte
		},
		{
			value: 'vanilla',
			label: 'Vanilla',
			language: 'markup',
			code: examples.vanilla
		}
	];
</script>

<div class="max-w-6xl mx-auto mt-12">
	<h3 class="h3">Examples</h3>

	<div class="p-5 card preset-filled-surface-100-900 mt-6 md:mt-12">
		<Tabs defaultValue="react">
			<Tabs.List>
				{#each tabs as tab}
					<Tabs.Trigger class="text-xs sm:text-sm md:text-base" value={tab.value}
						>{tab.label}</Tabs.Trigger
					>
				{/each}
				<Tabs.Indicator />
			</Tabs.List>
			{#each tabs as tab}
				<Tabs.Content value={tab.value}>
					<div class="p-1 relative card preset-filled-surface-200-800">
						<CopyButton text={tab.code} />
						<CodeBlock code={tab.code} language={tab.language} />
					</div>
				</Tabs.Content>
			{/each}
		</Tabs>
	</div>
</div>
