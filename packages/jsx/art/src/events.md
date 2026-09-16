# Conventions: JSX / Events

## Convention: Extract Multi-Line Event Handlers

**Summary:** Event handlers with more than 1 line MUST be extracted to named const functions inside the component body.

**Avoid:**

```tsx
<button
  onClick={() => {
    setCount(count() + 1);
    logEvent('click');
  }}
>
  Click
</button>
```

**Prefer:**

```tsx
const handleButtonClick = () => {
  setCount(count() + 1);
  logEvent('click');
};

<button onClick={handleButtonClick}>Click</button>;
```

## Convention: Inline Handlers for Single Expressions Only

**Summary:** Inline arrow handlers are allowed only for single-expression delegates.

**Avoid:**

```tsx
<button
  onClick={() => {
    doSomething();
    doMore();
  }}
>
  Click
</button>
```

**Prefer:**

```tsx
<button onClick={() => doSomething()}>Click</button>
```

## Convention: Named Event Handler Pattern

**Summary:** Local event handlers must be named `handleThingEvent` after the event `onEvent` and the `Thing` the event qualifier.

**Avoid:**

```tsx
const onPress = () => {};
const click = () => {};
```

**Prefer:**

```tsx
const handleTogglePress = () => {};
const handleButtonClick = () => {};

<ToggleButton onPress={handleTogglePress} />
<Button onClick={handleButtonClick} />
```

## Convention: Explicit Event Suppression

**Summary:** Event handlers MUST call `ev.stopImmediatePropagation()` and `ev.preventDefault()` explicitly when the DOM default must be suppressed.

**Avoid:**

```tsx
const handleSubmit = ev => {
  // Missing explicit suppression
  processForm();
};
```

**Prefer:**

```tsx
const handleSubmit = ev => {
  ev.preventDefault();
  ev.stopImmediatePropagation();
  processForm();
};
```
