# Conventions: SCSS / Filesystem

## Convention: Component Style Co-location

**Summary:** Styles for a component MUST be named `[ComponentName].module.scss` and co-located with the component directory.

**Avoid:**

```scss
// styles/components/checkbox.scss
.checkbox { ... }
```

**Prefer:**

```scss
// src/components/Checkbox/Checkbox.module.scss
.Checkbox { ... }
```
