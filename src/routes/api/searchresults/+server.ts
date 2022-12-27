import type { RequestHandler } from './$types';
import WikiPages from '$lib/WikiPages'

let searchResults: string[] = []
for (const pageName in WikiPages) {
	searchResults.push(pageName)
}
let searchResultsJSON = JSON.stringify(searchResults)

export const GET = (() => {
	return new Response(searchResultsJSON)
}) satisfies RequestHandler