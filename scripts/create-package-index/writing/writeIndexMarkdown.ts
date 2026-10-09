import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { INDEX_FILE, PACKAGES_DIR } from '../constants.js';
import { renderIndex } from '../rendering/renderIndex.js';
import type { ConventionPackage } from '../types.js';

import { formatContent } from './formatContent.js';

export async function writeIndexMarkdown(packages: ConventionPackage[]): Promise<void> {
	const outPath = join(PACKAGES_DIR, INDEX_FILE);
	const markdown = renderIndex(packages);
	const formatted = await formatContent(markdown, outPath);

	writeFileSync(outPath, formatted);
	console.info(`🟩 Saved ${packages.length} packages to packages/${INDEX_FILE}`);
}
