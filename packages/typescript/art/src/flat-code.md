# Conventions: Typescript / Flat Code

## Convention: No Complex Inline Types

**Summary:** Never declare types with multiple properties, nested members, or unions directly in function signatures. Add a named type above the function declaration instead.

**Avoid:**

```ts
function processUser(user: { name: string; email: string; age: number }) {
  // ...
}
```

**Prefer:**

```ts
type UserData = { name: string; email: string; age: number };

function processUserData(user: UserData) {
  // ...
}
```

## Convention: No Inline Destructuring

**Summary:** Never destructure params directly in function signatures, do it in the first lines of the function instead.

**Avoid:**

```ts
function processUserData({ name, email }: UserData) {
  // ...
}
```

**Prefer:**

```ts
function processUserData(user: UserData) {
  const { name, email } = user;
  // ...
}
```

## Convention: No Multi-Line Nested Declarations

**Summary:** Function call arguments should be symbols, literals, or otherwise simple expressions; extract nested expressions, object literals, arrays, and function calls into preceding statements.

**Avoid:**

```ts
const items = processItems(getItems(), useValue ? value : fallback, { name, options });
```

**Prefer:**

```ts
const items = getItems();
const withFallback = useValue ? value : fallback;
const data = { name, options };
const processedItems = processItems(items, withFallback, data);
```

## Convention: No Nested Ternaries

**Summary:** Never nest conditional expressions. Use statements or a helper with early returns instead, while preserving lazy evaluation of branches that may not be needed.

**Avoid:**

```ts
const status = isActive ? (isVerified ? 'active' : 'pending') : 'inactive';
```

**Prefer:**

```ts
type Status = 'active' | 'inactive' | 'pending';

function getStatus(isActive: boolean, isVerified: boolean): Status {
  if (!isActive) {
    return 'inactive';
  }
  if (isVerified) {
    return 'active';
  }
  return 'pending';
}

const status = getStatus(true, false);
```

## Convention: No Complex Expressions in Ternaries

**Summary:** Do not put complex expressions (such as function calls, or compound boolean expressions) directly in a conditional expression. Extract the expression to an intermediate state or helper first.

**Avoid:**

```ts
const result = validate() ? someValue : useValue ? value : fallback;
```

**Prefer:**

```ts
const isValid = validate();
const withFallback = !useValue ? value : fallback;
const processedValue = isValid ? someValue : withFallback;
```

## Convention: No Function Calls in Literals

**Summary:** Do not place function calls in literal declarations.

**Avoid:**

```ts
const data = {
  foo: getFoo(),
  baz: 'qux',
};
const items = [...getItems(), ...moreItems];
```

**Prefer:**

```ts
const foo = getFoo();
const data = {
  foo,
  baz: 'qux',
};
const baseItems = getItems();
const items = [...baseItems, ...moreItems];
```

## Convention: No Multi-Line Conditionals

**Summary:** Do not nest a multiline literal inside a conditional expression. Extract the literal to a named constant before selecting it with the conditional expression.

**Avoid:**

```ts
const result = condition
  ? {
      foo: 'bar',
      baz: 'qux',
    }
  : defaultValue;
```

**Prefer:**

```ts
const data = {
  foo: 'bar',
  baz: 'qux',
};
const result = condition ? data : defaultValue;
```

## Convention: No Chained Array Methods on Multiple Lines

**Summary:** Do not split a chain of array methods such as `.filter().map().reduce()` across multiple lines. Extract intermediate results instead; single-line chains are allowed.

**Avoid:**

```ts
const result = items
  .filter(i => i.active)
  .map(i => item.name)
  .reduce((acc, name) => [...acc, name], []);
```

**Prefer:**

```ts
const activeItems = items.filter(i => i.active);
const names = activeItems.map(i => i.name);
const result = names.reduce((acc, name) => [...acc, name], []);
```
