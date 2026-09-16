# Plan: Indexes and Grouped Details

**ID:** `indexes-and-grouped-details`

**Status:** `READY`

**Purpose:** Restructure all convention package indexes to use a consistent format with terse rule summaries in index files and expanded rules with Avoid/Prefer examples in per-group source files.

**Description:** Apply the established pattern (terse rule in index, expanded rule with examples in `src/{group}.md`) across all convention packages. Remove `RULE:` prefixes, normalize titles, and ensure consistency.

## Summary

Restructured convention indexes for TypeScript, JSX, SCSS, and SolidJS packages:
- Renamed `typescript.md` → `index.md` with `### {Group}` sections
- Extracted long rules into `src/{group}.md` files with `**Summary:**`, `**Avoid:**`, and `**Prefer:**` examples
- Applied `**{Terse Name}** – {Summary}` format to all index bullet points
- Normalized group titles to `Conventions: {Package} / {Group}`
- Removed extraneous `Standard-UI / Theming` section from SCSS (extracted to `src/standard-ui-theming.md` for later integration)
- Added new short rules where gaps were identified (Boolean naming, plural arrays, early returns, etc.)
- Ran `lint:fix` to ensure consistent formatting

## Scope

- **Repository:** `noodlestan/conventions`
- **Packages:** TypeScript, JSX, SCSS, SolidJS

## Work

### Execution Context

Execution occurs in `$CONVENTIONS/packages/{pkg}/art/` directories.

### Iterations

#### Iteration: TypeScript Conventions Restructure

**Goal:** Restructure TypeScript conventions into index + grouped source files.

**Status:** `DONE`

**Changes:**
- Renamed `typescript.md` → `index.md`
- Created `src/filesystem.md`, `src/strict-code.md`, `src/explicit-code.md`, `src/flat-code.md`, `src/literals.md`, `src/control-flow.md`
- Extracted 30 conventions with Avoid/Prefer examples
- Added new rules: Boolean naming, plural arrays, expand arrays, early returns, switch default

**Commits:**
- Part of `build(conventions): Add Indexes and separate modules per topic, all with examples.`

#### Iteration: JSX Conventions Restructure

**Goal:** Restructure JSX conventions into index + grouped source files.

**Status:** `DONE`

**Changes:**
- Renamed `jsx.md` → `index.md`
- Created `src/flat-code.md`, `src/solidjs-framework.md`, `src/events.md`, `src/icons.md`, `src/refs.md`, `src/forms.md`, `src/children.md`
- Mapped 7 original sections into 7 groups with 11 conventions

**Commits:**
- Part of `build(conventions): Add Indexes and separate modules per topic, all with examples.`

#### Iteration: SCSS Conventions Restructure

**Goal:** Restructure SCSS conventions into index + grouped source files.

**Status:** `DONE`

**Changes:**
- Renamed `scss.md` → `index.md`
- Created `src/filesystem.md`, `src/layers.md`, `src/naming.md`, `src/tokens.md`
- Extracted 16 conventions across 4 groups
- Removed `Standard-UI / Theming` section from index (preserved in `src/standard-ui-theming.md`)

**Commits:**
- Part of `build(conventions): Add Indexes and separate modules per topic, all with examples.`

#### Iteration: SolidJS Conventions Restructure

**Goal:** Restructure SolidJS conventions into index + grouped source files.

**Status:** `DONE`

**Changes:**
- Renamed `solid-js.md` → `index.md`
- Created `src/props.md`, `src/context-providers.md`
- Extracted 4 conventions across 2 groups

**Commits:**
- Part of `build(conventions): Add Indexes and separate modules per topic, all with examples.`

## Findings

- The original `jsx.md` used `RULE:` prefix and flat structure — inconsistent with newer TypeScript format
- The `Standard-UI / Theming` section in SCSS is cross-cutting and doesn't belong to SCSS conventions alone — needs its own package or integration point
- Some examples in source files contradicted other rules (e.g., arrow functions in filesystem examples while explicit-code requires function declarations)
- Prettier formatting caught inconsistencies in generated files (7 files fixed)

## Follow Ups

- **Integrate Standard UI Theming:** Decide where `Standard-UI / Theming` conventions belong — as a separate `@noodlestan/conventions-standard-ui` package or integrated into SCSS. The 3 rules (theme color mixin system, no direct HSLA, no hardcoded colors) are preserved in `packages/scss/art/src/standard-ui-theming.md`.
- **Verify Commits Conventions:** The `packages/commits/art/commits.art` file may need the same index + grouped sources treatment.
- **Cross-Reference Validation:** Add a script or CI check that verifies every short rule in an index has a matching long rule in the corresponding source file, and vice versa.
- **Expand SolidJS Conventions:** The SolidJS package is minimal (4 rules) — consider whether more SolidJS-specific conventions should be captured (reactivity patterns, signal naming, etc.).

## Decisions

- **Group naming:** Groups use `Conventions: {Package} / {Group}` in source files and `### {Group}` in index files
- **Rule format:** Index uses `- **{Terse Name}** – {Summary}` (max ~200 chars, code snippet when useful)
- **Source format:** Each convention has `## Convention: {Name}`, `**Summary:**`, `**Avoid:**`, `**Prefer:**` (or `**Forbidden:**` for absolute bans)
- **Removed content preserved:** The `Standard-UI / Theming` section was extracted to `src/standard-ui-theming.md` rather than deleted
