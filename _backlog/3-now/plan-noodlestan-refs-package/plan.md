# Plan: Noodlestan References Package

**ID:** `noodlestan-refs-package`

**Status:** `DONE`

**Planning Gate:** The user has adopted the package names, namespace, extension
chain, scaffolder, and dependency-recording rules. The repository-local
namespace, package, and scaffolder records are now complete, and the convention
documents have been migrated into those package boundaries. The standalone
package has now been validated; remaining packaging questions are tracked in
WIP.

**Template:** `$WORSKPACE/.agents/domains/plans/templates/plan__template.md`

**Skill:** `write-plan`

## Summary

The user has created the `noodlestan/conventions` empty repo at
`git@github.com:noodlestan/conventions.git`. Initialize that repository, migrate
the reference conventions into it, and validate the resulting standalone
reference package. The workspace remains the planning and coordination home.

## Source Tasks

No task files exist yet. The initial source material is:

- `$WORSKPACE/reference/conventions/`
- `$WORSKPACE/reference/index.md`
- `$WORSKPACE/reference/_guide.md`
- `$WORSKPACE/reference/_wip.md`

## Mandatory Reading

- `$WORSKPACE/.agents/domains/plans/definitions/index.md`
- `$WORSKPACE/.agents/domains/plans/files/index.md`
- `$WORSKPACE/.agents/domains/plans/structures/plan__structure.md`
- `$WORSKPACE/reference/_guide.md`
- `$WORSKPACE/reference/_wip.md`
- `$WORSKPACE/reference/index.md`
- `$WORSKPACE/reference/_architect.md`
- `$WORSKPACE/reference/_adr/taxonomy.art`
- `$WORSKPACE/reference/_adr/packaging.art`
- `$WORSKPACE/reference/_adr/records.art`
- `$WORSKPACE/ops/records/repositories/conventions.art`

## Commits

### `scaffold-conventions-repository` - `COMMITTED`

**Commit Message:** `chore: scaffold noodlestan conventions repository`

Create the repository skeleton, project record, package metadata, documentation
entry point, reference inventory shell, and standalone validation workflow in
the existing empty remote. Package and namespace records wait for the next
taxonomy review.

**Instructions File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/scaffold-conventions-repository.md`

**Commit:** `fc18b2f scaffold-conventions-repository`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/scaffold-conventions-repository__report.md`

**Evidence:** The standalone repository foundation and project record were
created, validated, committed, and pushed. Package and namespace records were
intentionally deferred to the next slice.

### `define-conventions-package-records` - `COMMITTED`

**Commit Message:** `docs: define conventions package records`

Create the conventions repository's namespace and package records from the
agreed working taxonomy and extension chain.

**Instructions File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/define-conventions-package-records.md`

**Commit:** `5de2971 define-conventions-package-records`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/define-conventions-package-records__report.md`

**Evidence:** The project, namespace, package, scaffolder, and template
records were created, validated, committed, and pushed to the conventions
repository.

### `migrate-reference-conventions` - `COMMITTED`

**Commit Message:** `feat: migrate reference conventions into package`

Move the convention references into the package structure defined by the
records and preserve their domain organization and links.

**Instructions File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/migrate-reference-conventions.md`

The repository records are complete and this slice migrated the four
convention documents into their package boundaries.

**Commit:** `776dd2f migrate reference conventions`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/migrate-reference-conventions__report.md`

**Evidence:** The four convention packages, inheritance directives, repository
documentation, and inventory links were migrated and validated in a clean local
checkout. The worker created commit `776dd2f`; its initial push failed on DNS,
and the delegation completion confirms the retry pushed it to `origin/main`.

### `validate-conventions-package` - `COMMITTED`

**Commit Message:** `test: validate conventions package boundary`

Validate the migrated package from a clean repository checkout, including its
root metadata, inventory, local links, and documented standalone workflow.

**Instructions File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/validate-conventions-package.md`

The migration commit is complete and the validation instruction has completed.

**Commit:** `93a5c72 validate-conventions-package`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/validate-conventions-package__report.md`

**Evidence:** README publication wording was corrected; metadata, records,
package ownership, links, extension directives, and a fresh archive checkout
were validated. The commit was pushed to `origin/main` and the repository was
clean.

## Delegations

### `scaffold-conventions-repository` - `COMPLETED`

**Instruction File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/scaffold-conventions-repository.md`

**Worker:** `Hegel` (`019fe3bd-02e4-7243-ad25-d7b0a19873ba`)

**Commit:** `fc18b2f scaffold-conventions-repository`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/scaffold-conventions-repository__report.md`

### `define-conventions-package-records` - `COMPLETED`

**Instruction File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/define-conventions-package-records.md`

**Worker:** `Ptolemy` (`019fe455-3533-72a0-8818-508bb993b18e`)

**Commit:** `5de2971 define-conventions-package-records`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/define-conventions-package-records__report.md`

### `migrate-reference-conventions` - `COMPLETED`

**Instruction File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/migrate-reference-conventions.md`

**Worker:** `Hypatia` (`019fe609-adac-72e3-a2a8-e8e9156b1bff`)

**Commit:** `776dd2f migrate reference conventions`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/migrate-reference-conventions__report.md`

### `validate-conventions-package` - `COMPLETED`

**Instruction File:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/validate-conventions-package.md`

**Worker:** `Fermat` (`019fe622-bb93-7962-8a71-32ea63e49983`)

**Commit:** `93a5c72 validate-conventions-package`

**Report:** `_backlog/3-now/plan-noodlestan-refs-package/instructions/validate-conventions-package__report.md`

## Follow ups

- Decide the package manager, publication model, and versioning convention.
- Define how projects consume and pin the conventions package.
- Add CI, link checking, and release automation if the package is published.
- Consider a generated documentation site only if repository references prove
  insufficient.

## Feedback

- The worker confirmed the foundation commit and remote push. No implementation
  blocker or instruction ambiguity was reported.
- The records worker confirmed the package taxonomy, extension chain,
  scaffolder templates, direct dependencies, validation, commit, and push. No
  implementation blocker or instruction ambiguity was reported.
- The migration instruction review found only a stale `DRAFT` marker; its
  state is reconciled to `PLANNED` because the package records are complete.
- The migration worker completed and validated commit `776dd2f` locally. The
  report records an initial DNS failure while pushing; the delegation
  completion confirms the authorized retry succeeded and updated `origin/main`.
- The validation worker completed commit `93a5c72` and pushed it to
  `origin/main`. Repository-local checks passed; package-manager validation was
  not applicable because `npm` is unavailable and no scripts are declared.
