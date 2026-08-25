# Instructions: `scaffold-publishable-packages`

**Plan:** `prepare-for-distribution`

**Iteration Id:** `scaffold-publishable-packages`

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

Make each package publishable with proper `package.json` fields, convention files in `art/` directories, LICENSE-MIT files, and README files.

## Mandatory Reading

- `$CONVENTIONS/_records/scaffolders/conventions-lib/scaffolder-skeleton.art` — Current scaffolder definition.
- `$CONVENTIONS/_records/scaffolders/conventions-lib/skeleton/package.json.tart` — Current package.json template.
- `$CONVENTIONS/../artificial/art-js/libs/validator/package.json` — Example publishable package.json.

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

**Commit `scaffold-publishable-packages` — Conventions repo:**

- Update `$CONVENTIONS/_records/scaffolders/conventions-lib/scaffolder-skeleton.art` — enhance scaffolder definition.
- Update `$CONVENTIONS/_records/scaffolders/conventions-lib/skeleton/package.json.tart` — add publishConfig, repository, files, scripts, version fields.
- Create `$CONVENTIONS/packages/typescript/art/` directory and move `typescript.md` into it.
- Create `$CONVENTIONS/packages/jsx/art/` directory and move `jsx.md` into it.
- Create `$CONVENTIONS/packages/solidjs/art/` directory and move `solid-js.md` into it.
- Create `$CONVENTIONS/packages/scss/art/` directory and move `scss.md` into it.
- Create `$CONVENTIONS/packages/commits/art/` directory and move `commit.art` into it.
- Create `$CONVENTIONS/packages/typescript/LICENSE-MIT` — MIT license file.
- Create `$CONVENTIONS/packages/jsx/LICENSE-MIT` — MIT license file.
- Create `$CONVENTIONS/packages/solidjs/LICENSE-MIT` — MIT license file.
- Create `$CONVENTIONS/packages/scss/LICENSE-MIT` — MIT license file.
- Create `$CONVENTIONS/packages/commits/LICENSE-MIT` — MIT license file.
- Create `$CONVENTIONS/packages/typescript/README.md` — package README.
- Create `$CONVENTIONS/packages/jsx/README.md` — package README.
- Create `$CONVENTIONS/packages/solidjs/README.md` — package README.
- Create `$CONVENTIONS/packages/scss/README.md` — package README.
- Create `$CONVENTIONS/packages/commits/README.md` — package README.

## Workflow

You are going to perform a series of steps and check status after each one.

1. Step 1. Update the conventions-lib scaffolder.
2. Step 2. Create art directories and move convention files.
3. Step 3. Add LICENSE-MIT files to all packages.
4. Step 4. Add README.md files to all packages.
5. Step 5. Verify all changes.
6. Step 6. Commit scaffold-publishable-packages.

Execute all the steps autonomously, one by one, including running the prescribed **Verification** actions.

### Rules

- RULE: You are FORBIDDEN from return to a previous step.
- RULE: If a command reports errors, attempt to fix them.
- RULE: If the errors persist, inspect the cause before continuing.
- RULE: If still unable to fix it, STOP and report back following the "## Rules to Report".

## Steps

### Step `1 / 6` — Update the conventions-lib scaffolder.

**Goal:** Enhance the scaffolder to produce publishable packages.

1. Update `$CONVENTIONS/_records/scaffolders/conventions-lib/scaffolder-skeleton.art` to reflect that packages are now publishable.

2. Update `$CONVENTIONS/_records/scaffolders/conventions-lib/skeleton/package.json.tart` with the following structure (modeled after `$CONVENTIONS/../artificial/art-js/libs/validator/package.json`):

```json
{
  "name": "{{%package.canonical-name}}",
  "version": "0.0.0",
  "description": "{{%package.description}}",
  "author": "Noodlestan Collective",
  "license": "MIT",
  "private": false,
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/noodlestan/conventions",
    "directory": "{{%package.path}}"
  },
  "files": ["art", "LICENSE-MIT", "README.md"],
  "scripts": {
    "lint": "prettier . -c",
    "lint:fix": "prettier . -c --write",
    "ci": "npm run lint"
  }
}
```

### Step `2 / 6` — Create art directories and move convention files.

**Goal:** Create `art/` directories in each package and move convention files into them.

For each package:

1. Create `art/` directory.
2. Move the convention `.md` or `.art` file into `art/`.

```bash
mkdir -p $CONVENTIONS/packages/typescript/art
mv $CONVENTIONS/packages/typescript/typescript.md $CONVENTIONS/packages/typescript/art/

mkdir -p $CONVENTIONS/packages/jsx/art
mv $CONVENTIONS/packages/jsx/jsx.md $CONVENTIONS/packages/jsx/art/

mkdir -p $CONVENTIONS/packages/solidjs/art
mv $CONVENTIONS/packages/solidjs/solid-js.md $CONVENTIONS/packages/solidjs/art/

mkdir -p $CONVENTIONS/packages/scss/art
mv $CONVENTIONS/packages/scss/scss.md $CONVENTIONS/packages/scss/art/

mkdir -p $CONVENTIONS/packages/commits/art
mv $CONVENTIONS/packages/commits/commit.art $CONVENTIONS/packages/commits/art/
```

### Step `3 / 6` — Add LICENSE-MIT files to all packages.

**Goal:** Create MIT license files in each package.

Create `$CONVENTIONS/packages/{pkg}/LICENSE-MIT` for each of the 5 packages with the following content:

```
MIT License

Copyright (c) 2026 Noodlestan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### Step `4 / 6` — Add README.md files to all packages.

**Goal:** Create README files in each package.

Create `$CONVENTIONS/packages/{pkg}/README.md` for each of the 5 packages with a brief description:

````markdown
# @noodlestan/conventions-{package}

{Description} part of the Noodlestan conventions package.

## Installation

```bash
npm install @noodlestan/conventions-{package}
```
````

## Usage

This package provides convention references for {concern}.

````

### Step `5 / 6` — Verify all changes.

**Verifying:**

```bash
ls -la $CONVENTIONS/packages/typescript/
ls -la $CONVENTIONS/packages/typescript/art/
ls -la $CONVENTIONS/packages/jsx/art/
ls -la $CONVENTIONS/packages/solidjs/art/
ls -la $CONVENTIONS/packages/scss/art/
ls -la $CONVENTIONS/packages/commits/art/
````

```bash
cat $CONVENTIONS/_records/scaffolders/conventions-lib/skeleton/package.json.tart
```

### Step `6 / 6` — Commit scaffold-publishable-packages.

**Policy:** AUTONOMOUS — commit and push without waiting for confirmation.

Commit `scaffold-publishable-packages` with message:

```
feat(conventions): scaffold publishable packages with art directories
- Update `conventions-lib` scaffolder for publishable packages.
- Enhance `package.json.tart` template with publishConfig, repository, files, scripts.
- Add `LICENSE-MIT` to each package.
- Move convention `.md` files into `art/` directories.
- Ensure each package has a `README.md`.
```

Push the commit.

## Final Verification

**Sanity check:**

```bash
find $CONVENTIONS/packages -name "art" -type d -exec ls -la {} \;
find $CONVENTIONS/packages -name "LICENSE-MIT" -type f
find $CONVENTIONS/packages -name "README.md" -type f
cat $CONVENTIONS/_records/scaffolders/conventions-lib/skeleton/package.json.tart
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
