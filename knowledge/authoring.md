# Authoring: Conventions

**Purpose:** Rules and guidelines for authors writing convention content in `@noodlestan/conventions`.

These rules apply to every package under `packages/`. They describe how documents are structured, how a rule is written, how groups relate to the index, and what must be true before a package ships. The principles these rules serve are in [principles.md](principles.md).

## Package Anatomy

```text
packages/{name}/
  _guide.md                 — package overview, layout, agent interactions
  _records/package.art      — the package's identity and its dependencies
  _records/npm-deployment.art — publication record
  art/index.md              — the index: purpose, principles, groups, terse rules
  art/src/{group}.md        — expanded rules and examples for one group
  README.md                 — install and usage for consumers
  CHANGELOG.md              — released versions
  package.json              — package name, version, dependencies
```

Every document in `art/` belongs to this package. A document needed by two packages belongs to their nearest common package and is reached by depending on it; it is not copied and it is not left unowned.

## Index Document

`art/index.md` is the entry point. It must be scannable end to end.

```md
# Conventions: {Package}

**Purpose:** {one line: the outcome this package delivers}

**Description:** {one paragraph: what kind of rules it contains}

## Principles

- {principle that justifies the rules below}

## Conventions: {Package} / {Group}

:READ `./src/{group}.md` for expanded rules and examples.

- **{Terse Name}** – {summary of the rule, ~200 characters}
```

Rules for the index:

- The H1 is always `# Conventions: {Package}`.
- One `## Conventions: {Package} / {Group}` section per group, in a deliberate reading order.
- Every group section opens with its `:READ` directive to the group's source document.
- An index entry is a name and a summary, not a discussion. Include a code snippet only when the snippet _is_ the rule.
- Every index entry must have a matching source document entry, and every source entry must be listed in the index.

## Source Document

`art/src/{group}.md` expands one group of the index.

````md
# Conventions: {Package} / {Group}

**Purpose:** {one line: the outcome this group delivers}

**Description:** {one paragraph: what this group covers}

## Convention: {Name}

**Summary:** {the rule, stated as an outcome, imperative}

**Avoid:**

```ts
{minimal code showing the problem}
```

**Prefer:**

```ts
{minimal code showing the resolution}
```
````

Rules for a source document:

- The H1 is `# Conventions: {Package} / {Group}`; `Purpose` and `Description` come before any rule.
- Each convention is a `## Convention: {Name}` section with exactly one `**Summary:**`.
- A convention ends with one or more `**Avoid:**` / `**Prefer:**` pairs. Use `**Forbidden:**` for an absolute ban that has no acceptable in-place variant.
- Examples are minimal: only the lines needed to show the rule, in the language of the package.
- A group file may open with a group-level `Purpose` when the whole group shares one outcome; individual conventions still keep their own `Summary`.

## Writing a Rule

- **One outcome per convention.** If a rule needs "and" to state itself, split it.
- **State the outcome first.** The summary is what must be true; the example shows it.
- **Write for the reader who will disagree.** Give the reason the rule exists, not the history of how it was discovered.
- **Prefer absolute wording when the rule is absolute** (`Never`, `MUST`), and prefer `Prefer … over …` when the rule is a default rather than a ban.
- **Keep terminology stable.** A concept named differently in two packages is two concepts, and the index will not reconcile them.
- **Do not document the tool.** Formatting and lint rules belong to tooling config; conventions govern what a reader of the code sees.

## Adding a Group

1. Create `art/src/{group}.md` with the H1, `Purpose`, and `Description`.
2. Add the `## Conventions: {Package} / {Group}` section to `art/index.md` with its `:READ` directive and the group's terse entries.
3. Keep the group file name kebab-case and matching the group's subject.

## Adding a Package

1. Confirm the concern does not already belong to an existing package: a concern is split out by responsibility, not by technology accident. See the [Taxonomy ADR](records/adr/taxonomy.art).
2. Scaffold `packages/{name}/` with `_guide.md`, `_records/`, `art/index.md`, and the package metadata (`package.json`, `README.md`, `CHANGELOG.md`, `LICENSE-MIT`).
3. Write `_records/package.art` with the canonical name (`@noodlestan/conventions-{concern}`) and its dependencies.
4. Declare any base package as a dependency in `package.json`, matching the package record. See the [Packaging ADR](records/adr/packaging.art).
5. Add the package to the project record's resources and to the repository [inventory](../packages/index.md).

## Depending on a Base Package

- Declare the base package as an npm dependency; do not copy its documents.
- The depending package's documents add to or constrain the base. Say so explicitly in the convention's summary when a rule tightens the base rule.
- Install the base package to read its rules while authoring; never restate them.

## Before a Release

- Index entries and source documents agree: no orphan group, no unreachable convention.
- `:READ` directives resolve to files that exist in this package.
- The inventory, the package record, and the files on disk describe the same package set.
- The version is bumped and `CHANGELOG.md` describes what changed.
- `npm run ci` passes.

## Known Exceptions

- `packages/commits/` hosts a single `art/commits.art` document instead of the `art/index.md` + `art/src/` layout, and reaches commit conventions through a `:READ` to the workspace domain rather than owning them inline.
