# Instructions: `create-conventions-unit-tests`

**Plan:** `create-conventions-unit-tests`

**Iteration Id:** `create-conventions-unit-tests`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-create-conventions-unit-tests/instructions/create-conventions-unit-tests__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `create-conventions-unit-tests`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                    |
| -------------- | ---------------------------------- | ------------------------------------------ |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                   |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project  |
| `$ART_MD`      | `$WORKSPACE/checkouts/art-md`      | Pilot consumer project (adoption evidence) |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `create-conventions-unit-tests`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Copy the accepted Art MD unit tests proposal into a new `@noodlestan/conventions-unit-tests` package, apply only the edits required by `$CONVENTIONS/architecture/authoring.md`, and register the package in every index.

## Mandatory Reading

- ::READ `$CONVENTIONS/architecture/authoring.md` (Briefing) — Authoring rules the copied proposal must satisfy: package anatomy, index document, source document, adding a package.
- ::READ `$ART_MD/conventions/unit-tests/index.md` (Proposal) — Accepted unit tests proposal; entry point to the five modules you will copy.
- ::READ `$CONVENTIONS/packages/index.md` (Inventory) — Repository inventory where the new package must be registered.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

---

## Operating Instructions

### Setting Up

Run from the `$CONVENTIONS` root:

```bash
npm ci # to install dependencies.
```

### Verifying Step

Run from the `$CONVENTIONS` root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
```

### Verifying Completion

Runs automatically on pre-commit hook (from the `$CONVENTIONS` root):

```bash
npm run ci # lint
```

---

## Changes

- Step 1 / 5 — Scaffold `packages/unit-tests/`
- Step 2 / 5 — Copy and adapt the proposal into `art/src/`
- Step 3 / 5 — Write the package index
- Step 4 / 5 — Register the package and verify
- Step 5 / 5 — Commit `scaffold-unit-tests-package`

## Steps

### Step `1 / 5` — Scaffold `packages/unit-tests/`

Create `$CONVENTIONS/packages/unit-tests/` following the **Package Anatomy** section of `$CONVENTIONS/architecture/authoring.md`, using `$CONVENTIONS/packages/jsx/` (a package with a dependency) and `$CONVENTIONS/packages/typescript/` as examples:

- `package.json` — mirror `$CONVENTIONS/packages/jsx/package.json`: `name` `@noodlestan/conventions-unit-tests`, `version` `0.0.1`, `description` `Unit test conventions for Noodlestan`, `repository.directory` `packages/unit-tests`, the same `files`, `scripts`, `publishConfig`, and the dependency `"@noodlestan/conventions-typescript": "*"`.
- `_records/package.art` — same fields as `$CONVENTIONS/packages/jsx/_records/package.art`: `## Package: Unit Tests Conventions`, `Path` `packages/unit-tests/`, `Canonical Name` `@noodlestan/conventions-unit-tests`, `Version` `0.0.1`, `Published` `true`, `PackageFile` `package.json`, `Dependencies` Runtime `@noodlestan/conventions-typescript` @ `*`, `Scaffolders` Scaffolder Skeleton: Conventions Lib, `License` License: Noodlestan 2026 MIT.
- `_records/npm-deployment.art` — same as `$CONVENTIONS/packages/typescript/_records/npm-deployment.art` with `Owner` `Package: Unit Tests Conventions` and `Canonical Name` `@noodlestan/conventions-unit-tests`.
- `_guide.md` — mirror `$CONVENTIONS/packages/typescript/_guide.md`, but point Recommended Reading and Knowledge References at `art/index.md` and `art/src/{group}.md` (not `art/typescript.md`), and describe the layout as `art/index.md` plus `art/src/{group}.md`.
- `README.md` — mirror `$CONVENTIONS/packages/typescript/README.md` with the new package name.
- `CHANGELOG.md` — start with `## 0.0.1` / `### Added` describing the five groups: Naming, Structure, Mocking, Style, TypeScript Overrides.
- `LICENSE-MIT`, `.npmignore`, `.prettierignore` — copy from `$CONVENTIONS/packages/typescript/`.
- `art/src/` — empty directory, filled in the next step.

### Step `2 / 5` — Copy and adapt the proposal into `art/src/`

Copy these five files verbatim into `$CONVENTIONS/packages/unit-tests/art/src/`, keeping the file names:

`$ART_MD/conventions/unit-tests/{naming,structure,mocking,style,typescript-overrides}.md`

Then apply exactly these two edits — and no others:

1. In every `## Convention: Unit Tests / {Name}` heading, drop the `Unit Tests / ` prefix so the heading becomes `## Convention: {Name}`. The group is already carried by the H1, and `$CONVENTIONS/architecture/authoring.md` (Source Document) defines the heading as `## Convention: {Name}`.
2. In `typescript-overrides.md`, restate the `**Summary:**` as: `Test code is exempt from two \`@noodlestan/conventions-typescript\` conventions.` — naming the base package, as required by **Depending on a Base Package**.

