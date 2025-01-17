import type { PageLoad } from "./$types";
import type { Product } from '$lib/types.js';

export async function load({ fetch }) {
    const products = await fetch('https://dummyjson.com/products').then((res) => res.json())

    return {
        products: products.products as Product[]
    }
} 