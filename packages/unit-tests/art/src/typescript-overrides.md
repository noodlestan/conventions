# Conventions: Unit Tests / TypeScript Overrides

**Purpose:** Relax TypeScript conventions where test code would otherwise fight its own idioms.

**Description:** Test-code exemptions from the TypeScript conventions. Each rule names the TypeScript convention it overrides and the nature of the override.

## Convention: No Multi-Line Nested Declarations (Relaxed)

**Overrides:** No Multi-Line Nested Declarations from `@noodlestan/conventions-typescript`

**Summary:** In test code, object and array literals passed as call arguments may stay inline, single- or multi-line, including `expect` and `toHaveBeenCalledWith` matchers.

**Allowed:**

```ts
expect(writeMock).toHaveBeenCalledWith('document', { file: 'README.md', write: true });
```

**Prefer:**

```ts
const expected = { file: 'README.md', write: true };
expect(writeMock).toHaveBeenCalledWith('document', expected);
```

## Convention: No Function Calls in Literals (Relaxed)

**Overrides:** No Function Calls in Literals from `@noodlestan/conventions-typescript`

**Summary:** In test code, `vi.fn()`, `vi.spyOn`, `expect.any(...)`, fixture factory calls, and `new Date()` may appear inside literals.

**Allowed:**

```ts
const data = { createdAt: new Date(), onWrite: vi.fn() };
```
