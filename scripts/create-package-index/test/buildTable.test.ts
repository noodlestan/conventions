import { describe, expect, it } from 'vitest';

import { buildTable } from '../private/buildTable.js';

import { makePackageFixture } from './helpers/package/makePackageFixture.js';

describe('buildTable', () => {
	it('GIVEN packages it builds a row per package with the expected headers', () => {
		const packages = [makePackageFixture()];

		const { headers, rows } = buildTable(packages);

		expect(headers).toEqual(['Name / Package', 'Version', 'Depends on', 'Index']);
		expect(rows).toHaveLength(1);
	});
});
