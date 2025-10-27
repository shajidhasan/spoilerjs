<script lang="ts">
	import GripIcon from '@lucide/svelte/icons/grip';
</script>

<footer class="bg-surface-100-900 border-t border-surface-200-800 py-12">
	<div class="max-w-6xl mx-auto px-4">
		<div class="grid md:grid-cols-3 gap-8 mb-8">
			<!-- Brand Section -->
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<GripIcon class="w-6 h-6" />
					<span class="text-xl font-bold">spoilerjs</span>
				</div>
				<p class="text-surface-700-300">Framework-agnostic spoiler effects for the modern web</p>
			</div>

			<!-- Resources -->
			<div>
				<h4 class="h4 mb-4">Resources</h4>
				<div class="space-y-2">
					<a
						href="https://github.com/shajidhasan/spoilerjs/blob/main/README.md"
						class="block text-surface-700-300 hover:text-primary-500 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						Documentation
					</a>
					<a
						href="https://github.com/shajidhasan/spoilerjs"
						class="block text-surface-700-300 hover:text-primary-500 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<a
						href="https://www.npmjs.com/package/spoilerjs"
						class="block text-surface-700-300 hover:text-primary-500 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						NPM
					</a>
				</div>
			</div>

			<!-- Community -->
			<div>
				<h4 class="h4 mb-4">Community</h4>
				<div class="space-y-2">
					<a
						href="https://github.com/shajidhasan/spoilerjs/issues"
						class="block text-surface-700-300 hover:text-primary-500 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						Issues
					</a>
					<a
						href="https://github.com/shajidhasan/spoilerjs/discussions"
						class="block text-surface-700-300 hover:text-primary-500 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						Discussions
					</a>
					<a
						href="https://github.com/shajidhasan/spoilerjs/blob/main/CONTRIBUTING.md"
						class="block text-surface-700-300 hover:text-primary-500 transition-colors"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contributing
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="pt-8 border-t border-surface-200-800 text-center text-surface-700-300">
			<p>
				MIT License © 2025 · Made by
				<a
					href="https://sh4jid.me"
					class="text-primary-500 hover:text-primary-400 transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					sh4jid
				</a>
			</p>
		</div>
	</div>
</footer>
