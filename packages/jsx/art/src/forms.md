# Conventions: JSX / Forms

## Convention: Explicit Select Event Binding

**Summary:** When spreading props onto a native `<select>` element, individual event handlers MUST be bound as explicit attributes (not via spread) to avoid SolidJS issue #1754 (DOM ordering bug for `<option>` selection).

**Avoid:**

```tsx
<select {...props}>
  <option>A</option>
</select>
```

**Prefer:**

```tsx
<select {...rest} onChange={props.onChange}>
  <option>A</option>
</select>
```
