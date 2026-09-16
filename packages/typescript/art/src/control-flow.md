# Conventions: Typescript / Control Flow

**Purpose:** Improve readability and make control-flow complexity more visible.

**Description:** Define conventions that keep branching, nesting, and alternative execution paths explicit and easy to scan.

**Summary:** If and else statements always open a block.

**Avoid:**

```ts
if (value) return null;
```

**Prefer:**

```ts
if (value) {
  return null;
}
```

**Avoid:**

```ts
if (value) {
  //
} else functionCall();
```

**Prefer:**

```ts
if (value) {
  //
} else {
  functionCall();
}
```

Purpose: Improve readability and make control-flow complexity more visible.

Description: Define conventions that keep branching, nesting, and alternative execution paths explicit and easy to scan.

**Summary:** Prefer early returns over nested control structures.

**Avoid:**

```ts
function processUser(user: User) {
  if (user.isActive) {
    if (user.isVerified) {
      return processActiveVerifiedUser(user);
    }
  }
}
```

**Prefer:**

```ts
function processUser(user: User) {
  if (!user.isActive) {
    return;
  }
  if (!user.isVerified) {
    return;
  }
  return processActiveVerifiedUser(user);
}
```

Purpose: Improve readability and make control-flow complexity more visible.

Description: Define conventions that keep branching, nesting, and alternative execution paths explicit and easy to scan.

**Summary:** Always include a default case in switch statements.

**Avoid:**

```ts
switch (status) {
  case 'active':
    return 'green';
  case 'inactive':
    return 'red';
}
```

**Prefer:**

```ts
switch (status) {
  case 'active':
    return 'green';
  case 'inactive':
  default:
    return 'red';
}
```
