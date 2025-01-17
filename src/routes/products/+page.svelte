<script lang="ts">
	import FiltersRow from '$lib/components/Cart/FiltersRow.svelte';
	import ProductsCatalog from '$lib/components/Cart/ProductsCatalog.svelte';
	// get products
	let { data } = $props();
	// using derived here will reactively update our products array when load function runs
	const { products } = $derived(data);
</script>

<FiltersRow />
<ProductsCatalog {products} />
