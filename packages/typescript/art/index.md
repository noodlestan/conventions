# Conventions: Typescript

## Principles

## Conventions: Typescript / Filesystem

:READ `./src/filesystem.md` for expanded rules and examples.

- **Directory Module Structure** – Every directory is a module.
- **File as Function** – Every file is a function, every function is a file. Private functions are always extracted to `./private/`.
- **Types Location** – All types in `types.ts` except non-exported types consumed directly in the file they are declared.
- **Constants Location** – All constants in `types.ts` except non-exported constants consumed directly in the file they are declared.
- **Barrel File Imports** – Always import from barrel files (for projects with barrel files).
- **No Deep Module Imports (When Barrels)** – **Summary:** If barrel file exists at `../../module/` import from barrel and not from `../../module/sub-module`.
- **No Private Directory Imports** – Never import from `./private/sub-directory`.
- **No Deep Private Imports** – Never import from `../../module/private`

## Conventions: Typescript / Strict Code

:READ `./src/strict-code.md` for expanded rules and examples.

- **No Any Type** – Never use `any` - use `unknown` instead. If that doesn't work, stop! to replan types.
- **No Non-Null Assertion** – Never use `!` - use `as string` or `as keyof` instead (after the actual run time value has been guaranteed by the correct assertions).

## Conventions: Typescript / Explicit Code

:READ `./src/explicit-code.md` for expanded rules and examples.

- **Verb Function Names** – All functions start with a verb.
- **Functions over Arrows** – Prefer function declarations over arrow functions unless an arrow function is required.
- **No Abbreviations** – Never abbreviate variable names.
- **No Single Character Names** – Single character symbols are absolutely forbidden, except in iterators with obvious meaning: indexes and items of a named collection.
- **All Caps Constants** – Module level constants are always `const ALL_CAPS`.
- **Boolean Naming** – Boolean functions start with `is`, `has`, `should`, or `can`. Boolean variables or non function members DO NOT use prefix.
- **Plural Arrays** – Array names are plural nouns.

## Conventions: Typescript / Types

:READ `./src/types.md` for expanded rules and examples.

- **No Interface** – Use `type` declarations instead of `interface` declarations.
- **No Nested Type Declarations** – Never nest type declarations. Extract nested object types into named types, even when the nested type is only used once.
- **Order Types by Dependency** – Declare types before the types that use them. Types with no dependencies come first, followed by types that depend on them.

## Conventions: Typescript / Flat Code

:READ `./src/flat-code.md` for expanded rules and examples.

- **No Complex Inline Types** – Never declare types with multiple properties, nested members, or unions directly in function signatures. Add a named type above the function declaration instead.
- **No Inline Destructuring** – Never destructure params directly in function signatures, do it in the first lines of the function instead.
- **No Multi-Line Nested Declarations** – Function call arguments should be symbols, literals, or otherwise simple expressions; extract nested expressions, object literals, arrays, and function calls into preceding statements.
- **No Nested Ternaries** – Never nest conditional expressions. Use statements or a helper with early returns instead, while preserving lazy evaluation of branches that may not be needed.
- **No Complex Expressions in Ternaries** – Do not put complex expressions (such as function calls, or compound boolean expressions) directly in a conditional expression. Extract the expression to an intermediate state or helper first.
- **No Function Calls in Literals** – Do not place function calls in literal declarations.
- **No Multi-Line Conditionals** – Do not nest a multiline literal inside a conditional expression. Extract the literal to a named constant before selecting it with the conditional expression.
- **No Chained Array Methods on Multiple Lines** – Do not split a chain of array methods such as `.filter().map().reduce()` across multiple lines. Extract intermediate results instead; single-line chains are allowed.

## Conventions: Typescript / Literals

:READ `./src/literals.md` for expanded rules and examples.

- **Expand Multi-Level Literals** – Literals with more than one level must expand all levels except the lowest.
- **Expand Returned Object Literals** – Object literals with more than one logical field that are returned by a function MUST be expanded into multiple lines.

## Conventions: Typescript / Control Flow

:READ `./src/control-flow.md` for expanded rules and examples.

- **Always Block If/Else** – If and else statements always open a block.
- **Prefer Early Returns** – Prefer early returns over nested control structures.
- **Switch Default Case** – Always include a default case in switch statements.
