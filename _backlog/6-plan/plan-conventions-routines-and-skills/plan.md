# Plan: Conventions Routines and Skills

**ID:** `conventions-routines-and-skills`

**Status:** `PLANNING`

**Purpose:** Enhance convention audit routines with report-file capabilities and create planning routines that generate adoption plans from the Art MD pilot pattern.

**Description:** Add `%report-path` inputs to the existing audit routines so reports can be written to files (addressing the "no report-file command" feedback from the Art MD adoption), and create three planning routines that generate setup, audit, and apply plans for convention adoption.

## Summary

Builds on the Art MD convention adoption feedback to improve the audit-conventions skill and establish reusable planning routines for future adoptions.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                    |
| -------------- | ---------------------------------- | ------------------------------------------ |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                   |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains/`      | Where domain resources are defined         |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project  |
| `$ART_MD`      | `$WORKSPACE/checkouts/art-md`      | Pilot consumer project (adoption evidence) |

## Sibling Work

`Plan: Add Write Conventions Skill` (`_backlog/4-now/plan-add-write-conventions-skill/plan.md`) owns convention **authoring** in the same routine directory: the `draft-conventions`, `review-conventions`, and `create-or-update-conventions` routines and the `write-conventions` skill. This plan is scoped to **adoption** only — audit report paths and adoption planning routines.

## Scope

### Convention Packages

| Package    | Path                                | Status  |
| ---------- | ----------------------------------- | ------- |
| TypeScript | `$CONVENTIONS/packages/typescript/` | `ALPHA` |

## Work

### Iterations

#### Iteration: Add Report Paths to Audit Routines

**Goal:** Add `%report-path` inputs to the audit routines so reports can be written to files instead of only presented in chat.

**Status:** `PLANNING`

**Changes:**

- Add `%report-path` input to `$DOMAINS/conventions/routines/audit-conventions-setup.art` — when provided, write `%setup-report` to the given file path.
- Add `%report-path` input to `$DOMAINS/conventions/routines/audit-convention-module.art` — when provided, write `%adoption-report` to the given file path.
- Update the `audit-conventions` skill commands (Audit Conventions Setup, Audit Conventions Adoption) to accept `%report-path` and pass it through to the routines.

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

#### Iteration: Create Adoption Planning Routines

**Goal:** Create planning routines that generate setup, audit, and apply plans for convention adoption, following the Art MD pilot pattern.

**Status:** `PLANNING`

**Changes:**

- Create "Routine: Plan Conventions Setup" in `$DOMAINS/conventions/routines/` — generates a plan for installing convention packages and configuring guides.
- Create "Routine: Plan Conventions Audit" in `$DOMAINS/conventions/routines/` — generates a plan for auditing setup and per-package adoption.
- Create "Routine: Plan Conventions Adoption" in `$DOMAINS/conventions/routines/` — generates a plan for applying fixes and consolidating insights.
- Reference existing skills and skill commands (including `write-plan` skill).
- Reference existing adoption routines that are not covered by a skill command; authoring routines are out of scope and owned by `Plan: Add Write Conventions Skill`.
- Use the Art MD process insights as the primary input: `$ART_MD/_backlog/0-archive/2026-09-18-audit-conventions/adoption-process-insights.md`.
- Routines should generate plan structures with iterations similar to the ones used by the Art MD pilot.
- Routines should present plan structure (iterations and commits) to user before writing the plan files.

#### Commits:

| ID                                  | Repository / Checkout / Branch    | Policy       | Hash    | Status     |
| ----------------------------------- | --------------------------------- | ------------ | ------- | ---------- |
| `add-conventions-planning-routines` | Workspace / `$WORKSPACE` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |

##### Commit: `add-conventions-planning-routines`

**Repository:** Workspace

**Message:**

```
feat(conventions): Add conventions planning routines

- Add Routine: Plan Conventions Setup
- Add Routine: Plan Conventions Audit
- Add Routine: Plan Conventions Adoption
```

## Follow Ups

- Evaluate creating an `apply-conventions` skill (from adoption-process-insights section 5.2).
- Evaluate adding an `audit-all-packages` command (from adoption-process-insights section 5.3).
