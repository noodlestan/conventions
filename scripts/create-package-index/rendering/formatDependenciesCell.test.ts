import { describe, expect, it } from 'vitest';

import { makePackageFixture } from '../../test/helpers/package/makePackageFixture.js';

import { formatDependenciesCell } from './formatDependenciesCell.js';

describe('formatDependenciesCell', () => {
	it('GIVEN dependencies it returns them sorted and backtick-wrapped', () => {
		const conventionPackage = makePackageFixture({
			manifest: {
				dependencies: {
					'@noodlestan/conventions-jsx': '*',
					'@noodlestan/conventions-typescript': '*',
				},
			},
		});

		const result = formatDependenciesCell(conventionPackage);

		expect(result).toBe('`@noodlestan/conventions-jsx`, `@noodlestan/conventions-typescript`');
	});

	it('GIVEN no dependencies it returns an em dash', () => {
		const conventionPackage = makePackageFixture({ manifest: { dependencies: {} } });

		const result = formatDependenciesCell(conventionPackage);

		expect(result).toBe('—');
	});
});
