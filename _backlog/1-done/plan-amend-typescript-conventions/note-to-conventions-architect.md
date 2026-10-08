# Note to the Conventions Architect

**Purpose:** Fold the solved ambiguities from the codec-bin audit into the next TypeScript conventions release. All items below were ruled by the plan owner — no ambiguity remains; they are amendments and clarifications, not open questions.

**Source of record:** `## Decisions` in the audit attachment `plan__audit.md`, art-md-building checkout: `$PROJECT/_backlog/3-now/plan-consolidate-codec-bin/plan__audit.md`.

**Already landed:** the Unit Test conventions were rewritten from their own decisions and split into `$PROJECT/conventions/unit-tests/{index,naming,structure,mocking,style,typescript-overrides}.md`. Test-side exemptions live in `typescript-overrides.md` — cross-reference them here, do not duplicate.

## Amendments — TS: amend

| #   | Convention                  | Amendment                                                                                                                                                                                 |
| --- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | No Abbreviations            | Add an allowlist: `ctx`, `ts`, `op`, `dir` are not abbreviations.                                                                                                                         |
| 3   | Constants Location          | Summary contradicts Directory Module Structure: state that exported constants live in `constants.ts` and that `types.ts` is types only (the 8 existing `constants.ts` files are correct). |
| 4   | All Caps Constants          | Scope the rule to exported constants from `constants.ts`. Module-level bindings such as `config`, `program`, `mocks`, `codec` are not constants.                                          |
| 5   | Verb Function Names         | Allow noun-named function properties when they are getters or return a semantically obvious data structure (`message`, `timing`, `errorSerialized`, `all` stay).                          |
| 7   | File as Function            | Add an entry-point exemption: shebang entry scripts and side-effect scripts (`bin/codec.ts`, `bin/parse.ts`, `bin/serialize.ts`) are not covered by the rule.                             |
| 16  | No Nested Type Declarations | Distinguish _simple_ from _complex_ nested inline types with examples; `{ mode: LogVerbosity }` is simple and may stay inline.                                                            |

## Scope confirmations — fold into convention text as clarifications

| #   | Convention                        | Confirmation                                                                                                                                                                                                                                                |
| --- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | Types Location                    | Convention stands: types not used outside their file must not be exported (the four offenders in bin are code changes, not text changes).                                                                                                                   |
| 8   | No Function Calls in Literals     | `new` counts as a function call; production scope. Test-code exemptions (`vi.fn()`, `expect.any`, fixture calls) are owned by `conventions/unit-tests/typescript-overrides.md` — cross-reference only.                                                      |
| 9   | No Multi-Line Nested Declarations | Confirmed production scope: nested calls that fit on one line are allowed; nested object/array literals and nested functions are **not** allowed even if they fit on one line — extract into a preceding statement. Tests are exempt (unit tests override). |
| 17  | Functions over Arrows             | No borderline allowance: an arrow assigned to a variable or returned where a function declaration/expression fits is a violation.                                                                                                                           |

## Out of this note

- **Code changes** — consumed by Iteration: Apply CLI Conventions (decisions 2, 6, 11, 13, 17 sites).
- **Unit-test conventions** — fully handled in `$PROJECT/conventions/unit-tests/` (decisions 10, 11, 12, 14, 15).
- **Observations** — no convention impact; tracked in `plan__audit.md` → `## Observations` (entry-point duplication, missing test coverage, type-assertion escapes, import style inconsistency).

**Release:** publish a new version of `@noodlestan/conventions-typescript` after the amendments land.
