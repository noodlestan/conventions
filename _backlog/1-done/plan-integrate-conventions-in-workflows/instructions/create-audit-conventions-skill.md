# Instructions: `create-audit-conventions-skill`

**Plan:** `integrate-conventions-in-workflows`

**Iteration Id:** `create-audit-conventions-skill`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-integrate-conventions-in-workflows/instructions/create-audit-conventions-skill__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `create-audit-conventions-skill`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

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

Create 3 convention audit routines and the `audit-conventions` skill. The routines discover conventions, audit convention module adoption, and audit conventions setup. The skill checks that convention packages are installed, `_guide.md` is configured, and conventions are being read. It reports on adoption status.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$SKILLS/write-plan/SKILL.md` (Skill) — Reference for skill structure when creating the new skill.
- `$DOMAINS/conventions/index.md` (Domain) — Indexes all resources in the Conventions domain.
- `$DOMAINS/work/routines/read-work-guides.art` (Routine) — The routine to modify. Relevant for this iteration's changes.
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

This iteration creates 3 convention audit routines and the `audit-conventions` skill.

- Step 1 / 6 — Add "Routine: Discover Conventions"
- Step 2 / 6 — Add "Routine: Audit Convention Module Adoption"
- Step 3 / 6 — Add "Routine: Audit Conventions Setup"
- Step 4 / 6 — Commit `add-convention-audit-routines`
- Step 5 / 6 — Create `audit-conventions` skill using the routines
- Step 6 / 6 — Commit `create-audit-conventions-skill`

## Steps

### Step `1 / 6` — Add "Routine: Discover Conventions"

Create the routine at `$DOMAINS/conventions/processes/discover-conventions.art` and update `read-work-guides.art` to identify conventions sections.

**Goal:** Provide a routine that discovers all conventions referenced in the guides of a base path.

**Instructions:**

1. Update `$DOMAINS/work/routines/read-work-guides.art`:
   - In step `5.1`, change:
     - From: `1. identify the "## Recommended Reading", "Records Management", "Knowledge", and "Workflows" sections.`
     - To: `1. identify the "## Recommended Reading", "Records Management", "Knowledge", "Workflows", and "Conventions" sections.`
2. Create `$DOMAINS/conventions/processes/discover-conventions.art` with the "Routine: Discover Conventions" drafted below.

**Routine draft:**

```md
# Module

## Uses

::READ (Routine: Read Work Guides) FROM `$DOMAINS/work/routines/read-work-guides.art`

## Routine: Discover Conventions

**Purpose:** Discover all conventions referenced in the guides of a base path.

**Inputs:**

- `%base-path` — Where to look for guides. Defaults to the base path of the source code of the package in context.

**Outputs:**

- `%conventions` — List(ConventionRef). Each item contains `title`, `summary`, and `source-file`.

**Procedure:**

1. With `%base-path` as `%entry-point`, execute the **Routine: Read Work Guides** to locate all `%knowledge` resources.
2. With each `%knowledge` resource of type `%convention`, identify:
   - `%convention.title` — Title of the convention.
   - `%convention.summary` — Summary of the convention.
   - `%convention.source-file` — Path to the convention source file.
3. Return the list of `%conventions`.
```

**Expected outcome:** `$DOMAINS/conventions/processes/discover-conventions.art` exists with a valid routine structure; `read-work-guides.art` identifies "Conventions" sections.

### Step `2 / 6` — Add "Routine: Audit Convention Module Adoption"

Create the routine at `$DOMAINS/conventions/processes/audit-convention-module.art`.

**Goal:** Provide a routine that audits adoption of a single convention module in a project's directory.

**Instructions:**

1. Create `$DOMAINS/conventions/processes/audit-convention-module.art` with the "Routine: Audit Convention Module Adoption" drafted below.

**Routine draft:**

```md
# Module

## Routine: Audit Convention Module Adoption

**Purpose:** Audit adoption of a convention module in a project's directory.

**Inputs:**

- `%conventions` — Path to the conventions module. Example: `$PROJECT/node_modules/@noodlestan-conventions-typescript/art/index.md`.
- `%base-path` — Where to scan for adoption.

**Outputs:**

- `%adoption-report` — Table with columns: `convention name`, `file / line`, `issue`.

**Procedure:**

