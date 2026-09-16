# Conventions: JSX / Refs

## Convention: Ref Callback Pattern

**Summary:** Refs MUST use the callback pattern and pass through to `props.ref?.(el)`.

**Avoid:**

```tsx
let ref;

<div ref={ref} />;
```

**Prefer:**

```tsx
const setRef = el => {
  // Local ref logic
  props.ref?.(el);
};

<div ref={setRef} />;
```
