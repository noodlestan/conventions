# Conventions: Typescript

## Principles

## Conventions: Typescript / Filesystem

:READ `./src/filesystem.md` for expanded rules and examples.

- Every directory is a module.
- Every file is a function.
- All types in `types.ts` except non-exported types consumed directly in the file they are declared.
- All constants in `types.ts` except non-exported constants consumed directly in the file they are declared.
- Always import from barrel files (for projects with barrel files).
- Never import from `../../module/sub-module`.
- Never import from `./private/sub-directory`.
- Never import from `../../module/private` (for projects without barrel files).

## Conventions: Typescript / Strict Code

:READ `./src/strict-code.md` for expanded rules and examples.

- Never use `any` - use `unknown` instead. If that doesn't work, stop! to replan types.
- Never use `!` - use `as string` or `as keyof` instead (after the actual run time value has been guaranteed by the correct assertions).

## Conventions: Typescript / Explicit Code

:READ `./src/explicit-code.md` for expanded rules and examples.

- All functions start with a verb.
- Prefer function declarations over arrow functions unless an arrow function is required.
- Never abbreviate variable names.
- Single character symbols are absolutely forbidden.
- Module level constants are always `const ALL_CAPS`.
- Boolean variables and functions start with `is`, `has`, `should`, or `can`.
- Array names are plural nouns.

## Conventions: Typescript / Flat Code

:READ `./src/flat-code.md` for expanded rules and examples.

- Never declare types for complex params directly in function signatures. Add a type above the function declaration for complex params.
- Never destructure params directly in function signatures, do it in the first lines of the function instead.
- Never nest variable declarations that span more than one line. The only accepted multi-line structures are object literals.
- Never nest ternary operators. Create intermediate booleans and do it step by step. Don't break this rule if unnesting would cause early evaluation of potentially unused values, extract to a private helper with early returns instead.
- Never mix conditional expressions and literals that span multiple lines in the same statement. Extract literals to constant first. Don't break this rule if unnesting would cause early evaluation of potentially unused values, extract to a private helper with early returns instead.
- Never mix ternary operators with complex expressions. Extract to intermediate states or helpers.
- Never chain `.filter().map().reduce()` if expression does not fit in one line.

## Conventions: Typescript / Types

:READ `./src/types.md` for expanded rules and examples.

- Never use `interface` — use always `type` instead.

## Conventions: Typescript / Literals

:READ `./src/literals.md` for expanded rules and examples.

- Object literals with more than one level must expand all levels except the lowest.
- Object literals with more than one logical field that are returned by a function MUST be expanded into multiple lines.
- Array literals with more than 3 elements must be expanded into multiple lines.

## Conventions: Typescript / Control Flow

:READ `./src/control-flow.md` for expanded rules and examples.

- If and else statements always open a block.
- Prefer early returns over nested if statements.
- Always include a default case in switch statements.
