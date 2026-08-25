# Architecture: Conventions

This repository was created to give conventions a standalone home outside the
workspace's planning tree. The workspace retains coordination and delegation
while the conventions repo owns its content, inventory, and metadata.

## Project Architecture

The `@noodlestan/conventions` repository is a standalone reference package
that owns its convention documents, package inventory, and metadata.

### Repository Structure

- **Root:** `@noodlestan/conventions` — project root, `_guide.md`, and README.
- **`packages/`:** Convention documents organized by package ownership.
- **`_records/`:** Project, namespace, and package records (source of truth).
- **`architecture/`:** ADRs and architecture documentation.

### Extension Chain

Packages may extend other packages. The adopted extension chain is:

`typescript ← jsx ← solidjs`; `scss` is independent.

Extending convention files include a mandatory `:READ` directive pointing to
the parent package. See the [Packaging ADR](architecture/records/adr/packaging.art)
for details.

### Taxonomy

Packages are organized by convention concern. See the
[Taxonomy ADR](architecture/records/adr/taxonomy.art) for the adopted mapping.

### Records

Project, namespace, and package records are the authoritative metadata for
the repository scaffold. See the [Records ADR](architecture/records/adr/records.art)
for the decision.

## Rationale

The architecture follows these [Design Principles](principles.md) and meets
these [Non-Functional Requirements](NFRs.md). Key decisions are recorded in
ADRs:

- [Taxonomy](records/adr/taxonomy.art) — Package mapping by convention concern.
- [Packaging](records/adr/packaging.art) — Extension chain and package composition.
