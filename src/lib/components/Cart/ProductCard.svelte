<script lang="ts">
	import { cartState } from '$lib/cart-state.svelte';
	import type { Product } from '$lib/types';
	let { product }: { product: Product } = $props();
	let { images, title, description, id, category } = product;
</script>

<div class="catalog-product">
	<div class="thumbnail">
		<img src={images[0]} alt="" />
	</div>
	<span>{category}</span>
	<h3>{title}</h3>
	<p>{description.substring(0, 20) + '...'}</p>
	<button class="btn" onclick={() => cartState.addToCart(product)}>add to cart</button>
</div>
