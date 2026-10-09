import { join } from 'node:path';

import nunjucks from 'nunjucks';

import { TEMPLATES_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { buildTable } from './buildTable.js';
import { renderTable } from './renderTable.js';

export function renderIndex(packages: ConventionPackage[]): string {
	const { headers, rows } = buildTable(packages);
	const table = renderTable(headers, rows);
	const template = join(TEMPLATES_DIR, 'package-index.njk');
	return nunjucks
		.configure(TEMPLATES_DIR, { autoescape: false })
		.render(template, { packages, table });
}
