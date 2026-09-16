# Instructions: `integrate-migration-validation`

**Plan:** `prepare-for-distribution`

**Iteration Id:** `integrate-migration-validation`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute this instruction. Your mode must be `worker` before you start changing files.

These are your instructions. They include a section at the end on how to report back to requester.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Path Variables

| Variable       | Resolved Path                      | Purpose                          |
| -------------- | ---------------------------------- | -------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory.        |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions repository checkout. |
| `$MANAGEMENT`  | `$WORKSPACE/checkouts/management`  | Management repository checkout.  |

## Working Agreements

The plan workflow runs on three working agreements:

1. This instruction is self-contained. Use this file and its mandatory reading; do not rely on session memory.
2. The report is self-contained and must contain evidence, changes, verification, blockers, and feedback.
3. Keep the final chat report terse; the report file carries the full trail.

## Goals

Validate the relocated context layout, update workspace records, clean up the old reference tree, and integrate architecture documentation from the architect briefing.

## Mandatory Reading

- `$CONVENTIONS/_backlog/_architect.md` — Architecture briefing with principles, constraints, NFRs.
- `$CONVENTIONS/_wip.md` — WIP actionable items for migration validation.
- `$CONVENTIONS/architecture/records/adr/taxonomy.art` — Package taxonomy ADR.
- `$CONVENTIONS/architecture/records/adr/packaging.art` — Packaging extension chain ADR.
- `$CONVENTIONS/architecture/records/adr/records.art` — Records as metadata source of truth ADR.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Set Up

**Setting Up:**

From `$CONVENTIONS/`:

```bash
npm ci # to install dependencies.
```

From `$WORKSPACE/`:

```bash
npm run workspace sanity # check git status across all repos
```

## Changes

This iteration creates 3 commits across 2 repositories.

**Commit `validate-links-and-records` — Conventions repo:**

- Validate all repository-local links in `packages/` and `refs/`.
- Update `$WORKSPACE/_records/repositories/conventions.art` to reflect moved context.
- Describe architecture in `$CONVENTIONS/architecture/index.md`.

**Commit `cleanup-reference-tree` — Workspace repo:**

- Perform zero-reference check before removing remaining workspace `reference/` tree.
- Remove old workspace `reference/` tree.

**Commit `integrate-architecture-notes` — Conventions repo:**

- Integrate `$CONVENTIONS/_backlog/_architect.md` into `$CONVENTIONS/architecture/index.md`.
- Create `$CONVENTIONS/architecture/principles.md` and `$CONVENTIONS/architecture/NFRs.md`.
- Populate `index.md` with rationale and links to those files.

## Workflow

You are going to perform a series of steps and check status after each one.

1. Step 1. Validate repository-local links.
2. Step 2. Update workspace records.
3. Step 3. Verify links and records.
4. Step 4. Commit validate-links-and-records.
5. Step 5. Check zero-reference for workspace reference tree.
6. Step 6. Remove old reference tree.
7. Step 7. Verify cleanup.
8. Step 8. Commit cleanup-reference-tree.
9. Step 9. Integrate architect briefing into architecture docs.
10. Step 10. Verify architecture documentation.
11. Step 11. Commit integrate-architecture-notes.

Execute all the steps autonomously, one by one, including running the prescribed **Verification** actions.

### Rules

- RULE: You are FORBIDDEN from return to a previous step.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step `1 / 11` — Validate repository-local links.

**Goal:** Check that all links in `packages/` and `refs/` resolve correctly.

From `$CONVENTIONS/`:

```bash
# Find all markdown files and check for broken internal links
find packages refs -name "*.md" -exec grep -l '\[.*\](.*' {} \;
```

Review each markdown file for links to other files within the repository. Verify that each link target exists.

### Step `2 / 11` — Update workspace records.

**Goal:** Update `$WORKSPACE/_records/repositories/conventions.art` to reflect the moved context.

Read the current file and update the description to reflect that the repository now owns its convention documents and inventory, and that the workspace no longer holds the `reference/` tree.

### Step `3 / 11` — Verify links and records.

**Verifying:**

From `$WORKSPACE/`:

```bash
npm run workspace sanity # check git status
```

```bash
ls -la $CONVENTIONS/packages/
ls -la $CONVENTIONS/refs/
```

### Step `4 / 11` — Commit validate-links-and-records.

**Policy:** AUTONOMOUS — commit and push without waiting for confirmation.

Commit `validate-links-and-records` with message:

```
chore(conventions): validate links, update records, document architecture
- Validate all repository-local links in `packages/` and `refs/`.
- Update workspace records to reflect moved context.
- Describe architecture in `architecture/index.md`.
```

Push the commit.

### Step `5 / 11` — Check zero-reference for workspace reference tree.

**Goal:** Verify that no files in the workspace reference the old `reference/` tree.

From `$WORKSPACE/`:

```bash
grep -r "reference/" --include="*.md" --include="*.art" . | grep -v "checkouts/" | grep -v ".git/" | head -20
```

If references remain, note them and do not proceed to removal.

### Step `6 / 11` — Remove old reference tree.

**Goal:** Remove the workspace `reference/` directory after confirming zero references.

```bash
rm -rf $WORKSPACE/reference/
```

### Step `7 / 11` — Verify cleanup.

**Verifying:**

From `$WORKSPACE/`:

```bash
ls -la reference/ 2>&1 || echo "reference/ removed successfully"
npm run workspace sanity
```

### Step `8 / 11` — Commit cleanup-reference-tree.

**Policy:** AUTONOMOUS — commit and push without waiting for confirmation.

Commit `cleanup-reference-tree` with message:

```
chore(workspace): cleanup reference tree after zero-reference check
- Perform zero-reference check before removing remaining workspace `reference/` tree.
- Remove old workspace `reference/` tree.
```

Push the commit.

### Step `9 / 11` — Integrate architect briefing into architecture docs.

**Goal:** Create architecture documentation from the architect briefing.

Read `$CONVENTIONS/_backlog/_architect.md` to extract principles, constraints, and NFRs.

Create the following files:

1. `$CONVENTIONS/architecture/principles.md` — Extract design principles from the architect briefing.
2. `$CONVENTIONS/architecture/NFRs.md` — Extract non-functional requirements from the architect briefing.
3. Update `$CONVENTIONS/architecture/index.md` — Add rationale and links to principles.md and NFRs.md.

### Step `10 / 11` — Verify architecture documentation.

**Verifying:**

From `$CONVENTIONS/`:

```bash
ls -la architecture/
cat architecture/index.md
```

### Step `11 / 11` — Commit integrate-architecture-notes.

**Policy:** AUTONOMOUS — commit and push without waiting for confirmation.

Commit `integrate-architecture-notes` with message:

```
docs(conventions): integrate architecture documentation
- Integrate `_backlog/_architect.md` into `architecture/index.md`.
- Create `principles.md` and `NFRs.md`.
- Populate index.md with rationale and links.
```

Push the commit.

## Final Verification

**Sanity check:**

```bash
ls -la $CONVENTIONS/architecture/
ls -la $WORKSPACE/reference/ 2>&1 || echo "reference/ removed"
cat $CONVENTIONS/architecture/index.md
```

**Verifying:**

From `$CONVENTIONS/`:

```bash
npm run lint:fix # to fix formatting issues automatically
```

From `$WORKSPACE/`:

```bash
npm run workspace sanity
```

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing this instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the **render-template** skill with the `.agents/domains/plans/templates/report__template.md` to render your report and write it next to this instruction file: `plan-{%plan.id}/instructions/{%iteration.id}__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `%commit.id`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

Thank you for your service.
