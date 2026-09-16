# Plan: Bootstrap Conventions in Workflows

**ID:** `bootstrap-conventions-in-workflows`

**Status:** `PLANNING`

**Purpose:** Integrate conventions into planning, delegating, and executing workflows so that all agents automatically read and apply convention rules when working on tasks.

**Description:** Add conventions as explicit examples in planning workflow structures, skills/routines related to writing instructions, and create the `audit-conventions` skill. Conventions are knowledge and will surface as mandatory reading in instructions files.

## Summary

Make conventions part of the standard workflow so agents automatically consume them. No structural changes needed to workflow files — conventions appear as mandatory reading in instruction files.

## Scope

### Convention Packages

| Package    | Path                                | Status  |
| ---------- | ----------------------------------- | ------- |
| TypeScript | `$CONVENTIONS/packages/typescript/` | `ALPHA` |
| JSX        | `$CONVENTIONS/packages/jsx/`        | `ALPHA` |
| SCSS       | `$CONVENTIONS/packages/scss/`       | `ALPHA` |
| SolidJS    | `$CONVENTIONS/packages/solidjs/`    | `DRAFT` |

## Work

### Iterations

#### Iteration: Add Conventions to Planning Structures

**Goal:** Add conventions as explicit examples in planning workflow structures.

**Status:** `PLANNING`

**Changes:**

- Update `$DOMAINS/work/structures/work-item.art` to include convention references
- Add convention examples to `$DOMAINS/plans/structures/plan.art`
- Document how conventions surface as mandatory reading in instructions

#### Iteration: Update Skills and Routines

**Goal:** Update skills and routines related to writing instructions to reference conventions.

**Status:** `PLANNING`

**Changes:**

- Update `write-plan` skill to reference conventions
- Update `write-instructions` routine to include convention references
- Add convention reading to agent boot sequence

#### Iteration: Create audit-conventions Skill

**Goal:** Create a skill to audit convention adoption across projects.

**Status:** `PLANNING`

**Changes:**

- Create `audit-conventions` skill
- Add checks for: convention packages installed, `_guide.md` configured, conventions being read
- Add reporting on adoption status

#### Iteration: Document Workflow Integration

**Goal:** Document how conventions integrate into workflows.

**Status:** `PLANNING`

**Changes:**

- Document convention reading in agent instructions
- Document how to add conventions to a project's workflow
- Document the `audit-conventions` skill usage

## Follow Ups

- Feed learnings to Phase 2 — Grow
- Create `adopt-conventions` skill (install and configure)
- Create `write-convention-draft` skill
