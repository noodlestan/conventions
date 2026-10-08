# Plan: Amend TypeScript Conventions

**ID:** `amend-typescript-conventions`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Fold the codec-bin audit amendments and scope confirmations into the TypeScript conventions source before the next release.

**Description:** Amend 6 conventions and clarify 4 confirmed scopes across `$CONVENTIONS/packages/typescript/art/src/`, keep the changed entries in `art/index.md` in sync, and leave the package ready to publish as `0.0.4`.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable       | Resolved Path                      | Purpose                                    |
| -------------- | ---------------------------------- | ------------------------------------------ |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                   |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project  |
| `$ART_MD`      | `$WORKSPACE/checkouts/art-md`      | Pilot consumer project (adoption evidence) |

## Summary

Fold 10 ruled items from the codec-bin audit into the TypeScript conventions package: 6 amendments change rule text and 4 confirmations become clarifications, across `explicit-code.md`, `filesystem.md`, `types.md`, and `flat-code.md`. The package index stays in sync with every changed source entry, and the changes are recorded under `## Unreleased` in the package changelog. Scope is the `packages/typescript/` documentation only — releasing `0.0.4`, the audit code changes, and the unit tests package are outside this plan.

## Context

### Upstream Work

| Kind | Path                                                               | Role                                                         |
| ---- | ------------------------------------------------------------------ | ------------------------------------------------------------ |
| Note | `./note-to-conventions-architect.md`                               | Ruled amendments and scope confirmations this plan executes. |
| Plan | `$ART_MD/_backlog/3-now/plan-consolidate-codec-bin/plan__audit.md` | Source of record for the decisions behind every item.        |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `render-template` — Renders plan and instruction artefacts. Required for Drafting Work Item, Planning Work Item.

### Domains

| Domain / Path                                     | Description                                                                        |
| ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`           | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |
| Domain: Milestones `$DOMAINS/milestones/index.md` | Milestones coordinating outcomes across phases and work items.                     |

### Knowledge

::READ `./note-to-conventions-architect.md` (Briefing) — The 10 ruled items, grouped as amendments and scope confirmations. Relevant for Planning Work Item, Executing Work Step.
::READ `$CONVENTIONS/architecture/authoring.md` (Briefing) — Index and source document rules the edits must satisfy. Relevant for Planning Work Item, Executing Work Step.
::READ `$CONVENTIONS/packages/typescript/art/index.md` (Conventions) — Current TypeScript rules and index entries the amendments edit. Relevant for Executing Work Step.
::READ `$CONVENTIONS/packages/unit-tests/art/src/typescript-overrides.md` (Conventions) — Owns the test-side exemptions to cross-reference instead of duplicating. Relevant for Executing Work Step.
::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes, and rules for the commit step. Relevant for Writing Commit Message.

## Scope

Amends `Package: TypeScript Conventions` text in place, keeps its index and changelog consistent, and leaves every other package untouched. The release itself and the audit's code changes are handled elsewhere.

### (Scope) Package: TypeScript Conventions

**Record:** `$CONVENTIONS/packages/typescript/_records/package.art`

**Role:** — Changes required.

**Partial:**

- `path` — `$CONVENTIONS/packages/typescript/`
- `canonicalName` — `@noodlestan/conventions-typescript`
- `version` — `0.0.3` published; the package record still states `0.0.1`
- `deployment` — NPM Package Deployment: TypeScript Conventions

**Changes:**

— Amend 6 conventions in `art/src/explicit-code.md`, `art/src/filesystem.md`, and `art/src/types.md`.

— Fold 4 scope confirmations into `art/src/filesystem.md` and `art/src/flat-code.md` as clarifications.

— Sync every changed index entry in `art/index.md` and add an `## Unreleased` section to `CHANGELOG.md`.

**Operations:**

— Publish `0.0.4` once the amendments land (Follow Up).

**Dependencies:**

- None.

## Execution Context

Execution occurs from `$WORKSPACE/`; all changes are in `$CONVENTIONS` on branch `main`, under `$CONVENTIONS/packages/typescript/`. The note and the audit attachment are read only.

## Work

### Next

Delegate the `READY` iteration `amend-typescript-conventions`.

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

