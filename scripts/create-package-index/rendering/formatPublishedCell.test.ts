import { describe, expect, it } from 'vitest';

import { makePackageFixture } from '../../test/helpers/package/makePackageFixture.js';

import { formatPublishedCell } from './formatPublishedCell.js';

describe('formatPublishedCell', () => {
	it('GIVEN a published version it returns the version', () => {
		const conventionPackage = makePackageFixture({ publishedVersion: '0.1.0' });

		const result = formatPublishedCell(conventionPackage);

		expect(result).toBe('0.1.0');
	});

	it('GIVEN a null published version it returns unpublished', () => {
		const conventionPackage = makePackageFixture({ publishedVersion: null });

		const result = formatPublishedCell(conventionPackage);

		expect(result).toBe('unpublished');
	});
});
