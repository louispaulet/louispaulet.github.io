# Yet Another HATVP Project: A Live, Auditable HATVP Snapshot

![Screenshot of the YAHATVP transparency dashboard showing the latest HATVP snapshot](./post_images/project-yahatvp-dashboard.png)

[Open the live dashboard](https://yahatvp.thefrenchartist.dev/) · [View the YAHATVP repository](https://github.com/louispaulet/YAHATVP) · [Read the Wayback archive repository](https://github.com/louispaulet/hatvp-archive-wayback-machine) · [Find it in my projects](https://louispaulet.github.io/#/projects)

**4 min read.**

## Overview

YAHATVP is short for **Yet Another HATVP Project**. It is a small, auditable weekly ingestion pipeline for the open-data publications of the French Haute Autorité pour la Transparence de la Vie Publique (HATVP), paired with a public dashboard for exploring the latest successful snapshot.

The dashboard is the part you can open immediately. It gives the data a readable front door: snapshot date, generation time, declaration and declarant counts, income and asset coverage, a few high-level signals, and a search route for finding a person or filing. The point is to keep the headline view useful without hiding the provenance underneath it. The **Data & methods** section stays close to the numbers, and individual records can lead back to their source material.

At the time of writing, the dashboard is showing a current snapshot rather than a hand-picked historical extract. That distinction matters for public data: the view should tell you which publication it represents and when it was generated, not make a timeless claim about a changing source.

## Start with the official feed

YAHATVP’s regular path queries the official HATVP endpoints:

- [`liste.csv`](https://www.hatvp.fr/livraison/opendata/liste.csv), the public listing data.
- [`declarations.xml`](https://www.hatvp.fr/livraison/merge/declarations.xml), the structured declaration data.

The pipeline hashes the exact downloaded bytes, preserves immutable raw snapshots, and only moves on to derived data when the source and processing stages succeed. A weekly Cloud Run Job does the finite batch work, while Cloud Scheduler supplies the trigger. The raw stage is separate from the processing stage, so a source can be acquired, checked, and replayed without pretending that a partial run is a complete publication.

The processing cascade is deliberately explicit:

1. Parse and normalize the observed CSV and XML structures.
2. Run data-quality checks for identifiers, row counts, nulls, duplicates, implausible values, and referential integrity.
3. Write version-complete Bronze data, anomaly-annotated Silver data, and latest-version Gold data.
4. Keep the quality report and anomaly registry alongside the analytical tables.

This gives the dashboard a stable boundary. It reads prepared analytical outputs and source-linked records instead of quietly rebuilding data assumptions in the UI. Suspicious but plausible values can be flagged and retained for review; they do not disappear just because they are inconvenient to display.

## Why keep the archive separate?

The official website is the right source for the current weekly view, but it is not the only source worth preserving. Older HATVP dossier endpoints can disappear or change, and a current feed is not a substitute for historical evidence.

That is where [`hatvp-archive-wayback-machine`](https://github.com/louispaulet/hatvp-archive-wayback-machine) comes in. It builds a retained archive from Internet Archive Wayback Machine captures of HATVP PDF and XML dossiers. The repository keeps the source list, download logic, validation checks, and a packed XML bundle that can be replayed later.

YAHATVP can ingest that bundle with its archive pipeline. The archived declarations stay identified as a separate source, with their own provenance, before entering the same quality-controlled Bronze → Silver → Gold cascade. That makes comparisons possible without blending a Wayback capture into the official weekly feed or losing track of where a record came from.

## The 2024 Hugging Face snapshot

There is a second historical fallback: the HATVP declaration snapshot I saved on Hugging Face in April 2024, [`the-french-artist/hatvp_declarations_xml`](https://huggingface.co/datasets/the-french-artist/hatvp_declarations_xml). It is useful precisely because it is fixed. If the live website changes, an older declaration can still be reconstructed from a preserved dataset revision and compared with a newer official publication.

The archive project can rebuild the same declarations bundle format from that dataset, and YAHATVP exposes a separate `wayback_hf` ingestion path for it. The three sources have different jobs:

- **HATVP website**: the current official weekly feed.
- **Wayback Machine archive**: historical captures of files that may no longer be served.
- **Hugging Face snapshot**: a reproducible 2024 copy of the declaration material I had already saved.

The separation is not just bookkeeping. It makes a historical result explainable: a reader can tell whether a row came from the live source, a Wayback capture, or the fixed Hugging Face snapshot.

## What I wanted the dashboard to make obvious

The interface stays intentionally compact, but it surfaces a few things that are easy to lose in a data pipeline:

- **Snapshot identity**: dates and generation times remain visible next to the counts.
- **Scale**: declarations, people, income rows, and observed assets are counted from the same successful snapshot.
- **Version history**: amended filings remain part of the publication history instead of being silently treated as errors.
- **Caveats**: inferred fields, unmapped values, and indicator-style comparisons are labelled as such.
- **Source paths**: search and detail views lead back to the underlying declaration context.

This is a dashboard for reading evidence, not a scorecard for judging people. Amounts and ratios are normalized indicators that help with orientation; they are not a substitute for the declarations or the methodology behind them.

## A small system with a long memory

The interesting part of YAHATVP is not a chart library or a clever query. It is the connection between a live public interface and a source-preserving pipeline. The official site provides the current view, the Wayback project helps recover historical material, and the 2024 Hugging Face snapshot gives the archive another reproducible anchor.

That combination makes the project useful in two directions: someone can open the dashboard and search a declarant in seconds, while someone auditing a number can follow the snapshot, source, processing layer, and quality notes behind it.

[Open YAHATVP](https://yahatvp.thefrenchartist.dev/) to explore the current view, or [read the repository](https://github.com/louispaulet/YAHATVP) for the ingestion, archive, deployment, and validation details.

*Published 30 Aug 2026.*
