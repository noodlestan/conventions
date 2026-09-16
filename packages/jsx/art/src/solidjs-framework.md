# Conventions: JSX / SolidJS Framework

## Convention: Use Show for Conditional Rendering

**Summary:** MUST use SolidJS `<Show>` component for conditional rendering. Ternary and `&&` patterns are NOT allowed for conditional content.

**Avoid:**

```tsx
{
  isVisible && <Modal />;
}
{
  isOpen ? <Dialog /> : null;
}
```

**Prefer:**

```tsx
<Show when={isVisible}>
  <Modal />
</Show>

<Show when={isOpen} fallback={null}>
  <Dialog />
</Show>
```
