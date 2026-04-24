# Louis Blog App

This directory contains the Vite + React application for Louis Paulet's personal site. It powers the GitHub Pages experience with project cards, Markdown posts, a CV route, analytics consent handling, and a sharp-corner visual system.

## Stack

- React 18
- Vite 5
- Tailwind CSS with `@tailwindcss/typography`
- React Router using `HashRouter`
- Markdown rendering with `react-markdown` and `remark-gfm`
- Google Analytics support through `react-ga4`
- Lazy-loaded CV viewer to keep the main bundle lighter

## Scripts

Run scripts from this directory, or use `npm --prefix louis-blog <script>` from the repository root.

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run deploy
```

- `npm run dev` starts Vite with an increased HTTP header size on fixed port `5173` and refuses to fall back to another port.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across JavaScript and JSX files.
- `npm run deploy` publishes `dist/` with `gh-pages`.

The root `Makefile` also exposes `make install`, `make run`, `make dev`, `make build`, and `make deploy`.

## App Structure

```text
louis-blog/
├── public/
│   ├── post_images/   # Images used by posts and project cards
│   └── posts/         # Markdown blog posts fetched at runtime
├── src/
│   ├── components/    # Shared navigation, cards, posts, analytics, and consent UI
│   ├── pages/         # Route-level pages
│   ├── styles/        # Global Tailwind and design-system CSS
│   ├── App.jsx        # Route shell, layout, analytics, and consent banner
│   ├── PostData.js    # Blog post metadata used by listings
│   └── main.jsx       # React entrypoint and HashRouter setup
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Routes

The app uses `HashRouter`, so deployed URLs are hash-based while route definitions stay simple:

- `/` renders the home page.
- `/about` renders the about page.
- `/projects` renders live project cards.
- `/posts` renders the blog index.
- `/posts/:postId` fetches and renders a Markdown post from `public/posts/`.
- `/cv` lazy-loads the CV viewer.

## Content Workflow

To add a blog post:

1. Add a Markdown file under `public/posts/`, for example `public/posts/post13.md`.
2. Add the matching metadata entry to `src/PostData.js`.
3. Put any post images in `public/post_images/`.
4. Reference images from Markdown with paths that work from the served post context, such as `./post_images/example.webp`.

To add or update a project card, edit the `projects` array in `src/pages/Projects.jsx`. Project images should usually live in `public/post_images/` or another public asset path.

## Design Rule

The entire site must keep sharp 90 degree corners. The global CSS rule in `src/styles/index.css` forces `border-radius: 0 !important` across elements and pseudo-elements; preserve that rule and override any library defaults that try to introduce rounded corners.
