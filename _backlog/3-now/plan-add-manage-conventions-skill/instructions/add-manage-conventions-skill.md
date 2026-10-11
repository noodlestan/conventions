# Instructions: `add-manage-conventions-skill`

**Plan:** `add-manage-conventions-skill`

**Iteration Id:** `add-manage-conventions-skill`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-add-manage-conventions-skill/instructions/add-manage-conventions-skill__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-manage-conventions-skill`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

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

Create the `manage-conventions` skill exposing all five operational routines as commands, register it in the four owning agent modes replacing `audit-conventions`, delete the `audit-conventions` skill, and update the skills index.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$DOMAINS/conventions/index.md` (Domain) — Indexes all resources in the Conventions domain.
- `$SKILLS/audit-conventions/SKILL.md` (Skill) — The skill to retire; its command structure is a reference for the new skill.
- `$DOMAINS/conventions/routines/discover-available-conventions.art` (Routine) — Referenced by the new skill's Discover Available Conventions command.
- `$DOMAINS/conventions/routines/discover-installed-conventions.art` (Routine) — Referenced by the new skill's Discover Installed Conventions command.
- `$DOMAINS/conventions/routines/install-convention.art` (Routine) — Referenced by the new skill's Install Convention command.
- `$DOMAINS/conventions/routines/audit-conventions-setup.art` (Routine) — Referenced by the new skill's Audit Conventions Setup command.
- `$DOMAINS/conventions/routines/audit-convention-module.art` (Routine) — Referenced by the new skill's Audit Convention Module Adoption command.
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

This iteration creates the `manage-conventions` skill, registers it in 4 agent modes, deletes `audit-conventions`, and updates the skills index.

- Step 1 / 9 — Create `$SKILLS/manage-conventions/SKILL.md`
- Step 2 / 9 — Replace `audit-conventions` with `manage-conventions` in agent-architect
- Step 3 / 9 — Replace `audit-conventions` with `manage-conventions` in agent-planner
- Step 4 / 9 — Replace `audit-conventions` with `manage-conventions` in agent-delegator
- Step 5 / 9 — Replace `audit-conventions` with `manage-conventions` in agent-worker
- Step 6 / 9 — Delete `$SKILLS/audit-conventions/`
- Step 7 / 9 — Update `$SKILLS/index.md`
- Step 8 / 9 — Commit `add-manage-conventions-skill`
- Step 9 / 9 — Verify no dangling references

## Steps

### Step `1 / 9` — Create `$SKILLS/manage-conventions/SKILL.md`

**Goal:** Expose all five operational routines through one skill with commands matching the routine names.

**Instructions:**

1. Create the `$SKILLS/manage-conventions/` directory.
2. Create `$SKILLS/manage-conventions/SKILL.md` with the following structure:

Frontmatter:

```yaml
---
name: manage-conventions
description: Use to discover, install, and audit conventions in a project.
---
```

Body sections:

- `# Skill: Manage Conventions` heading.
- `## Allowed Agent Modes` section with the CRITICAL RULE boilerplate listing `architect`, `planner`, `delegator`, `worker`.
- `## Allowed Skills` section listing: `rehash`, `parking-lot`, `english`, `render-template`.
- `## Mandatory Reading` section with `::READ` directive for `$DOMAINS/conventions/index.md`.
- `## Commands` section with five commands:

**Command: Discover Available Conventions**

- **Purpose:** Discover conventions available from the published manifest and compare with what a project has installed and advertised.
- **Inputs:** `%base-path` (defaults to base path of package in context), `%manifest-url` (defaults to the noodelstan manifest URL), `%conventions` (optional list to scope discovery).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/discover-available-conventions.art` — Defines Routine: Discover Available Conventions.
  2. Execute the **Routine: Discover Available Conventions** with the provided inputs to produce `%conventions-report`.
  3. Present the `%conventions-report`.

**Command: Discover Installed Conventions**

- **Purpose:** Discover all conventions referenced in the guides of a base path.
- **Inputs:** `%base-path` (defaults to base path of package in context).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/discover-installed-conventions.art` — Defines Routine: Discover Installed Conventions.
  2. Execute the **Routine: Discover Installed Conventions** with `%base-path` to produce `%conventions`.
  3. Present the list of `%conventions`.

**Command: Install Convention**

- **Purpose:** Assist with adding a convention package to a project's dependencies and advertising it in the guide.
- **Inputs:** `%convention` (manifest entry `{ name, version, description, dependencies }`), `%base-path` (defaults to base path of package in context).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/install-convention.art` — Defines Routine: Install Convention.
  2. Execute the **Routine: Install Convention** with `%convention` and `%base-path` to produce `%install-report`.
  3. Present the `%install-report`.

**Command: Audit Conventions Setup**

- **Purpose:** Audit whether conventions are properly set up in a project and report on the setup.
- **Inputs:** `%base-path` (defaults to base path of package in context).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/audit-conventions-setup.art` — Defines Routine: Audit Conventions Setup.
  2. Execute the **Routine: Audit Conventions Setup** with `%base-path` to produce `%setup-report`.
  3. Present the `%setup-report`.

