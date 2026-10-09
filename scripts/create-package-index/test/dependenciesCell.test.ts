import { describe, expect, it } from 'vitest';

import { dependenciesCell } from '../private/dependenciesCell.js';

import { makePackageFixture } from './helpers/package/makePackageFixture.js';

describe('dependenciesCell', () => {
	it('GIVEN dependencies it returns them sorted and backtick-wrapped', () => {
		const pkg = makePackageFixture({
			manifest: {
				dependencies: {
					'@noodlestan/conventions-jsx': '*',
					'@noodlestan/conventions-typescript': '*',
				},
			},
		});

		const result = dependenciesCell(pkg);

		expect(result).toBe('`@noodlestan/conventions-jsx`, `@noodlestan/conventions-typescript`');
	});

	it('GIVEN no dependencies it returns an em dash', () => {
		const pkg = makePackageFixture({ manifest: { dependencies: {} } });

		const result = dependenciesCell(pkg);

		expect(result).toBe('—');
	});
});
