import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { INDEX_FILE, PACKAGES_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { format } from './format.js';
import { renderIndex } from './renderIndex.js';

export async function writeIndexMarkdown(packages: ConventionPackage[]): Promise<void> {
	const outPath = join(PACKAGES_DIR, INDEX_FILE);
	writeFileSync(outPath, await format(renderIndex(packages), outPath));
	console.info(`🟩 Saved ${packages.length} packages to packages/${INDEX_FILE}`);
}
