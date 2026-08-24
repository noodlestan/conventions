# Implementation Instructions

**Plan:** `noodlestan-refs-package`

**commit.Id:** `define-conventions-package-records`

These are your instructions. They include a section at the end on how to report back to requester.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Working Agreements

The instruction is self-contained, the report is self-contained, and the user
receives only a terse completion or blocker hand-off.

## Goals

Define the project, namespace, and package records for the conventions
repository from the agreed working taxonomy. Establish the metadata that the
document migration must follow.

## Mandatory Reading

- `$ROOT/reference/_guide.md`
- `$ROOT/reference/_architect.md`
- `$ROOT/reference/_adr/taxonomy.art`
- `$ROOT/reference/_adr/packaging.art`
- `$ROOT/reference/_adr/records.art`
- `$ROOT/_records/repositories/conventions.art`
- `$ROOT/repos/workspace-tooling/_records/projects/workspace-tooling.art`
- `$ROOT/repos/workspace-tooling/_records/namespaces/cli.art`
- `$ROOT/repos/workspace-tooling/_records/packages/esbuild.art`
- `$ROOT/.agents/domains/project/structures/scaffolder-skeleton.art`
- `$ROOT/.agents/domains/project/structures/package-dependency.art`
- `$ROOT/.agents/domains/project/structures/package.art`
- `$ROOT/.agents/domains/project/structures/namespace.art`
- `$ROOT/repos/artificial/_records/scaffolders/skeleton-common/scaffolder-skeleton.art`
- `$ROOT/repos/artificial/_records/scaffolders/skeleton-lib/scaffolder-skeleton.art`
- `$ROOT/repos/artificial/_records/scaffolders/skeleton-lib/skeleton/`

## Changes

Clone or fetch `git@github.com:noodlestan/conventions.git` into
`$ROOT/repos/conventions`, verify the foundation commit exists on `origin/main`,
and work only in that checkout.

- Update `_records/projects/conventions.art` to identify the
  `refs-conventions` namespace and its package workspaces.
- Create `_records/namespaces/refs-conventions.art` for the namespace.
- Create package records under `_records/packages/` for:
  - `@noodlestan/refs-conventions-typescript`
  - `@noodlestan/refs-conventions-jsx`
  - `@noodlestan/refs-conventions-solidjs`
  - `@noodlestan/refs-conventions-scss`
- Use package paths `packages/typescript/`, `packages/jsx/`,
  `packages/solidjs/`, and `packages/scss/` unless the foundation or reviewed
  record model establishes a correction.
- Record the extension chain: JSX extends TypeScript; SolidJS extends JSX;
  SCSS is independent.
- Create `_records/scaffolders/conventions-lib/scaffolder-skeleton.art`
  using the `Scaffolder Skeleton` structure and the `skeleton-lib` pattern.
  Name the record `Scaffolder Skeleton: Conventions Lib`, set its source to
  `./skeleton`, and include `.tart` templates for at least `README.md` and
  `package.json` in the sibling `skeleton/` directory.
- Attach `Scaffolder Skeleton: Conventions Lib` to every convention package
  record. The packages have no scripts.
- Declare direct package dependencies inline in each dependent package record,
  using `## Package Dependency: ...` records shaped by
  `package-dependency.art`, and list the same dependency under that package's
  `**Dependencies:**` field:
  - JSX depends directly on `@noodlestan/refs-conventions-typescript`.
  - SolidJS depends directly on `@noodlestan/refs-conventions-jsx`.
  - TypeScript and SCSS have no direct package dependency.
- Record the root repository package as private and keep publication choices
  out of this slice.

## Rules

- Follow the record syntax and field vocabulary used by the workspace-tooling
  project, namespace, and package records.
- Do not migrate convention documents in this slice.
- Do not create an unassigned shared-material package.
- If the records reveal a taxonomy contradiction, stop and report a blocker
  instead of guessing.

## Validation

- Every namespace and package named by the project record has one `.art` record.
- Every package record has a unique path and canonical package name.
- The extension chain is represented consistently in records.
- Every package record names the `Conventions Lib` scaffolder and omits
  `**Scripts:**`.
- Every direct dependency has a `Package Dependency` record and appears in the
  dependent package's `**Dependencies:**` field.
- The scaffolder record's `source` is relative to its record and resolves to a
  skeleton containing README and package metadata `.tart` templates.
- No package record claims documents that are not yet migrated.

## Final Verification

**Sanity check**

The records define a complete project → namespace → package hierarchy for the
working taxonomy, while the package directories remain ready for migration.

**Verification steps**

- `git diff --check` passes.
- The records are internally consistent when read without the workspace guide.
- Commit the records as one repository-local commit and leave the workspace
  checkout unchanged.

## How to Report Back to the Delegator

1. Report completion or a blocker with evidence.
2. Render the report to
   `$ROOT/reference/_backlog/plan-noodlestan-refs-package/instructions/define-conventions-package-records__report.md`.
3. Reply tersely with the commit, records created, and any blocker.

Thank you for your service.
