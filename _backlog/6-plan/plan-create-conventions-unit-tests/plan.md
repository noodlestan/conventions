# Plan: Create Conventions: Unit Tests

**ID:** `create-conventions-unit-tests`

**Status:** `PLANNING`

**Purpose:** Formalise the Unit Tests conventions proposed by the Art MD adoption into `@noodlestan/conventions-typescript`.

**Description:** Integrate the unit tests conventions proposal from Art MD into the TypeScript conventions package, resolve the scope/override question, and publish the updated package.

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

- Create `$CONVENTIONS/packages/typescript/art/src/unit-tests.md` from the proposal draft `$ART_MD/conventions/unit-tests/index.md`, following the standard convention format (`## Convention: {Name}`, `**Summary:**`, `**Avoid:**`, `**Prefer:**`):
  - Terse conventions: Fixture Factory Naming, Function Mock Naming, Context Mock Naming, Test Description Prefixes, Helper Grouping, Cross-Package Mock Ownership, Import Style Preference.
  - Verbose conventions: Unit Tests / Block Spacing, Unit Tests / Helper Header Comments.
- Add `## Conventions: Typescript / Unit Tests` section to `$CONVENTIONS/packages/typescript/art/index.md` referencing `./src/unit-tests.md`, with the terse convention list.
- Resolve the parking lot question from `$ART_MD/_backlog/_parking-lot.md`: decide how the `typescript` conventions express that other conventions (e.g. "unit tests", "script files") can override some settings, and how the scope of application is defined in "unit tests". Record the decision in the conventions milestone.
- Publish the updated package as the next `@noodlestan/conventions-typescript` release.

#### Commits:

| ID                               | Repository / Checkout / Branch        | Policy       | Hash    | Status     |
| -------------------------------- | ------------------------------------- | ------------ | ------- | ---------- |
| `add-unit-tests-conventions`     | Conventions / `$CONVENTIONS` / `main` | `AUTONOMOUS` | `(TBD)` | `AUTHORED` |
| `publish-conventions-typescript` | Conventions / `$CONVENTIONS` / `main` | `MANUAL`     | `(TBD)` | `AUTHORED` |

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
```

## Follow Ups

- None.