**Command: Audit Convention Module Adoption**

- **Purpose:** Audit adoption of a convention module in a project's directory.
- **Inputs:** `%conventions` (path to the conventions module index), `%base-path` (where to scan).
- **Procedure:**
  1. ::READ `$DOMAINS/conventions/routines/audit-convention-module.art` — Defines Routine: Audit Convention Module Adoption.
  2. Execute the **Routine: Audit Convention Module Adoption** with `%conventions` and `%base-path` to produce `%adoption-report`.
  3. Present the `%adoption-report`.

**Expected outcome:** `$SKILLS/manage-conventions/SKILL.md` exists with five commands, each ::READ-ing and executing the matching routine.

### Step `2 / 9` — Replace `audit-conventions` with `manage-conventions` in agent-architect

**Goal:** Agent-architect uses the new skill instead of the retired one.

**Instructions:**

1. Read `$SKILLS/agent-architect/SKILL.md`.
2. In the `## Allowed Skills` section, replace `- \`audit-conventions\`.`with`- \`manage-conventions\`.`

**Expected outcome:** agent-architect's Allowed Skills lists `manage-conventions` and no longer lists `audit-conventions`.

### Step `3 / 9` — Replace `audit-conventions` with `manage-conventions` in agent-planner

**Goal:** Agent-planner uses the new skill instead of the retired one.

**Instructions:**

1. Read `$SKILLS/agent-planner/SKILL.md`.
2. In the `## Allowed Skills` section, replace `- \`audit-conventions\`.`with`- \`manage-conventions\`.`

**Expected outcome:** agent-planner's Allowed Skills lists `manage-conventions` and no longer lists `audit-conventions`.

### Step `4 / 9` — Replace `audit-conventions` with `manage-conventions` in agent-delegator

**Goal:** Agent-delegator uses the new skill instead of the retired one.

**Instructions:**

1. Read `$SKILLS/agent-delegator/SKILL.md`.
2. In the `## Allowed Skills` section, replace `- \`audit-conventions\`.`with`- \`manage-conventions\`.`

**Expected outcome:** agent-delegator's Allowed Skills lists `manage-conventions` and no longer lists `audit-conventions`.

### Step `5 / 9` — Replace `audit-conventions` with `manage-conventions` in agent-worker

**Goal:** Agent-worker uses the new skill instead of the retired one.

**Instructions:**

1. Read `$SKILLS/agent-worker/SKILL.md`.
2. In the `## Allowed Skills` section, replace `- \`audit-conventions\`.`with`- \`manage-conventions\`.`

**Expected outcome:** agent-worker's Allowed Skills lists `manage-conventions` and no longer lists `audit-conventions`.

### Step `6 / 9` — Delete `$SKILLS/audit-conventions/`

**Goal:** Remove the retired skill.

**Instructions:**

1. Delete the `$SKILLS/audit-conventions/` directory and its `SKILL.md`.

**Expected outcome:** `$SKILLS/audit-conventions/` no longer exists.

### Step `7 / 9` — Update `$SKILLS/index.md`

**Goal:** The skills index reflects the new skill and the retired one.

**Instructions:**

1. Read `$SKILLS/index.md`.
2. Add a `manage-conventions` entry with description: "Use to discover, install, and audit conventions in a project." Place it alphabetically among the other entries.
3. Remove the `audit-conventions` entry (if present; verify by searching the file).

**Expected outcome:** `$SKILLS/index.md` lists `manage-conventions` and no longer lists `audit-conventions`.

### Step `8 / 9` — Commit `add-manage-conventions-skill`

---

#### Commit: `add-manage-conventions-skill`

**Policy:** NO PUSH — Agent should commit locally but NOT push. Pushing is handled by the user.

**Message:**

```
feat(conventions): Add manage-conventions skill

- Expose the five operational routines as skill commands
- Register the skill in architect, planner, delegator, and worker
- Retire the audit-conventions skill
```

### Step `9 / 9` — Verify no dangling references

**Goal:** Confirm the retired skill is fully removed.

**Instructions:**

1. Run `grep -r "audit-conventions" $WORKSPACE/.agents/ $WORKSPACE/.codex/ $WORKSPACE/opencode.json 2>/dev/null` and confirm no results.

**Expected outcome:** No references to `audit-conventions` remain in agent source code or configuration.

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that `$SKILLS/manage-conventions/SKILL.md` exists with five commands.
- Verify that `manage-conventions` is listed in the Allowed Skills of agent-architect, agent-planner, agent-delegator, and agent-worker.
- Verify that `$SKILLS/audit-conventions/` is deleted.
- Verify that `$SKILLS/index.md` lists `manage-conventions` and not `audit-conventions`.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
