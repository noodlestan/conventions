# Conventions: Typescript / Strict Code

## Convention: No Any Type

**Summary:** Never use `any` - use `unknown` instead. If that doesn't work, stop! to replan types.

**Avoid:**

```ts
function processData(data: any) {
  return data.foo;
}
```

**Prefer:**

```ts
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null) {
    return (data as { foo: string }).foo;
  }
}
```

## Convention: No Non-Null Assertion

**Summary:** Never use `!` - use `as string` or `as keyof` instead (after the actual run time value has been guaranteed by the correct assertions).

**Avoid:**

```ts
const element = document.getElementById('app')!;
const value = someMap.get('key')!;
```

**Prefer:**

```ts
const element = document.getElementById('app');
if (element !== null) {
  const target = element as HTMLElement;
}

const value = someMap.get('key');
if (value !== undefined) {
  const target = value as string;
}
```
