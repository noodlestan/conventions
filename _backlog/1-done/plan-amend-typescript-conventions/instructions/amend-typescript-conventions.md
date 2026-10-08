# Instructions: `amend-typescript-conventions`

**Plan:** `amend-typescript-conventions`

**Iteration Id:** `amend-typescript-conventions`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-amend-typescript-conventions/instructions/amend-typescript-conventions__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `amend-typescript-conventions`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                  |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `amend-typescript-conventions`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Apply the 10 ruled codec-bin audit items to `@noodlestan/conventions-typescript`: amend 6 conventions and fold 4 scope confirmations into `art/src/`, keep `art/index.md` in sync, record the delta under `## Unreleased`, and commit it as `build(typescript)`.

## Mandatory Reading

- ::READ `$CONVENTIONS/_backlog/3-now/plan-amend-typescript-conventions/note-to-conventions-architect.md` (Briefing) — The 10 ruled items you apply; your source of truth for what each amendment says.
- ::READ `$CONVENTIONS/architecture/authoring.md` (Briefing) — Source Document and Index Document rules: every index entry must match a source entry and vice versa.
- ::READ `$CONVENTIONS/packages/typescript/art/index.md` (Conventions) — Current rules and index entries you edit.
- ::READ `$CONVENTIONS/packages/unit-tests/art/src/typescript-overrides.md` (Conventions) — Owns the test-side exemptions you cross-reference instead of restating.
- ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — Commit types, scopes, and rules for the commit step.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

---

## Operating Instructions

### Setting Up

Run from the `$WORKSPACE/` root:

```bash
npm ci # to install dependencies.
```

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

- Step 1 / 5 — Amend the Explicit Code conventions
- Step 2 / 5 — Amend the Filesystem conventions
- Step 3 / 5 — Amend the Types and Flat Code conventions
- Step 4 / 5 — Sync the index and the changelog
- Step 5 / 5 — Commit `amend-typescript-conventions`

## Steps

### Step `1 / 5` — Amend the Explicit Code conventions

Edit `$CONVENTIONS/packages/typescript/art/src/explicit-code.md`. Apply items 1, 5, 4, and 17 of the note, in this order:

1. **No Abbreviations** — add the allowlist: `ctx`, `ts`, `op`, and `dir` are accepted abbreviations. Extend the `**Summary:**` with a short allowed line and add an `**Allowed:**` block listing the four names in use (the block style already used by `All Caps Constants`).
2. **Verb Function Names** — allow noun-named function properties when the property is a getter or returns a semantically obvious data structure. Keep `message`, `timing`, `errorSerialized`, and `all` as valid names. Extend the `**Summary:**` and add an `**Allowed:**` block with one such property.
3. **All Caps Constants** — scope the rule to exported constants from `constants.ts`. State that module-level bindings such as `config`, `program`, `mocks`, and `codec` are not constants and keep their descriptive lower-case names. Update the `**Summary:**` and extend the existing `**Allowed:**` block with one module-level binding.
4. **Functions over Arrows** — no borderline allowance: an arrow assigned to a variable, or returned where a function declaration or expression fits, is a violation. Extend the `**Summary:**` and add a `**Avoid:**` example showing an arrow assigned to a constant.

Rules for this step: touch only these four conventions; keep every `**Summary:**` to one or two sentences; leave `Avoid` / `Prefer` examples alone unless the step asks you to add to them; do not renumber, rename, or reorder headings.

### Step `2 / 5` — Amend the Filesystem conventions

Edit `$CONVENTIONS/packages/typescript/art/src/filesystem.md`. Apply items 2, 3, and 7 of the note, in this order:

1. **Types Location** — the convention stands. Add the confirmation as a clarification: types that are not used outside the file they are declared in MUST NOT be exported. Note in one line that fixing the offending export sites is code work owned elsewhere, not a text change here.
2. **Constants Location** — resolve the contradiction with `Directory Module Structure`: exported constants live in `constants.ts`, and `types.ts` holds types only. Fix the `**Summary:**`, then fix the `**Prefer:**` example, which still places the constant in `types.ts`: change the target file comment to `// src/utils/constants.ts` and the import to `from './constants'`.
3. **Function Extraction** — add an entry-point exemption: shebang entry scripts and side-effect scripts are not covered by the rule. Use `bin/codec.ts`, `bin/parse.ts`, and `bin/serialize.ts` as the example in a new `**Allowed:**` block, and mention the exemption in the `**Summary:**`.

