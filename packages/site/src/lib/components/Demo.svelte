<script lang="ts">
	import Header from '$lib/components/shared/Header.svelte';
	import GameReviewDemo from '$lib/components/demos/GameReviewDemo.svelte';
	import DiscordDemo from '$lib/components/demos/DiscordDemo.svelte';
	import BankingDemo from '$lib/components/demos/BankingDemo.svelte';
	import GitHubDemo from '$lib/components/demos/GitHubDemo.svelte';
</script>

<section id="demo" class="py-16 md:py-24 lg:py-32 px-4 bg-surface-100-900/50">
	<Header
		title="See it in action"
		subtitle="Here are a few example uses. Click any spoiler to reveal the content."
	/>

	<div class="max-w-6xl mx-auto mt-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
			<div class="space-y-6 lg:space-y-8">
				<DiscordDemo />
				<GameReviewDemo />
			</div>

			<div class="space-y-6 lg:space-y-8">
				<BankingDemo />
				<GitHubDemo />
			</div>
		</div>
	</div>
</section>
