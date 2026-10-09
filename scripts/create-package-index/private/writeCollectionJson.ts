import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { META_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { format } from './format.js';

export async function writeCollectionJson(packages: ConventionPackage[]): Promise<void> {
	mkdirSync(META_DIR, { recursive: true });
	const outPath = join(META_DIR, 'conventions.json');
	const items = packages
		.filter(pkg => !pkg.manifest.private)
		.map(pkg => ({
			name: pkg.manifest.name,
			version: pkg.manifest.version,
			description: pkg.manifest.description,
			dependencies: pkg.manifest.dependencies || {},
		}));
	writeFileSync(outPath, await format(JSON.stringify(items), outPath));
	console.info(`🟩 Saved ${items.length} packages to meta/conventions.json`);
}
