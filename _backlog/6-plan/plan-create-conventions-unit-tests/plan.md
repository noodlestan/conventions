# Plan: Create Conventions: Unit Tests

**ID:** `create-conventions-unit-tests`

**Status:** `PLANNING`

**Purpose:** Formalise the Unit Tests conventions proposed by the Art MD adoption into `@noodlestan/conventions-typescript`.

**Description:** Integrate the unit tests conventions proposal from Art MD into the TypeScript conventions package, scoping them to unit test files and test helpers, and publish the updated package.

## Summary

Art MD produced a unit tests conventions proposal during its adoption. This plan formalises those conventions into the standard package format and publishes them.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                    |
| -------------- | ---------------------------------- | ------------------------------------------ |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                   |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project  |
| `$ART_MD`      | `$WORKSPACE/checkouts/art-md`      | Pilot consumer project (adoption evidence) |

## Scope

### Convention Packages

| Package    | Path                                | Status  |
| ---------- | ----------------------------------- | ------- |
| TypeScript | `$CONVENTIONS/packages/typescript/` | `ALPHA` |

## Work

### Iterations

#### Iteration: Create Conventions: Unit Tests

**Goal:** Formalise the Unit Tests conventions proposed by the Art MD adoption.

**Status:** `PLANNING`

**Changes:**

- Create `$CONVENTIONS/packages/typescript/art/src/unit-tests.md` from the proposal draft `$ART_MD/conventions/unit-tests/index.md`, following the standard convention format (`## Convention: {Name}`, `**Summary:**`, `**Avoid:**`, `**Prefer:**`), and add a `**Scope:**` and `**Reconciliation:**` block that scopes the conventions to `*.test.*` files and `test/**/*` helpers:
  - Terse conventions: Fixture Factory Naming, Function Mock Naming, Context Mock Naming, Test Description Prefixes, Helper Grouping, Cross-Package Mock Ownership, Import Style Preference.
  - Verbose conventions: Unit Tests / Block Spacing, Unit Tests / Helper Header Comments.
- Add `## Conventions: Typescript / Unit Tests` section to `$CONVENTIONS/packages/typescript/art/index.md` referencing `./src/unit-tests.md`, with the terse convention list.
- Bump the version, update the CHANGELOG, and stage `package-lock.json` for the next `@noodlestan/conventions-typescript` release.

#### Commits:

| ID                               | Repository / Checkout / Branch        | Policy   | Hash    | Status     |
| -------------------------------- | ------------------------------------- | -------- | ------- | ---------- |
| `add-unit-tests-conventions`     | Conventions / `$CONVENTIONS` / `main` | `NOPUSH` | `(TBD)` | `AUTHORED` |
| `publish-conventions-typescript` | Conventions / `$CONVENTIONS` / `main` | `MANUAL` | `(TBD)` | `AUTHORED` |

##### Commit: `add-unit-tests-conventions`

**Repository:** Conventions

**Message:**

```
build(typescript): Add unit tests conventions

- Add src/unit-tests.md with 9 conventions
- Index unit tests conventions in art/index.md
```

##### Commit: `publish-conventions-typescript`

**Repository:** Conventions

**Message:**

```
release(typescript): {version}

- Update CHANGELOG
- Bump version
- Update package-lock.json
```

## Follow Ups

- None.
