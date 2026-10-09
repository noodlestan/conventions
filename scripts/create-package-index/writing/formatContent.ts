import * as prettier from 'prettier';

export async function formatContent(content: string, filepath: string): Promise<string> {
	const config = await prettier.resolveConfig(filepath);
	return prettier.format(content, { ...config, filepath });
}
