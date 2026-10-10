# Plan: Publish Commits Convention

**ID:** `publish-commits-convention`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Convert the commits package to the index + source layout and publish it.

**Description:** Replace the current single-file commits package with the standard `art/index.md` + `art/src/commit-message.md` layout, populating it from the workspace source at `$WORKSPACE/knowledge/conventions/writing-commit-message.art`. Then publish the package to npm with a version bump and updated indexes.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root, home to agent source code |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Summary

The commits package currently hosts a single `art/commits.art` that reaches commit conventions through a `:READ` to the workspace domain rather than owning them inline — a known exception documented in `architecture/authoring.md`. This plan removes that exception: the package is rewritten to the standard layout with one source document, populated from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`. The first iteration is the conversion; the second is a manual publish (version bump, npm publish, index update).

## Context

### Upstream Work

| Kind      | Path                                                          | Role                                                               |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| Source    | `$WORKSPACE/knowledge/conventions/writing-commit-message.art` | The workspace source containing the commit conventions to convert. |
| Authoring | `$CONVENTIONS/architecture/authoring.md`                      | Defines the index + source format the output must follow.          |
| Reference | `$CONVENTIONS/packages/typescript/art/`                       | Example of the target layout: `index.md` + `src/` documents.       |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.

### Knowledge

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes, and rules. This is the source to convert.

## Scope

Rewrites the art documents in `$CONVENTIONS/packages/commits/`. No other package changes.

### (Scope) Package: Commits

**Record:** `$CONVENTIONS/packages/commits/`

**Role:** — Changes required.

**Changes:**

— Replace `art/commits.art` with `art/index.md` + `art/src/commit-message.md` following the layout in `architecture/authoring.md`.

**Dependencies:**

- None.

## Execution Context

Run from `$CONVENTIONS/`; all changes are package sources under `packages/commits/art/`.

## Work

### Next

Draft iteration 1 (authoring) and iteration 2 (publish).

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

### Verifying Step

**Purpose:** Report and fix formatting issues after each execution step. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-step/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$CONVENTIONS/` root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-completion/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$CONVENTIONS/` root:

```bash
npm run ci # lint + tests + index check
```

**Instruction:** Manual review confirms the index and source document agree (no orphan entry, no unreachable convention), and the `:READ` directive resolves to a file that exists in the package.

---

## Items:

| Iteration                             | Status  |
| ------------------------------------- | ------- |
| Iteration: Author Commits Conventions | `READY` |
| Iteration: Release Commits Convention | `READY` |

### Iteration: Author Commits Conventions

**Id:** `author-commits-conventions`

**Status:** `READY`

**Purpose:** Convert the commits package to the index + source layout, populated from the workspace source.

**Description:** Read `$WORKSPACE/knowledge/conventions/writing-commit-message.art`, extract the commit conventions, and write them into `packages/commits/art/index.md` and `packages/commits/art/src/commit-message.md` following the format defined in `architecture/authoring.md`. The existing `art/commits.art` is deleted.

**Changes:**

- Delete `$CONVENTIONS/packages/commits/art/commits.art`.
- Add `$CONVENTIONS/packages/commits/art/index.md` — the entry point, with Purpose, Description, Principles, and one `## Conventions: Commits / Commit Message` section.
- Add `$CONVENTIONS/packages/commits/art/src/commit-message.md` — the source document, with one `## Convention: {Name}` section per rule.

**Instructions for the Agent:**

1. ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art`. This is the sole source of content. The current content of `packages/commits/art/commits.art` is irrelevant — it will be deleted, not migrated.
2. ::READ `$CONVENTIONS/architecture/authoring.md`. This defines the target format: the index document shape, the source document shape, and the rules for writing a rule. Follow it precisely.
3. Study `$CONVENTIONS/packages/typescript/art/index.md` and one file under `$CONVENTIONS/packages/typescript/art/src/` as working examples of the layout.
4. Decompose the source content into `## Convention: {Name}` sections within the single `art/src/commit-message.md` file. The source covers commit format, allowed types, scopes, type–scope associations, examples, and rules — each becomes one or more convention sections.
5. For each convention, decide the right depth based on what the rule communicates:
   - **Summary only** — for simple rules where the summary is self-evident (e.g. maximum message length). No Avoid/Prefer needed.
   - **Summary + breakdown** — for rules that enumerate allowed values or associations (e.g. valid commit types, type–scope associations). The breakdown lives in the summary or as a structured list within it.
   - **Summary + complete examples** — for rules that compose a message or bullet points and are best understood by seeing a full example. Include Avoid/Prefer pairs with concrete commit-message examples.
