import { join } from 'node:path';

import nunjucks from 'nunjucks';

import { TEMPLATES_DIR } from '../constants.js';
import type { ConventionPackage } from '../types.js';

import { buildTable } from './buildTable.js';
import { renderTable } from './renderTable.js';

export function renderIndex(packages: ConventionPackage[]): string {
	const table = buildTable(packages);
	const tableMarkdown = renderTable(table.headers, table.rows);
	const template = join(TEMPLATES_DIR, 'package-index.njk');
	const environment = nunjucks.configure(TEMPLATES_DIR, { autoescape: false });

	return environment.render(template, { packages, table: tableMarkdown });
}
