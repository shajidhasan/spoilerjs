<script lang="ts">
	import Header from '$lib/components/shared/Header.svelte';
	import Installation from '$lib/components/docs/Installation.svelte';
	import CodeExamples from '$lib/components/docs/CodeExamples.svelte';
	import CustomizationAttributes from '$lib/components/docs/CustomizationAttributes.svelte';
</script>

<section id="docs" class="md:py-30 sm:py-15 py-10 px-4 bg-surface-100-900/50">
	<Header title="Quick Start" subtitle="Get up and running in under 60 seconds" />
	<Installation />
	<CodeExamples />
	<CustomizationAttributes />
</section>
