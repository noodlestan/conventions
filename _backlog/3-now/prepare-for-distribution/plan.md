# Plan: Prepare Conventions for Distribution

**ID:** `prepare-for-distribution`

**Status:** `PLANNING`

**Template:** `$WORKSPACE/.agents/domains/plans/templates/plan.tart`

**Skill:** `write-plan`

**Purpose:** Prepare the conventions packages for npm publication and consumption.

**Description:** Validate the migration, scaffold publishable package records, create npm deployment records, and smoke-publish the initial 0.0.1 versions.

## Mandatory Reading

::READ `$DOMAINS/plans/structures/plan.art` (Structure) — Defines the plan structure and nested types.

## Path Variables

| Variable       | Resolved Path                 | Purpose                                                             |
| -------------- | ----------------------------- | ------------------------------------------------------------------- |
| `$WORKSPACE`   | Current working directory     | Workspace root directory                                            |
| `$CONVENTIONS` | `checkouts/conventions/`      | Conventions repository checkout                                     |
| `$MANAGEMENT`  | `checkouts/management/`       | Management repository checkout                                      |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains/` | Where domain resources are defined                                  |
| `$CONSUMER`    | `checkouts/purrtrait`         | Where installation of published convention packages is smoke-tested |

## Summary

Prepare the conventions packages for npm publication and consumption by validating the migration, scaffolding publishable package records, creating npm deployment records, and smoke-publishing the initial 0.0.1 versions.

This plan addresses the follow-ups from Plan: Noodlestan References Package (DONE) and supports Milestone: Hello World by making conventions available as consumable npm packages.

## Attachments

None.

## Domains

| Domain / Path                                       | Description                                                                        |
| --------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Domain: Plans `$DOMAINS/plans/index.md`             | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |
| Domain: Engineering `$DOMAINS/engineering/index.md` | Engineering lifecycle for setting up, verifying, and committing work.              |
| Domain: Packages `$DOMAINS/packages/index.md`       | Package structures, deployment records, and publication workflows.                 |

### Work Scope Types

| Work Scope Type / Path                                                    | Resource Kind / Path                                                    |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Type: Repository Scope `$DOMAINS/repositories/types/repository-scope.art` | Structure: Repository `$DOMAINS/repositories/structures/repository.art` |
| Type: Package Scope `$DOMAINS/packages/types/package-scope.art`           | Structure: Package `$DOMAINS/packages/structures/package.art`           |

### Workflows

| Workflow / Path                                            | Description                                                                        |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Workflow: Planning `$DOMAINS/plans/workflows/planning.art` | Planning lifecycle for contextualising, drafting, refining, and integrating plans. |

### Workflow Stages

| Name            | Workflow           | Description                            |
| --------------- | ------------------ | -------------------------------------- |
| Contextualizing | Workflow: Planning | Gather scope and context for planning. |
| Drafting        | Workflow: Planning | Produce the initial plan draft.        |
| Refining        | Workflow: Planning | Resolve gaps and improve the sequence. |

## Context

### Upstream Work

| Kind                  | Path                                                                | Role                                                           |
| --------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| Plan (DONE)           | `$CONVENTIONS/_backlog/1-done/plan-noodlestan-refs-package/plan.md` | Follow-ups: package manager, consumption model, CI, docs site. |
| Milestone             | `$MANAGEMENT/_roadmap/3-now/milestone-hello-world/milestone.md`     | Coordinates hello world releases across projects.              |
| Architecture Briefing | `$CONVENTIONS/_backlog/_architect.md`                               | Principles, constraints, NFRs for conventions repo.            |
| WIP                   | `$CONVENTIONS/_wip.md`                                              | Tracks migration validation and record update actionables.     |

### Required Skills

- `write-plan` — Gathers scope, context, paths, setup, and verification. Required for Contextualizing, Drafting, Refining.
- `render-template` — Renders plan and instruction artefacts. Required at all stages.

## Knowledge Context

::READ `$CONVENTIONS/architecture/records/adr/taxonomy.art` (ADR) — Package mapping by convention concern. Relevant for stages Drafting, Refining.

::READ `$CONVENTIONS/architecture/records/adr/packaging.art` (ADR) — Extension chain and package composition. Relevant for stages Drafting, Refining.

::READ `$CONVENTIONS/architecture/records/adr/records.art` (ADR) — Records as repository metadata source of truth. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/packages/structures/package.art` (Structure) — Package record shape and fields. Relevant for stages Drafting, Refining.

