<script lang="ts">
	import type { Product } from '$lib/types';
	import ProductCard from './ProductCard.svelte';
	let { products }: { products: Product[] } = $props();
</script>

<ul class="products-catalog">
	{#each products as product}
		<li>
			<ProductCard {product} />
		</li>
	{/each}
</ul>
