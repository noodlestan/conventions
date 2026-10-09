import type { ConventionPackage } from '../types.js';

export function formatDependenciesCell(conventionPackage: ConventionPackage): string {
	const dependencies = conventionPackage.manifest.dependencies || {};
	const names = Object.keys(dependencies).sort();
	const cells = names.map(name => `\`${name}\``);
	if (cells.length === 0) {
		return '—';
	}
	return cells.join(', ');
}