::READ `$DOMAINS/packages/structures/npm-package-deployment.art` (Structure) — NPM deployment record shape. Relevant for stages Drafting, Refining.

::READ `$CONVENTIONS/../no-comply/libs/solid-accessibility/_records/package.art` (Example) — Reference package record pattern. Relevant for stages Drafting, Refining.

::READ `$CONVENTIONS/../no-comply/libs/solid-accessibility/_records/npm-deployment.art` (Example) — Reference deployment record pattern. Relevant for stages Drafting, Refining.

## Scope

The plan coordinates changes in 1 repository (Conventions) with 5 packages:

- **Repository:** `noodlestan/conventions` at `$CONVENTIONS`
- **Packages:** 5 convention packages under `packages/` — TypeScript, JSX, SolidJS, SCSS, and Commits

### Repository Scope: Conventions

**Resource:** Repository: Conventions

**Path:** `$CONVENTIONS`

**Dependencies:**

- Migration validation from Plan: Noodlestan References Package (DONE) needs integration.
- Workspace records need updating to reflect moved context.

### Packages

#### Package Scope: TypeScript Conventions

**Resource:** Package: TypeScript Conventions

**Path:** `$CONVENTIONS/packages/typescript/`

**Canonical Name:** `@noodlestan/refs-conventions-typescript`

**Dependencies:**

- No Work Dependencies.

#### Package Scope: JSX Conventions

**Resource:** Package: JSX Conventions

**Path:** `$CONVENTIONS/packages/jsx/`

**Canonical Name:** `@noodlestan/refs-conventions-jsx`

**Dependencies:**

- No Work Dependencies.

**Notes:**

- Conventions on this package extend conventions from `@noodlestan/refs-conventions-typescript` so it should be set as dirct dependency in package.json.

#### Package Scope: SolidJS Conventions

**Resource:** Package: SolidJS Conventions

**Path:** `$CONVENTIONS/packages/solidjs/`

**Canonical Name:** `@noodlestan/refs-conventions-solidjs`

**Dependencies:**

- No Work Dependencies.

**Notes:**

- Conventions on this package extend conventions from `@noodlestan/refs-conventions-jsx` so it should be set as dirct dependency in package.json.

#### Package Scope: SCSS Conventions

**Resource:** Package: SCSS Conventions

**Path:** `$CONVENTIONS/packages/scss/`

**Canonical Name:** `@noodlestan/refs-conventions-scss`

**Dependencies:**

- No Work Dependencies.

#### Package Scope: Commits Conventions

**Resource:** Package: Commits Conventions

**Path:** `$CONVENTIONS/packages/commits/`

**Canonical Name:** `@noodlestan/refs-conventions-commits`

**Dependencies:**

- No Work Dependencies.

#### Repository Scope: Purrtrait

**Resource:** Repository: Purrtrait

**Path:** `$CONSUMER`

**Record:** `$CONSUMER/_records/repository.art`

**Owner:** Project: Purrtrait

**Role:** Integration test consumer for smoke testing the published conventions packages.

**Changes:**

- Installation and upgrades are commited to this repository.

**Dependencies:**

- No Work Dependencies.

#### Repository Scope: Conventions

**Resource:** Repository: Conventions

**Path:** `$CONVENTIONS`

**Record:** `$CONVENTIONS/_records/repository.art`

**Owner:** Project: Conventions

**Role:** Repository for the 5 conventions packages being prepared for distribution.

**Dependencies:**

- No Work Dependencies.

## Work

### Execution Context

Execution occurs from `$WORKSPACE/`; package work is performed in `$CONVENTIONS/packages/`. The conventions repository uses npm workspaces with the root `package.json` declaring `workspaces: ["packages/*"]`.

### Iterations

#### Iteration: Integrate Migration Validation

**Goal:** Validate the relocated context layout and all repository-local links.

**Description:** Execute the WIP actionable items: validate links, update workspace records, perform zero-reference check, and clean up old `reference/` tree.

**Status:** `PLANNING`

**Changes:**

