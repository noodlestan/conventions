# Conventions: Typescript / Explicit Code

**Purpose:** Improve readability by making code intent and semantics explicit.

**Description:** Naming and declaration conventions that reduce ambiguity, expose meaning directly in the code, and avoid shorthand or syntactic patterns that obscure what the code does.

## Convention: Verb Function Names

**Summary:** All functions start with a verb.

**Avoid:**

```ts
function data () { ... };
function user () { ... };
```

**Prefer:**

```ts
function getData () { ... };
function createUser () { ... };
```

## Convention: Functions over Arrows

**Summary:** Prefer function declarations over arrow functions unless an arrow function is required.

**Avoid:**

```ts
const processData = () => {};
```

**Prefer:**

```ts
function processData() {}
```

## Convention: No Abbreviations

**Summary:** Never abbreviate variable names.

**Avoid:**

```ts
const usr = { name: 'John' };
const opts = { timeout: 5000 };
```

**Prefer:**

```ts
const user = { name: 'John' };
const options = { timeout: 5000 };
```

## Convention: No Single Character Names

**Summary:** Single character symbols are absolutely forbidden, except in iterators with obvious meaning: indexes and items of a named collection.

**Avoid:**

```ts
const c = 5;
items.reduce(reducer).map(i => transform(i, someValue));
```

**Prefer:**

```ts
const count = 5;
items.map(i => transform(i, someValue));
```

## Convention: All Caps Constants

**Summary:** Module-level literal and regular-expression constants use `const ALL_CAPS`. Constants representing mutable structures, factory return values, configured objects, or other runtime values retain descriptive lower-case naming.

**Avoid:**

```ts
const maxRetries = 3;
const defaultTimeout = 5000;
```

**Prefer:**

```ts
const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT = 5000;
```

**Allowed:**

```ts
const defaultConfig = createConfig();
```

## Convention: Boolean Naming

**Summary:** Boolean functions start with `is`, `has`, `should`, or `can`. Boolean variables or non function members DO NOT use prefix.

**Avoid:**

```ts
const isActive = true;
interface {
  readonly isVisible: boolean;
  active: () => boolean;
}
```

**Prefer:**

```ts
const active = true;
interface {
  readonly visible: boolean;
  isActive: () => boolean;
}
```

## Convention: Plural Arrays

**Summary:** Array names are plural nouns.

**Avoid:**

```ts
const user = ['Alice', 'Bob'];
const result = listItems();
```

**Prefer:**

```ts
const users = ['Alice', 'Bob'];
const itemsResult = listItems();
```
