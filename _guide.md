# Noodlestan Conventions

This repository contains reusable Noodlestan convention packages, their
repository metadata, architecture decisions, and the planning workflow used to
maintain them.

This guide is the project entry point. It is self-contained and does not
require an `_module.md` companion file.

## Mandatory Reading

::READ `_guide.md` — this project overview, workflow, and agent interactions.

::READ `_wip.md` — transient work state, blockers, and current hand-offs.

::READ `_architect.md` — project direction, package taxonomy, extension model, and sequence.

::READ `architecture/records/adr/` — architecture proposals and decisions that constrain planning.

## Agents and User Interactions

This project uses the canonical plan workflow from `$ROOT/.agents/domains/plans/`.
The backlog lives under `backlog/`. Plans, instructions, and reports are
self-contained within this repository.

## Working Workflow

1. Capture transient questions and actions in `_wip.md`.
2. Turn architectural questions into proposals under `_adr/`.
3. Discuss proposals with the user; do not autonomously resolve open decisions.
4. Update `_architect.md` with the agreed direction.
5. Refine the active plan and instructions under `backlog/`.
6. Delegate only instructions whose status is `PLANNED`.
7. Let the worker execute, validate, commit, push, and report.
8. Integrate the report into the plan and WIP before preparing the next slice.

## Project Architecture

- The root project is `@noodlestan/conventions`.
- Reference documents are split into convention packages.
- Packages may extend other packages; extending files use a mandatory `:READ`
  directive for the parent package.
- Every project, namespace, and package in the conventions repository is
  described by its repository-local `ops/records/` files.
- The repository-local `ops/records/` hierarchy is authoritative for project,
  namespace, package, and scaffolder metadata.

## Companion Files

- [`_wip.md`](_wip.md) — transient blockers, questions, and hand-offs.
- [`_architect.md`](_architect.md) — high-level project direction.
- [`architecture/records/adr/`](architecture/records/adr/) — architecture
  proposals and decisions.
- [`backlog/`](backlog/) — plans, instructions, and reports.
- [`packages/`](packages/) — convention package content.
- [`index.md`](index.md) — current workspace reference inventory.

## Use Cases

### Initialize the Repository

Initialize the existing empty remote with a self-describing README, license,
package metadata, project record, and reference inventory.

### Map and Package Conventions

Assign each convention document to one package, represent package extensions in
records, and use `:READ` directives rather than copying parent content.

### Consume the References

Allow projects to consume the convention packages without depending
on this workspace's planning files or repository records.

## Active Plan

- [`plan-noodlestan-refs-package/plan.md`](backlog/plan-noodlestan-refs-package/plan.md)

**Delegation status:** `DONE` for `validate-conventions-package`.
The foundation and package-record delegations completed as `fc18b2f` and
`5de2971`; document migration completed as `776dd2f`; and validation completed
as `93a5c72`. The package boundary is validated; remaining packaging ideas are
tracked in WIP.
