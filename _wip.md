# WIP: Noodlestan Conventions

The conventions repository owns its package content, repository metadata, and
project context. The initial package plan is complete through validation:
foundation `fc18b2f`, package records `5de2971`, migration `776dd2f`, and
validation `93a5c72`.

## ACTIONABLE

- Validate the relocated context layout and all repository-local links.
- Update the workspace and repository records so they no longer describe the
  moved context as workspace-owned `reference/` content.
- Add or refine the next backlog plan for repository context maintenance after
  the relocation is validated.
- Perform a zero-reference check before removing the remaining workspace
  `reference/` tree.

## UNKNOWN

- Is the workspace `reference/conventions/` source copy still needed after the
  standalone package has been validated, or can it be removed with `reference/`?

## BLOCKER

- None.

## Context Map

- [`_guide`](_guide) — repository workflow and layout.
- [`_architect`](_architect) — project direction and next workstream.
- [`backlog/`](backlog/) — plans, instructions, and reports.
- [`architecture/records/adr/`](architecture/records/adr/) — adopted decisions.
