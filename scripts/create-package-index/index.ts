import { CONVENTIONS_JSON, INDEX_FILE } from '../constants.js';

import { discoverPackages } from './discovery/discoverPackages.js';
import { validatePackages } from './validation/validatePackages.js';
import { writeCollectionJson } from './writing/writeCollectionJson.js';
import { writeIndexMarkdown } from './writing/writeIndexMarkdown.js';

async function main() {
	const packages = await discoverPackages();
	console.info(`⏳ Discovered ${packages.length} packages`);
	for (const conventionPackage of packages) {
		if (conventionPackage.publishedVersion !== conventionPackage.manifest.version) {
			const published = conventionPackage.publishedVersion ?? 'never';
			const message = `🟦 [${conventionPackage.id}] unpublished ${published} (current ${conventionPackage.manifest.version})`;
			console.info(message);
		}
	}
	const hasWarnings = validatePackages(packages);
	await writeCollectionJson(packages, CONVENTIONS_JSON);
	await writeIndexMarkdown(packages, INDEX_FILE);
	if (hasWarnings) {
		console.error('🟥 Validation warnings emitted; exiting with code 1.');
		process.exit(1);
	}
	console.info('Done');
}

main().catch(err => {
	console.error(err);
	process.exit(1);
});
