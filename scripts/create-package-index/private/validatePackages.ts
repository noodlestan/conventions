import type { ConventionPackage } from '../types.js';

export function validatePackages(packages: ConventionPackage[]): boolean {
	let hasWarnings = false;
	for (const pkg of packages) {
		if (pkg.record.version !== pkg.manifest.version) {
			const warning = `🟨 [${pkg.id}] version mismatch: record "${pkg.record.version}" vs manifest "${pkg.manifest.version}"`;
			console.warn(warning);
			hasWarnings = true;
		}
		if (pkg.record.canonicalName !== pkg.manifest.name) {
			const warning = `🟨 [${pkg.id}] canonical name mismatch: record "${pkg.record.canonicalName}" vs manifest "${pkg.manifest.name}"`;
			console.warn(warning);
			hasWarnings = true;
		}
		if (pkg.record.description !== pkg.manifest.description) {
			const warning = `🟨 [${pkg.id}] description mismatch: record "${pkg.record.description}" vs manifest "${pkg.manifest.description}"`;
			console.warn(warning);
			hasWarnings = true;
		}
		const expectedPath = `packages/${pkg.id}`;
		const recordPath = pkg.record.path.replace(/\/+$/, '');
		if (recordPath !== expectedPath) {
			const warning = `🟨 [${pkg.id}] path mismatch: record "${pkg.record.path}" vs discovery dir "${expectedPath}"`;
			console.warn(warning);
			hasWarnings = true;
		}
	}
	return hasWarnings;
}
