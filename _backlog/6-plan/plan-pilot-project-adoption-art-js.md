# Plan: Pilot Project Adoption (Art JS)

**ID:** `pilot-project-adoption-art-js`

**Status:** `PLANNING`

**Purpose:** Integrate convention packages into Art JS as the first consumer project, validating the consumption model and establishing the adoption pattern for other projects.

**Description:** Add `@noodlestan/conventions-typescript` (and optionally `@noodlestan/conventions-jsx`, `@noodlestan/conventions-solidjs`) as dependencies in Art JS, configure `_guide.md` to read from installed conventions, and document the process for other projects to follow.

## Summary

First consumer project to adopt Noodlestan conventions via npm packages. Establishes the pattern for how projects read and apply convention rules during planning and execution.

## Scope

### Consumer Projects

| Project | Record                                        | Status     |
| ------- | --------------------------------------------- | ---------- |
| Art JS  | `$WORKSPACE/_records/repositories/art-js.art` | `ADOPTING` |

### Convention Packages

| Package    | Path                                | Status  |
| ---------- | ----------------------------------- | ------- |
| TypeScript | `$CONVENTIONS/packages/typescript/` | `ALPHA` |
| JSX        | `$CONVENTIONS/packages/jsx/`        | `ALPHA` |

## Work

### Iterations

#### Iteration: Add Convention Dependencies

**Goal:** Install convention packages as npm dependencies in Art JS.

**Status:** `PLANNING`

**Changes:**

- Add `@noodlestan/conventions-typescript` to Art JS `package.json`
- Optionally add `@noodlestan/conventions-jsx` if Art JS uses JSX
- Run `npm install` to verify installation

#### Iteration: Configure \_guide.md

**Goal:** Set up Art JS `_guide.md` to read from installed conventions.

**Status:** `PLANNING`

**Changes:**

- Add Mandatory Reading section to `_guide.md` referencing installed convention packages
- Add conventions section explaining: "This project follows Noodlestan conventions. Read convention indexes and apply the rules as stated in the index. Follow links to extended conventions. Read convention examples in case of ambiguity or conflict."

#### Iteration: Document Adoption Process

**Goal:** Create documentation for other projects to follow.

**Status:** `PLANNING`

**Changes:**

- Document step-by-step process for adding conventions to a project
- Document how to read and apply convention rules
- Document how to handle conflicts or ambiguities

## Follow Ups

- Feed learnings to Phase 2 — Grow
- Create `@noodlestan/conventions-standard-ui` if needed for Art JS
- Expand SolidJS conventions if Art JS needs them
