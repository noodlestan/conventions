import { describe, expect, it } from 'vitest';

import { makePackageFixture } from '../../test/helpers/package/makePackageFixture.js';

import { formatPackageLabel } from './formatPackageLabel.js';

describe('formatPackageLabel', () => {
	it('GIVEN a record name ending in Conventions it strips the suffix', () => {
		const conventionPackage = makePackageFixture({ record: { name: 'TypeScript Conventions' } });

		const result = formatPackageLabel(conventionPackage);

		expect(result).toBe('TypeScript');
	});

	it('GIVEN a record name without the Conventions suffix it returns it unchanged', () => {
		const conventionPackage = makePackageFixture({ record: { name: 'Commits' } });

		const result = formatPackageLabel(conventionPackage);

		expect(result).toBe('Commits');
	});
});
