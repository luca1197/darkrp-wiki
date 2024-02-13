<script lang="ts">
    import type { PageServerData } from "./$types"
	import { page } from '$app/stores'

	export let data: PageServerData

	let selectedPageTitle = $page.url.searchParams.get('page')
	let selectedLocale = 'en'
	$: {
		selectedPageTitle = $page.url.searchParams.get('page')
		
		if (!data[selectedLocale]) {
			selectedLocale = Object.keys(data).sort()[0]
		}
	}

</script>

<style>
	a {
		@apply underline;
	}

	b {
		@apply font-medium;
	}
</style>

<div class="max-w-[1400px] max-h-screen mx-5 overflow-y-auto scrollbar-hide">

	<div class="p-3 mb-3 mt-5 rounded-xl bg-yellow-600 border border-yellow-600">
		<p class="text-yellow-900">
			The content of this <b>unofficial</b> wiki is a January 2022 backup of the <a href="https://darkrp.miraheze.org/wiki/Main_Page">DarkRP Wiki</a>,
			the content of which <a href="https://github.com/FPtje/DarkRP/issues/3208">was lost but has since been recovered</a>. It can still be useful as an alternative to the original wiki in case there are issues with it again.
			The wiki pages consist of community contributions to the original wiki which may be incorrect or contain inappropriate content.
			The author of this website is not affiliated with <a href="https://github.com/FPtje/DarkRP">DarkRP</a> in any way.
			<br>
			<b>The content is displayed as raw <a href="https://meta.wikimedia.org/wiki/Help:Wikitext_examples">Wikitext</a> since it is difficult to parse due to the heavy use of Wikitext templates.</b>
		</p>
	</div>

	<article class="p-5 mb-5 rounded-xl bg-neutral-900">

		<h1 class="text-3xl mb-6">{selectedPageTitle}</h1>

		<p>{@html data[selectedLocale].content.replaceAll('\n', '<br>')}</p>

	</article>

</div>