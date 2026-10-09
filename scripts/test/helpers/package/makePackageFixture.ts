import {
	ConventionPackage,
	PackageManifest,
	PackageRecord,
} from '../../../create-package-index/types.js';

const defaultManifest: PackageManifest = {
	name: '@noodlestan/conventions-typescript',
	version: '0.1.0',
	description: 'Reference conventions for TypeScript.',
	dependencies: {},
};

const defaultRecord: PackageRecord = {
	name: 'TypeScript Conventions',
	purpose: 'Reference conventions for TypeScript.',
	description: 'Reference conventions for TypeScript.',
	path: 'packages/typescript/',
	version: '0.1.0',
	canonicalName: '@noodlestan/conventions-typescript',
};

type PackageFixtureOverrides = Partial<Omit<ConventionPackage, 'manifest' | 'record'>> & {
	manifest?: Partial<PackageManifest>;
	record?: Partial<PackageRecord>;
};

export function makePackageFixture(overrides: PackageFixtureOverrides = {}): ConventionPackage {
	return {
		id: overrides.id ?? 'typescript',
		dir: overrides.dir ?? 'packages/typescript',
		recordFile: overrides.recordFile ?? '_records/package.art',
		manifest: { ...defaultManifest, ...overrides.manifest },
		record: { ...defaultRecord, ...overrides.record },
	};
}
