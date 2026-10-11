# Instructions: `add-authoring-routines`

**Plan:** `add-write-conventions-skill`

**Iteration Id:** `add-authoring-routines`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-add-write-conventions-skill/instructions/add-authoring-routines__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-authoring-routines`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                                                                      |
| -------------- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory; where commits for this plan are executed (`.agents/` resides here) |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains`       | Art-managed knowledge domains, workflows, routines, and related resources                    |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project                                                    |

## Working Agreements

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Create three canon-form authoring routines (`draft-conventions.art`, `review-conventions.art`, `create-or-update-conventions.art`), delete the two duplicated `#wip` write routines, and update the conventions domain index.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$DOMAINS/conventions/index.md` (Domain) — Indexes all resources in the Conventions domain.
- `$DOMAINS/conventions/routines/install-convention.art` (Routine) — Reference for the routine canon form (Purpose, Inputs, Outputs, numbered Procedure).
- `$CONVENTIONS/architecture/authoring.md` (Architecture) — The authoring guide whose format the routines must NOT hard-code; its raw GitHub endpoint is the default for `%authoring-guide`.
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

This iteration creates 3 routines, deletes 2, and updates the domain index.

- Step 1 / 5 — Add `draft-conventions.art`
- Step 2 / 5 — Add `review-conventions.art`
- Step 3 / 5 — Add `create-or-update-conventions.art`
- Step 4 / 5 — Delete old routines and update `$DOMAINS/conventions/index.md`
- Step 5 / 5 — Commit `add-authoring-routines`

## Steps

### Step `1 / 5` — Add `draft-conventions.art`

**Goal:** Provide a canon-form routine that drafts convention content from a source, following an authoring guide.

**Instructions:**

1. Create `$DOMAINS/conventions/routines/draft-conventions.art` with the following routine:

```md
# Module

## Routine: Draft Conventions

**Purpose:** Draft convention content for a package from a source, following an authoring guide.

**Inputs:**

- `%source` — Path or URL of the source content to convert into conventions.
- `%authoring-guide` — Path or URL of the authoring guide that defines the conventions format. Default: `https://raw.githubusercontent.com/noodlestan/conventions/refs/heads/main/architecture/authoring.md`.
- `%save-path` — Where the routine writes its artifact. Defaults to the base path of the source code of the package in context.

**Outputs:**

- `%draft` — Path to the drafted conventions document.

**Procedure:**

1. Read `%authoring-guide` to understand the target format: index document shape, source document shape, and rules for writing a rule.
2. Read `%source` and identify the conventions, rules, and examples it contains.
3. Decompose the source content into convention sections following the authoring guide's format.
4. For each convention, determine the appropriate depth: summary only, summary with breakdown, or summary with complete Avoid/Prefer examples.
5. Write the drafted conventions to `%save-path` following the authoring guide's layout.
6. Return `%draft`.
```

**Expected outcome:** `$DOMAINS/conventions/routines/draft-conventions.art` exists with a valid routine structure.

### Step `2 / 5` — Add `review-conventions.art`

**Goal:** Provide a canon-form routine that reviews drafted conventions against an authoring guide.

**Instructions:**

1. Create `$DOMAINS/conventions/routines/review-conventions.art` with the following routine:

```md
# Module

## Routine: Review Conventions

**Purpose:** Review drafted conventions against an authoring guide and report issues.

**Inputs:**

- `%draft` — Path to the drafted conventions document to review.
- `%authoring-guide` — Path or URL of the authoring guide that defines the conventions format. Default: `https://raw.githubusercontent.com/noodlestan/conventions/refs/heads/main/architecture/authoring.md`.

**Outputs:**

- `%review-report` — Table with columns: `check`, `status`, `issue`.

**Procedure:**

1. Read `%authoring-guide` to understand the required format.
2. Read `%draft` and verify:
   - The H1 follows the authoring guide's naming convention.
   - Purpose and Description are present before any rule.
   - Each convention has exactly one `**Summary:**`.
   - Avoid/Prefer pairs are present where needed.
   - Every index entry has a matching source entry and vice versa.
3. Add a row to `%review-report` for each check with its status and any issue.
4. Return `%review-report`.
```

**Expected outcome:** `$DOMAINS/conventions/routines/review-conventions.art` exists with a valid routine structure.

### Step `3 / 5` — Add `create-or-update-conventions.art`

**Goal:** Provide a canon-form routine that creates or updates a conventions package from a draft.

**Instructions:**

1. Create `$DOMAINS/conventions/routines/create-or-update-conventions.art` with the following routine:

```md
# Module

## Routine: Create Or Update Conventions

**Purpose:** Create or update a conventions package from a reviewed draft.

**Inputs:**

- `%draft` — Path to the reviewed conventions document.
- `%package-path` — Path to the conventions package to create or update. Defaults to the base path of the source code of the package in context.
- `%authoring-guide` — Path or URL of the authoring guide that defines the conventions format. Default: `https://raw.githubusercontent.com/noodlestan/conventions/refs/heads/main/architecture/authoring.md`.

**Outputs:**

- `%result-report` — Table with columns: `action`, `file`, `status`.

**Procedure:**

1. Read `%authoring-guide` to understand the required package layout.
2. Read `%draft` and identify the conventions it contains.
3. If `%package-path` does not exist, scaffold the package structure following the authoring guide.
4. Write or update the index document and source documents in `%package-path/art/`.
5. Add a row to `%result-report` for each file created or updated with its action and status.
6. Return `%result-report`.
```

**Expected outcome:** `$DOMAINS/conventions/routines/create-or-update-conventions.art` exists with a valid routine structure.

### Step `4 / 5` — Delete old routines and update index

**Goal:** Remove the superseded routines and update the domain index.

**Instructions:**

1. Delete `$DOMAINS/conventions/routines/write-conventions.art`.
2. Delete `$DOMAINS/conventions/routines/write-conventions-drafts.art`.
3. Read `$DOMAINS/conventions/index.md`.
4. Add the three new routines (`draft-conventions.art`, `review-conventions.art`, `create-or-update-conventions.art`) to the routines listing.
5. Remove the two deleted routines (`write-conventions.art`, `write-conventions-drafts.art`) from the listing.

**Expected outcome:** The two old routines are deleted; the index lists the three new routines and no longer lists the old ones.

### Step `5 / 5` — Commit `add-authoring-routines`

---

#### Commit: `add-authoring-routines`

**Policy:** NO PUSH — Agent should commit locally but NOT push. Pushing is handled by the user.

**Message:**

```
feat(conventions): Add canon-form authoring routines

- Add draft, review, and create-or-update routines
- Take conventions format from the %authoring-guide input
- Remove the duplicated #wip write-conventions routines
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that the three new routine files exist in `$DOMAINS/conventions/routines/`.
- Verify that `write-conventions.art` and `write-conventions-drafts.art` are deleted.
- Verify that `$DOMAINS/conventions/index.md` lists the three new routines and no longer lists the old ones.
- Verify that each routine follows the canon form: Purpose, Inputs, Outputs, numbered Procedure, no `RULE:` bullets.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
