export function extractField(content: string, field: string): string | null {
	const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const backtickPattern = new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*\`([^\`]+)\``, 'm');
	const plainPattern = new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*(.+)`, 'm');
	const patterns = [backtickPattern, plainPattern];

	for (const pattern of patterns) {
		const match = content.match(pattern);
		if (match) return match[1]?.trim() || '';
	}
	return null;
}
