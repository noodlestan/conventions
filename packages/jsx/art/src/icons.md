# Conventions: JSX / Icons

## Convention: Import Icons by Path

**Summary:** Icons MUST be imported by path from `lucide-solid`, never from the barrel.

**Avoid:**

```tsx
import { X, ArrowDown } from 'lucide-solid/icons';
```

**Prefer:**

```tsx
import XIcon from 'lucide-solid/icons/x';
import ArrowDownIcon from 'lucide-solid/icons/arrow-down';
```

## Convention: Icon Component Naming

**Summary:** Imported icon components MUST be named with the `Icon` suffix.

**Avoid:**

```tsx
import X from 'lucide-solid/icons/x';
import ArrowDown from 'lucide-solid/icons/arrow-down';
```

**Prefer:**

```tsx
import XIcon from 'lucide-solid/icons/x';
import ArrowDownIcon from 'lucide-solid/icons/arrow-down';
```
