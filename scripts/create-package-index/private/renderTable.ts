export function renderTable(headers: string[], rows: string[][]): string {
	const widths = headers.map((header, column) =>
		Math.max(header.length, ...rows.map(row => (row[column] || '').length)),
	);
	const pad = (value: string, column: number) => (value || '').padEnd(widths[column] as number);
	const line = (cells: string[]) => `| ${cells.map((cell, i) => pad(cell, i)).join(' | ')} |`;
	const separator = line(widths.map(width => '-'.repeat(width)));

	return [line(headers), separator, ...rows.map(row => line(row))].join('\n');
}
