# Conventions

Maintain reusable Noodlestan conventions as a standalone reference package.

## Recommended Reading

Agents SHOULD scan these files for relevant clarifications when faced with ambiguity or omissions that may result from missing definitions.

- `_guide.md` — this file: system overview, layout, setup, verification.
- `_backlog/_architect.md` — project direction, package taxonomy, extension model, and sequence.
- `packages/` — convention package content.
- `architecture/records/adr/` — architecture proposals and decisions that constrain planning.
- `index.md` — inventory of references hosted in this repository.

## Repository Layout

```
_guide.md           — this file
_backlog/           — plans, instructions, reports
_records/           — records (packages, namespaces)
architecture/       — description, principles, ADRs
packages/           — convention package content
```

## Projects

| Project    | Guide                           | Backlog |
| ---------- | ------------------------------- | ------- |
| Commits    | `packages/commits/_guide.md`    | `NONE`  |
| JSX        | `packages/jsx/_guide.md`        | `NONE`  |
| SCSS       | `packages/scss/_guide.md`       | `NONE`  |
| SolidJS    | `packages/solidjs/_guide.md`    | `NONE`  |
| TypeScript | `packages/typescript/_guide.md` | `NONE`  |

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Project:** `_records/project.art`
- **Repository:** `_records/repository.art`
- **Package:** `{package-path}/_records/package.art`
- **Deployments:** `{package-path}/_records/npm-deployment.art`

## Knowledge References

This repository maintains an architecture reference at `architecture/index.md` and decision records at `architecture/records/adr`.

## Workflows

Projects in this repository use the following workflows:

| Workflow / Path                                                            | Purpose                                                                                           |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Planning Work** `$DOMAINS/work/workflows/planning-work/workflow.art`     | Create and manage work item lifecycles, collecting operational instructions according to context. |
| **Delegating Work** `$DOMAINS/work/workflows/delegating-work/workflow.art` | Organize work delegation to sub-agents with validation, execution, and verification.              |
| **Executing Work** `$DOMAINS/work/workflows/executing-work/workflow.art`   | Organize work execution by sub-agents to produce completed, verified outcomes and feedback.       |
| **Deploying** `$DOMAINS/work/workflows/executing-work/workflow.art`        | Organizes deployment of artefacts in operations.                                                  |

### Planning Work

- The backlog lives at `_backlog/` with subdirectories such as `/3-now` and `/4-next/`.
- The requirements, use cases, and principles are captured in `_backlog/_architect.md`.

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Completion

**Instructions:**

Runs automatically on pre-commit hook (from the repository root):

```bash
npm run ci # lint
```
