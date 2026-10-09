import { describe, expect, it } from 'vitest';

import { extractField } from './extractField.js';

describe('extractField', () => {
	it('GIVEN a backtick-wrapped field it returns the trimmed value', () => {
		const content = '**Version:** `0.1.0`';

		const result = extractField(content, 'Version');

		expect(result).toBe('0.1.0');
	});

	it('GIVEN a plain-text field it returns the trimmed value', () => {
		const content = '**Description:** Reference conventions for TypeScript.';

		const result = extractField(content, 'Description');

		expect(result).toBe('Reference conventions for TypeScript.');
	});

	it('GIVEN a missing field it returns null', () => {
		const content = '**Version:** `0.1.0`';

		const result = extractField(content, 'Purpose');

		expect(result).toBeNull();
	});

	it('GIVEN a field name with regex-special characters it still matches', () => {
		const content = '**Canonical Name:** `@noodlestan/conventions-typescript`';

		const result = extractField(content, 'Canonical Name');

		expect(result).toBe('@noodlestan/conventions-typescript');
	});
});
