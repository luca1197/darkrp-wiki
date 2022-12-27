interface WikiPages {
	[key: string]: {
		[key: string]: {
			content: string;
			timestamp: string;
		}
	}
}

let wikiJson = await import('$lib/wiki.json')
export default wikiJson.default as WikiPages