# Instructions: `update-skills-and-routines`

**Plan:** `integrate-conventions-in-workflows`

**Iteration Id:** `update-skills-and-routines`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-integrate-conventions-in-workflows/instructions/update-skills-and-routines__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `update-skills-and-routines`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable     | Resolved Path                | Purpose                                                                                      |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------- |
| `$WORKSPACE` | Current working directory    | Workspace root directory; where commits for this plan are executed (`.agents/` resides here) |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | Art-managed knowledge domains, workflows, routines, and related resources                    |
| `$SKILLS`    | `$WORKSPACE/.agents/skills`  | Agent skills                                                                                 |

## Working Agreements

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Update skills and routines related to writing instructions to reference conventions. Ensure the `write-plan` skill and `write-instructions` routine surface conventions as mandatory reading.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$SKILLS/write-plan/SKILL.md` (Skill) — The write-plan skill definition. Relevant for this iteration's changes.
- `$DOMAINS/plans/routines/write-instructions.art` (Routine) — The routine to modify. Relevant for this iteration's changes.
- `knowledge/conventions/writing-commit-message.art` (Guide) — Commit message format and rules. Relevant for Writing Commit Message.

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

Run from the `$CONVENTIONS` root:

```bash
npm run ci # to verify there are no pre-existing failures.
```

### Verifying Completion

Run from the `$CONVENTIONS` root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
npm run workspace sanity # to check git status across all repos
```

---

## Changes

This iteration updates 2 files to reference conventions.

- Step 1 / 3 — Update `write-plan` skill to reference conventions
- Step 2 / 3 — Update `write-instructions` routine to include convention references
- Step 3 / 3 — Commit `update-skills-and-routines`

## Steps

### Step `1 / 3` — Update `write-plan` skill to reference conventions

Add convention references to the `write-plan` skill so that planners are guided to include conventions in plans.

**Goal:** Planners see conventions as a knowledge resource when creating plans.

**Instructions:**

1. Read `$SKILLS/write-plan/SKILL.md`.
2. In the `### Command: Create Plan` section, update the `%maybe-knowledge` input to include a convention example:
   - From: `- `%maybe-knowledge` — Knowledge required for the different workflow operations. Examples: "ADR: ... for Planning Work Item", "Guide: ... for Verifying Completion".`
   - To: `- `%maybe-knowledge` — Knowledge required for the different workflow operations. Examples: "ADR: ... for Planning Work Item", "Guide: ... for Verifying Completion", "Conventions: Typescript for Planning Work Item".`

**Expected outcome:** `write-plan` skill references conventions in the `%maybe-knowledge` input example of `### Command: Create Plan`.

### Step `2 / 3` — Update `write-instructions` routine to include convention references

Add convention references to `$DOMAINS/plans/routines/write-instructions.art` so that instructions files guide workers to read conventions.

**Goal:** Instructions files surface conventions as mandatory reading for workers.

**Instructions:**

1. Read `$DOMAINS/plans/routines/write-instructions.art`.
2. In the `## Routine: Write Instructions` procedure, after step `1.3` (render the instruction file with the `render-template` skill), insert a new step:
   ```
   4. With each `%knowledge` in `%plan.context.knowledge` where `%knowledge.kind` is `Convention`, verify the rendered `%iteration.instructions` includes a `::READ` directive for `%knowledge.path` in the `## Mandatory Reading` section. If missing, add it.
   ```
3. Renumber the existing step `1.4` (`Set `%iteration.status`to`READY`.` ) to `1.5`.

**Expected outcome:** `write-instructions` routine verifies that convention references from `%plan.context.knowledge` are included in rendered instructions.

### Step `3 / 3` — Commit `update-skills-and-routines`

---

#### Commit: `update-skills-and-routines`

**Policy:** AUTONOMOUS — Agent should commit autonomously, push, and proceed to the next step.

**Message:**

```
conventions(workspace): Reference conventions in skills and routines.

- Update `write-plan` skill to reference conventions
- Update `write-instructions` routine to include convention references
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that the `write-plan` skill and `write-instructions` routine reference conventions.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
