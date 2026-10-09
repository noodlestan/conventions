import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

import { PACKAGES_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { discoverPackageAt } from './discoverPackageAt.js';

export async function discoverPackages(): Promise<ConventionPackage[]> {
	const entries = readdirSync(PACKAGES_DIR, { withFileTypes: true });
	const dirs = entries
		.filter(
			entry => entry.isDirectory() && existsSync(join(PACKAGES_DIR, entry.name, 'package.json')),
		)
		.map(entry => join(PACKAGES_DIR, entry.name))
		.sort();

	return Promise.all(dirs.map(dir => discoverPackageAt(dir)));
}
