# Noodlestan Conventions

This repository contains reusable Noodlestan convention packages, their repository metadata, architecture decisions, and the planning workflow used to maintain them.

## Recommend Reading

Agents SHOULD scan these files for relevant clarifications when faced with ambiguity or omissions that may result from missing definitions.

- `_guide.md` — this project overview, workflow, and agent interactions.
- `_wip.md` — transient work state, blockers, and current hand-offs.
- `_architect.md` — project direction, package taxonomy, extension model, and sequence.
- `packages/` — convention package content.
- `architecture/records/adr/` — architecture proposals and decisions that constrain planning.
- [`index.md`](index.md) — inventory of references hosted in this repository.
- `_backlog/3-now/plan-noodlestan-refs-package/plan.md` — active plan.

## Repository Layout

```
_guide.md           — this file
_wip.md             — parking lot (actionable, unknowns, blockers)
_architect.md       — approach, package taxonomy, extension model
_backlog/           — plans, instructions, reports
ops/                — records (packages, namespaces)
packages/           — convention package content
architecture/       — ADRs
```

## Setup

Run at root of repository, not per package:

```bash
npm ci # to install dependencies.
```

## Verification

Run per package modified:

```bash
npm run lint:fix # to fix formatting issues automatically
npm run lint # to report other issues
npm run build
npm run test
```

## Records Management

The workspace maintains ops records at `ops/records` detailing project configurations, namespaces, packages, dependencies, scaffolding and more.

## References

The workspace maintains an architecture reference at `architecture/index.md` and decision records at `architecture/records/adr`.

## Planning Workflow

This project plans its work with the plan workflow defined in `$WORKSPACE/.agents/domains/plans/`.

The short-term focus is captured in `_wip.md` – actionable items, pending questions, blockers, and follow-ups (no done items).

The requirements, use cases, and principles are captured in `_architect.md`, along with approach to work sequence, iterations, and milestones.

The backlog lives at `_backlog/` with subdirectories such as `/3-now` (implementation in progress) and `/4-next/` (planned work not yet started).

## Delivery Workflow

Planning, delegation, and integration runs on the working agreements and agent modes defined in `$WORKSPACE/.agents/domains/engineering/_guide.md`.

## Architecture Workflow

1. Capture transient questions and actions in `_wip.md`.
2. Turn architectural questions into proposals under `_adr/`.
3. Discuss proposals with the user; do not autonomously resolve open decisions.
4. Update `_architect.md` with the agreed direction.
5. Refine the active plan and instructions under `_backlog/`.
6. Delegate only instructions whose status is `PLANNED`.
7. Let the worker execute, validate, commit, push, and report.
8. Integrate the report into the plan and WIP before preparing the next slice.
