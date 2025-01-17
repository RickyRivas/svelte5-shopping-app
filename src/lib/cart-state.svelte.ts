import type { CartItem, Product } from "./types"

const OK_TAX_RATE = 0.085;

export class CartState {
    cartItems = $state<CartItem[]>([])
    cartOpen = $state(false)

    cartSubTotal = $derived(this.cartItems.reduce((total, item) => total + (item.quantity * item.product.price), 0))
    cartSubTotalDisplay = $derived(`$${this.cartSubTotal.toFixed(2)}`)

    cartInitialized = $state(false)

    // cart methods
    addToCart(product: Product) {
        // if item is in cart, up qty else add to cart
        const itemInCart = this.cartItems.find((item) => item.product.id === product.id);
        if (itemInCart) itemInCart.quantity++
        else this.cartItems.push({ product, quantity: 1 })

        // show cart
        this.cartOpen = true

        this.updateCartLocalStorage()
    }

    removeFromCart(id: number) {
        const index = this.cartItems.findIndex(i => i.product.id === id)
        this.cartItems.splice(index, 1)
        this.updateCartLocalStorage()
    }

    incrementCartItemQty(id: number, qty: number) {
        const itemInCart = this.cartItems.find((item) => item.product.id === id);
        if (itemInCart) itemInCart.quantity += qty
        this.updateCartLocalStorage()
    }

    decrementCartItemQty(id: number, qty: number) {
        const itemInCart = this.cartItems.find((item) => item.product.id === id);
        if (itemInCart) itemInCart.quantity -= qty
        this.updateCartLocalStorage()
    }

    // cartOpen
    toggleCartOpen() {
        this.cartOpen = !this.cartOpen
    }

    // local storage
    initCartLocalStorage() {
        const localCart = localStorage.getItem('cart')
        if (localCart) this.cartItems = JSON.parse(localCart);
        this.cartInitialized = true
    }

    updateCartLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cartItems))
    }

}

export const cartState = new CartState()