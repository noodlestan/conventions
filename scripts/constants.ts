import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');

export const CONVENTIONS_JSON = join(ROOT, 'meta', 'conventions.json');
export const INDEX_FILE = join(ROOT, 'packages', 'index.md');
