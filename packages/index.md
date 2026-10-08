# Conventions Inventory

The repository hosts six convention packages under `packages/`. Each package owns
its documents and declares its dependencies as npm dependencies; the authoritative
shape is in each package's `_records/package.art`.

## Convention Packages

| Package    | Path                   | Conventions                           | Depends on                           |
| ---------- | ---------------------- | ------------------------------------- | ------------------------------------ |
| Commits    | `packages/commits/`    | [Commits](commits/art/commits.art)    | —                                    |
| TypeScript | `packages/typescript/` | [TypeScript](typescript/art/index.md) | —                                    |
| JSX        | `packages/jsx/`        | [JSX](jsx/art/index.md)               | `@noodlestan/conventions-typescript` |
| SolidJS    | `packages/solidjs/`    | [SolidJS](solidjs/art/index.md)       | `@noodlestan/conventions-jsx`        |
| SCSS       | `packages/scss/`       | [SCSS](scss/art/index.md)             | —                                    |
| Unit Tests | `packages/unit-tests/` | [Unit Tests](unit-tests/art/index.md) | `@noodlestan/conventions-typescript` |

## Packages

- `@noodlestan/conventions-commits`
- `@noodlestan/conventions-typescript`
- `@noodlestan/conventions-jsx`
- `@noodlestan/conventions-solidjs`
- `@noodlestan/conventions-scss`
- `@noodlestan/conventions-unit-tests`
