import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

import { PACKAGES_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { discoverPackageAt } from './discoverPackageAt.js';

export async function discoverPackages(): Promise<ConventionPackage[]> {
	const entries = readdirSync(PACKAGES_DIR, { withFileTypes: true });
	const directories = entries.filter(entry => entry.isDirectory());
	const packageEntries = directories.filter(entry =>
		existsSync(join(PACKAGES_DIR, entry.name, 'package.json')),
	);
	const dirs = packageEntries.map(entry => join(PACKAGES_DIR, entry.name));
	const sortedDirs = dirs.sort();
	const packages = sortedDirs.map(dir => discoverPackageAt(dir));

	return Promise.all(packages);
}
