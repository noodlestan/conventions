# Conventions: Unit Tests

**Purpose:** Keep unit tests consistent, readable, and independent of production rules where they would fight test idioms.

**Description:** Unit-test conventions split by category, including conventions to relax base TypeScript conventions where test code would otherwise fight its own idioms.

## Mandatory Reading

:READ `@noodlestan/conventions-typescript/art/index.md`

## Conventions: Unit Tests / TypeScript Overrides

:READ `./src/typescript-overrides.md` for expanded rules and examples.

- **No Multi-Line Nested Declarations (Relaxed)** – In test code, object and array literals passed as call arguments may stay inline, single- or multi-line, including `expect` and `toHaveBeenCalledWith` matchers.
- **No Function Calls in Literals (Relaxed)** – In test code, `vi.fn()`, `vi.spyOn`, `expect.any(...)`, fixture factory calls, and `new Date()` may appear inside literals.

## Conventions: Unit Tests / Naming

:READ `./src/naming.md` for expanded rules and examples.

- **Fixture Factory Naming** – Fixture factories use `make{Construct}Fixture`. Fixtures construct plain data; they never mock.
- **Mock Factory Naming** – Mock factories use `create{Subject}Mock` and live in `test/helpers/{subject}/`. Context, IO, and other object mocks follow the same pattern.
- **Function Mock Naming** – Inline function mocks use `{functionName}Mock`; spies created with `vi.spyOn` use `{functionName}Spy`. No `make` prefix.

## Conventions: Unit Tests / Structure

:READ `./src/structure.md` for expanded rules and examples.

- **Helper Grouping** – Group helpers by domain directory under `test/helpers/{domain}/` — never leave a helper at the helpers root. Port shared utilities instead of re-inventing them.

## Conventions: Unit Tests / Mocking

:READ `./src/mocking.md` for expanded rules and examples.

- **Grouped Mocks** – Grouping related function mocks in a `mocks` object is allowed; access them as `mocks.{functionName}`.
- **Import Style Preference** – Prefer static imports over async imports in `vi.mock()` blocks when possible.
- **Helper Header Comments** – Document helper purpose with `/** @mocks ... */` or `/** @provides ... */` headers.

## Conventions: Unit Tests / Style

:READ `./src/style.md` for expanded rules and examples.

- **Test Description Prefixes** – Test descriptions start with `WHEN`, `FOR`, or `GIVEN` in all caps.
- **Block Spacing** – Separate setup, invocation, and assertion blocks with empty lines.
