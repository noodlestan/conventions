import { afterEach, describe, expect, it, vi } from 'vitest';

import { makePackageFixture } from '../../test/helpers/package/makePackageFixture.js';

import { validatePackages } from './validatePackages.js';

describe('validatePackages', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('GIVEN all records match their manifests it returns false', () => {
		const packages = [makePackageFixture()];

		const result = validatePackages(packages);

		expect(result).toBe(false);
	});

	it('GIVEN a version mismatch it warns and returns true', () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [
			makePackageFixture({ record: { version: '0.0.1' }, manifest: { version: '0.1.0' } }),
		];

		const result = validatePackages(packages);

		expect(result).toBe(true);
		expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('version mismatch'));
	});

	it('GIVEN a canonical name mismatch it warns and returns true', () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [
			makePackageFixture({ record: { canonicalName: 'x' }, manifest: { name: 'y' } }),
		];

		const result = validatePackages(packages);

		expect(result).toBe(true);
		expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('canonical name mismatch'));
	});

	it('GIVEN a description mismatch it warns and returns true', () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [
			makePackageFixture({ record: { description: 'a' }, manifest: { description: 'b' } }),
		];

		const result = validatePackages(packages);

		expect(result).toBe(true);
		expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('description mismatch'));
	});

	it('GIVEN a path mismatch it warns and returns true', () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [makePackageFixture({ record: { path: 'packages/commits/3' } })];

		const result = validatePackages(packages);

		expect(result).toBe(true);
		expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('path mismatch'));
	});
});
