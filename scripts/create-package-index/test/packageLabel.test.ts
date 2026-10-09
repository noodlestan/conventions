import { describe, expect, it } from 'vitest';

import { packageLabel } from '../private/packageLabel.js';

import { makePackageFixture } from './helpers/package/makePackageFixture.js';

describe('packageLabel', () => {
	it('GIVEN a record name ending in Conventions it strips the suffix', () => {
		const pkg = makePackageFixture({ record: { name: 'TypeScript Conventions' } });

		const result = packageLabel(pkg);

		expect(result).toBe('TypeScript');
	});

	it('GIVEN a record name without the Conventions suffix it returns it unchanged', () => {
		const pkg = makePackageFixture({ record: { name: 'Commits' } });

		const result = packageLabel(pkg);

		expect(result).toBe('Commits');
	});
});
