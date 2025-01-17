<script lang="ts">
	import ProductCard from '$lib/components/Cart/ProductCard.svelte';
	import ShoppingCart from '$lib/components/Cart/ShoppingCart.svelte';

	// get products
	let { data } = $props();
	const { products } = data;
</script>

<ShoppingCart />
<ul class="products-catalog">
	{#each products as product}
		<li>
			<ProductCard {product} />
		</li>
	{/each}
</ul>
