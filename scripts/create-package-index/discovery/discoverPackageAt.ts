import { basename, join } from 'node:path';

import { RECORD_DIR, RECORD_FILE } from '../constants.js';
import { readManifest } from '../record/readManifest.js';
import { readRecord } from '../record/readRecord.js';
import type { ConventionPackage } from '../types.js';

export async function discoverPackageAt(dir: string): Promise<ConventionPackage> {
	const manifest = await readManifest(dir);
	const record = await readRecord(dir);
	const id = basename(dir);
	const recordFile = join(RECORD_DIR, RECORD_FILE);

	return {
		id,
		dir,
		recordFile,
		manifest,
		record,
	};
}
