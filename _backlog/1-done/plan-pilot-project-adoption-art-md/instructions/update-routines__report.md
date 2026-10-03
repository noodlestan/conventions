# Sub-Agent REPORT (worker)

**Plan:** `pilot-project-adoption-art-md`

**Iteration Id:** `update-routines`

**Outcome:** `COMPLETED`

## Evidence

### Changes

Renamed the conventions domain `processes/` directory to `routines/`, fixed the internal `::READ` reference, and completed the domain index Routines table so the `audit-conventions` skill directives resolve.

| Step | Goal addressed                                            | Change                                                                                  | Evidence                                                                                       |
| ---- | --------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 1/3  | Rename the conventions domain `processes/` to `routines/` | `git mv` of the directory, preserving all 5 routine files as renames                    | `git show --stat 4fd1385` shows 5 `rename … {processes => routines}` entries, 100% / 96%       |
| 2/3  | Fix the internal `::READ` reference                       | `audit-conventions-setup.art` line 5 points at `…/routines/discover-conventions.art`    | `grep -n` returns the `routines/` path on line 5; no `conventions/processes` reference remains |
| 3/3  | Update the domain index                                   | Routines table repathed to `./routines/` and the 3 missing routines added, 5 rows total | `.agents/domains/conventions/index.md` lines 11–17                                             |

#### Files changed

- `.agents/domains/conventions/processes/audit-convention-module.art` → `.agents/domains/conventions/routines/audit-convention-module.art` — moved, content unchanged.
- `.agents/domains/conventions/processes/audit-conventions-setup.art` → `.agents/domains/conventions/routines/audit-conventions-setup.art` — moved; `::READ` on the `## Uses` block repathed from `$DOMAINS/conventions/processes/discover-conventions.art` to `$DOMAINS/conventions/routines/discover-conventions.art`.
- `.agents/domains/conventions/processes/discover-conventions.art` → `.agents/domains/conventions/routines/discover-conventions.art` — moved, content unchanged.
- `.agents/domains/conventions/processes/write-conventions-drafts.art` → `.agents/domains/conventions/routines/write-conventions-drafts.art` — moved, content unchanged.
- `.agents/domains/conventions/processes/write-conventions.art` → `.agents/domains/conventions/routines/write-conventions.art` — moved, content unchanged.
- `.agents/domains/conventions/index.md` — Routines table paths repathed from `./processes/` to `./routines/`; added rows for `Routine: Audit Conventions Setup`, `Routine: Discover Conventions`, and `Routine: Audit Convention Module Adoption` with the purposes prescribed by the instruction.

### Commits

| Commit    | Message                                                  | Repository            |
| --------- | -------------------------------------------------------- | --------------------- |
| `4fd1385` | `renames(conventions): Rename processes dir to routines` | `$WORKSPACE` (`main`) |

### Push

Pushed to remote: `6d54ff3..4fd1385 main -> main` on `origin` (`git@github.com:noodlestan/workspace.git`).

### Verification

`npm run ci` (lint) — pass: `All matched files use Prettier code style!`. Also run by the `lefthook` pre-commit hook.

Final verification checks, all pass:

- `.agents/domains/conventions/routines/` contains the 5 routine files; `.agents/domains/conventions/processes/` no longer exists.
- `audit-conventions-setup.art` references `$DOMAINS/conventions/routines/discover-conventions.art`.
- `.agents/domains/conventions/index.md` lists all 5 routines under `./routines/`.
- All 3 `::READ` targets in `.agents/skills/audit-conventions/SKILL.md` (`$DOMAINS/conventions/routines/{discover-conventions,audit-convention-module,audit-conventions-setup}.art`) resolve to existing files. The skill already referenced the `routines/` paths before this iteration, so the rename resolves the pre-existing path mismatch.
- No `conventions/processes` references remain in `$WORKSPACE` `.md`/`.art` sources.
