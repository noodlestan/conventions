# Conventions: SolidJS / Context Providers

## Convention: Context Provider Wrapping

**Summary:** Components that coordinate subtrees (Field, Menu, ModalDialog) MUST wrap their content in a `*ContextProvider` and propagate an API object via `contextValue`.

**Avoid:**

```tsx
const Field = (props: FieldProps) => {
  return <div>{props.children}</div>;
};
```

**Prefer:**

```tsx
const Field = (props: FieldProps) => {
  const api = createFieldAPI();

  return <FieldContextProvider value={api}>{props.children}</FieldContextProvider>;
};
```
