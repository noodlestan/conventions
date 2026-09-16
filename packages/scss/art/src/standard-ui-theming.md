# Conventions: SCSS / Standard UI Theming

## Convention: Theme Color Mixin System

**Summary:** Color values MUST be set via the theme color mixin system: `set-palette`, `set-color`, `set-level`, `set-alpha`, `apply-color`.

**Avoid:**

```scss
.Checkbox {
  background: hsla(0, 0%, 0%, 1);
}
```

**Prefer:**

```scss
.Checkbox {
  @include apply-color('background', 'primary');
}
```

## Convention: No Direct HSLA Values

**Summary:** Direct color values in `hsla(...)` format are DEPRECATED and need to be converted to the current color system.

**Forbidden:**

```scss
.Checkbox {
  color: hsla(210, 100%, 50%, 1);
}
```

## Convention: No Hardcoded Colors

**Summary:** Hardcoded color values such as `red` or `#000000` are FORBIDDEN and need to be converted to the current color system.

**Forbidden:**

```scss
.Checkbox {
  color: red;
  background: #000000;
}
```
