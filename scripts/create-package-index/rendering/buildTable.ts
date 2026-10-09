import type { ConventionPackage, Table } from '../types.js';

import { formatDependenciesCell } from './formatDependenciesCell.js';
import { formatIndexCell } from './formatIndexCell.js';
import { formatPackageLabel } from './formatPackageLabel.js';

export function buildTable(packages: ConventionPackage[]): Table {
	const headers = ['Name / Package', 'Version', 'Depends on', 'Index'];
	const rows = packages.map(conventionPackage => {
		const label = formatPackageLabel(conventionPackage);
		const name = conventionPackage.manifest.name;
		const version = conventionPackage.manifest.version;
		const dependencies = formatDependenciesCell(conventionPackage);
		const index = formatIndexCell(conventionPackage);

		return [`${label} — \`${name}\``, version, dependencies, index];
	});

	return {
		headers,
		rows,
	};
}
