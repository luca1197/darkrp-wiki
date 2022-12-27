<svelte:head>
	<title>DarkRP Wiki Backup</title>
</svelte:head>

<script lang="ts">
	import "../app.css"
	import SearchResultList from "$components/SearchResultList.svelte"

	import DarkRPLogo from '$assets/darkrp-logo.png'

	let searchInputValue = ''
</script>

<style>
	.shadow-r-md {
		box-shadow: 10px 0 15px -2px rgba(0, 0, 0, 0.2);
	}
</style>

<div class="grid grid-cols-[350px_auto] gap-3">
	<div class="flex flex-col h-screen bg-neutral-900 shadow-r-md">

		<!-- Logo -->
		<div class="flex flex-row items-center py-1 bg-neutral-900">
			<img src={DarkRPLogo} alt="DarkRP Logo" class="h-10 ml-1">
			<p class="ml-5 font-medium text-lg">DarkRP Wiki Backup</p>
		</div>

		<!-- Search -->
		<input
			type="text"
			placeholder="Search..."
			maxlength="128"
			class="w-full h-10 shrink-0 px-2 placeholder-neutral-400 bg-neutral-800 border-y border-y-neutral-700"
			bind:value={searchInputValue}
		>
		
		<!-- Search results -->
		<SearchResultList input={searchInputValue}/>

	</div>
	<div>
		<slot />
	</div>
</div>