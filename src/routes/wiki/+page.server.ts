import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit'
import WikiPages from '$lib/WikiPages'

export const load: PageServerLoad = (req) => {

	let wikiPage = req.url.searchParams.get('page')
	if (!wikiPage || wikiPage.length <= 0) {
		throw redirect(303, '/')
	}

	return WikiPages[wikiPage]
	
}