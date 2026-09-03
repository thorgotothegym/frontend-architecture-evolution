# Frontend Architecture Evolution

A real-world walkthrough of how frontend architecture actually evolves as a
team grows — not the tidy, idealized version you see in most "best
practices" repos, but the messy, honest one: what teams optimize for at
each stage, what they deliberately leave out, and what eventually breaks.

Every era in this repo follows the same fictional product, **FlowDesk** — a
small internal team-operations tool. FlowDesk starts as a simple team
directory. As the team behind it grows, so does the product: task
management gets added, then notifications and scheduling. Each new feature
surface is also what forces the architecture to change — the product and
the architecture evolve together, not separately.

This repo is not a tutorial on "the right way" to structure a frontend
app. It's a case study in tradeoffs: what a small team chooses not to do
yet, why that's usually the correct call, and what eventually makes that
call expensive.

## The timeline

| Era | Team size | What FlowDesk gained | What architecture had to answer |
|---|---|---|---|
| [Era 1 — Two-Person Foundation](eras/era-1-two-person-foundation) | 2 developers | A simple team directory | Minimal tooling, type-based structure, no ceremony |
| [Era 2 — Component Explosion](eras/era-2-component-explosion) | 3 developers | Task management | Component/prop sprawl, testing basics, Storybook, a late data-layer migration |
| [Era 3 — Coexistence](eras/era-3-coexistence) | Mid-to-large team | Notifications & scheduling | Type-based and feature-based structure coexisting on purpose |

## Why "eras" and not branches

Each era lives in its own folder under `main` — not a Git branch. Branches
are built for parallel or in-progress work; this repo is a finished
timeline meant to be browsed, not merged. Folders mean anyone can open two
eras side by side and compare them directly, with a single `git clone`.

## What makes this different

Most architecture repos show you the destination. This one shows the
path — including the parts that don't look good in hindsight. A few
examples you'll find inside:

- A component that grew a second, redundant prop (`compact` /
  `isCompact`) because renaming the old one wasn't worth the risk under
  delivery pressure — and it's still like that.
- A design token system that started as hardcoded values in the app,
  which worked fine until components needed to be shared across teams.
- A data-fetching migration (to React Query) that arrived late enough
  that it meant rewriting hooks that already worked, not just writing
  new ones.
- A testing gap (page-level tests) that was a deliberate prioritization
  call in one era — and became a persistent, unresolved cost by the next.

## How to read this repo

Each era's folder contains:
- A `README.md` explaining the team context, what changed, why, and what
  was deliberately left undone
- Illustrative code (components, hooks, config) representative of that
  era's conventions — not production code, but written to feel like it

You can read the READMEs in order for the full story, or jump straight
into any era's code if you're only interested in one transition.

## About this repo

This project is inspired by real, hands-on experience scaling a frontend
codebase alongside a growing team. Product names, team sizes, timelines,
and code have been fictionalized and simplified — this is not the source
code of any real company or product, and no confidential or proprietary
information is included.