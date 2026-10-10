import { writeFileSync } from 'node:fs';

import { renderIndex } from '../rendering/renderIndex.js';
import type { ConventionPackage } from '../types.js';

import { formatContent } from './formatContent.js';

export async function writeIndexMarkdown(
	packages: ConventionPackage[],
	outPath: string,
): Promise<void> {
	const markdown = renderIndex(packages);
	const formatted = await formatContent(markdown, outPath);

	writeFileSync(outPath, formatted);
	console.info(`🟩 Saved ${packages.length} packages to ${outPath}`);
}
