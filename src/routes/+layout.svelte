<script lang="ts">
	import Header from '$lib/components/UI/Header.svelte';
	import './styles.less';
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>
