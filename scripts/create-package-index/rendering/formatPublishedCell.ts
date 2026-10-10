import type { ConventionPackage } from '../types.js';

export function formatPublishedCell(conventionPackage: ConventionPackage): string {
	return conventionPackage.publishedVersion ?? 'unpublished';
}
