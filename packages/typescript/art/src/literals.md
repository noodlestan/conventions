# Conventions: Typescript / Literals

**Purpose:** Improve readability by making nested data structures and returned values explicit.

**Description:** Conventions that expand complex structures so their shape and value relationships remain easy to scan and understand.

## Convention: Expand Multi-Level Literals

**Summary:** Literals with more than one level must expand all levels except the lowest.

**Avoid:**

```ts
const foo: { bar: { bar: 33 }; baz: 55 };
```

**Prefer:**

```ts
const foo: {
  bar: { bar: 33 };
  baz: 55;
};
```

## Convention: Expand Returned Object Literals

**Summary:** Object literals with more than one logical field that are returned by a function MUST be expanded into multiple lines.

**Avoid:**

```ts
return { pkg: parts[0], name: parts[1] };
```

**Prefer:**

```ts
return {
  pkg: parts[0],
  name: parts[1],
};
```
