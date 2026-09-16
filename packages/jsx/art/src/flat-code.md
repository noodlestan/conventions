# Conventions: JSX / Flat Code

## Convention: No Inline Complex Expressions

**Summary:** Every JSX expression that composes more than one evaluation MUST be extracted into a function.

**Avoid:**

```tsx
<Show when={foo()?.length && !props.bar}>
  <Menu>...</Menu>
</Show>
```

**Prefer:**

```tsx
const showMenu = () => foo()?.length && !props.bar;

<Show when={showMenu()}>
  <Menu>...</Menu>
</Show>;
```
