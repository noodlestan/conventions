export function extractField(content: string, field: string): string | null {
	const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const patterns = [
		new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*\`([^\`]+)\``, 'm'),
		new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*(.+)`, 'm'),
	];

	for (const pattern of patterns) {
		const match = content.match(pattern);
		if (match) return match[1]?.trim() || '';
	}
	return null;
}
