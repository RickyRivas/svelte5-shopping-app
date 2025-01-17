<script lang="ts">
	import { cartState } from '$lib/cart-state.svelte.js';
	import ShoppingCart from '$lib/components/ShoppingCart.svelte';

	// get products
	let { data } = $props();
	const { products } = data;
</script>

<ShoppingCart />
<div class="products-catalog">
	{#each products as product}
		<div class="catalog-product">
			<h3>{product.title}</h3>
			<p>{product.description.substring(0, 20) + '...'}</p>
			<button class="btn" onclick={() => cartState.addToCart(product)}>add to cart</button>
		</div>
	{/each}
</div>
