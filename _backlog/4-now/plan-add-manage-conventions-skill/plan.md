# Plan: Add Manage Conventions Skill

**ID:** `add-manage-conventions-skill`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Expose every operational conventions routine through one skill and decouple the routines from noodelstan-specific assumptions.

**Description:** Add a `manage-conventions` skill whose commands cover the five operational routines (discover available, discover installed, install, audit setup, audit module adoption), retire the superseded `audit-conventions` skill, add `%report-path` inputs to the two audit routines, and decouple the routines so they work with any conventions provider.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.

---

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root, home to agent source code |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains/`      | Where domain resources are defined        |
| `$SKILLS`      | `$WORKSPACE/.agents/skills/`       | Where skills and agent modes are defined  |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Summary

The conventions domain owns five operational routines that are currently orphaned — `discover-available-conventions`, `discover-installed-conventions`, `install-convention`, `audit-conventions-setup`, and `audit-convention-module` — plus a single `audit-conventions` skill that only wraps two of them. This plan exposes all five through one `manage-conventions` skill, retires `audit-conventions`, adds `%report-path` to the two audit routines so reports can be written to files, and decouples the routines from noodelstan-specific assumptions so they work with any conventions provider. No planning machinery is added to the conventions side: a planning agent invokes `manage-conventions` commands and captures them as operating instructions in the plan instead of executing them.

## Context

### Upstream Work

| Kind      | Path                                                                 | Role                                                                    |
| --------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Milestone | `$CONVENTIONS/_roadmap/3-now/milestone-conventions-one/milestone.md` | Phase 3 — Refine Distribution: author conventions and generate indexes. |
| Routines  | `$DOMAINS/conventions/routines/`                                     | The operational routines to expose and decouple.                        |
| Skill     | `$SKILLS/audit-conventions/`                                         | The superseded skill to retire.                                         |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `render-template` — Renders plan and instruction artefacts. Required for Drafting Work Item, Planning Work Item.

### Domains

| Domain / Path                                       | Description                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Conventions `$DOMAINS/conventions/index.md` | Convention sources, drafts, and the routines that author them.                     |
| Domain: Plans `$DOMAINS/plans/index.md`             | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |

### Knowledge

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes, and rules for the commit step. Relevant for Writing Commit Message.

## Scope

Adds and rewrites agent source code under `$WORKSPACE/.agents/`. No convention package sources change.

### (Scope) Routines: Conventions

**Record:** `$DOMAINS/conventions/routines/`

**Role:** — Changes required.

**Partial:**

- `audit-conventions-setup.art` — add `%report-path` input.
- `audit-convention-module.art` — add `%report-path` input; fix the canonical name example.
- `discover-available-conventions.art` — make the manifest URL default explicit as noodelstan-specific.
- `install-convention.art` — confirm no noodelstan-specific coupling.

**Changes:**

— Add `%report-path` to the two audit routines; when provided, write the report to the given file path.

— Fix the canonical name example in `audit-convention-module.art` from `@noodlestan-conventions-typescript` to `@noodlestan/conventions-typescript`.

— Document the `%manifest-url` default in `discover-available-conventions.art` as a noodelstan-specific default, overridable by any provider.

**Dependencies:**

- None.

### (Scope) Skills: Manage Conventions

**Record:** `$SKILLS/index.md`

**Role:** — Changes required.

**Partial:**

- `audit-conventions` — remove entry.

**Changes:**

— Add `$SKILLS/manage-conventions/SKILL.md` with five commands mapping to the five operational routines.

— Delete `$SKILLS/audit-conventions/`.

**Dependencies:**

- Routine decoupling must be settled first.

### (Scope) Agents: Modes

**Record:** `$SKILLS/agent-modes.md`

**Role:** — Changes required.

**Partial:**

- `audit-conventions` — remove from Allowed Skills of the four owning modes.

**Changes:**

— Register `manage-conventions` in the `## Allowed Skills` of `agent-architect`, `agent-planner`, `agent-delegator`, and `agent-worker`, replacing `audit-conventions`.

**Dependencies:**

- The `manage-conventions` skill must exist first.

## Execution Context

Run from `$WORKSPACE/`; all changes are agent source code in `$WORKSPACE/.agents/`.

## Work

### Next

Draft the `manage-conventions` skill and the report-path iteration.

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

