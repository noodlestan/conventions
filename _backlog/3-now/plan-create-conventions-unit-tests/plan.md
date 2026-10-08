# Plan: Create Conventions: Unit Tests

**ID:** `create-conventions-unit-tests`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Formalise the accepted Art MD unit tests proposal into a new `@noodlestan/conventions-unit-tests` package.

**Description:** Copy the proposal from `$ART_MD/conventions/unit-tests/` into `$CONVENTIONS/packages/unit-tests/`, apply the minor edits required by `$CONVENTIONS/architecture/authoring.md`, and register the package in every index.

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

Copy the accepted unit tests proposal into a new `packages/unit-tests/` package so unit test conventions ship on their own, depend on the TypeScript base package, and are reachable from the repository inventory. Scope covers the new package, its five source groups, its `art/index.md`, and the registration of the package in the inventory, guide, and project record. The proposal from the Art MD adoption is the upstream source of the content and is authoritative for convention structure and format.

## Context

### Upstream Work

| Kind      | Path                                                                 | Role                                                          |
| --------- | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| Milestone | `$CONVENTIONS/_roadmap/3-now/milestone-conventions-one/milestone.md` | Coordinates this plan within the Conventions One roadmap.     |
| Source    | `$ART_MD/conventions/unit-tests/index.md`                            | The accepted unit tests proposal copied into the new package. |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `render-template` — Renders plan and instruction artefacts. Required for Drafting Work Item, Planning Work Item.

### Domains

| Domain / Path                                     | Description                                                                        |
| ------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`           | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |
| Domain: Milestones `$DOMAINS/milestones/index.md` | Milestones coordinating outcomes across phases and work items.                     |

### Knowledge

::READ `$CONVENTIONS/architecture/authoring.md` (Briefing) — Authoring rules the copied proposal must satisfy. Relevant for Planning Work Item, Validating Work Item.
::READ `$ART_MD/conventions/unit-tests/index.md` (Proposal) — Accepted unit tests proposal to copy into the new package. Relevant for Planning Work Item.
::READ `$CONVENTIONS/packages/index.md` (Inventory) — Repository inventory where the new package must be registered. Relevant for Planning Work Item.

## Scope

Creates `Package: Unit Tests Conventions`, registers it in the repository inventory, the repository guide, and the project record, and leaves the existing convention packages untouched.

### (Scope) Package: Unit Tests Conventions

**Record:** To be created at: `$CONVENTIONS/packages/unit-tests/_records/package.art`

**Role:** — Created by this plan from the accepted proposal.

**Partial:**

- `path` — `$CONVENTIONS/packages/unit-tests/`
- `canonicalName` — `@noodlestan/conventions-unit-tests`
- `version` — `0.0.1`
- `dependencies` — Runtime: `@noodlestan/conventions-typescript` @ `*`
- `deployment` — NPM Package Deployment: Unit Tests Conventions

**Changes:**

— Scaffold the package anatomy defined in `$CONVENTIONS/architecture/authoring.md`.

— Copy the five proposal modules into `art/src/` with authoring-compliance edits only.

**Operations:**

— Publish `0.0.1` to npm once the plan is executed.

**Dependencies:**

- None.

## Execution Context

Execution occurs from `$WORKSPACE/`; all changes are in `$CONVENTIONS` on branch `main`, with package work under `$CONVENTIONS/packages/unit-tests/`. The proposal source is read from `$ART_MD` and is never modified.

## Work

### Next

Delegate the `READY` iteration `create-conventions-unit-tests`.

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

### Writing Commit Message

**Purpose:** Write standardized message according to context conventions. Operation of Workflow: Planning Work, defined in `$DOMAINS/work/workflows/planning-work/writing-commit-message/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

1. Read commit message conventions from `$WORKSPACE/knowledge/conventions/writing-commit-message.art`.
2. Write a message following: `{Type}({Scope}): {Description}.` max 120 chars, optionally followed by up 3 bullet points, max 100 chars each.
3. Use only values of `Type`, `Scope`, and valid `Type–Scope` associations defined in along with examples, and rules.

