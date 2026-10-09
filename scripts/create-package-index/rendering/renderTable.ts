export function renderTable(headers: string[], rows: string[][]): string {
	const calculateWidth = (header: string, column: number): number => {
		const cellLengths = rows.map(row => (row[column] || '').length);
		return Math.max(header.length, ...cellLengths);
	};
	const widths = headers.map(calculateWidth);

	const padCell = (value: string, column: number): string => {
		const width = widths[column] as number;
		return (value || '').padEnd(width);
	};
	const renderLine = (cells: string[]): string => {
		const padded = cells.map((cell, column) => padCell(cell, column));
		const joined = padded.join(' | ');
		return `| ${joined} |`;
	};

	const headerLine = renderLine(headers);
	const widthCells = widths.map(width => '-'.repeat(width));
	const separatorLine = renderLine(widthCells);
	const rowLines = rows.map(row => renderLine(row));
	const lines = [headerLine, separatorLine, ...rowLines];

	return lines.join('\n');
}
