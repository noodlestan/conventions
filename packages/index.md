# Conventions Inventory

> ⚠️ Auto-generated, do not modify.

The repository hosts 6 convention packages under `packages/`. Each package owns
its documents and declares its dependencies as npm dependencies; the authoritative
shape is in each package's `_records/package.art`.

## Convention Packages

| Name / Package                                    | Version | Depends on                           | Index                              |
| ------------------------------------------------- | ------- | ------------------------------------ | ---------------------------------- |
| Commits — `@noodlestan/conventions-commits`       | 0.0.1   | —                                    | —                                  |
| JSX — `@noodlestan/conventions-jsx`               | 0.0.1   | `@noodlestan/conventions-typescript` | [index](./jsx/art/index.md)        |
| SCSS — `@noodlestan/conventions-scss`             | 0.0.1   | —                                    | [index](./scss/art/index.md)       |
| SolidJS — `@noodlestan/conventions-solidjs`       | 0.0.1   | `@noodlestan/conventions-jsx`        | [index](./solidjs/art/index.md)    |
| TypeScript — `@noodlestan/conventions-typescript` | 0.1.0   | —                                    | [index](./typescript/art/index.md) |
| Unit Tests — `@noodlestan/conventions-unit-tests` | 0.1.0   | `@noodlestan/conventions-typescript` | [index](./unit-tests/art/index.md) |

## How to update this index

```bash
npm run generate:package-index
```
