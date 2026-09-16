# Sub-Agent REPORT (#producer)

**Plan:** `integrate-conventions-in-workflows`

**Iteration Id:** `create-audit-conventions-skill`

**Outcome:** `COMPLETED`

## Evidence

### Changes

| Goal                                            | Outcome                                                                                                                                      |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Add "Routine: Discover Conventions"             | Created `$DOMAINS/conventions/processes/discover-conventions.art`; `read-work-guides.art` step 5.1 now identifies the "Conventions" section. |
| Add "Routine: Audit Convention Module Adoption" | Created `$DOMAINS/conventions/processes/audit-convention-module.art`.                                                                        |
| Add "Routine: Audit Conventions Setup"          | Created `$DOMAINS/conventions/processes/audit-conventions-setup.art`.                                                                        |
| Create `audit-conventions` skill                | Created `$SKILLS/audit-conventions/SKILL.md` with "Command: Audit Conventions" and "Command: Audit Conventions Setup".                       |

#### Files changed

| File                                                         | Change                                                                                                                                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$DOMAINS/work/routines/read-work-guides.art`                | Step 5.1 now identifies the `"## Recommended Reading", "Records Management", "Knowledge", "Workflows", and "Conventions"` sections.                                                                                    |
| `$DOMAINS/conventions/processes/discover-conventions.art`    | New routine, drafted verbatim from the instruction; `::READ` of Routine: Read Work Guides.                                                                                                                             |
| `$DOMAINS/conventions/processes/audit-convention-module.art` | New routine, drafted verbatim from the instruction.                                                                                                                                                                    |
| `$DOMAINS/conventions/processes/audit-conventions-setup.art` | New routine, drafted verbatim from the instruction; `::READ` of Routine: Discover Conventions.                                                                                                                         |
| `$SKILLS/audit-conventions/SKILL.md`                         | New skill: frontmatter, Allowed Agent Modes (`architect`, `planner`, `delegator`, `worker`), Allowed Skills, Mandatory Reading (`::READ` of `$DOMAINS/conventions/index.md` and the 3 routines), and the two commands. |

**Commits:**

| ID                               | Hash      | Message                                                       | Pushed                  |
| -------------------------------- | --------- | ------------------------------------------------------------- | ----------------------- |
| `add-convention-audit-routines`  | `badf2af` | `conventions(workspace): Add convention audit routines.`      | Yes — `origin/building` |
| `create-audit-conventions-skill` | `abefe50` | `conventions(workspace): Create \`audit-conventions\` skill.` | Yes — `origin/building` |

**Verification evidence:**

- `npm run lint:fix` and `npm run lint` from `$WORKSPACE` root — all files pass Prettier.
- Pre-commit hook `npm run ci` (lint) passed for both commits.
- `npm run ci` from `$CONVENTIONS` root — 5 tasks successful, no pre-existing failures.
- `npm run art-work sanity` from `$WORKSPACE` root — my changes committed and clean; remaining flags are pre-existing (workspace repo record expects `main` while actual branch is `building`; `$CONVENTIONS` checkout has a pre-existing modified `milestone.md` untouched by this task).
- Step "Final Verification" checks pass: `$SKILLS/audit-conventions/SKILL.md` exists with the two commands; the 3 routines exist in `$DOMAINS/conventions/processes/`.

## Blockers (if any)

None.
