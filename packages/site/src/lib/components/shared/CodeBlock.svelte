<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css';

	import 'prismjs/components/prism-jsx';
	import 'prismjs/components/prism-markup';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-bash';

	let {
		code,
		language
	}: {
		code: string;
		language: string;
	} = $props();

	const highlighted = $derived(
		Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language)
	);
</script>

<pre class="overflow-x-auto p-4 bg-transparent! my-0!"><code class="language-{language}"
		>{@html highlighted}</code
	></pre>
