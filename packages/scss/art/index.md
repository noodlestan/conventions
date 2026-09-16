# Conventions: SCSS

## Conventions: SCSS / Filesystem

:READ `./src/filesystem.md` for expanded rules and examples.

- **Component Style Co-location** – Styles for a component MUST be named `[ComponentName].module.scss` and co-located with the component directory.

## Conventions: SCSS / Layers

:READ `./src/layers.md` for expanded rules and examples.

- **Layer Wrapping** – Every SCSS module MUST wrap all of its rules in `@layer <layer>.<nested>.<path>`.
- **Layer Dependencies** – When components compose other mixins, the `@layer`s it depends on must be declared at the top of the file to enforce cascading order. Example: `@layer composables { @layer layout, grid; }`.

## Conventions: SCSS / Naming

:READ `./src/naming.md` for expanded rules and examples.

- **Root Class Naming** – The root class MUST match the component PascalCase name (e.g., `.Checkbox`, `.Divider`).
- **Element Class Prefix** – Other element selectors MUST use a hyphen prefix (e.g., `.-Control`, `.-Title`, `.-Icon`).
- **Hover State Targeting** – Hover MUST target `&:not([aria-disabled], [data-inactive]):hover`.
- **Disabled State Targeting** – Disabled MUST target `&:is([aria-disabled], [data-inactive])`.
- **State Selector Naming** – State selectors MUST be in kebab case and start with verb prefix (e.g., `.is-disabled`, `.has-icon`).
- **Size Variant Prefix** – Size variant selectors MUST use the `size-` prefix (e.g., `size-small`, `size-medium`).
- **Visual Variant Prefix** – Visual variant selectors MUST use the `variant-` prefix (e.g., `variant-primary`, `variant-plain`, `variant-base`).
- **Boolean Selector Naming** – Boolean selectors MUST be named in kebab case (e.g., `.stretch`, `.inline`).

## Conventions: SCSS / Tokens

:READ `./src/tokens.md` for expanded rules and examples.

- **Internal Property Prefix** – Internal component CSS custom properties MUST use `--__` prefix (double underscore) to distinguish from public design tokens. Example: `--__input-height`.
- **Property Scope** – Component CSS custom properties MUST only be referenced within the component's own `@layer` scope.
