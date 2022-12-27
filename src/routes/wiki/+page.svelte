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
			The content of this <b>unofficial</b> wiki is a mostly an exact backup from January 2022 of the <a href="https://darkrp.miraheze.org/wiki/Main_Page">original DarkRP Wiki</a>,
			the content of which <a href="https://meta.miraheze.org/wiki/Tech:SRE_noticeboard">was lost and is potentially being recovered</a>.
			It consists of community contributions to the original wiki which may be incorrect or contain inappropriate content.
			The author of this website is not affiliated to <a href="https://github.com/FPtje/DarkRP">DarkRP</a> in any way.
			<br>
			<b>The content is displayed as raw <a href="https://www.mediawiki.org/wiki/Wikitext">Wikitext</a> since it is difficult to parse due to the heavy use of Wikitext templates.</b>
		</p>
	</div>

	<article class="p-5 mb-5 rounded-xl bg-neutral-900">

		<h1 class="text-3xl mb-6">{selectedPageTitle}</h1>

		<p>{@html data[selectedLocale].content.replaceAll('\n', '<br>')}</p>

	</article>

</div>