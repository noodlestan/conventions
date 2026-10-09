import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { META_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { formatContent } from './formatContent.js';

export async function writeCollectionJson(packages: ConventionPackage[]): Promise<void> {
	mkdirSync(META_DIR, { recursive: true });
	const outPath = join(META_DIR, 'conventions.json');
	const publicPackages = packages.filter(conventionPackage => !conventionPackage.manifest.private);
	const items = publicPackages.map(conventionPackage => {
		const manifest = conventionPackage.manifest;

		return {
			name: manifest.name,
			version: manifest.version,
			description: manifest.description,
			dependencies: manifest.dependencies || {},
		};
	});
	const content = JSON.stringify(items);
	const formatted = await formatContent(content, outPath);

	writeFileSync(outPath, formatted);
	console.info(`🟩 Saved ${items.length} packages to meta/conventions.json`);
}
