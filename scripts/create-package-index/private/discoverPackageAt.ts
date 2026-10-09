import { basename, join } from 'node:path';

import { RECORD_DIR, RECORD_FILE } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { readManifest } from './readManifest.js';
import { readRecord } from './readRecord.js';

export async function discoverPackageAt(dir: string): Promise<ConventionPackage> {
	const manifest = await readManifest(dir);
	const record = await readRecord(dir);

	return {
		id: basename(dir),
		dir,
		recordFile: join(RECORD_DIR, RECORD_FILE),
		manifest,
		record,
	};
}
