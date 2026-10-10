import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

import type { ConventionPackage } from '../types.js';

import { formatContent } from './formatContent.js';

export async function writeCollectionJson(
	packages: ConventionPackage[],
	outPath: string,
): Promise<void> {
	mkdirSync(dirname(outPath), { recursive: true });
	const publicPackages = packages.filter(conventionPackage => !conventionPackage.manifest.private);
	const items = publicPackages.map(conventionPackage => {
		const manifest = conventionPackage.manifest;

		return {
			name: manifest.name,
			version: conventionPackage.publishedVersion ?? manifest.version,
			description: manifest.description,
			dependencies: manifest.dependencies || {},
		};
	});
	const content = JSON.stringify(items);
	const formatted = await formatContent(content, outPath);

	writeFileSync(outPath, formatted);
	console.info(`🟩 Saved ${items.length} packages to meta/conventions.json`);
}
