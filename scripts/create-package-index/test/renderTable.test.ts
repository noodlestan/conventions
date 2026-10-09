import { describe, expect, it } from 'vitest';

import { renderTable } from '../private/renderTable.js';

describe('renderTable', () => {
	it('GIVEN headers and rows it renders a padded markdown table', () => {
		const headers = ['Name', 'Version'];
		const rows = [['TypeScript', '0.1.0']];

		const result = renderTable(headers, rows);

		expect(result).toBe(
			['| Name       | Version |', '| ---------- | ------- |', '| TypeScript | 0.1.0   |'].join(
				'\n',
			),
		);
	});

	it('GIVEN empty rows it renders only the header and separator', () => {
		const headers = ['Name'];
		const rows: string[][] = [];

		const result = renderTable(headers, rows);

		expect(result).toBe(['| Name |', '| ---- |'].join('\n'));
	});
});
