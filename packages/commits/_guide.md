# Conventions: Commits

Commit conventions for Noodlestan.

## Recommended Reading

Agents SHOULD scan these files for definitions and resource locations when faced with uncertainty or ambiguity that may result from missing resources.

- `_guide.md` — this package overview, layout, and agent interactions.
- `art/commit.art` — the commit convention content.

## Package Layout

```
_guide.md           — this file
_records/           — records (package, npm deployment)
art/                — convention content
CHANGELOG.md        — changelog
```

## Records Management

Records are co-located with the resources they describe in `_records/` directories:

- **Package:** `_records/package.art`
- **Deployment:** `_records/npm-deployment.art`

## Knowledge References

This package maintains its convention content in `art/commit.art`.

## Operating Instructions

### Operating Instructions: Setting Up

**Instructions:**

Run from the repository root (monorepo):

```bash
npm ci # to install dependencies.
```

### Operating Instructions: Verifying Completion

**Instructions:**

Run from this package directory:

```bash
npm run ci # lint
```
