<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let options = ['10', '15', '20'];
	let selected = $state(page.url.searchParams.get('limit') || '10');

	// TODO: instead of completely overriding the current products, add/remove specific products
	function onchange() {
		goto(`/products?limit=${selected}`);
	}
</script>

<section class="filters-row">
	<div class="container">
		<select
			name="prods-per-page-select"
			id="prods-per-page-select"
			bind:value={selected}
			{onchange}
		>
			<option value="" disabled selected>Products Per Page</option>
			{#each options as option}
				<option value={option}>{option} products per page</option>
			{/each}
		</select>
	</div>
</section>
