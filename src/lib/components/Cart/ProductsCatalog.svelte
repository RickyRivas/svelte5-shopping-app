<script lang="ts">
	import type { Product } from '$lib/types';
	import { fade } from 'svelte/transition';
	import ProductCard from './ProductCard.svelte';
	let { products }: { products: Product[] } = $props();
</script>

<ul class="products-catalog">
	{#each products as product, i (product)}
		<li transition:fade>
			<ProductCard {product} />
		</li>
	{/each}
</ul>
