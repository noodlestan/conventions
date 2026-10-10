import { execSync } from 'node:child_process';

import { CONVENTIONS_JSON, INDEX_FILE } from '../constants.js';
import { ROOT } from '../create-package-index/constants.js';

const CHECK_FILES = [CONVENTIONS_JSON, INDEX_FILE];

function main() {
	try {
		execSync('npm run generate:package-index', { cwd: ROOT, stdio: 'inherit' });
	} catch {
		process.exit(1);
	}

	const dirtyFiles = CHECK_FILES.filter(file => {
		const result = execSync(`git diff --name-only -- ${file}`, { cwd: ROOT });
		return Boolean(result.toString().trim());
	});

	if (dirtyFiles.length) {
		const files = dirtyFiles.join(', ');
		const message = `🟥 [${files}]: unstaged changes after regeneration. Stage the changes and commit again.`;
		console.error(message);
		process.exit(1);
	}

	console.info('🟩 Package index is up to date.');
}

main();
