# Noodlestan Conventions

This repository contains reusable Noodlestan convention packages, their repository metadata, architecture decisions, and the planning workflow used to maintain them.

## Recommended Reading

Agents SHOULD scan these files for relevant clarifications when faced with ambiguity or omissions that may result from missing definitions.

- `_guide.md` — this project overview, workflow, and agent interactions.
- `_backlog/_architect.md` — project direction, package taxonomy, extension model, and sequence.
- `packages/` — convention package content.
- `architecture/records/adr/` — architecture proposals and decisions that constrain planning.
- `index.md` — inventory of references hosted in this repository.

## Repository Layout

```
_guide.md           — this file
_backlog/           — plans, instructions, reports
_records/           — records (packages, namespaces)
architecture/       — Description, Principles, ADRs
packages/           — convention package content
```

## Setup

Run at the root of the repository:

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

Records are co-located with the resources they describe in `_records/` directories:

- **Project:** `_records/project.art`
- **Repository:** `_records/repository.art`
- **Package:** `{package-path}/_records/package.art`
- **Deployments:** `{package-path}/_records/npm-deployment.art`

Examples:

- `checkouts/conventions/_records/project.art`
- `checkouts/conventions/_records/repository.art`
- `checkouts/conventions/refs/typescript/_records/package.art`
- `checkouts/conventions/refs/typescript/_records/npm-deployment.art`

## References

The workspace maintains an architecture reference at `architecture/index.md` and decision records at `architecture/records/adr`.

## Planning Workflow

This project plans its work with the plan workflow defined in `$DOMAINS/plans/`.

The backlog lives at `_backlog/` with subdirectories such as `/3-now` (implementation in progress) and `/4-next/` (planned work not yet started).

The short-term focus is captured in `_backlog/_parking-lot.md` — actionable items, pending questions, blockers, and follow-ups (no done items).

The requirements, use cases, and principles are captured in `_backlog/_architect.md`, along with approach to work sequence, iterations, and milestones.

## Delivery Workflow

Planning, delegation, and integration runs on the working agreements and agent modes defined in `$DOMAINS/engineering/_guide.md`.
