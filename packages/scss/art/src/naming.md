# Conventions: SCSS / Naming

## Convention: Root Class Naming

**Summary:** The root class MUST match the component PascalCase name.

**Avoid:**

```scss
.checkbox { ... }
.my-checkbox { ... }
```

**Prefer:**

```scss
.Checkbox { ... }
.Divider { ... }
```

## Convention: Element Class Prefix

**Summary:** Other element selectors MUST use a hyphen prefix.

**Avoid:**

```scss
.Checkbox .control { ... }
.Checkbox .title { ... }
```

**Prefer:**

```scss
.Checkbox .-Control { ... }
.Checkbox .-Title { ... }
.Checkbox .-Icon { ... }
```

## Convention: Hover State Targeting

**Summary:** Hover MUST target `&:not([aria-disabled], [data-inactive]):hover`.

**Prefer:**

```scss
.Checkbox {
  &:not([aria-disabled], [data-inactive]):hover {
    background: var(--hover-bg);
  }
}
```

## Convention: Disabled State Targeting

**Summary:** Disabled MUST target `&:is([aria-disabled], [data-inactive])`.

**Prefer:**

```scss
.Checkbox {
  &:is([aria-disabled], [data-inactive]) {
    opacity: 0.5;
  }
}
```

## Convention: State Selector Naming

**Summary:** State selectors MUST be in kebab case and start with a verb prefix.

**Avoid:**

```scss
.Checkbox .disabled { ... }
.Checkbox .icon-present { ... }
```

**Prefer:**

```scss
.Checkbox .is-disabled { ... }
.Checkbox .has-icon { ... }
```

## Convention: Size Variant Prefix

**Summary:** Size variant selectors MUST use the `size-` prefix.

**Avoid:**

```scss
.Checkbox .small { ... }
.Checkbox .large { ... }
```

**Prefer:**

```scss
.Checkbox .size-small { ... }
.Checkbox .size-medium { ... }
```

## Convention: Visual Variant Prefix

**Summary:** Visual variant selectors MUST use the `variant-` prefix.

**Avoid:**

```scss
.Checkbox .primary { ... }
.Checkbox .plain { ... }
```

**Prefer:**

```scss
.Checkbox .variant-primary { ... }
.Checkbox .variant-plain { ... }
.Checkbox .variant-base { ... }
```

## Convention: Boolean Selector Naming

**Summary:** Boolean selectors MUST be named in kebab case.

**Avoid:**

```scss
.Checkbox .isStretch { ... }
.Checkbox .isInline { ... }
```

**Prefer:**

```scss
.Checkbox .stretch { ... }
.Checkbox .inline { ... }
```
