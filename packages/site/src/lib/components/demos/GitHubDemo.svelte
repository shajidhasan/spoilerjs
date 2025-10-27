<div
	class="card overflow-hidden shadow-xl bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d]"
>
	<div
		class="bg-[#f6f8fa] dark:bg-[#161b22] px-5 py-3 flex items-center justify-between border-b border-[#d0d7de] dark:border-[#30363d]"
	>
		<div class="flex items-center gap-3">
			<div class="w-8 h-8 rounded-lg bg-[#2da44e] flex items-center justify-center">
				<span class="text-white text-lg">📘</span>
			</div>
			<div>
				<div class="font-semibold text-[#24292f] dark:text-[#c9d1d9] text-sm">API Reference</div>
				<div class="text-xs text-[#57606a] dark:text-[#8b949e]">v3.2.1</div>
			</div>
		</div>
		<div class="flex gap-2">
			<button class="px-3 py-1 text-xs font-medium rounded-md bg-[#2da44e] text-white">
				Star
			</button>
		</div>
	</div>

	<div class="p-5 space-y-4">
		<div>
			<h3 class="text-lg font-semibold text-[#24292f] dark:text-[#c9d1d9] mb-2">Authentication</h3>
			<p class="text-sm text-[#57606a] dark:text-[#8b949e] leading-relaxed mb-4">
				Authenticate your API requests using Bearer tokens. Include your API key in the
				Authorization header for all requests.
			</p>
		</div>

		<div class="rounded-lg border border-[#d0d7de] dark:border-[#30363d] overflow-hidden">
			<div
				class="bg-[#f6f8fa] dark:bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-[#d0d7de] dark:border-[#30363d]"
			>
				<span class="text-xs font-mono text-[#57606a] dark:text-[#8b949e]">bash</span>
				<button class="px-2 py-1 text-xs font-medium rounded bg-[#2da44e] text-white">
					Copy
				</button>
			</div>
			<div class="bg-white dark:bg-[#0d1117] p-4">
				<pre
					class="text-xs font-mono text-[#24292f] dark:text-[#c9d1d9] overflow-x-auto leading-relaxed"><code
						>curl -X GET "https://api.example.com/v1/data" \
  -H "Authorization: Bearer <spoiler-span monitor-position="true">SECRET_KEY</spoiler-span>"</code
					></pre>
			</div>
		</div>

		<div
			class="flex gap-3 p-3 rounded-lg bg-[#fff8c5] dark:bg-[#3d2c00] border border-[#d4a72c] dark:border-[#9e6a03]"
		>
			<span class="text-lg shrink-0">⚠️</span>
			<div class="text-sm text-[#24292f] dark:text-[#e3b341]">
				<strong class="font-semibold">Security Notice:</strong> Never expose your API keys in public
				repositories or client-side code.
			</div>
		</div>
	</div>
</div>

<style>
	/* Custom scrollbar for code blocks */
	pre::-webkit-scrollbar {
		height: 8px;
	}

	pre::-webkit-scrollbar-track {
		background: transparent;
	}

	pre::-webkit-scrollbar-thumb {
		background: rgba(128, 128, 128, 0.3);
		border-radius: 4px;
	}

	pre::-webkit-scrollbar-thumb:hover {
		background: rgba(128, 128, 128, 0.5);
	}
</style>
