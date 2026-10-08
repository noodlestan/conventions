# Overview: Conventions

**Purpose:** Provide an overview of the Conventions repository and inform authors about its benefits, definitions, use cases, and how it works.

## What

Conventions (`@noodlestan/conventions`) is a standalone repository of Noodlestan's convention packages. It holds convention content as grouped, indexed documents, organises that content into one npm package per coherent concern, and publishes each package so consumers install it as a normal dependency. It also holds this project's planning and architecture artefacts.

The repository is a reference package, not a workspace and not a build root.

## Why

Conventions used to live inside the workspace tree. That made them easy to edit, but tied their ownership and history to workspace coordination, and gave consumers no way to take the conventions without also taking the workspace's planning files.

A standalone repository gives conventions a stable home: consumers depend on packages, packages declare their own dependencies, and the workspace keeps ownership of planning, delegation, and cross-repository coordination.

### Goals

- **Reduce variance** — variance raises cognitive load and leads to drift.
- **Enforce strictness** — rules state what must be true, not what would be nice.
- **Refine incrementally** — conventions improve through feedback loops from the projects that adopt them.
- **Refine and distribute continuously** — a standing workflow moves conventions from proposal to adopted, released package.

### Key Benefits

- **A home of its own** — content, records, and history live outside the workspace tree.
- **Only what you need** — one package per concern; a project installs the stacks it uses.
- **Versioned and traceable** — every package carries a version, a changelog, and a publication record.
- **One owner per document** — shared material is inherited through a package dependency, never copied.

## Definitions

- **Convention package** — one npm package per coherent concern, living at `packages/{name}/`. Example: `@noodlestan/conventions-typescript`.
- **Index document** — `art/index.md`: the terse, scannable entry point of a package. Purpose, principles, group headings, and one-line rule summaries.
- **Source document** — `art/src/{group}.md`: the expanded rules and examples for one group of the index, reached through a `:READ` directive.
- **Package dependency** — a relationship between two convention packages, declared in `package.json` and named in the package record. Example: `conventions-jsx` depends on `conventions-typescript`.
- **Record** — the `_records/` metadata co-located with what it describes: project, repository, package, and npm deployment.
- **ADR** — an adopted architecture decision recorded under `architecture/records/adr/`.
- **Parking lot** — `_backlog/_parking-lot.md`: short-term actionables, open questions, and blockers.

## Use Cases

**Adopt the conventions in a project:** install the packages covering the project's stack, then point the project's `_guide.md` at them so agents read the installed conventions. Evidence of this lives in the milestone's Phase 1 — Adopt.

**Author or edit a convention:** add a group or a rule following [authoring.md](authoring.md), index it, and bump the package version and changelog.

**Add a package:** create `packages/{name}/` with its record, package metadata, index document, and source documents; declare any base package as a dependency. The principles in [principles.md](principles.md) and the ADRs decide whether the concern warrants a package.

**Plan the next change:** open the question in [the parking lot](../_backlog/_parking-lot.md), raise an ADR proposal when the change is architectural, then write the plan.

## How it works

### Package layout and content

Each package keeps `_guide.md`, `_records/`, `art/index.md`, and `art/src/*.md`, plus its `README.md`, `CHANGELOG.md`, and `package.json`. The index lists each group once; the group's source document carries the detail. Adding a rule means editing the index entry and its source document together.

### Dependencies between packages

A package that builds on another declares that dependency in `package.json` and in its package record. npm resolves the relationship when a consumer installs both, so base conventions arrive transitively and are never duplicated. See the [Packaging ADR](records/adr/packaging.art).

### Publishing

Packages are published to npm independently. A release bumps the package version, updates its changelog, and updates the package's npm deployment record. npm is the only distribution channel; nothing is consumed by path into this repository.

### Verification and planning

`npm run ci` runs the repository lint through pre-commit hooks. Planning lives under `_backlog/` and `_roadmap/`, constrained by [principles.md](principles.md) and the ADRs.
