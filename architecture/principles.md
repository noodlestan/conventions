# Principles: Conventions

**Purpose:** Guide the design and evolution of the Conventions repository and the convention documents authored into it.

The principles behind the package design, the distribution model, and the authoring rules. The mechanisms that serve them live in [authoring.md](authoring.md) and in `records/adr/`.

- **Consistency over variance** — one stated way for each thing, because variance raises cognitive load and turns into drift.
- **Strictness over suggestion** — a rule says what must be true and bans what must not, because a rule that hedges invites the variance it was written to remove.
- **Inheritance over duplication** — one owner for every document, and anything shared inherited from the nearest common package instead of copied, so a refinement lands once instead of forking.
- **Refinement over freeze** — conventions revised incrementally from the feedback of the projects that adopt them, because a rule nobody revises from evidence becomes debt.
- **Release over accumulation** — continuous movement from proposal to adopted, published package, because a refinement that is never distributed never reaches the code it is meant to change.
