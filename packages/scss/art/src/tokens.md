# Conventions: SCSS / Tokens

## Convention: Internal Property Prefix

**Summary:** Internal component CSS custom properties MUST use `--__` prefix (double underscore) to distinguish from public design tokens.

**Avoid:**

```scss
.Checkbox {
  --input-height: 32px;
  --divider-style: solid;
}
```

**Prefer:**

```scss
.Checkbox {
  --__input-height: 32px;
  --__divider-style: solid;
  --__action-gap: 8px;
}
```

## Convention: Property Scope

**Summary:** Component CSS custom properties MUST only be referenced within the component's own `@layer` scope.

**Avoid:**

```scss
// In another component's file
.Checkbox {
  height: var(--__input-height);
}
```

**Prefer:**

```scss
@layer components.checkbox {
  .Checkbox {
    height: var(--__input-height);
  }
}
```
