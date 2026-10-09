import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { PackageManifest } from '../types.js';

export async function readManifest(dir: string): Promise<PackageManifest> {
	const file = join(dir, 'package.json');
	const manifest = JSON.parse(readFileSync(file, 'utf-8')) as PackageManifest;
	if (!manifest.name || !manifest.version) {
		throw new Error(`Missing name or version in ${file}`);
	}
	return manifest;
}
