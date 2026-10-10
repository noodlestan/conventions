import { writeFileSync } from 'node:fs';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { makePackageFixture } from '../../test/helpers/package/makePackageFixture.js';

import { writeCollectionJson } from './writeCollectionJson.js';

vi.mock('node:fs', async importOriginal => {
	const actual = await importOriginal<typeof import('node:fs')>();
	return { ...actual, writeFileSync: vi.fn() };
});

const writeFileSyncMock = vi.mocked(writeFileSync);
const OUT_PATH = '/tmp/conventions.json';

function readWrittenCollection(): unknown[] {
	const [, content] = writeFileSyncMock.mock.calls[0] as [string, string];
	return JSON.parse(content) as unknown[];
}

describe('writeCollectionJson', () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it('GIVEN a private package it excludes it from the collection', async () => {
		const infoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});
		const packages = [makePackageFixture({ manifest: { private: true } }), makePackageFixture()];

		await writeCollectionJson(packages, OUT_PATH);

		expect(readWrittenCollection()).toHaveLength(1);
		expect(infoSpy).toHaveBeenCalledWith(`🟩 Saved 1 packages to meta/conventions.json`);
	});

	it('GIVEN packages it writes only manifest fields', async () => {
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [makePackageFixture()];

		await writeCollectionJson(packages, OUT_PATH);

		expect(readWrittenCollection()[0]).toEqual({
			name: expect.any(String),
			version: expect.any(String),
			description: expect.any(String),
			dependencies: expect.any(Object),
		});
	});

	it('GIVEN a published version it uses the published version', async () => {
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [
			makePackageFixture({ publishedVersion: '0.0.9', manifest: { version: '0.1.0' } }),
		];

		await writeCollectionJson(packages, OUT_PATH);

		expect((readWrittenCollection()[0] as { version: string }).version).toBe('0.0.9');
	});

	it('GIVEN no published version it falls back to the manifest version', async () => {
		vi.spyOn(console, 'warn').mockImplementation(() => {});
		const packages = [
			makePackageFixture({ publishedVersion: null, manifest: { version: '0.1.0' } }),
		];

		await writeCollectionJson(packages, OUT_PATH);

		expect((readWrittenCollection()[0] as { version: string }).version).toBe('0.1.0');
	});
});