- RULE: Always read the commit message conventions once.
- RULE: Do not invent commit types or scopes or assume a combination is valid.

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-completion/operation.art`.

**Instructions:** (From `$CONVENTIONS/_guide.md`)

Runs automatically on pre-commit hook (from the repository root):

```bash
npm run ci # lint
```

---

## Items:

| Iteration / Instructions                                                                                                      | Status  |
| ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Iteration: Create Conventions Unit Tests `./plan-create-conventions-unit-tests/instructions/create-conventions-unit-tests.md` | `READY` |

### Iteration: Create Conventions: Unit Tests

**Id:** `create-conventions-unit-tests`

**Status:** `READY`

**Purpose:** Copy the accepted Art MD unit tests proposal into a new, registered `@noodlestan/conventions-unit-tests` package.

**Description:** Scaffold `packages/unit-tests/`, copy the five proposal modules into `art/src/` with authoring-compliance edits only, write the package index, and register the package in every index.

**Instructions:** `./plan-create-conventions-unit-tests/instructions/create-conventions-unit-tests.md`

**Changes:**

- Scaffold `$CONVENTIONS/packages/unit-tests/` with `_guide.md`, `_records/`, `art/`, `package.json`, `README.md`, `CHANGELOG.md`, and the package metadata files.
- Copy `$ART_MD/conventions/unit-tests/{naming,structure,mocking,style,typescript-overrides}.md` into `$CONVENTIONS/packages/unit-tests/art/src/`, stripping the `Unit Tests / ` prefix from every `## Convention:` heading and naming `@noodlestan/conventions-typescript` in the TypeScript Overrides summary; content, summaries, and examples otherwise verbatim.
- Write `$CONVENTIONS/packages/unit-tests/art/index.md` with the H1, Purpose, Description, a `## Mandatory Reading` `:READ` to the base package index, and five `## Conventions: Unit Tests / {Group}` sections with `:READ` directives and terse entries for all 10 conventions.
- Register the package in `$CONVENTIONS/packages/index.md`, `$CONVENTIONS/_guide.md`, and `$CONVENTIONS/_records/project.art`.
- Run `npm install` and `npm run lint:fix` from `$CONVENTIONS`.

**Dependencies:**

- None.

#### Commits:

| ID                            | Repository / Checkout / Branch        | Policy   | Hash    | Status     |
| ----------------------------- | ------------------------------------- | -------- | ------- | ---------- |
| `scaffold-unit-tests-package` | Conventions / `$CONVENTIONS` / `main` | `NOPUSH` | `(TBD)` | `AUTHORED` |

##### Commit: `scaffold-unit-tests-package`

**Repository:** Conventions

**Message:**

```
scaffold(unit-tests): Add the unit tests conventions package.

- Copy the accepted proposal into `art/src` with authoring fixes.
- Register the package in the inventory, guide, and project record.
- Refresh `package-lock.json` for the new workspace package.
```

---

## Coordination

### Not In Scope

- **TypeScript conventions** — unit test rules are not added to `$CONVENTIONS/packages/typescript/`; they live in their own package.
- **Tests and Integration Tests packages** — `$CONVENTIONS/packages/tests/` and `$CONVENTIONS/packages/integration-tests/` remain `PLANNED`.
- **Proposal source** — `$ART_MD/conventions/unit-tests/` is read only; it is not edited or removed by this plan.

### Evidence

- **Unit tests package resolves** — the package registers as a workspace package during `npm install` in `$CONVENTIONS`, and every `:READ` in `$CONVENTIONS/packages/unit-tests/art/index.md` resolves inside the package.

### Findings

- **Proposal already in authoring shape** — the five modules already use `# Conventions: Unit Tests / {Group}`, `Purpose`, `Description`, and `Summary` / `Avoid` / `Prefer`; only the convention headings and the index need adapting.

### Decisions

- **Proposal is authoritative** — the convention structure and format come from `$ART_MD/conventions/unit-tests/`; earlier plan decisions about them are discarded.
- **Own package, not a TypeScript group** — the milestone reserves `$CONVENTIONS/packages/unit-tests/`, and the TypeScript Overrides group constrains the base rules, which is a package dependency, not a document.
- **Base dependency** — `@noodlestan/conventions-typescript` is declared as an npm dependency so the overrides reach their base transitively.
- **No `## Principles` section** — the proposal defines none, the index rules in `$CONVENTIONS/architecture/authoring.md` do not require one, and `$CONVENTIONS/packages/jsx/art/index.md` follows the same shape.

### Knowledge to Update

- None.

### Follow Ups

- Publish `@noodlestan/conventions-unit-tests@0.0.1` from `$CONVENTIONS/packages/unit-tests/` once the plan is executed.
- Resolve the `$ART_WORK` reference in **Helper Grouping** for readers outside the workspace.
- Replace `$ART_MD/conventions/unit-tests/` with the installed `@noodlestan/conventions-unit-tests` package once it is published.

### Feedback

- None.
