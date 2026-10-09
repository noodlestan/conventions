import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { INDEX_FILE } from '../constants.js';
import type { ConventionPackage } from '../types.js';

export function formatIndexCell(conventionPackage: ConventionPackage): string {
	const indexPath = join(conventionPackage.dir, 'art', INDEX_FILE);
	const indexExists = existsSync(indexPath);
	if (!indexExists) {
		return '—';
	}
	return `[index](./${conventionPackage.id}/art/${INDEX_FILE})`;
}
