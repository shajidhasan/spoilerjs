<script lang="ts">
	let {
		title,
		subtitle
	}: {
		title: string;
		subtitle: string;
	} = $props();
</script>

<div class="max-w-6xl mx-auto mb-16">
	<h1 class="h1 text-center">{title}</h1>
	<p class="text-center mt-5 text-base md:text-lg text-pretty text-surface-700-300">{subtitle}</p>
</div>
