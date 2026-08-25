# Design Principles

These principles guide the design and evolution of the `@noodlestan/conventions`
repository. They are extracted from the architect briefing and ADRs.

## Workspace and Repository Separation

- The workspace owns planning, delegation, and cross-repository coordination.
- The conventions repo owns convention content, package documentation, its
  project/namespace/package records, and its local inventory.

## Package Ownership

- Split reference content by package ownership; do not use the workspace
  directory layout as an implicit taxonomy.
- Give every convention file one package owner. Shared use is handled by a
  base-package extension relationship, not by leaving material unassigned.
- Keep taxonomy decisions explicit while the package mapping is still being
  designed; do not infer a final taxonomy from the current flat files.

## Extension as Explicit Relationship

- Treat package extension as an explicit relationship. An extending package
  may add or constrain a base package, but must not silently fork its content.
- Define extension in the content itself: an extending convention file must
  include a mandatory `:READ \`@noodlestan/conventions-parent/\`` section.

## Records as Source of Truth

- Record every project, namespace, and package in `_records/`; records are
  the authoritative metadata for the repository scaffold.

## Planning and Instruction Discipline

- Move from WIP questions to ADR proposals, from agreed ADRs to this briefing,
  and from the briefing to the executable plan.
- Treat user discussion of ADR proposals as a planning gate, not as an
  implementation detail.
- Keep the root brief separate from executable backlog chunks.
- Make each instruction self-contained and each report evidence-bearing.

## Migration Integrity

- Preserve convention content and links during migration unless a broken link
  requires a doc

## Deferred Decisions

- Defer publication and consumer-installation choices until the package
  boundary has been validated.
