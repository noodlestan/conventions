import { join } from 'node:path';

export const ROOT = join(import.meta.dirname, '..', '..');
export const PACKAGES_DIR = join(ROOT, 'packages');
export const META_DIR = join(ROOT, 'meta');
export const TEMPLATES_DIR = join(import.meta.dirname, 'templates');

export const RECORD_DIR = '_records';
export const RECORD_FILE = 'package.art';
export const INDEX_FILE = 'index.md';
