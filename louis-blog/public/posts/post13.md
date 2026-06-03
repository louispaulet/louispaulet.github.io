# Empty Room Studio: Clearing Furniture with OpenAI Image Edits

![Screenshot of Empty Room Studio showing the upload panel, generation settings, and empty preview queue](./post_images/empty-room-studio.png)

[Open the live demo](https://louispaulet.github.io/empty-room-demo/) · [View the GitHub repo](https://github.com/louispaulet/empty-room-demo) · [Find it in my projects](https://louispaulet.github.io/#/projects)

**3 min read.**

## Overview

Empty Room Studio is a small React, Vite, Tailwind CSS, and Cloudflare Worker demo for a very specific image-editing job: upload a furnished room photo and ask an OpenAI image model to remove furniture and loose objects until only the room shell remains.

The point is not to build a full interior design suite. It is to make one narrow transformation easy to test in the browser:

- Drop in one or more JPG, PNG, or WebP room photos.
- Choose an OpenAI image model, quality, and output size.
- Keep or edit the default prompt.
- Process the queue and compare each before and after pair.
- Download the cleared-room output as a PNG.

I also added it to the portfolio project grid as **Empty Room Studio**, next to the other live AI tools and browser demos.

## Why This Shape?

The app is intentionally split into a static browser UI and a tiny server-side boundary:

- The **frontend** can be hosted safely on GitHub Pages.
- The **Cloudflare Worker** owns the OpenAI API call.
- The **OpenAI key** never reaches the browser.
- The UI talks to the Worker through a single `POST /api/empty-room` endpoint.

That division keeps the demo simple to deploy while avoiding the classic mistake of shipping a secret in a client-side bundle. It also makes the system easy to inspect: the React app manages files and state, while the Worker handles validation, CORS, and the image edit request.

## The Browser Experience

The React app is built around a queue of room images. Each uploaded file gets:

- A local preview URL for the **Before** panel.
- A `queued`, `processing`, `done`, or `error` state.
- An optional generated output URL for the **After** panel.

The UI accepts JPEG, PNG, and WebP files up to 50 MB. Invalid files are rejected before they hit the Worker, which gives fast feedback and keeps the backend surface smaller.

The default prompt is deliberately plain:

```text
Please remove the furniture and most of the objects so that only the walls, floors, and windows remain in this picture.
```

That prompt is visible and editable because the interesting part of the demo is not just the final image. It is seeing how much control a user can get from a focused instruction, a model selector, and a few output settings.

## The Worker Boundary

The Worker exposes one main route:

```text
POST /api/empty-room
```

It expects multipart form data with:

- `image`
- `prompt`
- `model`
- `quality`
- `size`

Before calling OpenAI, it checks that the request is a supported file type, that the prompt is within bounds, and that the model, quality, and size are part of an allowlist. The current allowlists cover `gpt-image-2`, `gpt-image-1.5`, `gpt-image-1`, and `gpt-image-1-mini`, with quality options from `auto` to `high`, `medium`, and `low`.

Once validated, the Worker forwards the upload to OpenAI's image edit endpoint and asks for PNG output. If OpenAI returns base64 image data, the Worker wraps it as a data URL so the browser can show it immediately. If the API returns an image URL instead, the Worker passes that through.

## Deployment Notes

The repo keeps local development and deployment in a small Makefile:

```bash
make up
```

starts both the Vite UI and the local Worker. For production:

```bash
make deploy WORKER_URL=https://empty-room-demo-api.<your-subdomain>.workers.dev
```

deploys the Worker, builds the GitHub Pages bundle with the deployed Worker URL, and publishes the static app.

The Worker also carries an explicit CORS allowlist for local development and `https://louispaulet.github.io`, which keeps the public API surface aligned with the places the UI actually runs.

## What I Like About It

This project is a useful pattern for small AI image tools:

- Keep the frontend static when possible.
- Put the API key behind a minimal Worker.
- Validate user-controlled model settings on the server.
- Make the prompt visible, editable, and easy to reason about.
- Treat every generated output as something the user can inspect, retry, or download.

The implementation is small, but the shape scales well. A future version could add side-by-side diff controls, masking, project folders, prompt presets for real-estate workflows, or batch export. For now, Empty Room Studio is a clean proof of concept: one purpose, one queue, one Worker, and a live build you can open from the portfolio.

*Published 04 Jun 2026.*