Note: the audit calls this convention "File as Function"; it was renamed to `Function Extraction` in `0.0.3`, and that is the heading you edit.

Rules for this step: touch only these three conventions; do not alter the `Directory Module Structure` or `Function Extraction` extraction guidance beyond the exemption.

### Step `3 / 5` — Amend the Types and Flat Code conventions

Edit `$CONVENTIONS/packages/typescript/art/src/types.md` (item 16), then `$CONVENTIONS/packages/typescript/art/src/flat-code.md` (items 8 and 9):

1. **No Nested Type Declarations** (`types.md`) — distinguish simple from complex nested inline types, with examples. `{ mode: LogVerbosity }` is simple and may stay inline; a nest with multiple properties, deeper nesting, or a union must be extracted into a named type. Add an `**Allowed:**` block showing the simple inline case next to the existing `Avoid` / `Prefer` pair, and say so in the `**Summary:**`.
2. **No Function Calls in Literals** (`flat-code.md`) — state that `new` counts as a function call, and that the rule is production scope. Test-code exemptions (`vi.fn()`, `expect.any`, fixture calls) are owned by `@noodlestan/conventions-unit-tests` `typescript-overrides.md`: name the package and that file, and do not restate the exemption rules.
3. **No Multi-Line Nested Declarations** (`flat-code.md`) — state the production scope: nested calls that fit on one line are allowed; nested object literals, array literals, and nested functions are not allowed even when they fit on one line, and must be extracted into a preceding statement. Tests are exempt under `@noodlestan/conventions-unit-tests` `typescript-overrides.md` — cross-reference only.

Rules for this step: the two `flat-code.md` items are clarifications of scope, not new restrictions; keep the existing `Avoid` / `Prefer` examples working as shown.

### Step `4 / 5` — Sync the index and the changelog

1. In `$CONVENTIONS/packages/typescript/art/index.md`, update the `- **{Name}** – {summary}` entry of every convention you edited so it matches the new `**Summary:**` in its source document. Entries are a name and a summary, not a discussion. You added no conventions and dropped none: the entry count and the group sections stay exactly as they are.
2. In `$CONVENTIONS/packages/typescript/CHANGELOG.md`, add an `## Unreleased` section above `## 0.0.3` with a `### Changed` list covering the conventions you amended. Do not bump any version.
3. Verify from the `$CONVENTIONS` root:

```bash
npm run lint:fix   # format the changed markdown
npm run ci         # lint at the root and in every package
```

### Step `5 / 5` — Commit `amend-typescript-conventions`

#### Commit: `amend-typescript-conventions`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(typescript): Apply codec-bin audit amendments and clarifications.

- Amend 6 conventions and fold 4 scope confirmations across 4 source modules.
- Sync the changed entries in `art/index.md` and add the `Unreleased` changelog.
```

## Final Verification

- Verify that all 10 items of `$CONVENTIONS/_backlog/3-now/plan-amend-typescript-conventions/note-to-conventions-architect.md` landed: amendments `No Abbreviations`, `Constants Location`, `All Caps Constants`, `Verb Function Names`, `Function Extraction`, `No Nested Type Declarations`; confirmations `Types Location`, `No Function Calls in Literals`, `No Multi-Line Nested Declarations`, `Functions over Arrows`.
- Verify that `art/index.md` lists the same 10 conventions as before, each entry matching its source `**Summary:**`, and that no group section was added, dropped, or renamed.
- Verify that the test-side exemptions are named as `@noodlestan/conventions-typescript` cross-references to `@noodlestan/conventions-unit-tests` and are not duplicated as new rules.
- Verify that `CHANGELOG.md` opens with `## Unreleased` and that no version number changed.
- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
