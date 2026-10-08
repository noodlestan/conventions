# Plan: Publish Conventions Index

**ID:** `publish-conventions-index`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Automate discoverability of conventions packages.

**Description:** Add a generator script that discovers convention packages from their manifests and records, and renders the package index and a machine-readable collection.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                  |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Summary

Add `scripts/create-package-index.ts` (nunjucks-rendered) that reads each `packages/*/package.json` and `packages/*/_records/package.art`, and writes `packages/index.md` and `meta/conventions.json`. Register the `generate:package-index` npm script.

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

Adds repo-root tooling and generated artefacts; no convention rule text changes.

### (Scope) Repository: Conventions

**Record:** `$CONVENTIONS/package.json`

**Role:** — Changes required.

**Partial:**

- `name` — `noodlestan/conventions`
- `scripts` — add `generate:package-index`

**Changes:**

— Add `scripts/create-package-index.ts` and `scripts/templates/package-index.njk`.

— Generate `packages/index.md` and `meta/conventions.json`.

**Operations:**

— Run `npm run generate:package-index`.

**Dependencies:**

- None.

## Execution Context

Run from `$WORKSPACE/`; all changes are in `$CONVENTIONS` on branch `main`.

## Work

### Next

Delegate the `READY` iteration `publish-conventions-index`.

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

| Iteration / Instructions                                                                                          | Status  |
| ----------------------------------------------------------------------------------------------------------------- | ------- |
| Iteration: Publish Conventions Index `./plan-publish-conventions-index/instructions/publish-conventions-index.md` | `READY` |

### Iteration: Publish Conventions Index

**Id:** `publish-conventions-index`

**Status:** `READY`

**Purpose:** Automate discoverability of conventions packages.

**Description:** Add the package index generator script, its template, and the generated outputs, and register the npm script.

**Instructions:** `./plan-publish-conventions-index/instructions/publish-conventions-index.md`

**Changes:**

- Add `scripts/create-package-index.ts` and `scripts/templates/package-index.njk`.
- Generate `packages/index.md` and `meta/conventions.json`.
- Register `generate:package-index` in `package.json`.

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

- Add scripts/create-package-index.ts and its nunjucks template.
- Generate packages/index.md and meta/conventions.json.
```

---

## Coordination

### Not In Scope

- Convention rule text changes.
- Publishing packages to npm.

### Evidence

- `npm run generate:package-index` produces `packages/index.md` and `meta/conventions.json`; `npm run lint` passes.

### Findings

- None.

### Decisions

- **Scripts and outputs are provisional** — the final shape of the script and data is not yet reviewed.

### Knowledge to Update

- None.

### Follow Ups

- None.

### Feedback

- None.
