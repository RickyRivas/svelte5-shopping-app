<script>
	import { cartState } from '$lib/cart-state.svelte';
	import { fly } from 'svelte/transition';
	import CartItemCard from '../Cart/CartItemCard.svelte';
</script>

<header>
	<h1>Shopping App</h1>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/products">Products</a></li>
	</ul>
	<div class="shopping-cart-container" class:open={cartState.cartOpen}>
		<button
			class="btn"
			class:open={cartState.cartOpen}
			aria-expanded={cartState.cartOpen}
			aria-label="View or close cart"
			onclick={() => cartState.toggleCartOpen()}
		>
			Header Cart: {cartState.cartInitialized ? cartState.cartItems.length : ''}
		</button>
		<div class="shopping-cart">
			<h3>Cart Items</h3>
			<ul class="shopping-cart-items">
				{#each cartState.cartItems as cartItem, i (cartItem)}
					<li transition:fly={{ x: 200 }}>
						<CartItemCard {cartItem} />
					</li>
				{/each}
			</ul>
			<h3>Subtotal: {cartState.cartSubTotalDisplay}</h3>
		</div>
	</div>
</header>
