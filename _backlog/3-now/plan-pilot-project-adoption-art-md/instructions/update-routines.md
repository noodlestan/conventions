# Instructions: `update-routines`

**Plan:** `pilot-project-adoption-art-md`

**Iteration Id:** `update-routines`

## Before you Start

::switch `agent-worker` — switch to the agent-worker agent mode to execute these instructions. Your mode must be `worker` before you start changing files.

These are your instructions.

RULE: If at any point you are instructed to **REPORT A BLOCKER** or you encounter a commit with `policy` set to `MANUAL` execute the instruction in the "## How to Report Back to the Delegator" section below and STOP processing any other instructions.

## How to Report Back to the Delegator

This section describes how to report back to the delegator after completing the instruction.

1. Summarise the current context, asking: are you reporting completion or a BLOCKER?
2. Gather the evidence of changes made and outcomes achieved, or the blocker error details.
3. Use the `render-template` skill with the `.agents/domains/plans/templates/instructions-report.tart` to render your report and write it next to this instruction file: `plan-pilot-project-adoption-art-md/instructions/update-routines__report.md`. No separate delegation record is created.
4. If your prompt included a `DIRECTIVE FEEDBACK:` include the feedback sections in the rendered report.
5. Generate the response and send it back to the delegator.
6. Keep the response terse per the Working Agreements: happy face + up to 3 bullet points (done `update-routines`, created `{artefacts}`, thumbs up). The full trail lives in the report file; never repeat it in chat.

## Path Variables

| Variable       | Resolved Path                      | Purpose                                   |
| -------------- | ---------------------------------- | ----------------------------------------- |
| `$WORKSPACE`   | Current working directory          | Workspace root directory                  |
| `$DOMAINS`     | `$WORKSPACE/.agents/domains/`      | Where domain resources are defined        |
| `$CONVENTIONS` | `$WORKSPACE/checkouts/conventions` | Conventions source code and pilot project |

## Working Agreements

The plan workflow (see the entry point guide → Planning Workflow → Working Together) runs on three working agreements:

1. **This instructions file is self-contained.** Everything you need is in this file plus its mandatory reading — never rely on session memory, chat context, or details relayed by the user.
2. **Your report is mandatory.** The rendered report file carries the full trail: evidence, changes, verification results, blockers, feedback. Your chat response is only a pointer to it.
3. **User interaction is minimal.** The user relays this instructions file to the delegator and expects a light confirmation: a happy face and up to 3 bullet points — done `update-routines`, created `{artefacts}`, thumbs up. If something goes horribly wrong, report the blocker instead of a summary.

## Goals

Rename the conventions domain `processes/` directory to `routines/`, update the domain index, and verify the `audit-conventions` skill resolves its mandatory reading. This addresses the routine path mismatch feedback from the Art MD adoption (`$ART_MD/_backlog/0-archive/2026-09-18-audit-conventions/adoption-process-insights.md`).

## Mandatory Reading

- ::READ `$DOMAINS/conventions/index.md` (Knowledge) — Domain index to update.
- ::READ `$DOMAINS/conventions/processes/audit-conventions-setup.art` (Knowledge) — Routine with the internal `::READ` reference to fix.
- ::READ `$DOMAINS/conventions/processes/discover-conventions.art` (Knowledge) — Routine being referenced.
- ::READ `$DOMAINS/conventions/processes/audit-convention-module.art` (Knowledge) — Routine being moved.
- ::READ `$DOMAINS/conventions/processes/write-conventions-drafts.art` (Knowledge) — Routine being moved.
- ::READ `$DOMAINS/conventions/processes/write-conventions.art` (Knowledge) — Routine being moved.
- ::READ `.agents/skills/audit-conventions/SKILL.md` (Knowledge) — Skill with `::READ` directives to verify.

## Changes

- Step 1 / 3 — Rename `processes/` to `routines/`
- Step 2 / 3 — Fix the internal `::READ` reference
- Step 3 / 3 — Update the domain index and commit

## Steps

### Step `1 / 3` — Rename `processes/` to `routines/`

From `$WORKSPACE`, rename the conventions domain directory:

```bash
git mv .agents/domains/conventions/processes .agents/domains/conventions/routines
```

Verify the 5 routine files are now under `.agents/domains/conventions/routines/`:

- `audit-convention-module.art`
- `audit-conventions-setup.art`
- `discover-conventions.art`
- `write-conventions-drafts.art`
- `write-conventions.art`

### Step `2 / 3` — Fix the internal `::READ` reference

Edit `$DOMAINS/conventions/routines/audit-conventions-setup.art` line 5:

- Change `::READ (Routine: Discover Conventions) FROM `$DOMAINS/conventions/processes/discover-conventions.art``
- To `::READ (Routine: Discover Conventions) FROM `$DOMAINS/conventions/routines/discover-conventions.art``

### Step `3 / 3` — Update the domain index and commit

Edit `$DOMAINS/conventions/index.md`:

- Change the Routines table paths from `./processes/...` to `./routines/...` for the two existing rows (Write Conventions Drafts, Write Conventions).
- Add the missing routines to the Routines table:
  - Routine: Audit Conventions Setup — `./routines/audit-conventions-setup.art` — Audit whether conventions are properly set up in a project and report on the setup.
  - Routine: Discover Conventions — `./routines/discover-conventions.art` — Discover all conventions referenced in the guides of a base path.
  - Routine: Audit Convention Module Adoption — `./routines/audit-convention-module.art` — Audit adoption of a convention module in a project's directory.

#### Commit: `rename-conventions-processes-to-routines`

**Policy:** AUTONOMOUS — Agent should commit autonomously, push, and proceed to the next step.

**Message:**

```
renames(conventions): Rename processes dir to routines

- Rename 5 routine files from `processes/` to `routines/`.
- Update internal `::READ` reference in `audit-conventions-setup.art`.
- Add missing routines to the index and link the Routines table at `./routines/`.
```

## Final Verification

- Verify that `.agents/domains/conventions/routines/` contains the 5 routine files and `.agents/domains/conventions/processes/` no longer exists.
- Verify that `audit-conventions-setup.art` references `$DOMAINS/conventions/routines/discover-conventions.art`.
- Verify that `$DOMAINS/conventions/index.md` lists all 5 routines under `./routines/`.
- Verify that the `audit-conventions` skill `::READ` directives (`$DOMAINS/conventions/routines/*.art`) resolve to existing files.
- Verify that commits have been executed and pushed (or not pushed) according to the commit's policy.
- Report according to the "How to Report Back to the Delegator" instructions.
