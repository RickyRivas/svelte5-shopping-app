import type { PageServerLoad } from "./$types";
import type { Product } from '$lib/types.js';
import { PUBLIC_DATA_URL } from "$env/static/public";

export const load: PageServerLoad = async ({ url, params, fetch }) => {
    const limit = url.searchParams.get('limit') || 0

    const products = await fetch(`${PUBLIC_DATA_URL}/products/?limit=${limit}`).then((res) => res.json())

    return {
        products: products.products as Product[]
    }
}