- Validate all repository-local links in `packages/` and `refs/`.
- Update workspace records (`$WORKSPACE/_records/repositories/conventions.art`) to reflect moved context.
- Perform zero-reference check before removing remaining workspace `reference/` tree.
- Describe architecture in `$CONVENTIONS/architecture/index.md`.
- Integrate `$CONVENTIONS/_backlog/_architect.md` into `$CONVENTIONS/architecture/index.md` create `principles.md` `NFRs.md` and populate index.md with rationale and links to those files.

##### Commit: `validate-links-and-records`

**Repository:** Repository Scope: Conventions `$CONVENTIONS`

**Message:**

```
validate(conventions): validate links, update records, document architecture
- Validate all repository-local links in `packages/` and `refs/`.
- Update workspace records to reflect moved context.
- Describe architecture in `architecture/index.md`.
```

**Status:** `PLANNED`

**Policy:** `AUTONOMOUS`

**Hash:** `TBD`

##### Commit: `cleanup-reference-tree`

**Repository:** Repository Scope: Workspace `$WORKSPACE`

**Message:**

```
cleanup(workspace): cleanup reference tree after zero-reference check
- Perform zero-reference check before removing remaining workspace `reference/` tree.
- Remove old workspace `reference/` tree.
```

**Status:** `PLANNED`

**Policy:** `AUTONOMOUS`

**Hash:** `TBD`

##### Commit: `integrate-architecture-notes`

**Repository:** Repository Scope: Conventions `$CONVENTIONS`

**Message:**

```
docs(conventions): integrate architecture documentation
- Integrate `_backlog/_architect.md` into `architecture/index.md`.
- Create `principles.md` and `NFRs.md`.
- Populate index.md with rationale and links.
```

**Status:** `PLANNED`

**Policy:** `AUTONOMOUS`

**Hash:** `TBD`

**Dependencies:**

- None.

---

#### Iteration: Scaffold Package Records

**Goal:** Create publishable package records and npm deployment records for all 5 packages.

**Description:** Create `package.json` and `npm-deployment.art` files in each package's `_records/` directory. Update the project record with new package resources. Canonical names follow `@noodlestan/refs-conventions-{typescript,jsx,solidjs,scss,commits}`.

**Status:** `PLANNING`

**Changes:**

- Create `$CONVENTIONS/packages/{pkg}/_records/package.json` for each of the 5 packages.
- Create `$CONVENTIONS/packages/{pkg}/_records/npm-deployment.art` for each of the 5 packages.
- Update `$CONVENTIONS/_records/project.art` with new package resources.
- Update `$CONVENTIONS/refs/_records/namespace.art` owner from `Project: Artificial` to `Project: Conventions`.

##### Commit: `scaffold-package-and-deployment-records`

**Repository:** Repository Scope: Conventions `$CONVENTIONS`

**Message:**

```
docs(conventions): scaffold package and deployment records
- Create `package.json` and `npm-deployment.art` for each of the 5 packages.
- Update project record with new package resources.
- Update namespace record owner from `Project: Artificial` to `Project: Conventions`.
```

**Status:** `PLANNED`

**Policy:** `AUTONOMOUS`

**Hash:** `TBD`

**Dependencies:**

- Iteration: Integrate Migration Validation (records must be up to date).

---

#### Iteration: Scaffold Publishable Packages

**Goal:** Make each package publishable with proper `package.json` fields and convention files in `art/` directories.

**Description:** Enhance the `conventions-lib` scaffolder and scaffold each package to be publishable. Convention files move into `art/` directories (analogous to `src/`), and `package.json` includes `files: ["art/", "LICENSE-MIT", "README.md"]`.

**Status:** `PLANNING`

**Changes:**

- Update `$CONVENTIONS/_records/scaffolders/conventions-lib/` to produce publishable packages.
- Enhance `package.json.tart` template with `version`, `publishConfig`, `repository`, `files`, `type`, `sideEffects`, `main`, `scripts` (lint, lint:fix, ci).
- Add `LICENSE-MIT` to each package.
- Move convention `.md` files into `art/` directories under each package.
- Ensure each package has a `README.md`.

##### Commit: `scaffold-publishable-packages`

**Repository:** Repository Scope: Conventions `$CONVENTIONS`

**Message:**

```
feat(conventions): scaffold publishable packages with art directories
- Update `conventions-lib` scaffolder for publishable packages.
- Enhance `package.json.tart` template with publishConfig, repository, files, scripts.
- Add `LICENSE-MIT` to each package.
- Move convention `.md` files into `art/` directories.
- Ensure each package has a `README.md`.
```

