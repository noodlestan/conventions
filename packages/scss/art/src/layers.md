# Conventions: SCSS / Layers

## Convention: Layer Wrapping

**Summary:** Every SCSS module MUST wrap all of its rules in `@layer <layer>.<nested>.<path>`.

**Prefer:**

```scss
@layer components.checkbox {
  .Checkbox { ... }
}
```

## Convention: Layer Dependencies

**Summary:** When components compose other mixins, the `@layer`s it depends on must be declared at the top of the file to enforce cascading order.

**Prefer:**

```scss
@layer composables {
  @layer layout, grid;
}

// This enforces that composables.grid is applied after composables.layout
```
