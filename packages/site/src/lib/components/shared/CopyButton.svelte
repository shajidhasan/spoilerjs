<script lang="ts">
	import CopyIcon from '@lucide/svelte/icons/copy';
	import CheckIcon from '@lucide/svelte/icons/check';

	let { text }: { text: string } = $props();
	let copied: boolean = $state(false);

	const onclick = async () => {
		await navigator.clipboard.writeText(text);
		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<button
	{onclick}
	class:preset-filled-primary-500={copied}
	class:preset-tonal={!copied}
	class="absolute top-2 right-2 btn-icon"
>
	{#if copied}
		<CheckIcon class="size-6" />
	{:else}
		<CopyIcon class="size-6" />
	{/if}
</button>