**Status:** `PLANNED`

**Policy:** `AUTONOMOUS`

**Hash:** `TBD`

**Dependencies:**

- Iteration: Scaffold Package Records (records must exist first).

---

#### Iteration: Smoke Publish 0.0.1

**Goal:** Publish initial 0.0.1 versions of all 5 packages to npm.

**Description:** Publish the 5 convention packages as `0.0.1` to npm with public access. Initialise changelogs.

**Status:** `PLANNING`

**Changes:**

- Run `npm publish` for each of the 5 packages from `$CONVENTIONS/packages/{pkg}/`.
- Initialise `CHANGELOG.md` for each package.
- Verify publication on npm registry.

**Commits:**

- `smoke-publish-0-0-1` — Publish all 5 packages at 0.0.1; add changelogs.

**Dependencies:**

- Iteration: Scaffold Publishable Packages (packages must be publishable).
- npm authentication must be configured.

---

#### Iteration: POC Consumption

**Goal:** Validate that a Noodlestan project can consume the published conventions packages.

**Description:** TBD — demonstrate consumption from a Noodlestan project (likely `no-comply` or `artificial`) using npm dependency or git URL.

**Status:** `DRAFT`

**Changes:**

- post-install script MVP is needed to copy convention files into the `$CONSUMER` project manifested destination for the packages being installed..
- publish new version of one base package (no dependencies)
- install packages in `$CONSUMER` project.
- publish new version of one package with dependencies
- upgrade packages in `$CONSUMER` prject.

**Commits:**

- TBD.

**Dependencies:**

- Iteration: Smoke Publish 0.0.1 (packages must be published).
- ADR: Art Packages in `$ARTIFICIALS/architecture/records/adr/` must be captured and at least proposal (it's npm, but requires a manifest of dependencies and where to copy them not) before instructions for the post-install script can be refined.
- ADR: Art Dependencies

---

#### Iteration: Integrate Changes from ADRs

**Goal:** Addapt to changes in ADRs after Artificial project integrates the POC.

**Description:** TBD — update install scripts.

**Status:** `DRAFT`

**Changes:**

- TBD.

**Commits:**

- TBD.

**Dependencies:**

- `$ARTIFICIALS/architecture/records/adr/`

#### Integrate Knowledge

**Goal:** Integrate knowledge.

**Description:** TBD — demonstrate consumption from a Noodlestan project (likely `no-comply` or `artificial`) using npm dependency or git URL.

**Status:** `DRAFT`

**Changes:**

- TBD.

**Commits:**

- TBD.

**Dependencies:**

- No Work Dependencies.

### Next

Begin with Iteration: Integrate Migration Validation to close the WIP items from the previous plan.

### Blockers

- npm authentication must be configured before smoke publish.
- Consumption model (npm vs git URL) not yet decided — may affect iteration: POC Consumption.

## Findings

- The `conventions-lib` scaffolder is minimal and needs enhancement for publishable packages.
- Convention files currently live directly in `packages/{pkg}/` and need to move to `art/` directories.
- The namespace record still lists `Project: Artificial` as owner — needs updating to `Project: Conventions`.
- The existing package records in `refs/` have `Private: trie` (typo for `true`) — should be corrected.

## Decisions

- **Canonical names** follow `@noodlestan/refs-conventions-{typescript,jsx,solidjs,scss,commits}` — preserving the adopted taxonomy.
- **art/ directory** is the published content directory (analogous to `src/` in code packages).
- **5 packages** are in scope: TypeScript, JSX, SolidJS, SCSS, and Commits.
- **Extension chain** preserved: TypeScript ← JSX ← SolidJS; SCSS and Commits independent.

## Documentation to Update

- **`$CONVENTIONS/architecture/index.md`** — Describe the conventions architecture.
- **`$CONVENTIONS/README.md`** — Update with publication and consumption instructions.
- **ADR: Distribution** — New ADR documenting publication model and versioning.
- Delete `_backlog/_architect.md` if empty, move any remaining content to `$CONVENTIONS/_backlog/_parking-lot.md`.

## Follow Ups

- Decide package manager, versioning policy, release cadence, and changelog convention.
- Add CI, automated link checking, and release automation.
- Consider generated documentation site if repository references prove insufficient.

## Feedback

None.
