# Plan: Add Write Conventions Skill

**ID:** `add-write-conventions-skill`

**Status:** `READY`

**Template:** `$DOMAINS/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Consolidate convention authoring into one skill driven by canon-form routines.

**Description:** Replace the duplicated rule-heavy `write-conventions*` routines and the orphaned `draft-conventions` / `review-conventions` skills with three canon-form routines (draft, review, create-or-update) exposed through a single `write-conventions` skill; retire the two now-unused agent modes.

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

Consolidate every convention-authoring surface under one skill. Three new routines — `draft-conventions.art`, `review-conventions.art`, and `create-or-update-conventions.art` — replace the two `#wip` write routines and follow the routine canon (Purpose, Inputs, Outputs, Procedure with numbered steps; no `RULE:` bullets). They do not prescribe a conventions format: rule shape comes from an `%authoring-guide` input whose documented default is the raw GitHub endpoint of `$CONVENTIONS/architecture/authoring.md`, since that file is not guaranteed to exist in consumer repositories. Draft and review are save-target agnostic, so an agent may stage a draft in its own repository and later promote it into a conventions package. A new `write-conventions` skill exposes the three routines as commands, and the superseded `draft-conventions` / `review-conventions` skills are deleted. Finally, `agent-reference-curator` and `agent-context-curator` are retired, leaving architect, planner, and the pair modes as the owners of this skill.

## Context

### Upstream Work

| Kind      | Path                                                                 | Role                                                                    |
| --------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Milestone | `$CONVENTIONS/_roadmap/3-now/milestone-conventions-one/milestone.md` | Phase 3 — Refine Distribution: author conventions and generate indexes. |
| Routines  | `$DOMAINS/conventions/routines/`                                     | Current routine set to be consolidated.                                 |
| Source    | `$CONVENTIONS/architecture/authoring.md`                             | Authoring rules this plan must not hard-code into the routines.         |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `render-template` — Renders plan and instruction artefacts. Required for Drafting Work Item, Planning Work Item.

### Domains

| Domain / Path                                       | Description                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Conventions `$DOMAINS/conventions/index.md` | Convention sources, drafts, and the routines that author them.                     |
| Domain: Plans `$DOMAINS/plans/index.md`             | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |
| Domain: Domains `$DOMAINS/domains/index.md`         | Domain resources and their indexes.                                                |

### Knowledge

::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes, and rules for the commit step. Relevant for Writing Commit Message.

## Scope

Adds and rewrites agent source code under `$WORKSPACE/.agents/` and its opencode and Codex configuration. No convention package sources change.

### (Scope) Routines: Conventions

**Record:** `$DOMAINS/conventions/routines/`

**Role:** — Changes required.

**Partial:**

- `write-conventions.art` — replace with `draft-conventions.art`.
- `write-conventions-drafts.art` — replace with `review-conventions.art`.

**Changes:**

— Add `draft-conventions.art`, `review-conventions.art`, and `create-or-update-conventions.art` in routine-canon form.

— Delete `write-conventions.art` and `write-conventions-drafts.art`.

**Dependencies:**

- None.

### (Scope) Skills: Write Conventions

**Record:** `$SKILLS/index.md`

**Role:** — Changes required.

**Partial:**

- `draft-conventions` — remove entry.
- `review-conventions` — remove entry.

**Changes:**

— Add `$SKILLS/write-conventions/SKILL.md` with three commands mapping to the three routines.

— Delete `$SKILLS/draft-conventions/` and `$SKILLS/review-conventions/`.

**Dependencies:**

- Routine canon form must be settled first.

### (Scope) Agents: Modes

**Record:** `$SKILLS/agent-modes.md`

**Role:** — Changes required.

**Partial:**

- `reference-curator` — remove entry.
- `context-curator` — remove entry.

**Changes:**

— Retire `agent-reference-curator` and `agent-context-curator`: delete their `SKILL.md` files, their `.codex/agents/*.toml` files, and their `opencode.json` entries.

**Dependencies:**

- Their last remaining skill allowances must be gone first.

## Execution Context

