import type { ConventionPackage } from '../types.js';

export function formatPackageLabel(conventionPackage: ConventionPackage): string {
	return conventionPackage.record.name.replace(/\s+Conventions$/, '');
}
