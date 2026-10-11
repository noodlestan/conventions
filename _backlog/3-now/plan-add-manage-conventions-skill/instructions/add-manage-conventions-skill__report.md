# Sub-Agent REPORT (#producer)

**Plan:** `add-manage-conventions-skill`

**Iteration Id:** `add-manage-conventions-skill`

**Outcome:** `COMPLETED`

## Evidence

### Changes

| Goal                                                                         | Status |
| ---------------------------------------------------------------------------- | ------ |
| Create the `manage-conventions` skill exposing all five operational routines | DONE   |
| Register it in the four owning agent modes replacing `audit-conventions`     | DONE   |
| Delete the `audit-conventions` skill                                         | DONE   |
| Update the skills index                                                      | DONE   |

#### Files changed

- `.agents/skills/manage-conventions/SKILL.md` — created; frontmatter, Allowed Agent Modes (`architect`, `planner`, `delegator`, `worker`), Allowed Skills, Mandatory Reading, and five commands (`Discover Available Conventions`, `Discover Installed Conventions`, `Install Convention`, `Audit Conventions Setup`, `Audit Convention Module Adoption`), each ::READ-ing and executing its matching conventions routine.
- `.agents/skills/agent-architect/SKILL.md` — Allowed Skills: `audit-conventions` replaced with `manage-conventions`.
- `.agents/skills/agent-planner/SKILL.md` — Allowed Skills: `audit-conventions` replaced with `manage-conventions`.
- `.agents/skills/agent-delegator/SKILL.md` — Allowed Skills: `audit-conventions` replaced with `manage-conventions`.
- `.agents/skills/agent-worker/SKILL.md` — Allowed Skills: `audit-conventions` replaced with `manage-conventions`.
- `.agents/skills/audit-conventions/SKILL.md` — deleted (directory removed).
- `.agents/skills/index.md` — added `manage-conventions` entry (alphabetical, after `execute-plan`); `audit-conventions` was not listed, so nothing to remove.

### Verification

- Setup: `npm ci` from `$WORKSPACE` root — OK.
- Verifying Step: `npm run lint:fix` and `npm run lint` — OK (Prettier clean); pre-commit `ci` hook also passed on commit.
- Commit: `58db50d` `feat(conventions): Add manage-conventions skill` — local only, per commit policy NO PUSH.
- Dangling references (Step 9): `grep -r "audit-conventions"` returns only `audit-conventions-setup` substring matches — the kept `Routine: Audit Conventions Setup` and its file `audit-conventions-setup.art` (referenced by the new skill, intentionally retained). No references to the retired skill itself remain.
- Verifying Completion: `opencode validate` is not a command in the installed opencode CLI (interpreted `validate` as a project path). Intent ("confirm agent modes still resolve") satisfied via `opencode debug skill` — `manage-conventions` resolves, `audit-conventions` absent — and `opencode debug agent {architect,planner,delegator,worker}` — all four agent modes resolve.
- Final checks: skill exists with 5 commands; `manage-conventions` listed in Allowed Skills of all four modes; `audit-conventions` directory deleted; index lists `manage-conventions` and not `audit-conventions`.

## Blockers (if any)

None.