Run from the `$WORKSPACE` root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
```

### Verifying Completion

**Purpose:** Confirms that the work item has been completed and satisfies its intended outcome. Operation of Workflow: Executing Work, defined in `$DOMAINS/work/workflows/executing-work/verifying-completion/operation.art`.

**Instructions:** (From `$WORKSPACE/_guide.md`)

Run from the `$WORKSPACE` root:

```bash
opencode validate # confirm agent modes still resolve
```

**Instruction:** Manual review confirms no dangling references remain to the deleted `audit-conventions` skill.

---

## Items:

| Iteration                           | Status  |
| ----------------------------------- | ------- |
| Iteration: Manage Conventions Skill | `READY` |
| Iteration: Report Paths             | `READY` |
| Iteration: Decouple Routines        | `READY` |

### Iteration: Manage Conventions Skill

**Id:** `add-manage-conventions-skill`

**Status:** `READY`

**Purpose:** Expose all five operational routines through one skill and retire the superseded skill.

**Description:** Add `manage-conventions` with a command per operational routine, register it in the four owning agent modes, and delete `audit-conventions`.

**Changes:**

- Add `$SKILLS/manage-conventions/SKILL.md` with commands:
  - `Discover Available Conventions` — executes Routine: Discover Available Conventions.
  - `Discover Installed Conventions` — executes Routine: Discover Installed Conventions.
  - `Install Convention` — executes Routine: Install Convention.
  - `Audit Conventions Setup` — executes Routine: Audit Conventions Setup.
  - `Audit Convention Module Adoption` — executes Routine: Audit Convention Module Adoption.
- Set the skill's Allowed Agent Modes to `agent-architect`, `agent-planner`, `agent-delegator`, and `agent-worker`.
- In those four agent modes, replace the `audit-conventions` allowance with `manage-conventions`.
- Delete `$SKILLS/audit-conventions/`.
- Add `manage-conventions` and remove `audit-conventions` from `$SKILLS/index.md`.

**Dependencies:**

- None.

#### Commits:

| ID                             | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ------------------------------ | --------------------------------- | ------------ | ------- | ---------- |
| `add-manage-conventions-skill` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `add-manage-conventions-skill`

**Repository:** Workspace

**Message:**

```
feat(conventions): Add manage-conventions skill

- Expose the five operational routines as skill commands
- Register the skill in architect, planner, delegator, and worker
- Retire the audit-conventions skill
```

### Iteration: Report Paths

**Id:** `add-report-paths-to-audit-routines`

**Status:** `READY`

**Purpose:** Let audit reports be written to files instead of only presented in chat.

**Description:** Add `%report-path` inputs to the two audit routines and pass them through the `manage-conventions` commands.

**Changes:**

- Add `%report-path` input to `$DOMAINS/conventions/routines/audit-conventions-setup.art` — when provided, write `%setup-report` to the given file path.
- Add `%report-path` input to `$DOMAINS/conventions/routines/audit-convention-module.art` — when provided, write `%adoption-report` to the given file path.
- Update the `manage-conventions` commands `Audit Conventions Setup` and `Audit Convention Module Adoption` to accept `%report-path` and pass it through.

**Dependencies:**

- Iteration: Manage Conventions Skill must be complete.

#### Commits:

| ID                                   | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ------------------------------------ | --------------------------------- | ------------ | ------- | ---------- |
| `add-report-paths-to-audit-routines` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `add-report-paths-to-audit-routines`

**Repository:** Workspace

**Message:**

```
feat(conventions): Add report paths to audit routines

- Add %report-path input to audit-conventions-setup.art
- Add %report-path input to audit-convention-module.art
- Update skill commands to accept and pass %report-path
```

### Iteration: Decouple Routines

**Id:** `decouple-conventions-routines`

**Status:** `READY`

**Purpose:** Make the operational routines work with any conventions provider.

**Description:** Remove noodelstan-specific assumptions from the routines so they are not coupled to `@noodlestan/conventions`, `node_modules`, or operating-instruction resources.

**Changes:**

- Fix the canonical name example in `audit-convention-module.art` from `@noodlestan-conventions-typescript` to `@noodlestan/conventions-typescript`.
- In `discover-available-conventions.art`, document the `%manifest-url` default as a noodelstan-specific default that any provider can override.
- Review `install-convention.art` and `audit-conventions-setup.art` for noodelstan-specific coupling (package names, manifest URLs, guide section names) and generalise where found.
- Confirm no routine assumes conventions come from `node_modules` or carry operating-instruction resources.

**Dependencies:**

- None.

#### Commits:

| ID                              | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ------------------------------- | --------------------------------- | ------------ | ------- | ---------- |
| `decouple-conventions-routines` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `decouple-conventions-routines`

**Repository:** Workspace

**Message:**

```
refactor(conventions): Decouple conventions routines

- Fix canonical name example in audit-convention-module.art
- Document manifest-url default as provider-overridable
- Generalise install and audit routines beyond noodelstan
```

---

## Coordination

### Not In Scope

- Authoring routines (draft, review, create-or-update) and the `write-conventions` skill — owned by `Plan: Add Write Conventions Skill`.
- Planning routines — dropped; the conventions side carries no planning machinery.
- Publishing any package of routines or operating instructions.

### Evidence

- `$SKILLS/index.md` lists `manage-conventions` and no longer lists `audit-conventions`.
- `grep -r "audit-conventions" $WORKSPACE` returns no results.
- `opencode validate` succeeds after the agent mode changes.

### Findings

- `audit-conventions` was the only skill wrapping the operational routines, and it covered only two of the five.
- `audit-convention-module.art` carried a canonical name example with a hyphen instead of a slash.

### Decisions

- **Every routine is exposed in a skill** — no orphan routines; `manage-conventions` groups the entry-point routines into use-case commands.
- **Capture, don't execute** — a planning agent invokes `manage-conventions` commands but captures them as operating instructions in the plan instead of running them, so the conventions side needs no planning machinery.
- **Routines are provider-agnostic** — no noodelstan-specific coupling beyond documented, overridable defaults.
- **`audit-conventions` is retired, not kept** — its two commands are absorbed by `manage-conventions`.

### Knowledge to Update

- None.

### Follow Ups

- Fix `$DOMAINS/conventions/_wip.md`, which still says "Processes" after the `processes` → `routines` rename.
- Delete the duplicate `$SKILLS/agents-modes.md`, or fold it into `$SKILLS/agent-modes.md`.

### Feedback

- None.