1. Read the `%conventions` module and list its convention rules.
2. With each convention rule, scan `%base-path` for cases where the codebase does not follow the rule.
3. With each violation, add a row to `%adoption-report` with the `convention name`, `file / line`, and `issue`.
4. Return `%adoption-report`.
```

**Expected outcome:** `$DOMAINS/conventions/processes/audit-convention-module.art` exists with a valid routine structure.

### Step `3 / 6` — Add "Routine: Audit Conventions Setup"

Create the routine at `$DOMAINS/conventions/processes/audit-conventions-setup.art`.

**Goal:** Provide a routine that audits whether conventions are properly set up in a project and reports on the setup.

**Instructions:**

1. Create `$DOMAINS/conventions/processes/audit-conventions-setup.art` with the "Routine: Audit Conventions Setup" drafted below. It uses the **Routine: Discover Conventions**.

**Routine draft:**

```md
# Module

## Uses

::READ (Routine: Discover Conventions) FROM `$DOMAINS/conventions/processes/discover-conventions.art`

## Routine: Audit Conventions Setup

**Purpose:** Audit whether conventions are properly set up in a project and report on the setup.

**Inputs:**

- `%base-path` — Where to scan for adoption. Defaults to the base path of the source code of the package in context.

**Outputs:**

- `%setup-report` — Table with columns: `check`, `status`, `issue`.

**Procedure:**

1. Execute the **Routine: Discover Conventions** with `%base-path` to produce `%conventions`.
2. Check that convention packages declared in `%base-path/package.json` are installed in `%base-path/node_modules/`.
3. With each `%convention` in `%conventions`, verify:
   - The convention is referenced in a `_guide.md` `## Conventions` section.
   - The conventions section has prose explaining how to use the convention.
   - The referenced convention source file can be resolved.
4. Add a row to `%setup-report` for each check with its status and any issue.
5. Return `%setup-report`.
```

**Expected outcome:** `$DOMAINS/conventions/processes/audit-conventions-setup.art` exists with a valid routine structure.

### Step `4 / 6` — Commit `add-convention-audit-routines`

---

#### Commit: `add-convention-audit-routines`

**Policy:** AUTONOMOUS — Agent should commit autonomously, push, and proceed to the next step.

**Message:**

```
conventions(workspace): Add convention audit routines.

- Add Routine: Discover Conventions
- Add Routine: Audit Convention Module Adoption
- Add Routine: Audit Conventions Setup
- Include conventions in `read-work-guides.art` sections
```

### Step `5 / 6` — Create `audit-conventions` skill using the routines

Create the skill directory and `SKILL.md` file at `$SKILLS/audit-conventions/SKILL.md`.

**Goal:** Scaffold the new skill following the existing skill structure, with commands that use the routines created in steps 1–3.

**Instructions:**

1. Read `$SKILLS/write-plan/SKILL.md` as a structural reference.
2. Create the `$SKILLS/audit-conventions/` directory.
3. Create `$SKILLS/audit-conventions/SKILL.md` with:
   - Frontmatter: `name: audit-conventions` and a `description` summarising the skill's purpose.
   - `# Skill: Audit Conventions` heading.
   - `## Allowed Agent Modes` section listing the agent modes allowed to use this skill.
   - `## Allowed Skills` section listing skills this skill may use.
   - `## Mandatory Reading` section with `::READ` directives for the resources the skill needs, including `$DOMAINS/conventions/index.md`.
   - `## Commands` section with the two commands defined below.
4. Add "Command: Audit Conventions" with:
   - **Purpose:** Audit convention adoption across a project's directory.
   - **Inputs:**
     - `%basePath` — Path to scan for convention adoption (defaults to the base path of the package's source code).
   - **Procedure:**
     1. Execute the **Routine: Discover Conventions** with `%basePath` to produce `%conventions`.
     2. With each `%convention` in `%conventions`, execute the **Routine: Audit Convention Module Adoption** with the convention's `source-file` and `%basePath` to produce `%adoption-report`.
     3. Present a full table of cases where the codebase does not follow conventions.
5. Add "Command: Audit Conventions Setup" with:
   - **Purpose:** Detect whether conventions are properly adopted in a project.
   - **Inputs:**
     - `%basePath` — Path to scan for adoption.
   - **Procedure:**
     1. Execute the **Routine: Audit Conventions Setup** with `%basePath` to produce `%setup-report`.
     2. Present the setup report.

**Expected outcome:** `$SKILLS/audit-conventions/SKILL.md` exists with a valid skill structure and the two commands.

### Step `6 / 6` — Commit `create-audit-conventions-skill`

---

#### Commit: `create-audit-conventions-skill`

**Policy:** AUTONOMOUS — Agent should commit autonomously, push, and proceed to the next step.

**Message:**

```
conventions(workspace): Create `audit-conventions` skill.

- Create `audit-conventions` skill
- Add Command: Audit Conventions
- Add Command: Audit Conventions Setup
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that `$SKILLS/audit-conventions/SKILL.md` exists and contains the skill definition with the two commands.
- Verify that the 3 routines exist in `$DOMAINS/conventions/processes/`.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
