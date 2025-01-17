<script lang="ts">
	import { cartState } from '$lib/cart-state.svelte';
	import type { CartItem } from '$lib/types';

	type Props = {
		cartItem: CartItem;
	};

	let { cartItem }: Props = $props();
	let { id, title, price, stock } = cartItem.product;
</script>

<div class="shopping-cart-item">
	<h4>{title}</h4>
	<p>{price} each</p>
	<p>Product Quantity: {cartItem.quantity}</p>
	<div class="cart-item-controls">
		<button
			class="btn"
			disabled={cartItem.quantity <= 1}
			onclick={() => cartState.decrementCartItemQty(id, 1)}
			>-
		</button>
		<button class="btn" onclick={() => cartState.removeFromCart(id)}>remove</button>
		<button
			class="btn"
			disabled={cartItem.quantity >= stock}
			onclick={() => cartState.incrementCartItemQty(id, 1)}
			>+
		</button>
	</div>
</div>
