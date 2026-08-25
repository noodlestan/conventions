# Non-Functional Requirements

These NFRs govern the `@noodlestan/conventions` repository. They are
extracted from the architect briefing.

## Self-Contained Repository

- A fresh clone has enough metadata and documentation to understand the repo
  without the workspace checkout.
- The repository carries no workspace planning files or project-specific
  records from this workspace; it carries its own project, namespace, and
  package records under `_records/`.

## Inventory Accuracy

- The project record identifies the packages.
- Namespace records identify their packages

- The convention inventory in README(s), `_records/project.art` , and package records at `packages/*/_records/package.art` are synchronized with the files actually present.

## Package Completeness

- Every reference document belongs to one package; shared use is inherited from
  a base package and is never left as unassigned material.
- Every package has a record, stable path, and declared relationship to any
  package it extends.

## Namespace and Project Records

## Validation Independence

- Validation can run from the repository root without depending on the
  workspace's package graph.
