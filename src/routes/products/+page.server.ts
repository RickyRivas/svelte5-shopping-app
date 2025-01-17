import type { PageServerLoad } from "./$types";
import type { Product } from '$lib/types.js';
import { PUBLIC_DATA_URL } from "$env/static/public";

export const load: PageServerLoad = async ({ url, fetch }) => {
    let fetchUrl = `${PUBLIC_DATA_URL}/products/`;

    const limit = url.searchParams.get('limit') || '10'
    fetchUrl += `?limit=${limit}`

    const products = await fetch(fetchUrl).then((res) => res.json())

    return {
        products: products.products as Product[]
    }
}