Run from `$WORKSPACE/`; all changes are agent source code in `$WORKSPACE/.agents/`, `$WORKSPACE/.codex/`, and `$WORKSPACE/opencode.json`.

## Work

### Next

Draft the three routines and the `write-conventions` skill.

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

**Instruction:** Manual review confirms no dangling references remain to the deleted routines, skills, or agent modes.

---

## Items:

| Iteration                             | Status  |
| ------------------------------------- | ------- |
| Iteration: Authoring Routines         | `READY` |
| Iteration: Write Conventions Skill    | `READY` |
| Iteration: Retire Curator Agent Modes | `READY` |

### Iteration: Authoring Routines

**Id:** `add-authoring-routines`

**Status:** `READY`

**Purpose:** Establish the three canon-form authoring routines and retire the duplicated rule lists.

**Description:** Replace `write-conventions.art` and `write-conventions-drafts.art` with `draft-conventions.art`, `review-conventions.art`, and `create-or-update-conventions.art`, each following the routine canon and taking the conventions format from an input rather than hard-coding it.

**Changes:**

- Add `$DOMAINS/conventions/routines/draft-conventions.art` — Routine: Draft Conventions.
- Add `$DOMAINS/conventions/routines/review-conventions.art` — Routine: Review Conventions.
- Add `$DOMAINS/conventions/routines/create-or-update-conventions.art` — Routine: Create Or Update Conventions.
- Delete `$DOMAINS/conventions/routines/write-conventions.art` and `write-conventions-drafts.art`.
- Update `$DOMAINS/conventions/index.md` to list the three new routines and drop the two removed ones.

**Routine Canon:**

Each routine MUST carry `**Purpose:**`, `**Inputs:**`, `**Outputs:**`, and `**Procedure:**` with numbered steps, following the shape of `$DOMAINS/conventions/routines/install-convention.art`. Routines MUST NOT contain `RULE:` bullets. Worked examples MAY be added later under a `**Examples:**` section.

**Shared Inputs:**

- `%authoring-guide` — Path or URL of the authoring guide that defines the conventions format. Default: `https://raw.githubusercontent.com/noodlestan/conventions/refs/heads/main/architecture/authoring.md`. The default is a raw endpoint because `$CONVENTIONS/architecture/authoring.md` is not present in consumer repositories.
- `%save-path` — Where the routine writes its artifact. Defaults to the base path of the source code of the package in context. Draft and review MUST NOT assume the conventions repository.

**Dependencies:**

- None.

#### Commits:

| ID                       | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ------------------------ | --------------------------------- | ------------ | ------- | ---------- |
| `add-authoring-routines` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `add-authoring-routines`

**Repository:** Workspace

**Message:**

```
feat(conventions): Add canon-form authoring routines

- Add draft, review, and create-or-update routines
- Take conventions format from the %authoring-guide input
- Remove the duplicated #wip write-conventions routines
```

### Iteration: Write Conventions Skill

**Id:** `add-write-conventions-skill`

**Status:** `READY`

**Purpose:** Expose the three authoring routines through one skill and absorb the superseded skills.

**Description:** Add `write-conventions` with commands for drafting, reviewing, and creating or updating conventions, register it in the four owning agent modes, and delete the now-redundant `draft-conventions` and `review-conventions` skills.

**Changes:**

- Add `$SKILLS/write-conventions/SKILL.md` with commands `Draft Conventions`, `Review Conventions`, and `Create Or Update Conventions`, each ::READ-ing and executing the matching routine.
- Set the skill's Allowed Agent Modes to `agent-architect`, `agent-planner`, `agent-pair-navigator`, and `agent-pair-driver`.
- Add `write-conventions` to the `## Allowed Skills` of `$SKILLS/agent-architect/SKILL.md`, `$SKILLS/agent-planner/SKILL.md`, `$SKILLS/agent-pair-navigator/SKILL.md`, and `$SKILLS/agent-pair-driver/SKILL.md`.
- In the two pair agent modes, replace the `review-conventions` allowance with `write-conventions`.
- Delete `$SKILLS/draft-conventions/` and `$SKILLS/review-conventions/`.
- Add `write-conventions` and remove the two absorbed skills from `$SKILLS/index.md`.

