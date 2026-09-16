# Conventions: SolidJS

## Mandatory Reading

:READ `@noodlestan/conventions-jsx/art/index.md`

## Conventions: SolidJS / Props

:READ `./src/props.md` for expanded rules and examples.

- **Default Props Pattern** – Optional props with defaults MUST be declared using `PickRequired<Props, 'key'>` in a `defaultProps` const and accessed via `() => props.key ?? defaultProps.key`.
- **Parent Component Type** – Components accepting children MUST use `ParentComponent<Props>` and split `'children'` from `PROP_KEYS`.
- **Render Prop Type** – Render prop children MUST use the `RenderProp<T>` type from `@no-comply/solid-primitives` (e.g., `children: RenderProp<{ field: FieldAPI }>`).

## Conventions: SolidJS / Context Providers

:READ `./src/context-providers.md` for expanded rules and examples.

- **Context Provider Wrapping** – Components that coordinate subtrees (Field, Menu, ModalDialog) MUST wrap their content in a `*ContextProvider` and propagate an API object via `contextValue`.
