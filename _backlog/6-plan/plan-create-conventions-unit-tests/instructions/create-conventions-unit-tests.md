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

Formalise the Unit Tests conventions proposed by the Art MD adoption into `@noodlestan/conventions-typescript`, resolve the scope/override question, and publish the updated package.

## Mandatory Reading

- ::READ `$ART_MD/conventions/unit-tests/index.md` (Knowledge) — Unit Tests conventions proposal draft (7 terse + 2 verbose conventions).
- ::READ `$CONVENTIONS/packages/typescript/art/index.md` (Knowledge) — Conventions index to update.
- ::READ `$CONVENTIONS/packages/typescript/art/src/types.md` (Knowledge) — Example of the standard convention format.
- ::READ `$ART_MD/_backlog/_parking-lot.md` (Knowledge) — Parking lot entry `**Conventions: Unit Tests (create)**` with the scope/override question.

## Changes

- Step 1 / 4 — Create `unit-tests.md` convention source
- Step 2 / 4 — Reference unit tests in the conventions index
- Step 3 / 4 — Commit `add-unit-tests-conventions`
- Step 4 / 4 — Commit `publish-conventions-typescript` (MANUAL)

## Steps

### Step `1 / 4` — Create `unit-tests.md` convention source

Create `$CONVENTIONS/packages/typescript/art/src/unit-tests.md` from the proposal draft `$ART_MD/conventions/unit-tests/index.md`, following the standard convention format used by the other sources in `art/src/` (`## Convention: {Name}`, `**Summary:**`, `**Avoid:**`, `**Prefer:**`).

Example: `$CONVENTIONS/packages/typescript/art/src/explicit-code.md`.

Add, under purpose and description, a Scope and Overrides field.

```
**Scope:** This convention applies only to unit test files and test helpers.

**Reconciliation:** When this convention conflicts with another TypeScript convention, follow the rules defined here.
```

Include:

- **Terse conventions** (from the proposal's `## Terse Conventions` section): Fixture Factory Naming, Function Mock Naming, Context Mock Naming, Test Description Prefixes, Helper Grouping, Cross-Package Mock Ownership, Import Style Preference — each with `**Summary:**`, `**Avoid:**`, and `**Prefer:**` sections, preserving the code examples from the proposal.

- **Verbose conventions** (from the proposal's `## Verbose Conventions` section): Unit Tests / Block Spacing, Unit Tests / Helper Header Comments — each with `**Summary:**`, `**Avoid:**`, and `**Prefer:**` sections, preserving the code examples from the proposal.

### Step `2 / 4` — Reference unit tests in the conventions index

Edit `$CONVENTIONS/packages/typescript/art/index.md`:

- Add a `## Conventions: Typescript / Unit Tests` section (place it after `## Conventions: Typescript / Control Flow`).
- Include `:READ ./src/unit-tests.md for expanded rules and examples.`
- List the 7 terse conventions as bullet points, matching the style of the other sections.

### Step `3 / 4` — Commit `add-unit-tests-conventions`

#### Commit: `add-unit-tests-conventions`

**Policy:** AUTONOMOUS — Agent should commit autonomously, push, and proceed to the next step.

**Message:**

```
build(typescript): Add unit tests conventions

- Add src/unit-tests.md with 9 conventions
- Index unit tests conventions in art/index.md
```

### Step `4 / 4` — Commit `publish-conventions-typescript`

#### Commit: `publish-conventions-typescript`

**Policy:** MANUAL — Do NOT commit or push. Report back to the delegator and STOP processing any other instructions.

**Message:**

```
release(typescript): Publish @noodlestan/conventions-typescript

- Bump version and publish updated package
```

## Final Verification

- Verify that `$CONVENTIONS/packages/typescript/art/src/unit-tests.md` exists and follows the standard format.
- Verify that `$CONVENTIONS/packages/typescript/art/index.md` references `./src/unit-tests.md` and lists the terse conventions.
- Verify that the scope/override decision is recorded in the conventions milestone.
- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
