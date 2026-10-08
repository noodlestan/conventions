# Instructions: `publish-conventions-index`

**Plan:** `publish-conventions-index`

**Iteration Id:** `publish-conventions-index`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-publish-conventions-index/instructions/publish-conventions-index__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `publish-conventions-index`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                  |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `publish-conventions-index`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add a package index generator that discovers convention packages and renders the package index and a machine-readable collection, then commit it as `build(conventions)`.

## Mandatory Reading

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

- Step 1 / 4 — Add the generator script and template
- Step 2 / 4 — Generate the outputs
- Step 3 / 4 — Register the npm script
- Step 4 / 4 — Commit `publish-conventions-index`

## Steps

### Step `1 / 4` — Add the generator script and template

Add `scripts/create-package-index.ts` and `scripts/templates/package-index.njk` under `$CONVENTIONS`. The script discovers convention packages from `packages/*/package.json` and `packages/*/_records/package.art`, and renders the package index with the nunjucks template. The final shape of the script and data is provisional; keep it simple and readable.

### Step `2 / 4` — Generate the outputs

Run the generator so it produces `packages/index.md` and `meta/conventions.json` under `$CONVENTIONS`.

### Step `3 / 4` — Register the npm script

Register `generate:package-index` in `$CONVENTIONS/package.json` to run the generator.

### Step `4 / 4` — Commit `publish-conventions-index`

#### Commit: `publish-conventions-index`

**Policy:** NOPUSH — Agent MUST create the commit and proceed to the next step but MUST NOT push to the remote repository.

**Message:**

```
build(conventions): Add package index generator.

- Add scripts/create-package-index.ts and its nunjucks template.
- Generate packages/index.md and meta/conventions.json.
```

## Final Verification

- Verify that `scripts/create-package-index.ts`, `scripts/templates/package-index.njk`, `packages/index.md`, and `meta/conventions.json` exist under `$CONVENTIONS`.
- Verify that `generate:package-index` is registered in `$CONVENTIONS/package.json`.
- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
