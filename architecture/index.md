# Architecture: Conventions

## Project Architecture

The `@noodlestan/conventions` repository is a standalone reference package
that owns its convention documents, package inventory, and metadata.

### Repository Structure

- **Root:** `@noodlestan/conventions` — project root and README.
- **`packages/`:** Convention documents organized by package ownership.
  - `@noodlestan/refs-conventions-typescript` — TypeScript conventions.
  - `@noodlestan/refs-conventions-jsx` — JSX conventions (extends TypeScript).
  - `@noodlestan/refs-conventions-solidjs` — SolidJS conventions (extends JSX).
  - `@noodlestan/refs-conventions-scss` — SCSS conventions (independent).
- **`refs/`:** Package namespace records under the `refs-conventions` namespace.
- **`_records/`:** Project, namespace, and package records (source of truth).
- **`architecture/`:** ADRs and architecture documentation.

### Extension Chain

Packages may extend other packages. The adopted extension chain is:

`typescript ← jsx ← solidjs`; `scss` is independent.

Extending convention files include a mandatory `:READ` directive pointing to
the parent package. See the [Packaging ADR](architecture/records/adr/packaging.art)
for details.

### Taxonomy

Packages are organized by convention concern. See the
[Taxonomy ADR](architecture/records/adr/taxonomy.art) for the adopted mapping.

### Records

Project, namespace, and package records are the authoritative metadata for
the repository scaffold. See the [Records ADR](architecture/records/adr/records.art)
for the decision.
