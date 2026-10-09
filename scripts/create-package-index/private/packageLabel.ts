import type { ConventionPackage } from '../types.js';

export function packageLabel(pkg: ConventionPackage): string {
	return pkg.record.name.replace(/\s+Conventions$/, '');
}
