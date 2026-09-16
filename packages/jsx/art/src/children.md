# Conventions: JSX / Children

## Convention: Single Evaluation of Children Props

**Summary:** When a component accepts `props.children` (or any other `: JSX.Element` prop) it MUST NOT evaluate it more than once.

**Avoid:**

```tsx
// evaluates twice
<Show when={props.children}>{props.children}</Show>
```

**Avoid:**

```tsx
// evaluates three times!
const foo = () => (props.children ? true : false);
const bar = () => (props.children ? 1 : 2);
<Show when={foo() || bar()}>{props.children}</Show>;
```

**Prefer:**

```tsx
import { children as childrenMemo } from '@no-comply/solid-primitives';

const children = () => childrenMemo(props.children);
const bar = () => (children() ? 1 : 2);

<Show when={children()}>{children()}</Show>;
```

**Note:** If children consume a context provided by this container then they need contents and evaluation needs to be factored out to a part so that evaluation happens inside the provider.
