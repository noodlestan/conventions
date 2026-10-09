import type { ConventionPackage } from '../types.js';

export function dependenciesCell(pkg: ConventionPackage): string {
	const names = Object.keys(pkg.manifest.dependencies || {}).sort();
	return names.length ? names.map(name => `\`${name}\``).join(', ') : '—';
}
