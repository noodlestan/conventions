import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { INDEX_FILE } from '../constants.js';
import type { ConventionPackage } from '../types.js';

export function indexCell(pkg: ConventionPackage): string {
	const exists = existsSync(join(pkg.dir, 'art', INDEX_FILE));
	return exists ? `[index](./${pkg.id}/art/${INDEX_FILE})` : '—';
}
