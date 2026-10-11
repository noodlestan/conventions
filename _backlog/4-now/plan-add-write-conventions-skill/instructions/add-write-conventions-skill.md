# Instructions: `add-write-conventions-skill`

**Plan:** `add-write-conventions-skill`

**Iteration Id:** `add-write-conventions-skill`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-add-write-conventions-skill/instructions/add-write-conventions-skill__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-write-conventions-skill`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

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

Create the `write-conventions` skill with three commands mapping to the three authoring routines, register it in the four owning agent modes, delete the two superseded skills, and update the skills index.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$DOMAINS/conventions/index.md` (Domain) — Indexes all resources in the Conventions domain.
- `$DOMAINS/conventions/routines/draft-conventions.art` (Routine) — Referenced by the Draft Conventions command.
- `$DOMAINS/conventions/routines/review-conventions.art` (Routine) — Referenced by the Review Conventions command.
- `$DOMAINS/conventions/routines/create-or-update-conventions.art` (Routine) — Referenced by the Create Or Update Conventions command.
- `$SKILLS/draft-conventions/SKILL.md` (Skill) — The skill to absorb and delete.
- `$SKILLS/review-conventions/SKILL.md` (Skill) — The skill to absorb and delete.
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

### Verifying Step

Run from the `$WORKSPACE` root:

```bash
npm run lint:fix # autofix formatting issues
npm run lint # report remaining issues
```

### Verifying Completion

Run from the `$WORKSPACE` root:

```bash
opencode validate # confirm agent modes still resolve
```

---

## Changes

This iteration creates the skill, updates 4 agent modes, deletes 2 skills, and updates the index.

- Step 1 / 8 — Create `$SKILLS/write-conventions/SKILL.md`
- Step 2 / 8 — Add `write-conventions` to agent-architect Allowed Skills
- Step 3 / 8 — Add `write-conventions` to agent-planner Allowed Skills
- Step 4 / 8 — Replace `review-conventions` with `write-conventions` in agent-pair-navigator
- Step 5 / 8 — Replace `review-conventions` with `write-conventions` in agent-pair-driver
- Step 6 / 8 — Delete `$SKILLS/draft-conventions/` and `$SKILLS/review-conventions/`
- Step 7 / 8 — Update `$SKILLS/index.md`
- Step 8 / 8 — Commit `add-write-conventions-skill`

## Steps

### Step `1 / 8` — Create `$SKILLS/write-conventions/SKILL.md`

**Goal:** Expose the three authoring routines through one skill.

**Instructions:**

1. Create the `$SKILLS/write-conventions/` directory.
2. Create `$SKILLS/write-conventions/SKILL.md` with:

Frontmatter:

```yaml
---
name: write-conventions
description: Use to draft, review, and create or update conventions following an authoring guide.
---
```

Body sections:

- `# Skill: Write Conventions` heading.
- `## Allowed Agent Modes` section with the CRITICAL RULE boilerplate listing `architect`, `planner`, `pair-navigator`, `pair-driver`.
- `## Allowed Skills` section listing: `rehash`, `parking-lot`, `english`, `render-template`.
- `## Mandatory Reading` section with `::READ` directive for `$DOMAINS/conventions/index.md`.
- `## Commands` section with three commands:

**Command: Draft Conventions**

- **Purpose:** Draft convention content for a package from a source, following an authoring guide.
- **Inputs:** `%source` (path or URL of source content), `%authoring-guide` (defaults to the raw GitHub endpoint of authoring.md), `%save-path` (defaults to base path of package in context).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/draft-conventions.art` — Defines Routine: Draft Conventions.
  2. Execute the **Routine: Draft Conventions** with the provided inputs to produce `%draft`.
  3. Present the `%draft` path.

**Command: Review Conventions**

- **Purpose:** Review drafted conventions against an authoring guide and report issues.
- **Inputs:** `%draft` (path to drafted conventions), `%authoring-guide` (defaults to the raw GitHub endpoint of authoring.md).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/review-conventions.art` — Defines Routine: Review Conventions.
  2. Execute the **Routine: Review Conventions** with `%draft` and `%authoring-guide` to produce `%review-report`.
  3. Present the `%review-report`.

**Command: Create Or Update Conventions**

- **Purpose:** Create or update a conventions package from a reviewed draft.
- **Inputs:** `%draft` (path to reviewed draft), `%package-path` (defaults to base path of package in context), `%authoring-guide` (defaults to the raw GitHub endpoint of authoring.md).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/create-or-update-conventions.art` — Defines Routine: Create Or Update Conventions.
  2. Execute the **Routine: Create Or Update Conventions** with the provided inputs to produce `%result-report`.
  3. Present the `%result-report`.

**Expected outcome:** `$SKILLS/write-conventions/SKILL.md` exists with three commands.

### Step `2 / 8` — Add `write-conventions` to agent-architect

**Instructions:**

1. Read `$SKILLS/agent-architect/SKILL.md`.
2. In the `## Allowed Skills` section, add `- \`write-conventions\`.`

### Step `3 / 8` — Add `write-conventions` to agent-planner

**Instructions:**

1. Read `$SKILLS/agent-planner/SKILL.md`.
2. In the `## Allowed Skills` section, add `- \`write-conventions\`.`

### Step `4 / 8` — Replace `review-conventions` in agent-pair-navigator

**Instructions:**

1. Read `$SKILLS/agent-pair-navigator/SKILL.md`.
2. In the `## Allowed Skills` section, replace `- \`review-conventions\`.`with`- \`write-conventions\`.`

### Step `5 / 8` — Replace `review-conventions` in agent-pair-driver

**Instructions:**

1. Read `$SKILLS/agent-pair-driver/SKILL.md`.
2. In the `## Allowed Skills` section, replace `- \`review-conventions\`.`with`- \`write-conventions\`.`

### Step `6 / 8` — Delete superseded skills

**Instructions:**

1. Delete `$SKILLS/draft-conventions/` directory.
2. Delete `$SKILLS/review-conventions/` directory.

### Step `7 / 8` — Update `$SKILLS/index.md`

**Instructions:**

1. Read `$SKILLS/index.md`.
2. Add a `write-conventions` entry with description: "Use to draft, review, and create or update conventions following an authoring guide." Place it alphabetically.
3. Remove the `draft-conventions` entry.
4. Remove the `review-conventions` entry.

### Step `8 / 8` — Commit `add-write-conventions-skill`

---

#### Commit: `add-write-conventions-skill`

**Policy:** NO PUSH — Agent should commit locally but NOT push. Pushing is handled by the user.

**Message:**

```
feat(conventions): Add write-conventions skill

- Expose draft, review, and create-or-update as skill commands
- Register the skill in architect, planner, and pair agent modes
- Retire the draft-conventions and review-conventions skills
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that `$SKILLS/write-conventions/SKILL.md` exists with three commands.
- Verify that `write-conventions` is in the Allowed Skills of agent-architect, agent-planner, agent-pair-navigator, and agent-pair-driver.
- Verify that `$SKILLS/draft-conventions/` and `$SKILLS/review-conventions/` are deleted.
- Verify that `$SKILLS/index.md` lists `write-conventions` and no longer lists `draft-conventions` or `review-conventions`.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
