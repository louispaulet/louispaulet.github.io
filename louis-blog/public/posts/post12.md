# Groq AllIn Studio: Shipping a Unified AI Playground

When Groq released the AllIn challenge I wanted something more compelling than a pile of disconnected demos. The result is **Groq AllIn Studio**—a single React workspace that wraps twelve assistants, a gallery of Flux-powered image labs, and a Cloudflare Worker proxy behind one immersive shell. It now lives at [groq-allin.thefrenchartist.dev](https://groq-allin.thefrenchartist.dev/) and serves as my go-to playground for showcasing Groq-backed experiences.

![Screenshot of the Groq AllIn Studio landing page](./post_images/groqallin_landing_page.webp)

## Why bundle everything?

I kept joining hackathons and spinning up one-off repos for each idea. That workflow is fine for quick experiments, but it breaks down when you want to iterate, cut releases, and let people explore multiple assistants without changing tabs. AllIn Studio solves that by:

- Using a **shared React + Vite codebase** with a consistent layout, navigation, and analytics.
- Shipping **experience cards** instead of a bloated navbar—the overview page spotlights each lab with deep links, keeping the top-level navigation focused on flagship assistants.
- Consolidating API access through a **Cloudflare Worker** that proxies Groq chat, `/obj` schema calls, RSS aggregation, and Flux image generation.

## Frontend architecture

The frontend lives in the `all_in` directory and leans heavily on composition:

- **Shell layout** – A glassmorphism-inspired gradient anchors the workspace. The top banner introduces the day’s featured builds while the rest of the page renders experience-specific sections.
- **Shared chat primitives** – Every assistant consumes the same `useChatSession` hook for streaming updates, error boundaries, and retry flows. Custom renderers handle STL previews, Pokédex data, or allergy warnings without rewriting business logic.
- **Gallery persistence** – Flux Image Lab, Pizza Maker, and Car Maker share a small localStorage-backed gallery store so users can revisit renders and copy prompts in seconds.
- **Responsive UX** – The layout collapses into stacked sections on phones and keeps the hero call-to-action visible. This matters because I often demo on tablets during meetups.

## Cloudflare Worker backbone

The Worker (`groq-endpoint` in the repo) is the quiet hero of this project. It exposes:

- `POST /chat` for Groq Cloud completions with optional routing to Together’s FLUX endpoints.
- `POST /obj/{schema}` to drive structured JSON responses for Object Maker and Bank Holiday Planner.
- `GET /news/{category}` to aggregate RSS feeds for the News Analyzer assistant.
- `GET /flux/{prompt}` to orchestrate Flux Schnell renders with sane defaults and guardrails.
- `GET /flavor-finder/{food}` to surface Open Food Facts data for AllergyFinder.

Wrangler makes it trivial to dev locally and deploy globally, and the Worker keeps API keys off the client. A thin TypeScript client wraps these routes so the React experiences stay clean and typed.

## Highlighting the experiences

AllIn Studio isn’t just a landing page—it’s a catalogue of shippable tools:

- **AllergyFinder** cross-references Open Food Facts and uses Groq to suggest safe alternatives in context.
- **Object Maker** blends schema design with `/obj` executions, letting me demo structured output without leaving the page.
- **STL Studio** previews meshes inline and suggests slicing settings for the Printers I own.
- **Pokédex** talks to a remote knowledge base while exposing base URL overrides for testing.
- **Flux Image Lab**, **Pizza Maker**, and **Car Maker** all share modifiers, seeds, and galleries to keep prompting fast.
- **SVG Prompt Lab** and **Flag Foundry** tackle text-to-SVG scenarios with a timed reveal mechanic.
- **News Analyzer** and **Six Degrees Of** bring real-time or just-for-fun remixes to the table.
- **Bank Holiday Planner** quietly powers the `/obj` flows with curated JSON schemas.

## Deployment workflow

I kept the operator experience simple:

1. `make install allin` and `make run allin` bootstrap the React workspace.
2. `make deploy allin` wraps the Vite build and pushes the artifacts via the existing deployment script.
3. The Worker deploys separately with `npm run deploy`, meaning I can roll backend fixes without touching the frontend.

Using Make targets keeps everything accessible from the repo root. The README in `all_in/` documents the environment variables, ports, and helper scripts so teammates can ramp quickly.

## What’s next?

Near-term I want to add:

- A **session recorder** that snapshots prompts, responses, and UI state so I can share “runbooks” for the assistants.
- **Multi-modal additions** once Groq’s vision models become generally available.
- Deeper **admin tooling** to toggle experiences on/off without redeploying.

For now, Groq AllIn Studio is my favorite way to demo Groq’s speed and versatility. Give it a spin, and let me know which assistant you want to remix next!
