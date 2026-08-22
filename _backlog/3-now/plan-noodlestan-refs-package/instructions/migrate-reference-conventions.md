# Implementation Instructions

**Plan:** `noodlestan-refs-package`

**commit.Id:** `migrate-reference-conventions`

**State:** `PLANNED` — the project record and package mapping have been
reviewed following the repository-foundation and package-record delegations.

These are your instructions. They include a section at the end on how to report back to requester.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Working Agreements

The instruction is self-contained, the report is self-contained, and the user
receives only a terse completion or blocker hand-off.

## Goals

Migrate the four existing convention documents into the package layout already
defined by the repository's project, namespace, and package records without
losing ownership, inheritance, or source links.

## Mandatory Reading

- `$ROOT/reference/_guide.md`
- `$ROOT/reference/_architect.md`
- `$ROOT/reference/_adr/taxonomy.art`
- `$ROOT/reference/_adr/packaging.art`
- `$ROOT/reference/_adr/records.art`
- `$ROOT/reference/conventions/typescript.md`
- `$ROOT/reference/conventions/jsx.md`
- `$ROOT/reference/conventions/solid-js.md`
- `$ROOT/reference/conventions/scss.md`
- `$ROOT/repos/workspace-tooling/_records/projects/workspace-tooling.art`
- `$ROOT/repos/workspace-tooling/_records/namespaces/cli.art`
- `$ROOT/repos/workspace-tooling/_records/packages/esbuild.art`

## Changes

Work only in `$ROOT/repos/conventions`.

- Create the candidate package directories `packages/typescript/`,
  `packages/jsx/`, `packages/solidjs/`, and `packages/scss/`.
- Treat the project, namespace, and package records as the source of truth for
  package names and paths; do not change them in this migration slice.
- Migrate each source convention into its package-owned directory.
- Mark `jsx` as extending `typescript` and `solidjs` as extending `jsx` in the
  package records.
- Add a mandatory reading section to every extending convention file. The
  section must point to its parent package using the directive form, for
  example `:READ \`@noodlestan/refs-conventions-jsx/\``.
- Keep `scss` independent and do not create an unassigned shared-material
  bucket. Shared guidance belongs to the nearest base package.
- Update the package inventory and README links to match the final files.

## Rules

- Do not copy parent-package convention text into a child package.
- Do not create a package or namespace without its corresponding `.art` record.
- Do not publish or add consumer installation tooling in this migration.
- Commit only after the records, package paths, inheritance directives, and
  inventory agree.

## Validation

- Every package directory has one package record and one namespace record
  references each package.
- Every migrated document has exactly one package owner.
- `jsx` contains `:READ \`@noodlestan/refs-conventions-typescript/\``and`solid-js`contains`:READ \`@noodlestan/refs-conventions-jsx/\``.
- No document contains a broken local link or an untracked package boundary.
- The repository's available documentation validation passes.

## Final Verification

**Sanity check**

The repository has an explicit project → namespace → package record hierarchy,
and the package extension chain is visible in both records and convention
files.

**Verification steps**

- `git status --short` is clean after the commit.
- The package inventory names all four packages and their documents.
- Parent package content is referenced, not duplicated.

## How to Report Back to the Delegator

1. Report completion or a blocker with evidence.
2. Render the report to
   `$ROOT/reference/_backlog/plan-noodlestan-refs-package/instructions/migrate-reference-conventions__report.md`.
3. Reply tersely with the commit, created records/packages, and any blocker.

Thank you for your service.
