# Conventions: Typescript / Filesystem

## Convention: Directory Module Structure

**Summary:** Every directory is a module.

**Avoid:**

```ts
// src/utils/helpers.ts - standalone file not in a module directory
```

**Prefer:**

```ts
// src/utils/index.ts - module entry point
// src/utils/helpers.ts - internal helper within the module
```

## Convention: File as Function

**Summary:** Every file is a function, every function is a file. Private functions are always extracted to `./private/`.

**Avoid:**

```ts
// src/module/processData.ts
function subProcess() {}
export function processData() {}
export function processDataAgain() {}
```

**Prefer:**

```ts
// src/module/private/subProcess.ts
export function processData() {}

// src/module/processData.ts
export function processData() {}

// src/module/processDataAgain.ts
export function processDataAgain() {}
```

## Convention: Types Location

**Summary:** All types in `types.ts` except non-exported types consumed directly in the file they are declared.

**Avoid:**

```ts
// src/utils/doThing.ts
export type doThingOptions = { ... };
export function doThing(options: doThingOptions) {};
```

**Prefer:**

```ts
// src/utils/doThing.ts

// src/utils/doThing.ts
type doThingOptions = { ... };
export function doThing(options: doThingOptions) {};
```

## Convention: Constants Location

**Summary:** All constants in `types.ts` except non-exported constants consumed directly in the file they are declared.

**Avoid:**

```ts
// src/utils/doThing.ts
export const MAX_RETRIES = 3;
export function doThing() { ... }
```

**Prefer:**

```ts
// src/utils/types.ts
export const MAX_RETRIES = 3;

// src/utils/doThing.ts
import { MAX_RETRIES } from './types';
export function doThing() { ... }
```

## Convention: Barrel File Imports

**Summary:** Always import from barrel files (for projects with barrel files).

**Avoid:**

```ts
import { doThing } from '../../utils/doThings';
```

**Prefer:**

```ts
import { doThing } from '../../utils';
```

## Convention: No Deep Module Imports (When Barrels)

**Summary:** If barrel file exists at `../../module/` import from barrel and not from `../../module/sub-module`.

**Avoid:**

```ts
import { doThing } from '../../utils/doThings';
```

**Prefer:**

```ts
import { doThing } from '../../utils';
```

## Convention: No Private Directory Imports

**Summary:** Never import from `./private/sub-directory`.

**Forbidden:**

```ts
import { doThing } from './private/doThings';
```

## Convention: No Deep Private Imports (Without Barrel)

**Summary:** Never import from `../../module/private` (for projects without barrel files).

**Forbidden:**

```ts
import { doThing } from '../../utils/private';
```