6. Write `art/index.md` following the index format in `architecture/authoring.md`: H1 `# Conventions: Commits`, Purpose, Description, Principles, then one `## Conventions: Commits / Commit Message` section with its `:READ` directive and terse entries — one entry per `## Convention:` section in the source document.
7. Write `art/src/commit-message.md` following the source document format: H1 `# Conventions: Commits / Commit Message`, Purpose, Description, then one `## Convention: {Name}` section per rule with its `**Summary:**` and, where needed, Avoid/Prefer examples.
8. Ensure every index entry has a matching `## Convention:` section in the source document and every source section is listed in the index — no orphans, no unreachable conventions.
9. Delete `art/commits.art`.
10. Run `npm run lint:fix` and `npm run lint` from `$CONVENTIONS/` root.

**Dependencies:**

- None.

#### Commits:

| ID                           | Repository / Checkout / Branch        | Policy       | Hash    | Status     |
| ---------------------------- | ------------------------------------- | ------------ | ------- | ---------- |
| `author-commits-conventions` | Conventions / `$CONVENTIONS` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `author-commits-conventions`

**Repository:** Conventions

**Message:**

```
feat(conventions): Rewrite commits to index + source layout

- Replace single commits.art with index.md and src/commit-message.md
- Populate from workspace writing-commit-message source
- Follow authoring.md layout with avoid/prefer examples
```

### Iteration: Release Commits Convention

**Id:** `release-commits-convention`

**Status:** `READY`

**Purpose:** Publish the rewritten commits package to npm and update the repository indexes.

**Description:** This iteration is **MANUAL** — no changes are written by a worker. The operator bumps the package version, publishes to npm, regenerates the index files, and commits.

**Changes:**

- Bump `packages/commits/package.json` version (patch or minor as appropriate).
- Update `packages/commits/CHANGELOG.md` with the version and a description of the change.
- Publish `@noodlestan/conventions-commits` to npm.
- Run `npm run generate:package-index` to regenerate `packages/index.md` and `meta/conventions.json`.
- Stage and commit all changes.

**Instructions (Manual — No Worker):**

1. Bump `packages/commits/package.json` version. This is a content rewrite — use a minor bump unless the team decides otherwise.
2. Add a `CHANGELOG.md` entry describing the rewrite from single-file to index + source layout.
3. From `$CONVENTIONS/packages/commits/`, run `npm publish`.
4. From `$CONVENTIONS/` root, run `npm run generate:package-index` to regenerate the index with the new published version.
5. Verify `npm run check:package-index` passes.
6. Stage and commit:

```
release(conventions): Publish commits package rewrite

- Bump @noodlestan/conventions-commits version
- Publish to npm with index + source layout
- Regenerate package index and conventions.json
```

**Dependencies:**

- Iteration: Author Commits Conventions must be complete.

#### Commits:

| ID                           | Repository / Checkout / Branch        | Policy   | Hash    | Status     |
| ---------------------------- | ------------------------------------- | -------- | ------- | ---------- |
| `release-commits-convention` | Conventions / `$CONVENTIONS` / `main` | `MANUAL` | `(TBD)` | `AUTHORED` |

##### Commit: `release-commits-convention`

**Repository:** Conventions

**Message:**

```
release(conventions): Publish commits package rewrite

- Bump @noodlestan/conventions-commits version
- Publish to npm with index + source layout
- Regenerate package index and conventions.json
```

---

## Coordination

### Not In Scope

- Changes to any other conventions package.
- Changes to the workspace source at `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
- Changes to `architecture/authoring.md`.
- Removal of the "Known Exceptions" section in `architecture/authoring.md` (separate cleanup).

### Evidence

- `packages/commits/art/index.md` exists with one `## Conventions: Commits / Commit Message` section.
- `packages/commits/art/src/commit-message.md` exists with one `## Convention: {Name}` section per rule.
- `packages/commits/art/commits.art` is deleted.
- Every index entry has a matching source section and vice versa.
- `npm run ci` passes from `$CONVENTIONS/` root.
- `npm run check:package-index` passes after publish.

### Findings

- `architecture/authoring.md` has a "Known Exceptions" section documenting the commits single-file layout. This plan removes the exception but does not update that section — follow-up.

### Decisions

- **Current content is irrelevant** — the existing `art/commits.art` is deleted, not migrated. The agent reads the workspace source fresh.
- **Single source document** — all commit conventions live in one `art/src/commit-message.md`, decomposed into `## Convention:` sections. No group files.
- **Convention depth varies by rule** — some conventions need only a summary, some need a summary with a breakdown, and some need complete Avoid/Prefer examples. The agent decides per rule.
- **Iteration 2 is manual** — publishing involves npm credentials and version decisions; no worker writes changes.

### Knowledge to Update

- None.

### Follow Ups

- Remove the "Known Exceptions" section from `architecture/authoring.md` once the commits package no longer matches that description.

### Feedback

- None.
