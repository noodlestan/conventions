import type { ConventionPackage } from '../types.js';

import { dependenciesCell } from './dependenciesCell.js';
import { indexCell } from './indexCell.js';
import { packageLabel } from './packageLabel.js';

export function buildTable(packages: ConventionPackage[]): { headers: string[]; rows: string[][] } {
	const headers = ['Name / Package', 'Version', 'Depends on', 'Index'];
	const rows = packages.map(pkg => [
		`${packageLabel(pkg)} — \`${pkg.manifest.name}\``,
		pkg.manifest.version,
		dependenciesCell(pkg),
		indexCell(pkg),
	]);
	return { headers, rows };
}
