import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export async function fetchPublishedVersion(packageName: string): Promise<string | null> {
	try {
		const { stdout } = await execFileAsync('npm', ['info', packageName, 'version']);
		const version = stdout.trim();
		return version || null;
	} catch {
		return null;
	}
}
