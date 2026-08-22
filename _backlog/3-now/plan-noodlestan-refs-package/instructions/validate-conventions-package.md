# Implementation Instructions

**Plan:** `noodlestan-refs-package`

**commit.Id:** `validate-conventions-package`

**State:** `PLANNED` — package migration is complete and its records and
extension directives have been reviewed.

These are your instructions. They include a section at the end on how to report back to requester.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Goals

Validate that `noodlestan/conventions` is self-describing, internally
consistent, and consumable as a standalone reference repository.

## Mandatory Reading

- `$ROOT/reference/_guide.md`
- `$ROOT/reference/_architect.md`
- `$ROOT/reference/_adr/taxonomy.art`
- `$ROOT/reference/_adr/packaging.art`
- `$ROOT/reference/_adr/records.art`
- `$ROOT/_records/repositories/conventions.art`

## Changes

Work only in `$ROOT/repos/conventions`. Inspect the root README, package
metadata, inventory, convention files, and `_records/` hierarchy. Correct
only inconsistencies introduced by the migration; do not expand the package
taxonomy or add publication tooling.

## Validation

- The root package metadata identifies `@noodlestan/conventions`.
- The project record, namespace records, package records, package directories,
  and inventory agree.
- Each package has one owner and each extension has the required `:READ` parent
  directive.
- Local links resolve and no README claims an undecided publication model.
- A fresh checkout can read the repository README and inventory without the
  workspace.

## Final Verification

**Sanity check**

The repository's records and documents describe the same project hierarchy and
extension graph.

**Verification steps**

- Run the repository's available documentation or lint validation.
- Confirm the working tree is clean.
- Commit validation-only corrections separately from the migration commit if
  corrections are required.

## How to Report Back to the Delegator

1. Report completion or a blocker with evidence.
2. Render the report to
   `$ROOT/reference/_backlog/plan-noodlestan-refs-package/instructions/validate-conventions-package__report.md`.
3. Reply tersely with validation results, commits, and any blocker.

Thank you for your service.