Keep unchanged: the H1, `**Purpose:**`, `**Description:**`, every `**Summary:**` / `**Avoid:**` / `**Prefer:**` block, every code example, and the number and order of the conventions.

RULE: The proposal is authoritative for structure and format. Do not reword, merge, split, add, or drop conventions.

Expected result — 10 conventions across 5 groups:

| Source file               | `## Convention:` headings                                         |
| ------------------------- | ----------------------------------------------------------------- |
| `naming.md`               | Fixture Factory Naming; Mock Factory Naming; Function Mock Naming |
| `structure.md`            | Helper Grouping                                                   |
| `mocking.md`              | Grouped Mocks; Import Style Preference; Helper Header Comments    |
| `style.md`                | Test Description Prefixes; Block Spacing                          |
| `typescript-overrides.md` | TypeScript Overrides                                              |

### Step `3 / 5` — Write the package index

Create `$CONVENTIONS/packages/unit-tests/art/index.md` following the **Index Document** section of `$CONVENTIONS/architecture/authoring.md`:

- H1 `# Conventions: Unit Tests`, then `**Purpose:**` (one line) and `**Description:**` (one paragraph), taken from the proposal index at `$ART_MD/conventions/unit-tests/index.md`.
- `## Mandatory Reading` with a `:READ` directive to `@noodlestan/conventions-typescript/art/index.md` — mirrors `$CONVENTIONS/packages/jsx/art/index.md` and reaches the base the overrides constrain.
- No `## Principles` section: the proposal defines none and the index rules do not require one.
- Five sections, in proposal order — Naming, Structure, Mocking, Style, TypeScript Overrides — each shaped as:

```md
## Conventions: Unit Tests / Naming

:READ `./src/naming.md` for expanded rules and examples.

- **Fixture Factory Naming** – {summary of the rule, ~200 characters}
```

Rules:

- The file name after `./src/` is the source file name from the previous step.
- Each `- **{Name}** – {summary}` entry takes the bare convention name (matching the `## Convention:` heading) and a ~200 character summary of that convention's `**Summary:**` — a name and a summary, not a discussion.
- Every convention in `art/src/` appears exactly once in the index, and every index entry has a matching source heading.

### Step `4 / 5` — Register the package and verify

Register the new package in every index:

- `$CONVENTIONS/packages/index.md`
  - Change `five convention packages` to `six convention packages` in the opening paragraph.
  - In the `## Convention Packages` table, add a row after SCSS with `Unit Tests` as the Package, `` `packages/unit-tests/` `` as the Path, `[Unit Tests](unit-tests/art/index.md)` as the Conventions link, and `` `@noodlestan/conventions-typescript` `` under Depends on — the link is relative to `packages/index.md`.
  - Add `@noodlestan/conventions-unit-tests` at the end of the `## Packages` list.
- `$CONVENTIONS/_guide.md` — add a row at the end of the `## Projects` table: `Unit Tests` as the Project, `` `packages/unit-tests/_guide.md` `` as the Guide, `NONE` as the Backlog.
- `$CONVENTIONS/_records/project.art` — add `- Package: Unit Tests Conventions` at the end of `**Resources:**`.

Then verify from the `$CONVENTIONS` root:

```bash
npm install        # registers the workspace package and refreshes package-lock.json
npm run lint:fix   # format the new markdown
npm run ci         # lint at the root and in every package
```

### Step `5 / 5` — Commit `scaffold-unit-tests-package`

#### Commit: `scaffold-unit-tests-package`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
scaffold(unit-tests): Add the unit tests conventions package.

- Copy the accepted proposal into `art/src` with authoring fixes.
- Register the package in the inventory, guide, and project record.
- Refresh `package-lock.json` for the new workspace package.
```

## Final Verification

- Verify that `$CONVENTIONS/packages/unit-tests/art/src/` holds the five copied modules and that no `## Convention:` heading carries a `Unit Tests / ` prefix.
- Verify that the copied content is unchanged against `$ART_MD/conventions/unit-tests/` apart from the two allowed edits.
- Verify that `$CONVENTIONS/packages/unit-tests/art/index.md` opens with `# Conventions: Unit Tests`, that each `:READ` resolves to a file inside the package, and that all 10 conventions are listed.
- Verify that `package.json` and `_records/package.art` both declare `@noodlestan/conventions-typescript` as a dependency.
- Verify that the package is registered in `$CONVENTIONS/packages/index.md`, `$CONVENTIONS/_guide.md`, and `$CONVENTIONS/_records/project.art`.
- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
