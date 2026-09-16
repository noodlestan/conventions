# Conventions: JSX

## Mandatory Reading

:READ `@noodlestan/conventions-typescript/art/index.md`

## Conventions: JSX / Flat Code

:READ `./src/flat-code.md` for expanded rules and examples.

- **No Inline Complex Expressions** – Every JSX expression composing more than one evaluation MUST be extracted into a named function. Example: `const showMenu = () => foo()?.length && !props.bar;` then `<Show when={showMenu()}>`.

## Conventions: JSX / SolidJS Framework

:READ `./src/solidjs-framework.md` for expanded rules and examples.

- **Use Show for Conditional Rendering** – MUST use SolidJS `<Show>` component. Ternary and `&&` patterns are NOT allowed for conditional content.

## Conventions: JSX / Events

:READ `./src/events.md` for expanded rules and examples.

- **Extract Multi-Line Event Handlers** – Event handlers with more than 1 line MUST be extracted to named const functions inside the component body.
- **Inline Handlers for Single Expressions Only** – Inline arrow handlers are allowed only for single-expression delegates (e.g., `onClick={() => doSomething()}`).
- **Named Event Handler Pattern** – Local event handlers must be named `handleThingEvent` after the event `onEvent` and the `Thing` qualifier (e.g., `handleTogglePress` for `onPress` on `ToggleButton`).
- **Explicit Event Suppression** – Event handlers MUST call `ev.stopImmediatePropagation()` and `ev.preventDefault()` explicitly when the DOM default must be suppressed.

## Conventions: JSX / Icons

:READ `./src/icons.md` for expanded rules and examples.

- **Import Icons by Path** – Icons MUST be imported by path from `lucide-solid` (e.g., `import XIcon from 'lucide-solid/icons/x'`), never from the barrel `lucide-solid/icons`.
- **Icon Component Naming** – Imported icon components MUST be named with the `Icon` suffix (e.g., `ArrowDownIcon`, `CheckIcon`).

## Conventions: JSX / Refs

:READ `./src/refs.md` for expanded rules and examples.

- **Ref Callback Pattern** – Refs MUST use the callback pattern (`const setRef = (el) => { ... }`) and pass through to `props.ref?.(el)`.

## Conventions: JSX / Forms

:READ `./src/forms.md` for expanded rules and examples.

- **Explicit Select Event Binding** – When spreading props onto a native `<select>` element, individual event handlers MUST be bound as explicit attributes (not via spread) to avoid SolidJS issue #1754 (DOM ordering bug for `<option>` selection).

## Conventions: JSX / Children

:READ `./src/children.md` for expanded rules and examples.

- **Single Evaluation of Children Props** – When a component accepts `props.children` (or any `: JSX.Element` prop) it MUST NOT evaluate it more than once. Memoize with `@no-comply/solid-primitives/children`.
