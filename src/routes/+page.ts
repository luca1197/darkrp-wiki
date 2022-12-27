import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit'

export const load = (() => {
	throw redirect(303, '/wiki?page=DarkRP')
}) satisfies PageLoad