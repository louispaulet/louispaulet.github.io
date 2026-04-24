# Louis Paulet GitHub Pages Site

This repository contains Louis Paulet's personal GitHub Pages site. The actual React/Vite application lives in `louis-blog/`; the repository root mainly provides Makefile shortcuts and shared source assets.

## Requirements

- Node.js `>=18`
- npm

## Quick Start

From the repository root:

```bash
make install
make run
```

The development server runs the app from `louis-blog/` on port `5173`. If something is already using that port, `make run` clears it before starting Vite.

## Root Commands

- `make install` installs app dependencies with `npm --prefix louis-blog install`.
- `make run` starts the Vite development server on port `5173` after clearing any existing process on that port.
- `make dev` is an alias for `make run`.
- `make build` builds the production app.
- `make deploy` builds and deploys the app with the configured `gh-pages` flow.

## Repository Layout

```text
louispaulet.github.io/
├── Makefile        # Root shortcuts for install, run, build, and deploy
├── README.md       # Repo-level guide
├── agents.md       # Project instructions for coding agents
├── heavy_assets/   # Source and large-format image assets
└── louis-blog/     # Vite + React personal site application
```

## Site Notes

The site uses a strict sharp-corner design language. Do not add rounded corners or border radii to components, assets, or third-party UI defaults.

See `louis-blog/README.md` for app architecture, scripts, routing, and content workflows.
