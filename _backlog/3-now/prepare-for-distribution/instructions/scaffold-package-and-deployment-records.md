# Instructions: `scaffold-package-and-deployment-records`

**Plan:** `prepare-for-distribution`

**Iteration Id:** `scaffold-package-and-deployment-records`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute this instruction. Your mode must be `worker` before you start changing files.

These are your instructions. They include a section at the end on how to report back to requester.

- RULE: If at any point you are instructed to **REPORT A BLOCKER** execute the instruction in the "## How to Report Back" section and STOP processing any other instructions.

## Path Variables

| Variable       | Resolved Path                      | Purpose                          |
| -------------- | ---------------------------------- | -------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory.        |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions repository checkout. |

## Working Agreements

The plan workflow runs on three working agreements:

1. This instruction is self-contained. Use this file and its mandatory reading; do not rely on session memory.
2. The report is self-contained and must contain evidence, changes, verification, blockers, and feedback.
3. Keep the final chat report terse; the report file carries the full trail.

## Goals

Create publishable package records and npm deployment records for all 5 conventions packages, and update the project and namespace records.

## Mandatory Reading

- `$DOMAINS/packages/structures/package.art` — Package record structure and fields.
- `$DOMAINS/packages/structures/npm-package-deployment.art` — NPM deployment record structure.
- `$CONVENTIONS/../no-comply/libs/solid-accessibility/_records/package.art` — Example package record.
- `$CONVENTIONS/../no-comply/libs/solid-accessibility/_records/npm-deployment.art` — Example deployment record.
- `$CONVENTIONS/refs/typescript/_records/package.art` — Existing package record to update.

- RULE: You MUST follow any links under `## Mandatory Reading` sections found in the listed files.
- RULE: If you are unable to read a file linked under `## Mandatory Reading` you must stop and REPORT A BLOCKER.

## Set Up

**Setting Up:**

From `$CONVENTIONS/`:

```bash
npm ci # to install dependencies.
```

## Changes

This iteration creates 1 commit in the Conventions repo.

**Commit `scaffold-package-and-deployment-records` — Conventions repo:**

- Create `$CONVENTIONS/packages/typescript/_records/package.json` — package metadata for TypeScript conventions.
- Create `$CONVENTIONS/packages/typescript/_records/npm-deployment.art` — deployment record for TypeScript conventions.
- Create `$CONVENTIONS/packages/jsx/_records/package.json` — package metadata for JSX conventions.
- Create `$CONVENTIONS/packages/jsx/_records/npm-deployment.art` — deployment record for JSX conventions.
- Create `$CONVENTIONS/packages/solidjs/_records/package.json` — package metadata for SolidJS conventions.
- Create `$CONVENTIONS/packages/solidjs/_records/npm-deployment.art` — deployment record for SolidJS conventions.
- Create `$CONVENTIONS/packages/scss/_records/package.json` — package metadata for SCSS conventions.
- Create `$CONVENTIONS/packages/scss/_records/npm-deployment.art` — deployment record for SCSS conventions.
- Create `$CONVENTIONS/packages/commits/_records/package.json` — package metadata for Commits conventions.
- Create `$CONVENTIONS/packages/commits/_records/npm-deployment.art` — deployment record for Commits conventions.
- Update `$CONVENTIONS/_records/project.art` — add new package resources.
- Update `$CONVENTIONS/refs/_records/namespace.art` — change owner from `Project: Artificial` to `Project: Conventions`.

## Workflow

You are going to perform a series of steps and check status after each one.

1. Step 1. Create package.json for all 5 packages.
2. Step 2. Create npm-deployment.art for all 5 packages.
3. Step 3. Update project and namespace records.
4. Step 4. Verify all records.
5. Step 5. Commit scaffold-package-and-deployment-records.

Execute all the steps autonomously, one by one, including running the prescribed **Verification** actions.

### Rules

- RULE: You are FORBIDDEN from return to a previous step.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step `1 / 5` — Create package.json for all 5 packages.

**Goal:** Create `package.json` files in each package's `_records/` directory.

Create `_records/` directories and `package.json` files for each package. Use the following structure:

For `$CONVENTIONS/packages/typescript/_records/package.json`:

```json
{
  "name": "@noodlestan/refs-conventions-typescript",
  "version": "0.0.0",
  "description": "TypeScript language and project conventions",
  "author": "Noodlestan Collective",
  "license": "MIT",
  "private": false
}
```

For `$CONVENTIONS/packages/jsx/_records/package.json`:

```json
{
  "name": "@noodlestan/refs-conventions-jsx",
  "version": "0.0.0",
  "description": "JSX syntax and authoring conventions",
  "author": "Noodlestan Collective",
  "license": "MIT",
  "private": false
}
```

For `$CONVENTIONS/packages/solidjs/_records/package.json`:

```json
{
  "name": "@noodlestan/refs-conventions-solidjs",
  "version": "0.0.0",
  "description": "SolidJS-specific conventions",
  "author": "Noodlestan Collective",
  "license": "MIT",
  "private": false
}
```

For `$CONVENTIONS/packages/scss/_records/package.json`:

```json
{
  "name": "@noodlestan/refs-conventions-scss",
  "version": "0.0.0",
  "description": "SCSS and styling conventions",
  "author": "Noodlestan Collective",
  "license": "MIT",
  "private": false
}
```

For `$CONVENTIONS/packages/commits/_records/package.json`:

```json
{
  "name": "@noodlestan/refs-conventions-commits",
  "version": "0.0.0",
  "description": "Commit conventions for Noodlestan",
  "author": "Noodlestan Collective",
  "license": "MIT",
  "private": false
}
```

### Step `2 / 5` — Create npm-deployment.art for all 5 packages.

**Goal:** Create `npm-deployment.art` files in each package's `_records/` directory.

Create deployment records following the structure from `$DOMAINS/packages/structures/npm-package-deployment.art` and the example at `$CONVENTIONS/../no-comply/libs/solid-accessibility/_records/npm-deployment.art`.

For each package, create a file like:

```markdown
# Module

## NPM Package Deployment: {Package Name}

**Owner:** Package: {Package Name}

**Status:** `PENDING`

**Build:** Deployment Build: NPM Command

**Deploy:** Deployment Command: NPM Package CLI

**Canonical Name:** `@noodlestan/refs-conventions-{package}`

**Registry:** `https://registry.npmjs.org`

**Access:** `public`
```

Create these for all 5 packages: TypeScript Conventions, JSX Conventions, SolidJS Conventions, SCSS Conventions, Commits Conventions.

### Step `3 / 5` — Update project and namespace records.

**Goal:** Update the project record with new package resources and fix the namespace owner.

1. Update `$CONVENTIONS/_records/project.art` — add the 5 new packages to the Resources section.

2. Update `$CONVENTIONS/refs/_records/namespace.art` — change the Owner field from `Project: Artificial` to `Project: Conventions`.

### Step `4 / 5` — Verify all records.

**Verifying:**

```bash
ls -la $CONVENTIONS/packages/typescript/_records/
ls -la $CONVENTIONS/packages/jsx/_records/
ls -la $CONVENTIONS/packages/solidjs/_records/
ls -la $CONVENTIONS/packages/scss/_records/
ls -la $CONVENTIONS/packages/commits/_records/
```

```bash
cat $CONVENTIONS/_records/project.art
cat $CONVENTIONS/refs/_records/namespace.art
```

### Step `5 / 5` — Commit scaffold-package-and-deployment-records.

**Policy:** AUTONOMOUS — commit and push without waiting for confirmation.

Commit `scaffold-package-and-deployment-records` with message:

```
docs(conventions): scaffold package and deployment records
- Create `package.json` and `npm-deployment.art` for each of the 5 packages.
- Update project record with new package resources.
- Update namespace record owner from `Project: Artificial` to `Project: Conventions`.
```

Push the commit.

## Final Verification

**Sanity check:**

```bash
find $CONVENTIONS/packages -name "_records" -type d -exec ls -la {} \;
cat $CONVENTIONS/_records/project.art | grep -A 20 "Resources:"
```

**Verifying:**

From `$CONVENTIONS/`:

```bash
npm run lint:fix # to fix formatting issues automatically
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
