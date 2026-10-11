# Instructions: `author-commits-conventions`

**Plan:** `publish-commits-convention`

**Iteration Id:** `author-commits-conventions`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-commits-convention/instructions/author-commits-conventions__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `author-commits-conventions`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root, home to agent source code |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Working Agreements

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Convert the commits package from the single-file `art/commits.art` to the standard `art/index.md` + `art/src/commit-message.md` layout, populating it from the workspace source.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$WORKSPACE/knowledge/conventions/writing-commit-message.art` (Conventions) — The sole source of content to convert. Relevant for Writing Commit Message.
- `$CONVENTIONS/architecture/authoring.md` (Architecture) — Defines the target format: index document shape, source document shape, and rules for writing a rule. Follow it precisely.
- `$CONVENTIONS/packages/typescript/art/index.md` (Reference) — Working example of the index layout.
- `$CONVENTIONS/packages/typescript/art/src/explicit-code.md` (Reference) — Working example of a source document.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

---

## Operating Instructions

### Writing Commit Message

Commit message pattern: `{Type}({Scope}): {Description}.` max 120 chars, optionally followed by up 3 bullet points, max 100 chars each.

Allowed values for commit Type, Scope, and valid Type–Scope associations are defined in `$WORKSPACE/knowledge/conventions/writing-commit-message.art`, along with examples, and rules.

RULE: Do not invent commit types or scopes or assume a combination is valid. Always read the "Writing Commit Message" guide first.

### Setting Up

Run from the `$WORKSPACE` root:

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

Run from the `$CONVENTIONS` root:

```bash
npm run ci # lint + tests + index check
```

---

## Changes

This iteration rewrites the commits package art documents.

- Step 1 / 3 — Write `art/index.md` and `art/src/commit-message.md`, delete `art/commits.art`
- Step 2 / 3 — Verify layout and lint
- Step 3 / 3 — Commit `author-commits-conventions`

## Steps

### Step `1 / 3` — Write the new art documents

**Goal:** Replace the single-file layout with index + source, populated from the workspace source.

**Instructions:**

1. ::READ `$WORKSPACE/knowledge/conventions/writing-commit-message.art`. This is the sole source of content. The current content of `packages/commits/art/commits.art` is irrelevant — it will be deleted, not migrated.
2. ::READ `$CONVENTIONS/architecture/authoring.md`. Follow its index document format, source document format, and rules for writing a rule precisely.
3. Study `$CONVENTIONS/packages/typescript/art/index.md` and `$CONVENTIONS/packages/typescript/art/src/explicit-code.md` as working examples.
4. Decompose the source content into `## Convention: {Name}` sections within a single `art/src/commit-message.md` file. The source covers commit format, allowed types, scopes, type–scope associations, examples, and rules — each becomes one or more convention sections.
5. For each convention, decide the depth:
   - **Summary only** — for simple rules where the summary is self-evident (e.g. maximum message length).
   - **Summary + breakdown** — for rules that enumerate allowed values or associations (e.g. valid commit types, type–scope associations).
   - **Summary + complete examples** — for rules that compose a message or bullet points. Include Avoid/Prefer pairs with concrete commit-message examples.
6. Create `$CONVENTIONS/packages/commits/art/src/commit-message.md`: H1 `# Conventions: Commits / Commit Message`, Purpose, Description, then one `## Convention: {Name}` section per rule with its `**Summary:**` and, where needed, Avoid/Prefer examples.
7. Create `$CONVENTIONS/packages/commits/art/index.md`: H1 `# Conventions: Commits`, Purpose, Description, Principles, then one `## Conventions: Commits / Commit Message` section with its `:READ` directive (`:READ ./src/commit-message.md for expanded rules and examples.`) and terse entries — one entry per `## Convention:` section in the source document.
8. Delete `$CONVENTIONS/packages/commits/art/commits.art`.

**Expected outcome:** `art/index.md` and `art/src/commit-message.md` exist; `art/commits.art` is deleted.

### Step `2 / 3` — Verify layout and lint

**Instructions:**

1. Verify every index entry has a matching `## Convention:` section in `art/src/commit-message.md` and every source section is listed in the index — no orphans, no unreachable conventions.
2. Verify the `:READ` directive in `art/index.md` resolves to `art/src/commit-message.md`.
3. Run `npm run lint:fix` then `npm run lint` from `$CONVENTIONS/` root.

### Step `3 / 3` — Commit `author-commits-conventions`

---

#### Commit: `author-commits-conventions`

**Policy:** NO PUSH — Agent should commit locally but NOT push. Pushing is handled by the user.

**Message:**

```
feat(conventions): Rewrite commits to index + source layout

- Replace single commits.art with index.md and src/commit-message.md
- Populate from workspace writing-commit-message source
- Follow authoring.md layout with avoid/prefer examples
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that `packages/commits/art/index.md` exists with one `## Conventions: Commits / Commit Message` section.
- Verify that `packages/commits/art/src/commit-message.md` exists with one `## Convention: {Name}` section per rule.
- Verify that `packages/commits/art/commits.art` is deleted.
- Verify every index entry has a matching source section and vice versa.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
