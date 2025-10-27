<script lang="ts">
	import { installation } from '$lib/codes';
	import CopyButton from '$lib/components/shared/CopyButton.svelte';
	import CodeBlock from '$lib/components/shared/CodeBlock.svelte';
</script>

<div class="max-w-6xl mx-auto">
	<div class="gap-10 flex flex-col md:flex-row md:items-stretch">
		<div class="flex-1 card preset-filled-surface-100-900 p-5 min-w-0">
			<div class="flex gap-5 items-center">
				<span class="text-4xl">📦</span>
				<div>
					<h3 class="h3">NPM</h3>
					<p>For modern build tools</p>
				</div>
			</div>
			<div class="card mt-6 preset-filled-surface-200-800 relative">
				<CopyButton text={installation.npm} />
				<CodeBlock code={installation.npm} language="bash" />
			</div>
		</div>
		<div class="flex-1 card preset-filled-surface-100-900 p-5 min-w-0">
			<div class="flex gap-5 items-center">
				<span class="text-4xl">🔗</span>
				<div>
					<h3 class="h3">CDN</h3>
					<p>For quick usage without installation</p>
				</div>
			</div>
			<div class="card mt-6 preset-filled-surface-200-800 relative">
				<CopyButton text={installation.cdn} />
				<CodeBlock code={installation.cdn} language="html" />
			</div>
		</div>
	</div>
</div>