**Dependencies:**

- Iteration: Authoring Routines must be complete.

#### Commits:

| ID                            | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ----------------------------- | --------------------------------- | ------------ | ------- | ---------- |
| `add-write-conventions-skill` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `add-write-conventions-skill`

**Repository:** Workspace

**Message:**

```
feat(conventions): Add write-conventions skill

- Expose draft, review, and create-or-update as skill commands
- Register the skill in architect, planner, and pair agent modes
- Retire the draft-conventions and review-conventions skills
```

### Iteration: Retire Curator Agent Modes

**Id:** `retire-curator-agent-modes`

**Status:** `READY`

**Purpose:** Remove the two agent modes that no longer own a conventions skill.

**Description:** With `draft-conventions` and `review-conventions` absorbed, `agent-reference-curator` and `agent-context-curator` hold no unique skill. Retire both agent modes and purge every reference to them.

**Changes:**

- Delete `$SKILLS/agent-reference-curator/SKILL.md` and `$SKILLS/agent-context-curator/SKILL.md`.
- Delete `$WORKSPACE/.codex/agents/reference-curator.toml` and `$WORKSPACE/.codex/agents/context-curator.toml`.
- Remove the `reference-curator` and `context-curator` agent entries from `$WORKSPACE/opencode.json`.
- Remove the `## Reference Curator` and `## Context Curator` sections from `$SKILLS/agent-modes.md` and from the duplicate `$SKILLS/agents-modes.md`.
- Grep `$WORKSPACE` for `agent-reference-curator` and `agent-context-curator` and clear any remaining reference.

**Dependencies:**

- Iteration: Write Conventions Skill must be complete, so no skill still grants either mode.

#### Commits:

| ID                           | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ---------------------------- | --------------------------------- | ------------ | ------- | ---------- |
| `retire-curator-agent-modes` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `retire-curator-agent-modes`

**Repository:** Workspace

**Message:**

```
chore(agents): Retire curator agent modes

- Delete agent-reference-curator and agent-context-curator
- Remove their Codex and opencode definitions and index entries
- Clear remaining references across skills and configuration
```

---

## Coordination

### Not In Scope

- Conventions package sources under `$CONVENTIONS/packages/`.
- Routine wiring for `install-convention`, `audit-*`, and `discover-*`, which are tracked by `Plan: Conventions Routines and Skills`.
- Publishing or versioning conventions packages.

### Evidence

- `$DOMAINS/conventions/index.md` lists the three new routines and no longer lists `write-conventions*`.
- `$SKILLS/index.md` lists `write-conventions` and no longer lists `draft-conventions` or `review-conventions`.
- `grep -r "agent-reference-curator\|agent-context-curator" $WORKSPACE` returns no results.
- `opencode validate` succeeds after the agent mode removals.

### Findings

- `$SKILLS/agents-modes.md` is a near-duplicate of `$SKILLS/agent-modes.md` and lists the same agent modes. This plan clears both files but does not delete the duplicate.

### Decisions

- **Format is an input, not a routine** — the routines MUST NOT encode a conventions format. `%authoring-guide` supplies it, defaulting to the raw GitHub endpoint of `architecture/authoring.md`, following the precedent of `%manifest-url` in `discover-available-conventions.art`.
- **Draft and review are save-target agnostic** — `%save-path` defaults to the package in context, so an agent may stage work in its own repository and promote it into a conventions package later.
- **Routines follow the canon with no rules** — Purpose, Inputs, Outputs, numbered Procedure; `RULE:` bullets are removed from authoring guidance.
- **One skill owns authoring** — `write-conventions` replaces two overlapping skills so agents have a single entry point.
- **Curator agent modes are retired, not repurposed** — with their last skills gone they add no capability.

### Knowledge to Update

- None.

### Follow Ups

- Delete the duplicate `$SKILLS/agents-modes.md`, or fold it into `$SKILLS/agent-modes.md`.
- Add worked `**Examples:**` sections to the three authoring routines once they have been exercised.

### Feedback

- None.
