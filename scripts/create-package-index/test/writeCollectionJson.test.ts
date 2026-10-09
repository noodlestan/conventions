import { writeFileSync } from 'node:fs';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { writeCollectionJson } from '../private/writeCollectionJson.js';

import { makePackageFixture } from './helpers/package/makePackageFixture.js';

vi.mock('node:fs', async importOriginal => {
	const actual = await importOriginal<typeof import('node:fs')>();
	return { ...actual, writeFileSync: vi.fn() };
});

const writeFileSyncMock = vi.mocked(writeFileSync);

function readWrittenCollection(): unknown[] {
	const [, content] = writeFileSyncMock.mock.calls[0] as [string, string];
	return JSON.parse(content) as unknown[];
}

describe('writeCollectionJson', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('GIVEN a private package it excludes it from the collection', async () => {
		const packages = [makePackageFixture({ manifest: { private: true } }), makePackageFixture()];

		await writeCollectionJson(packages);

		expect(readWrittenCollection()).toHaveLength(1);
	});

	it('GIVEN packages it writes only manifest fields', async () => {
		const packages = [makePackageFixture()];

		await writeCollectionJson(packages);

		expect(readWrittenCollection()[0]).toEqual({
			name: expect.any(String),
			version: expect.any(String),
			description: expect.any(String),
			dependencies: expect.any(Object),
		});
	});
});
