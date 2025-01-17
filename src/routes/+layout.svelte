<script lang="ts">
	import { cartState } from '$lib/cart-state.svelte';
	import Header from '$lib/components/UI/Header.svelte';
	import './styles.less';
	import { onMount, type Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();

	onMount(() => {
		cartState.initCartLocalStorage();
	});
</script>

<Header />
<main>
	{@render children()}
</main>
