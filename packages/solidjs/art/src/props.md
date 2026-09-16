# Conventions: SolidJS / Props

## Convention: Default Props Pattern

**Summary:** Optional props with defaults MUST be declared using `PickRequired<Props, 'key'>` in a `defaultProps` const and accessed via `() => props.key ?? defaultProps.key`.

**Avoid:**

```tsx
const MyComponent = (props: Props) => {
  const value = props.value || 'default';
};
```

**Prefer:**

```tsx
type Props = {
  value?: string;
};

const defaultProps = {
  value: 'default',
} as PickRequired<Props, 'value'>;

const MyComponent = (props: Props) => {
  const value = () => props.value ?? defaultProps.value;
};
```

## Convention: Parent Component Type

**Summary:** Components accepting children MUST use `ParentComponent<Props>` and split `'children'` from `PROP_KEYS`.

**Avoid:**

```tsx
const MyComponent: Component<Props> = props => {
  const keys = Object.keys(props);
};
```

**Prefer:**

```tsx
const PROP_KEYS = ['value', 'label'] as const;

const MyComponent: ParentComponent<Props> = props => {
  // props.children is available
  const otherKeys = PROP_KEYS;
};
```

## Convention: Render Prop Type

**Summary:** Render prop children MUST use the `RenderProp<T>` type from `@no-comply/solid-primitives`.

**Avoid:**

```tsx
type Props = {
  children: (api: FieldAPI) => JSX.Element;
};
```

**Prefer:**

```tsx
import { RenderProp } from '@no-comply/solid-primitives';

type Props = {
  children: RenderProp<{ field: FieldAPI }>;
};
```
