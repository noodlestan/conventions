# Conventions: Typescript / Types

**Purpose:** Reduce unnecessary variation, make type structure predictable, and improve readability.

**Description:** Conventions that keep type declarations flat and consistent, avoid unnecessary abstraction, and make dependencies between types immediately visible.

## Convention: No Interface

**Summary:** Use `type` declarations instead of `interface` declarations.

**Avoid:**

```ts
interface User {
  name: string;
  email: string;
}
```

**Prefer:**

```ts
type User = {
  name: string;
  email: string;
};
```

## Convention: No Nested Type Declarations

**Summary:** Never nest type declarations. Extract nested object types into named types, even when the nested type is only used once.

**Avoid:**

```ts
type User = {
  name: string;
  address: {
    street: string;
    city: string;
  };
};
```

**Prefer:**

```ts
type Address = {
  street: string;
  city: string;
};

type User = {
  name: string;
  address: Address;
};
```

## Convention: Order Types by Dependency

**Summary:** Declare types before the types that use them. Types with no dependencies come first, followed by types that depend on them.

**Avoid:**

```ts
type User = {
  address: Address;
};

type Address = {
  street: string;
  city: string;
};
```

**Prefer:**

```ts
type Address = {
  street: string;
  city: string;
};

type User = {
  address: Address;
};
```
