# Plan: Integrate Conventions in Workflows

**ID:** `integrate-conventions-in-workflows`

**Status:** `WORKING`

**Purpose:** Integrate conventions into planning, delegating, and executing workflows so that all agents automatically read and apply convention rules when working on tasks.

**Description:** Add conventions as explicit examples in planning workflow structures, skills/routines related to writing instructions, and create the `audit-conventions` skill. Conventions are knowledge and will surface as mandatory reading in instructions files.

## Path Variables

| Variable     | Resolved Path                | Purpose                                                                                      |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------- |
| `$WORKSPACE` | Current working directory    | Workspace root directory; where commits for this plan are executed (`.agents/` resides here) |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | Art-managed knowledge domains, workflows, routines, and related resources                    |

## Summary

Make conventions part of the standard workflow so agents automatically consume them. No structural changes needed to workflow files — conventions appear as mandatory reading in instruction files.

## Work

### Iterations

#### Iteration: Add Conventions to Planning Structures

**Goal:** Add conventions as explicit examples in planning workflow structures.

**Status:** `READY`

**Changes:**

- Update `$DOMAINS/work/structures/work-item-abstract.art` to include convention references
- Add convention examples to `$DOMAINS/work/templates/work-item-context.tart`, knowledge section `### Knowledge`, after to the existing "::READ guide" example.
- Add `Examples: "Conventions: Typescript", "Architecure: Art Js"` at the end of ` For each knowledge resource, create an item of Type: Knowledge Context and add it to %knowledge.` in `$DOMAINS/work/routines/compose-work-context.art`.
- Add convention examples to `$DOMAINS/plans/structures/plan.art`
- Add convention examples to `$DOMAINS/work/types/knowledge-context.art`
- Exand the directive "::TEMPLATE Include only references relevant to all the steps." in `$DOMAINS/plans/templates/instructions.tart` to `::TEMPLATE Include kwnowledge rsources that apply to the steps in this iteration. Examples: "Conventions, architecture, patterns, guides.".` and add another example: "TEMPLATE EXAMPLE: — Conventions: Typescript – `$PROJECT/node_modules/@noodlestan-conventions-typescript/art/index.md`"

**Commits:**

| ID                                       | Repository / Checkout / Branch    | Policy       | Hash  | Status     |
| ---------------------------------------- | --------------------------------- | ------------ | ----- | ---------- |
| `add-conventions-to-planning-structures` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | (TBD) | `AUTHORED` |

##### Commit: `add-conventions-to-planning-structures`

**Repository:** Workspace

**Message:**

```
build(conventions): Add convention references to planning structures.

- Add convention references to `work-item-abstract.art` structure
- Add convention examples to `work-item-context.tart` knowledge section
- Add convention examples to `compose-work-context.art` routine
- Add convention examples to `plan.art` structure and `knowledge-context.art` type
- Expand `instructions.tart` directive with convention examples
```

#### Iteration: Update Skills and Routines

**Goal:** Update skills and routines related to writing instructions to reference conventions.

**Status:** `READY`

**Changes:**

- Update `write-plan` skill to reference conventions in `%maybe-knowledge` input examples
- Update `write-instructions` routine to verify convention references in rendered instructions

**Commits:**

| ID                           | Repository / Checkout / Branch    | Policy       | Hash  | Status     |
| ---------------------------- | --------------------------------- | ------------ | ----- | ---------- |
| `update-skills-and-routines` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | (TBD) | `AUTHORED` |

##### Commit: `update-skills-and-routines`

**Repository:** Workspace

**Message:**

```
build(conventions): Reference conventions in skills and routines.

- Update `write-plan` skill to reference conventions
- Update `write-instructions` routine to include convention references
```

#### Iteration: Create audit-conventions Skill

**Goal:** Create convention audit routines and a skill to audit convention adoption across projects.

**Status:** `READY`

**Changes:**

- Add "Routine: Discover Conventions" and include conventions in `read-work-guides.art` sections
- Add "Routine: Audit Convention Module Adoption"
- Add "Routine: Audit Conventions Setup"
- Create `audit-conventions` skill using the routines

**Commits:**

| ID                               | Repository / Checkout / Branch    | Policy       | Hash  | Status     |
| -------------------------------- | --------------------------------- | ------------ | ----- | ---------- |
| `add-convention-audit-routines`  | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | (TBD) | `AUTHORED` |
| `create-audit-conventions-skill` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | (TBD) | `AUTHORED` |

##### Commit: `add-convention-audit-routines`

**Repository:** Workspace

**Message:**

```
conventions(workspace): Add convention audit routines.

- Add Routine: Discover Conventions
- Add Routine: Audit Convention Module Adoption
- Add Routine: Audit Conventions Setup
- Include conventions in `read-work-guides.art` sections
```

##### Commit: `create-audit-conventions-skill`

**Repository:** Workspace

**Message:**

```
conventions(workspace): Create `audit-conventions` skill.

- Create `audit-conventions` skill
- Add Command: Audit Conventions
- Add Command: Audit Conventions Setup
```

## Follow Ups

- Feed learnings to Phase 2 — Grow
- Create `adopt-conventions` skill (install and configure)
- Create `write-convention-draft` skill
