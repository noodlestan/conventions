# Instructions: `add-conventions-to-planning-structures`

**Plan:** `integrate-conventions-in-workflows`

**Iteration Id:** `add-conventions-to-planning-structures`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-integrate-conventions-in-workflows/instructions/add-conventions-to-planning-structures__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `add-conventions-to-planning-structures`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable     | Resolved Path                | Purpose                                                                                      |
| ------------ | ---------------------------- | -------------------------------------------------------------------------------------------- |
| `$WORKSPACE` | Current working directory    | Workspace root directory; where commits for this plan are executed (`.agents/` resides here) |
| `$DOMAINS`   | `$WORKSPACE/.agents/domains` | Art-managed knowledge domains, workflows, routines, and related resources                    |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `add-conventions-to-planning-structures`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Add conventions as explicit examples in planning workflow structures. Conventions are knowledge and should surface as mandatory reading in instructions files. This iteration adds convention references to work-item structures, templates, routines, and plan structures so that downstream agents can discover and consume conventions.

## Mandatory Reading

- `$WORKSPACE/_guide.md` (Guide) — Defines workspace operations and verification. Relevant for Setting Up, Verifying Step.
- `$DOMAINS/plans/structures/plan.art` (Structure) — Describe the work-item changes through a series of iterations and commits with detailed instructions.
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

This iteration adds convention references to 6 planning structures in `$DOMAINS`.

- Step 1 / 7 — Add convention references to `work-item-abstract.art`
- Step 2 / 7 — Add convention examples to `work-item-context.tart` knowledge section
- Step 3 / 7 — Add convention examples to `compose-work-context.art` routine
- Step 4 / 7 — Add convention examples to `plan.art` structure
- Step 5 / 7 — Add convention examples to `knowledge-context.art` type
- Step 6 / 7 — Expand `instructions.tart` directive with convention examples
- Step 7 / 7 — Commit `add-conventions-to-planning-structures`

## Steps

### Step `1 / 7` — Add convention references to `work-item-abstract.art`

Add convention-related references or examples to `$DOMAINS/work/structures/work-item-abstract.art` so that downstream plan and iteration structures inherit convention awareness.

**Goal:** Ensure the abstract work item structure surfaces convention knowledge.

**Instructions:**

1. Read `$DOMAINS/work/structures/work-item-abstract.art`.
2. Identify where convention references would be appropriate (e.g., in the `context.knowledge` field description or as a shape field example).
3. Add a convention example alongside existing knowledge examples.

**Expected outcome:** `work-item-abstract.art` includes a convention example in its knowledge context.

### Step `2 / 7` — Add convention examples to `work-item-context.tart`

Add convention examples to the knowledge section `### Knowledge` in `$DOMAINS/work/templates/work-item-context.tart`, after the existing "::READ guide" example.

**Goal:** Make conventions visible as a knowledge resource in rendered plan context files.

**Instructions:**

1. Read `$DOMAINS/work/templates/work-item-context.tart`.
2. Locate the `### Knowledge` section and the existing `::READ` guide example.
3. After that example, add a new convention example in the same format.

**Expected outcome:** The knowledge section includes a convention example alongside the guide example.

### Step `3 / 7` — Add convention examples to `compose-work-context.art`

Add `Examples: "Conventions: Typescript", "Architecure: Art Js"` at the end of "For each knowledge resource, create an item of Type: Knowledge Context and add it to `%knowledge`." in `$DOMAINS/work/routines/compose-work-context.art`.

**Goal:** The compose-work-context routine explicitly lists conventions as a knowledge resource type.

**Instructions:**

1. Read `$DOMAINS/work/routines/compose-work-context.art`.
2. Locate the line "For each knowledge resource, create an item of Type: Knowledge Context and add it to `%knowledge`."
3. Append the examples: `Examples: "Conventions: Typescript", "Architecure: Art Js"`.

**Expected outcome:** The routine text includes convention examples.

### Step `4 / 7` — Add convention examples to `plan.art` structure

Add convention examples to `$DOMAINS/plans/structures/plan.art`.

**Goal:** The plan structure includes convention-related knowledge context examples.

**Instructions:**

1. Read `$DOMAINS/plans/structures/plan.art`.
2. Locate the `context.knowledge` field or relevant knowledge context section.
3. Add convention examples alongside existing knowledge examples.

**Expected outcome:** `plan.art` includes convention knowledge examples.

### Step `5 / 7` — Add convention examples to `knowledge-context.art` type

Add convention examples to `$DOMAINS/work/types/knowledge-context.art`.

**Goal:** The knowledge-context type includes conventions as a recognized knowledge kind.

**Instructions:**

1. Read `$DOMAINS/work/types/knowledge-context.art`.
2. Identify where convention examples would fit (e.g., in the purpose description, shape, or examples section).
3. Add convention examples.

**Expected outcome:** `knowledge-context.art` includes convention examples.

### Step `6 / 7` — Expand `instructions.tart` directive with convention examples

Expand the directive "::TEMPLATE Include only references relevant to all the steps." in `$DOMAINS/plans/templates/instructions.tart` to a broader directive with convention examples.

**Goal:** The instructions template guides agents to include knowledge resources (including conventions) that apply to iteration steps.

**Instructions:**

1. Read `$DOMAINS/plans/templates/instructions.tart`.
2. Locate the line `::TEMPLATE Include only references relevant to all the steps.`.
3. Replace it with: `::TEMPLATE Include knowledge resources that apply to the steps in this iteration. Examples: "Conventions, architecture, patterns, guides.".`
4. Add a new example line: `TEMPLATE EXAMPLE: — Conventions: Typescript – $PROJECT/node_modules/@noodlestan-conventions-typescript/art/index.md`.

**Expected outcome:** The instructions template includes a broader directive with convention examples.

### Step `7 / 7` — Commit `add-conventions-to-planning-structures`

---

#### Commit: `add-conventions-to-planning-structures`

**Policy:** AUTONOMOUS — Agent should commit autonomously, push, and proceed to the next step.

**Message:**

```
build(conventions): Add convention references to planning structures.

- Add convention references to `work-item-abstract.art` structure
- Add convention examples to `work-item-context.tart` knowledge section
- Add convention examples to `compose-work-context.art` routine
- Add convention examples to `plan.art` structure and `knowledge-context.art` type
- Expand `instructions.tart` directive with convention examples
```

---

## Final Verification

**Instructions:**

- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Verify that all 6 files were modified: `work-item-abstract.art`, `work-item-context.tart`, `compose-work-context.art`, `plan.art`, `knowledge-context.art`, `instructions.tart`.
- Verify that convention examples are consistent across all modified files.
- Execute the **Verifying Completion** step as defined in the "Operating Instructions" section.
- Report according to the "How to Report Back to the Delegator" instructions.
