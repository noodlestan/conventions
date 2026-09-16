# Milestone: Conventions One

**ID:** `conventions-one`

**Status:** `WORKING`

**Template:** `$DOMAINS/roadmaps/templates/milestone.tart`

**Skill:** `write-milestone`

**Purpose:** Cover Noodlestan's main stacks with single source of truth conventions.

**Description:** Establish convention packages for all core technology stacks used across Noodlestan projects, providing indexed rules with expanded examples for each stack.

## Mandatory Reading

::READ `$DOMAINS/roadmaps/structures/milestone.art` (Structure) — Defines the milestone structure and nested types.

---

## Path Variables

| Variable       | Resolved Path                 | Purpose                                |
| -------------- | ----------------------------- | -------------------------------------- |
| `$WORKSPACE`   | Current working directory     | Workspace root directory               |
| `$CONVENTIONS` | `checkouts/conventions/`      | Conventions repository checkout        |

## Summary

Cover Noodlestan's main stacks with single source of truth conventions: TypeScript, JSX, SolidJS, SCSS, and future packages for Tests, HTML, Configuration, Markdown, and Art.

---

## Scope

### Consumer Projects

| Project | Record | Status |
| ------- | ------ | ------ |
| Art Work | `$WORKSPACE/_records/repositories/art-work.art` | - |
| Purrception | `$WORKSPACE/_records/repositories/purrception.art` | - |
| Workspace Tooling | `$WORKSPACE/_records/repositories/workspace-tooling.art` | - |
| Art Lib | `$WORKSPACE/_records/repositories/art-lib.art` | - |
| Art JS | `$WORKSPACE/_records/repositories/art-js.art` | - |
| No Comply | `$WORKSPACE/_records/repositories/no-comply.art` | - |
| Artificials | `$WORKSPACE/_records/repositories/artificials.art` | - |
| Noodlestan Web | `$WORKSPACE/_records/repositories/noodlestan-web.art` | - |
| Purrtrait | `$WORKSPACE/_records/repositories/purrtrait.art` | - |
| Purrfect | `$WORKSPACE/_records/repositories/purrfect.art` | - |
| Artisans | `$WORKSPACE/_records/repositories/artisans.art` | - |
| Purrpose | `$WORKSPACE/_records/repositories/purrpose.art` | - |
| Art Domains | `$WORKSPACE/_records/repositories/art-domains.art` | - |

### Convention Packages

| Package | Path | Status |
| ------- | ---- | ------ |
| TypeScript | `$CONVENTIONS/packages/typescript/` | ALPHA |
| JSX | `$CONVENTIONS/packages/jsx/` | ALPHA |
| SCSS | `$CONVENTIONS/packages/scss/` | ALPHA |
| SolidJS | `$CONVENTIONS/packages/solidjs/` | DRAFT |
| Commits | `$CONVENTIONS/packages/commits/` | DRAFT |
| Tests | `$CONVENTIONS/packages/tests/` | PLANNED |
| Unit Tests | `$CONVENTIONS/packages/unit-tests/` | PLANNED |
| Integration Tests | `$CONVENTIONS/packages/integration-tests/` | PLANNED |
| HTML | `$CONVENTIONS/packages/html/` | PLANNED |
| Configuration | `$CONVENTIONS/packages/configuration/` | PLANNED |
| Markdown | `$CONVENTIONS/packages/markdown/` | PLANNED |
| Art | `$CONVENTIONS/packages/art/` | PLANNED |

---

## Context

### Upstream Work

| Kind        | Path                                                                 | Role                                                            |
| ----------- | -------------------------------------------------------------------- | --------------------------------------------------------------- |
| Parking Lot | `$CONVENTIONS/_backlog/_parking-lot.md`                              | Tracks short-term actionables, pending questions, and blockers. |
| Source      | `$CONVENTIONS/architecture/records/adr/taxonomy.art`                 | ADR: Package mapping by convention concern.                     |
| Source      | `$CONVENTIONS/architecture/records/adr/packaging.art`                | ADR: Extension chain and package composition.                   |