| Iteration / Instructions                                                                                                   | Status  |
| -------------------------------------------------------------------------------------------------------------------------- | ------- |
| Iteration: Amend TypeScript Conventions `./plan-amend-typescript-conventions/instructions/amend-typescript-conventions.md` | `READY` |

### Iteration: Amend TypeScript Conventions

**Id:** `amend-typescript-conventions`

**Status:** `READY`

**Purpose:** Apply the 10 ruled items to the TypeScript conventions source so the next release carries them.

**Description:** Edit 10 conventions across 4 source modules, sync the changed index entries, record the changes under `## Unreleased`, and commit with the `build` type.

**Instructions:** `./plan-amend-typescript-conventions/instructions/amend-typescript-conventions.md`

**Changes:**

- Amend `No Abbreviations`, `Verb Function Names`, `All Caps Constants`, and `Functions over Arrows` in `$CONVENTIONS/packages/typescript/art/src/explicit-code.md`.
- Amend `Types Location`, `Constants Location`, and `Function Extraction` in `$CONVENTIONS/packages/typescript/art/src/filesystem.md`.
- Amend `No Nested Type Declarations` in `$CONVENTIONS/packages/typescript/art/src/types.md`, and clarify `No Function Calls in Literals` and `No Multi-Line Nested Declarations` in `$CONVENTIONS/packages/typescript/art/src/flat-code.md`.
- Sync the changed entries in `$CONVENTIONS/packages/typescript/art/index.md`, add `## Unreleased` to `$CONVENTIONS/packages/typescript/CHANGELOG.md`, and run `npm install`, `npm run lint:fix`, and `npm run ci` from `$CONVENTIONS`.

**Dependencies:**

- None.

#### Commits:

| ID                             | Repository / Checkout / Branch        | Policy   | Hash    | Status     |
| ------------------------------ | ------------------------------------- | -------- | ------- | ---------- |
| `amend-typescript-conventions` | Conventions / `$CONVENTIONS` / `main` | `NOPUSH` | `(TBD)` | `AUTHORED` |

##### Commit: `amend-typescript-conventions`

**Repository:** Conventions

**Message:**

```
build(typescript): Apply codec-bin audit amendments and clarifications.

- Amend 6 conventions and fold 4 scope confirmations across 4 source modules.
- Sync the changed entries in `art/index.md` and add the `Unreleased` changelog.
```

---

## Coordination

### Not In Scope

- **Release** — publishing `@noodlestan/conventions-typescript@0.0.4`, the version bump, and the package record version sync are Follow Ups.
- **Audit code changes** — decisions 2, 6, 11, 13, and 17 sites are consumed by Iteration: Apply CLI Conventions in `$ART_MD`.
- **Unit tests package** — `$CONVENTIONS/packages/unit-tests/` is unchanged; its `typescript-overrides.md` is only cross-referenced.

### Evidence

- **Conventions rendered clean** — every edited rule reads correctly from `art/index.md`, each changed index entry matches its source `**Summary:**`, and `npm run ci` passes in `$CONVENTIONS`.

### Findings

- **"File as Function" is `Function Extraction`** — the audit used the old name; it was renamed in `0.0.3` (see `$CONVENTIONS/packages/typescript/CHANGELOG.md`), so amendment 7 lands on `Function Extraction`.
- **`Constants Location` example contradicts its own fix** — the `Prefer` block still places the constant in `types.ts` although `0.0.3` claimed a target-path fix; amendment 3 repairs summary and example together.
- **Package record version is stale** — `_records/package.art` states `0.0.1` while `package.json` and npm are at `0.0.3`.

### Decisions

- **The note is ruled** — no ambiguity remains; each item is applied as an amendment or a clarification, never re-opened.
- **Test exemptions are cross-referenced** — `@noodlestan/conventions-unit-tests` `typescript-overrides.md` owns them; the production-scope text names the package instead of restating the rules.
- **One iteration, one commit** — all 10 items are text changes inside a single package; splitting them would fragment review of a single release delta.

### Knowledge to Update

- None.

### Follow Ups

- Publish `@noodlestan/conventions-typescript@0.0.4`: rename `## Unreleased` to `## 0.0.4`, bump `package.json`, and sync `_records/package.art` `Version`.
- Consume the audit code changes in `$ART_MD` through Iteration: Apply CLI Conventions.

### Feedback

- None.
