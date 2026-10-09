import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		include: ['**/*.test.ts'],
		passWithNoTests: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'text-summary'],
			thresholds: {
				lines: 90,
				functions: 90,
				branches: 75,
				statements: 90,
			},
		},
	},
});