### Required Skills

- `write-plan` — Writes execution plans and implementation instructions. Required for Planning Work Item.
- `write-milestone` — Writes milestones from roadmaps and backlogs. Required for Planning Work Item.

### Domains

| Domain / Path                                 | Description                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`       | Planning lifecycle for contextualising, drafting, planning, and integrating plans. |
| Domain: Roadmaps `$DOMAINS/roadmaps/index.md` | Roadmaps and milestones coordination.                                              |

### Knowledge

::READ `$CONVENTIONS/architecture/index.md` (Briefing) — Architecture principles and NFRs. Relevant for Planning Work Item.

---

## Phases

| Index | Name      | Status    |
| ----- | --------- | --------- |
| 0     | Baseline  | `WORKING` |
| 1     | Grow      | -         |
| 3     | Distribute | -        |

### Phase: 0 — Baseline

**Goal:** Establish foundational convention packages for core stacks.

**Description:** Create indexed convention files with per-group source files containing Avoid/Prefer examples for TypeScript, JSX, SCSS, and SolidJS. Publish initial packages.

**Status:** `WORKING`

**Dependencies:**

- None.

### Phase: 1 — Grow

**Goal:** Expand coverage to additional stacks and mature existing packages.

**Description:** Add convention packages for Tests, HTML, Configuration, Markdown, and Art. Move SolidJS and Commits from DRAFT to ALPHA.

**Status:** -

**Dependencies:**

- Phase 0 — Baseline must be complete.

### Phase: 3 — Distribute

**Goal:** Make conventions consumable across all Noodlestan projects.

**Description:** Validate consumption model, integrate with CI, and ensure all consumer projects can install and use convention packages.

**Status:** -

**Dependencies:**

- Phase 1 — Grow must be complete.

---

## Items

| Phase | Resource / Record                                                                                                      | Status |
| ----- | ---------------------------------------------------------------------------------------------------------------------- | ------ |
| 0     | Plan: Prepare Conventions for Distribution `_backlog/1-done/plan-prepare-for-distribution/plan.md`                     | `DONE` |
| 0     | Plan: Indexes and Grouped Details `_backlog/1-done/plan-indexes-and-grouped-details/plan.md`                           | `DONE` |
| 0     | Package: TypeScript Conventions `$CONVENTIONS/packages/typescript/art/index.md`                                        | `DONE` |
| 0     | Package: JSX Conventions `$CONVENTIONS/packages/jsx/art/index.md`                                                      | `DONE` |
| 0     | Package: SCSS Conventions `$CONVENTIONS/packages/scss/art/index.md`                                                  | `DONE` |
| 0     | Package: SolidJS Conventions `$CONVENTIONS/packages/solidjs/art/index.md`                                            | `DONE` |

---

## Work

### Next

- Integrate Standard UI Theming conventions (currently in `$CONVENTIONS/packages/scss/art/src/standard-ui-theming.md`).
- Apply index + grouped sources pattern to Commits conventions.

### Blockers

- None.

---

## Coordination

### Not In Scope

- None.

### Evidence

- Convention packages published to npm at 0.0.1.

### Findings

- The `Standard-UI / Theming` section is cross-cutting and doesn't belong to SCSS conventions alone.

### Decisions

- **Group naming:** Groups use `Conventions: {Package} / {Group}` in source files and `### {Group}` in index files.
- **Rule format:** Index uses `- **{Terse Name}** – {Summary}` (max ~200 chars, code snippet when useful).
- **Source format:** Each convention has `## Convention: {Name}`, `**Summary:**`, `**Avoid:**`, `**Prefer:**` (or `**Forbidden:**` for absolute bans).

### Knowledge to Update

- None.

### Follow Ups

- Create `@noodlestan/conventions-standard-ui` package or integrate theming into existing packages.
- Expand SolidJS conventions beyond the current 4 rules.
- Add cross-reference validation script.

### Feedback

- None.
