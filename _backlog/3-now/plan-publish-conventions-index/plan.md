# Plan: Publish Conventions Index

**ID:** `publish-conventions-index`

**Status:** `WORKING`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Automate discoverability of conventions packages.

**Description:** Add a generator that discovers convention packages from their manifests and records, validates that records stay in sync with manifests and their discovery directory, and renders the package index and a machine-readable collection.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                  |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Summary

Add `scripts/create-package-index/` — a nunjucks-rendered generator that reads each `packages/*/package.json` and `packages/*/_records/package.art`, validates that each record's `Version`, `Canonical Name`, `Description`, and `Path` stay in sync with its manifest and discovery directory, and writes `packages/index.md` and `meta/conventions.json`. The manifest is the source of truth for version, canonical name, and path; the record is the source of truth for description. `meta/conventions.json` carries only manifest data (`name`, `version`, `description`, `dependencies`) and excludes private packages. Outputs are always written; the script exits `1` when validation warnings are emitted. Register the `generate:package-index` npm script and add vitest coverage for the generator's pure functions.

## Context

### Upstream Work

| Kind      | Path                                                                 | Role                                                           |
| --------- | -------------------------------------------------------------------- | -------------------------------------------------------------- |
| Milestone | `$CONVENTIONS/_roadmap/3-now/milestone-conventions-one/milestone.md` | Phase 3 — Distribute: automate discoverability of conventions. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `render-template` — Renders plan and instruction artefacts. Required for Drafting Work Item, Planning Work Item.

### Domains

| Domain / Path                                     | Description                                                                        |
| ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`           | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |
| Domain: Milestones `$DOMAINS/milestones/index.md` | Milestones coordinating outcomes across phases and work items.                     |

### Knowledge

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes, and rules for the commit step. Relevant for Writing Commit Message.

## Scope

Adds repo-root tooling, generated artefacts, and test tooling; no convention rule text changes.

### (Scope) Repository: Conventions

**Record:** `$CONVENTIONS/package.json`

**Role:** — Changes required.

**Partial:**

- `name` — `noodlestan/conventions`
- `scripts` — add `generate:package-index`, `test`

**Changes:**

— Add `scripts/create-package-index/` (`index.ts`, `types.ts`, `constants.ts`, `private/{function}.ts`, `templates/package-index.njk`).

— Validate record-to-manifest sync (`Version`, `Canonical Name`, `Description`, `Path`) and warn on mismatch.

— Generate `packages/index.md` and `meta/conventions.json`.

— Add vitest configuration, tests, and a fixture helper.

**Operations:**

— Run `npm run generate:package-index`.

— Run `npm run test`.

**Dependencies:**

- None.

## Execution Context

Run from `$WORKSPACE/`; all changes are in `$CONVENTIONS` on branch `main`.

## Work

### Next

Commit the `publish-conventions-index` iteration.

### Blockers

- None.

---

## Operating Instructions

### Setting Up

**Purpose:** Prepare the execution environment. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/setting-up/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE/` root:

```bash
npm ci # to install dependencies.
```

**Instructions:** (From `$CONVENTIONS/_guide.md`)

Run from the repository root:

```bash
npm ci # to install dependencies.
```

### Verifying Step

**Purpose:** Report and fix formatting issues after each execution step. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-step/operation.art`.

**Instructions:** (From `$CONVENTIONS/_guide.md`)

Run from the `$CONVENTIONS` root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-completion/operation.art`.

**Instructions:** (From `$CONVENTIONS/_guide.md`)

Runs automatically on pre-commit hook (from the repository root):

```bash
npm run ci # lint
```

---

## Items:

| Iteration                            | Status    |
| ------------------------------------ | --------- |
| Iteration: Publish Conventions Index | `WORKING` |

### Iteration: Publish Conventions Index

**Id:** `publish-conventions-index`

**Status:** `WORKING`

**Purpose:** Automate discoverability of conventions packages.

**Description:** Add the modular package index generator, its nunjucks template, record-to-manifest validation, the generated outputs, and vitest coverage for the pure functions; register the `generate:package-index` and `test` npm scripts.

**Changes:**

- Add `scripts/create-package-index/` (`index.ts`, `types.ts`, `constants.ts`, `private/{function}.ts`, `templates/package-index.njk`).
- Validate each record against its manifest and discovery directory (`Version`, `Canonical Name`, `Description`, `Path`); warn on mismatch.
- Generate `packages/index.md` and `meta/conventions.json` from manifest data; exclude private packages.
- Always write outputs; exit `1` when validation warnings are emitted.
- Add `vitest.config.ts`, `test/helpers/package/makePackageFixture.ts`, and test files covering the pure functions.
- Register `generate:package-index` and `test` in `package.json`; add `tsconfig.json` and `"type": "module"`.

**Dependencies:**

- None.

#### Commits:

| ID                          | Repository / Checkout / Branch        | Policy   | Hash    | Status     |
| --------------------------- | ------------------------------------- | -------- | ------- | ---------- |
| `publish-conventions-index` | Conventions / `$CONVENTIONS` / `main` | `NOPUSH` | `(TBD)` | `AUTHORED` |

##### Commit: `publish-conventions-index`

**Repository:** Conventions

**Message:**

```
build(conventions): Add package index generator.

- Add scripts/create-package-index/ generator with nunjucks template.
- Validate record-to-manifest sync and emit packages/index.md + meta/conventions.json.
- Add vitest tests for the generator's pure functions.
```

---

## Coordination

### Not In Scope

- Convention rule text changes.
- Publishing packages to npm.

### Evidence

- `npm run generate:package-index` produces `packages/index.md` and `meta/conventions.json`; `npm run lint`, `npx tsc --noEmit`, and `npm run test` (18 tests) pass.
- `meta/conventions.json` contains only `name`, `version`, `description`, and `dependencies` per non-private package.
- The script exits `1` when a record drifts from its manifest (version, canonical name, description, or path).

### Findings

- Reconciled record/manifest `Description` drift across `commits`, `jsx`, `scss`, `solidjs`, `typescript`, and `unit-tests`; manifest descriptions were updated to match the records.

### Decisions

- **Manifest is the source of truth for version, canonical name, and path; the record is the source of truth for description** — manifests were updated to match record descriptions, and records already matched manifests on the other fields.
- **`meta/conventions.json` carries only manifest data** (`name`, `version`, `description`, `dependencies`); private packages are excluded.
- **Validation is advisory but enforced** — outputs are always written, but the script exits `1` when record-to-manifest mismatches are detected.
- **Generator is modular** — one function per file under `private/`, with `types.ts` and `constants.ts`, and its template lives alongside it.

### Knowledge to Update

- None.

### Follow Ups

- None.

### Feedback

- None.
