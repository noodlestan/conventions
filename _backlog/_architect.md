# Architect Briefing: Noodlestan Conventions

This is the high-level architect briefing for initializing and populating the
`noodlestan/conventions` repository. It records the project direction and
sequencing; executable work belongs in the active backlog plan and its
delegatable instruction files.

Architecture proposals are discussed with the user before they become plan
inputs. Unresolved proposals gate only the slices that depend on them; a
well-bounded foundation slice may proceed when it does not depend on the open
decision.

## Why

The reusable conventions currently live inside the workspace reference tree.
That makes them convenient to edit but couples their ownership and history to
workspace coordination. A small standalone repository gives the conventions a
stable home that projects can consume without taking ownership of the
workspace's planning files.

## Intro

The user has created the empty `noodlestan/conventions` repo at
`git@github.com:noodlestan/conventions.git`. This project initializes that repo,
migrates the current convention references, and leaves the workspace as the
coordination and planning home.

The conventions repo is a reference package, not a second workspace and not a
build root. The workspace record at
`$ROOT/_records/repositories/conventions.art` declares the repository and
its checkout; the repo owns its own README, license, package metadata, and
reference inventory.

## What

- A standalone `noodlestan/conventions` repository on `main`.
- A concise root README explaining the package purpose and layout.
- A license and minimal package metadata suitable for a reference package.
- Reference documents split into the adopted package taxonomy:
  TypeScript, JSX, SolidJS, and SCSS.
- Packages may extend other packages, so an extension relationship must be
  be representable without copying the base package's documents. An extending
  convention file must include a mandatory `READ` reference to its parent
  package.
- Project, namespace, and package records under the repository's `_records/`
  directory, following the record model already used by
  `checkouts/workspace-tooling/_records/`.
- The current convention documents migrated from `$ROOT/reference/conventions/`
  into the package boundaries established by that mapping.
- An inventory that preserves document names, package ownership, extension
  relationships, and useful links.
- Validation that the repository is self-contained and its documented links
  resolve within the package or to explicitly external references.
- Workspace coordination records that identify the remote and checkout without
  duplicating the repository's document contents.

## How

### Principles

- Move from WIP questions to ADR proposals, from agreed ADRs to this briefing,
  and from the briefing to the executable plan.
- Treat user discussion of ADR proposals as a planning gate, not as an
  implementation detail.
- The workspace owns planning, delegation, and cross-repository coordination.
- The conventions repo owns convention content, package documentation, its
  project/namespace/package records, and its local inventory.
- Split reference content by package ownership; do not use the workspace
  directory layout as an implicit taxonomy.
- Treat package extension as an explicit relationship. An extending package
  may add or constrain a base package, but must not silently fork its content.
- Record every project, namespace, and package in `_records/`; records are
  the authoritative metadata for the repository scaffold.
- Keep the root brief separate from executable backlog chunks.
- Preserve convention content and links during migration unless a broken link
  requires a documented correction.
- Make each instruction self-contained and each report evidence-bearing.
- Keep taxonomy decisions explicit while the package mapping is still being
  designed; do not infer a final taxonomy from the current flat files.
- Give every convention file one package owner. Shared use is handled by a
  base-package extension relationship, not by leaving material unassigned.
- Use the working package names `@noodlestan/conventions-typescript`,
  `@noodlestan/conventions-jsx`,
  `@noodlestan/conventions-solidjs`, and
  `@noodlestan/conventions-scss` until an ADR changes them.
- Use `@noodlestan` as the namespace for these packages.
- Define extension in the content itself: an extending convention file must
  include a mandatory ":READ `@noodlestan/conventions-{parent}/art/{file}.art`" section.
- Record material architecture choices in `reference/_adr/`; keep this brief
  focused on the resulting direction and sequencing.
- Defer publication and consumer-installation choices until the package
  boundary has been validated.

### NFRs

- A fresh clone has enough metadata and documentation to understand the repo
  without the workspace checkout.
- The repository carries no workspace planning files or project-specific
  records from this workspace; it carries its own project, namespace, and
  package records under `_records/`.
- The convention inventory and README agree with the files actually present.
- Every reference document belongs to one package; shared use is inherited from
  a base package and is never left as unassigned material.
- Every package has a record, stable path, and declared relationship to any
  package it extends.
- Namespace records identify their packages, and the project record identifies
  its namespaces and package workspaces.
- Validation can run from the repository root without depending on the
  workspace's package graph.

### Architecture

## Project Architecture

- Project is `@noodlestan/conventions`.
- Reference documents are split into convention packages.
- Packages may extend other packages; extending files use a mandatory `:READ`
  directive for the parent package.
- Every project, namespace, and package in the conventions repository is
  described by its repository-local `_records/` files.
- The repository-local `_records/` hierarchy is authoritative for project,
  namespace, package, and scaffolder metadata.

### Iterations

WIP

### Follow-ups (out of scope for this plan)

- Package names and the initial extension chain have been adopted. The
  repository-foundation, package-record, and migration slices are complete.
- The repository foundation, package records, migration, and validation slices
  are complete. The remaining packaging follow-up is tracked in WIP and is
  outside the completed plan.
- Decide whether the package is published to npm, consumed by git URL, or kept
  as a repository-only reference source.
- Choose the package manager, versioning policy, release cadence, and changelog
  convention.
- Add CI, automated link checking, and release automation if the package is
  published or broadly consumed.
- Decide whether the repository later needs a generated site or searchable
  documentation layer.
