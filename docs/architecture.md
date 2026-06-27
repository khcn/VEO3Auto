# Architecture Skeleton

This repository uses a monorepo layout:

- `apps/web`: Web-facing feature modules and UI state contracts.
- `apps/api`: HTTP routes/controllers for story, transcript, prompt studio, video/image batches, and continuity workflows.
- `packages/domain`: Core entities and domain services.
- `packages/application`: DTOs, use-cases, and ports.
- `packages/infrastructure`: Adapter stubs (VEO3, Whisk/Nano Banana, transcript extraction), queue/storage stubs.
- `workers`: Worker entrypoints for batch and transcript processing.
- `docs`: Architecture and extension notes.

All implementations are intentionally lightweight stubs to keep behavior safe and extension-ready.
