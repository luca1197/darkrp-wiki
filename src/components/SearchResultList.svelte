<script lang="ts">

	import { page } from '$app/stores'
	
	export let input: string

	async function getSearchValues() {
		let searchValues = await fetch('/api/searchresults')
		return await searchValues.json()
	}

	function getSearchResults(values: string[], input: string) {
		return values.filter((val) => val.toLowerCase().includes(input.toLowerCase()))
	}

</script>

<div class="w-full max-h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800">

	{#await getSearchValues()}

		<p class="my-5 text-center text-xl">Loading search...</p>
		
	{:then searchValues} 
		
		{#each getSearchResults(searchValues, input) as result}
			<a
				class="w-full h-8 leading-8 block pl-2 pr-3 truncate text-sm border-b border-b-neutral-800 hover:bg-neutral-800 {$page.url.searchParams.get('page') == result ? 'bg-neutral-800 underline' : ''}"
				href="/wiki?page={result}"
				data-sveltekit-preload-data="tap"
			>
				{result}
			</a>
		{/each}

	{:catch error}

		<p class="my-5 text-center text-xl">Failed to fetch search values!</p>

	{/await}

</div>