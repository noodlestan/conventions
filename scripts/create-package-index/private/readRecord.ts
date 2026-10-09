import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { RECORD_DIR, RECORD_FILE } from '../constants.js';
import type { PackageRecord } from '../types.js';

import { extractField } from './extractField.js';

export async function readRecord(dir: string): Promise<PackageRecord> {
	const file = join(dir, RECORD_DIR, RECORD_FILE);
	const content = readFileSync(file, 'utf-8');

	const nameMatch = content.match(/## Package:\s*(.+)/);
	const name = nameMatch?.[1]?.trim();
	if (!name) throw new Error(`Could not resolve package name from ${file}`);

	const canonicalName = extractField(content, 'Canonical Name') || '';
	if (!canonicalName) throw new Error(`Could not resolve canonical name from ${file}`);

	return {
		name,
		purpose: extractField(content, 'Purpose') || '',
		description: extractField(content, 'Description') || '',
		path: extractField(content, 'Path') || '',
		version: extractField(content, 'Version') || '',
		canonicalName,
	};
}
