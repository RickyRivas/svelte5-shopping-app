<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let options = ['5', '10', '15'];
	let selected = $state(page.url.searchParams.get('limit') || '10');

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
			<option value="" disabled>Products Per Page</option>
			{#each options as option}
				<option value={option}>{option} rows per page</option>
			{/each}
		</select>
	</div>
</section>
