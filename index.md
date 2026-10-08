# Conventions Inventory

The repository hosts five convention packages under `packages/`. Each package owns
its documents and declares its dependencies as npm dependencies; the authoritative
shape is in each package's `_records/package.art`.

## Convention Packages

| Package    | Path                   | Conventions                                    | Depends on                           |
| ---------- | ---------------------- | ---------------------------------------------- | ------------------------------------ |
| Commits    | `packages/commits/`    | [Commits](packages/commits/art/commits.art)    | —                                    |
| TypeScript | `packages/typescript/` | [TypeScript](packages/typescript/art/index.md) | —                                    |
| JSX        | `packages/jsx/`        | [JSX](packages/jsx/art/index.md)               | `@noodlestan/conventions-typescript` |
| SolidJS    | `packages/solidjs/`    | [SolidJS](packages/solidjs/art/index.md)       | `@noodlestan/conventions-jsx`        |
| SCSS       | `packages/scss/`       | [SCSS](packages/scss/art/index.md)             | —                                    |

## Packages

- `@noodlestan/conventions-commits`
- `@noodlestan/conventions-typescript`
- `@noodlestan/conventions-jsx`
- `@noodlestan/conventions-solidjs`
- `@noodlestan/conventions-scss`
