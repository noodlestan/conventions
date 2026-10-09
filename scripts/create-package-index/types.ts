export type PackageManifest = {
	name: string;
	version: string;
	private?: boolean;
	description?: string;
	dependencies?: Record<string, string>;
};

export type PackageRecord = {
	name: string;
	purpose: string;
	description: string;
	path: string;
	version: string;
	canonicalName: string;
};

export type Table = {
	headers: string[];
	rows: string[][];
};

export type ConventionPackage = {
	id: string;
	dir: string;
	recordFile: string;
	manifest: PackageManifest;
	record: PackageRecord;
};
