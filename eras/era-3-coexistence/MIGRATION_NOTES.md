# Migration notes: type-based → feature-based

## Rule

- All new work goes under `src/features/<name>/`.
- Existing code under `src/components/`, `src/hooks/`, and pages that compose them
  directly is **not** being ported as a project. There is no scheduled rewrite.
- A piece of legacy code moves into a feature folder only when it is already being
  touched for an unrelated reason (bug fix, change request touching that file). Migration
  is a side effect of other work, never the goal of a ticket by itself.

## Folder ownership

| Path | Status | Notes |
|---|---|---|
| `src/components/` | Legacy, shared | Cross-cutting, low-level UI primitives (e.g. `Badge`). Usable by both patterns — see below. |
| `src/hooks/` | Legacy, shared | Cross-cutting hooks with no feature owner (e.g. `useLocalStorage`). |
| `src/app/**/page.tsx` (older pages) | Legacy | Composes directly from `src/components/` and `src/hooks/`. No feature boundary. |
| `src/features/<name>/components/` | New | Feature-owned UI. May import from `src/components/` (shared primitives), not the other way around. |
| `src/features/<name>/hooks/` | New | Feature-scoped UI-state hooks. Not for cross-feature reuse — if a hook is needed by two features, it does not belong here. |
| `src/features/<name>/api/` | New | Data fetching for the feature, via React Query. |
| `src/features/<name>/index.ts` | New | The feature's only public surface. Code outside the feature imports from here, never from the feature's internal paths. |

## What isn't changing

`src/components/` remains the shared UI kit and is usable by both the legacy pages and
the new features (see `ScheduleItem` importing `Badge`). The thing being phased out is
pages reaching directly into an unbounded, unowned grab-bag of hooks/components with no
feature boundary — not shared-primitive reuse itself.

## Example in this codebase

- `src/app/notifications/page.tsx` — legacy pattern, imports `Badge` and
  `useLocalStorage` directly.
- `src/app/scheduling/page.tsx` — new pattern, imports only `ScheduleList` from
  `src/features/scheduling`'s barrel.
