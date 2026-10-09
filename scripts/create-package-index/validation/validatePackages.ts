import type { ConventionPackage } from '../types.js';

export function validatePackages(packages: ConventionPackage[]): boolean {
	let hasWarnings = false;
	for (const conventionPackage of packages) {
		if (conventionPackage.record.version !== conventionPackage.manifest.version) {
			const warning = `🟨 [${conventionPackage.id}] version mismatch: record "${conventionPackage.record.version}" vs manifest "${conventionPackage.manifest.version}"`;
			console.warn(warning);
			hasWarnings = true;
		}
		if (conventionPackage.record.canonicalName !== conventionPackage.manifest.name) {
			const warning = `🟨 [${conventionPackage.id}] canonical name mismatch: record "${conventionPackage.record.canonicalName}" vs manifest "${conventionPackage.manifest.name}"`;
			console.warn(warning);
			hasWarnings = true;
		}
		if (conventionPackage.record.description !== conventionPackage.manifest.description) {
			const warning = `🟨 [${conventionPackage.id}] description mismatch: record "${conventionPackage.record.description}" vs manifest "${conventionPackage.manifest.description}"`;
			console.warn(warning);
			hasWarnings = true;
		}
		const expectedPath = `packages/${conventionPackage.id}`;
		const recordPath = conventionPackage.record.path.replace(/\/+$/, '');
		if (recordPath !== expectedPath) {
			const warning = `🟨 [${conventionPackage.id}] path mismatch: record "${conventionPackage.record.path}" vs discovery dir "${expectedPath}"`;
			console.warn(warning);
			hasWarnings = true;
		}
	}
	return hasWarnings;
}
