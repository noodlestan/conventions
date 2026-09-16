# Conventions: Typescript / Filesystem

**Purpose:** Make the filesystem structure reflect the module structure and make module boundaries explicit.

**Description:** Conventions for organising directories, files, types, constants, and imports so that module ownership, public APIs, and private implementation boundaries are immediately visible.

## Convention: Directory Module Structure

**Summary:** Every directory is a module.

**Avoid:**

```
src/
└── doThing.ts  # standalone file not in a module directory
```

**Prefer:**

```
src/
└── users/                   # Structured Module
    ├── index.ts             # entry point
    ├── types.ts             # public types
    ├── constants.ts         # public constants
    ├── private/             # private implementation
    │   ├── types.ts         # private types
    │   ├── constants.ts     # private constants
    │   ├── doThing.ts       # private helper
    │   └── thing/           # parts of the private helper
    │       └── doProcess.ts # decomposition of private helper
    └── {resource}/          # resource sub-module
        ├── index.ts         # resource entry point
        ├── types.ts         # public types related to resource
        └── ...              # resource decomposition (private, helpers, sub-modules, ...)
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

**Summary:** When a barrel file exists for a module, import from the barrel instead of importing directly from the module's internal files.

**Avoid:**

```ts
import { doThing } from '../../utils/doThings';
```

**Prefer:**

```ts
import { doThing } from '../../utils';
```

## Convention: No Deep Private Directory Imports

**Summary:** Never import resources from sub-directories of a private directory. Example: `./private/sub-directory/{resource}`.

**Forbidden:**

```ts
import { doThing } from './private/helpers/doThings';
```

## Convention: No External Private Imports

**Summary:** Never import from another module's private directory `../../module/private`.

**Forbidden:**

```ts
import { doThing } from '../../utils/private';
```
