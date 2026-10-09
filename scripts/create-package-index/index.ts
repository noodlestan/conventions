import { discoverPackages } from './private/discoverPackages.js';
import { validatePackages } from './private/validatePackages.js';
import { writeCollectionJson } from './private/writeCollectionJson.js';
import { writeIndexMarkdown } from './private/writeIndexMarkdown.js';

async function main() {
	const packages = await discoverPackages();
	console.info(`⏳ Discovered ${packages.length} packages`);
	const hasWarnings = validatePackages(packages);
	await writeCollectionJson(packages);
	await writeIndexMarkdown(packages);
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
