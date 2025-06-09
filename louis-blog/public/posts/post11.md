# GPT YouTube Channel Recommender 🚀

![Screenshot of the GPT YouTube Channel Recommender interface](./post_images/youtube_recomender_project_thumbnail.webp)

[Check the GitHub repo](https://github.com/louispaulet/gpt_recommender)

**2 min read.**

## Overview

The GPT YouTube Channel Recommender is a React + Vite application that suggests new channels based on your current subscriptions. Powered by OpenAI's GPT‑4.1‑nano model, it analyzes your existing list and returns curated recommendations.

### Key Features

- Input and validate your OpenAI API key directly in the app.
- Paste your current YouTube subscriptions (names and URLs).
- Choose how many new channel suggestions you want.
- Filter recommendations with preferred topics or keywords.
- Live URL status checks ensure the links are active.
- Criticizer component refines the first list with improved options.
- Toggle display of duplicate results.
- Import a saved subscriptions HTML file and copy the CSV output.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/louispaulet/gpt_recommender.git
cd gpt_recommender/gpt_reco_app
npm install
```

Then start the development server:

```bash
npm run dev
```

Open the provided URL (usually `http://localhost:5173`) and enter your OpenAI API key to begin.

### Environment Variable

To override the default URL checker, set `VITE_CHANNEL_CHECK_URL` before running the dev server:

```bash
VITE_CHANNEL_CHECK_URL="https://example.com/?url=" npm run dev
```

## Usage

1. Paste your existing channel list.
2. Specify how many new recommendations you’d like.
3. Optionally add keywords to guide the suggestions.
4. Click **Get Recommendations** and review the results with status icons.

## Conclusion

This project makes it easy to discover new YouTube creators tailored to your interests. The GPT‑4.1‑nano model provides curated results, while real‑time link verification ensures each channel is valid.

*Published 25 Jun 2024.*

