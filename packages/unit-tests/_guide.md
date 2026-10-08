# Conventions: Unit Tests

Unit test conventions for Noodlestan.

## Recommended Reading

Agents SHOULD scan these files for definitions and resource locations when faced with uncertainty or ambiguity that may result from missing resources.

- `_guide.md` — this package overview, layout, and agent interactions.
- `art/index.md` — the unit tests convention index.
- `art/src/{group}.md` — the unit tests convention content per group.

## Package Layout

```
_guide.md           — this file
_records/           — records (package, npm deployment)
art/index.md        — the convention index
art/src/{group}.md  — convention content per group
CHANGELOG.md        — changelog
```

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Package:** `_records/package.art`
- **Deployment:** `_records/npm-deployment.art`

## Knowledge References

This package maintains its convention content in `art/index.md` and `art/src/{group}.md`.

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Step

**Instructions:**

Run from this package directory:

```bash
npm run lint:fix # to fix formatting issues automatically
npm run lint # to report other issues (prettier, eslint, tsc --noEmit)
```
