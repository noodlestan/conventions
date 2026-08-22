# Implementation Instructions

**Plan:** `noodlestan-refs-package`

**commit.Id:** `scaffold-conventions-repository`

These are your instructions. They include a section at the end on how to report back to requester.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Working Agreements

The plan workflow (see `$ROOT/reference/_guide.md` → Planning Workflow → Working Together) runs on three working agreements:

1. This instruction is self-contained. Everything you need is in this file plus its mandatory reading.
2. Your report is self-contained. The rendered report carries evidence, changes, verification results, blockers, and feedback.
3. User interaction is minimal. The delegator expects a terse completion or blocker hand-off; do not put the implementation trail in chat.

## Goals

Initialize the existing empty `noodlestan/conventions` repository as a small,
standalone reference package. Establish the root metadata, documentation
boundary, and project record that later package-mapping work will fill.

## Mandatory Reading

- `$ROOT/.agents/domains/plans/definitions/index.md`
- `$ROOT/.agents/domains/plans/files/index.md`
- `$ROOT/.agents/domains/plans/templates/instructions-report.tart`
- `$ROOT/reference/_guide.md`
- `$ROOT/reference/_architect.md`
- `$ROOT/reference/_wip.md`
- `$ROOT/reference/index.md`
- `$ROOT/_records/repositories/conventions.art`
- `$ROOT/repos/workspace-tooling/_records/projects/workspace-tooling.art`
- `$ROOT/repos/workspace-tooling/_records/namespaces/cli.art`
- `$ROOT/repos/workspace-tooling/_records/packages/esbuild.art`
- `$ROOT/.agents/domains/project/structures/project.art`
- `$ROOT/.agents/domains/project/structures/package.art`

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Changes

Work only in the checkout of the conventions repository at
`$ROOT/repos/conventions`. Do not modify the workspace checkout.

- Clone or fetch the existing empty remote
  `git@github.com:noodlestan/conventions.git` into `$ROOT/repos/conventions`.
- Initialize the repository on `main` if the remote has no commit.
- Add a root `LICENSE`, copying the repository's chosen license text from the
  workspace convention for repository documentation.
- Add a concise `README.md` describing `@noodlestan/conventions` as a
  reference package, its current document layout, and how the repository is
  maintained. Do not claim publication or a consumer-installation mechanism
  that has not been decided.
- Add root package metadata appropriate for a reference package. Use the
  package name `@noodlestan/conventions`, mark it private until publication is
  explicitly decided, and keep dependencies empty unless the repository's
  existing tooling requires a development-only dependency.
- Add a minimal `.gitignore` for generated files and dependency directories.
- Add the initial `index.md` inventory shell with a placeholder section for the
  convention documents that the next migration instruction will populate.
- Add `_records/projects/conventions.art` using the same record style as the
  workspace-tooling project record. Record the repository project, root path,
  package name, and current private status. Do not invent namespaces or package
  records before the package mapping is finalized; state that they are pending
  the next slice.
- Keep workspace files such as `_guide.md`, `_architect.md`, `_wip.md`, and
  `_backlog/` out of the repository.

## Rules

- RULE: Modify only `$ROOT/repos/conventions` in this delegation.
- RULE: Do not modify `$ROOT/reference/conventions/` or any workspace record.
- RULE: Do not invent publication, versioning, package-manager, CI, or release
  decisions beyond the metadata needed to initialize the repository.
- RULE: If a command reports errors, attempt to fix them. If the errors persist,
  inspect the cause; if still unable to fix it, STOP and report a blocker.
- RULE: Commit exactly one commit in the conventions repository. The commit may
  bundle the root foundation because the files share one repository-boundary
  decision and one validation surface.
- RULE: Push the commit to `origin main` only after validation succeeds.

## Workflow

1. Inspect the remote and checkout state.
2. Create the repository foundation described under Changes.
3. Validate the metadata and documentation shell.
4. Commit and push the foundation.

## Validation

- Confirm `git -C $ROOT/repos/conventions remote -v` points to
  `git@github.com:noodlestan/conventions.git`.
- Confirm the repository is on `main` and contains exactly the one foundation
  commit created by this instruction if the remote started empty.
- Parse `package.json` and confirm the name is `@noodlestan/conventions`, the
  package is private, and it has no runtime dependencies.
- Confirm `README.md`, `LICENSE`, `.gitignore`, and `index.md` exist and the
  README links only to files present in the repository.
- Confirm `_records/projects/conventions.art` exists and does not claim
  package or namespace records that are not present yet.
- Run the repository's available documentation or lint validation. If no such
  script exists yet, record that fact rather than adding a toolchain in this
  foundation commit.

## Final Verification

**Sanity check**

The repository can be cloned independently and explains itself as a reference
package, while the convention documents remain in the workspace for the next
migration instruction.

**Verification steps**

- `git -C $ROOT/repos/conventions status --short` is clean.
- `git -C $ROOT/repos/conventions log --oneline -1` shows the foundation commit.
- `git -C $ROOT/repos/conventions ls-remote origin main` shows the pushed commit.
- The workspace checkout has no changes caused by this instruction.

## How to Report Back to the Delegator

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather evidence of changes and validation outcomes, or blocker details.
3. Use the `render-template` skill with
   `$ROOT/.agents/domains/plans/templates/instructions-report.tart` to write
   `$ROOT/reference/_backlog/plan-noodlestan-refs-package/instructions/scaffold-conventions-repository__report.md`.
4. Report tersely: happy face plus up to three bullets containing the commit,
   created artefacts, and any blocker.

Thank you for your service.
