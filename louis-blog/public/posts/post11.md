# GPT YouTube Channel Recommender 🚀

![Screenshot of the GPT YouTube Channel Recommender interface](./post_images/youtube_recomender_project_thumbnail.webp)

[Check the GitHub repo](https://github.com/louispaulet/gpt_recommender)

**2 min read.**

## Overview

The GPT YouTube Channel Recommender is a React + Vite application that suggests new channels based on your current subscriptions. Powered by OpenAI's GPT‑4.1‑nano model, it analyzes your existing list and returns curated recommendations.

This project began as an experiment in user-driven recommendations. All logic runs in the browser, so your API key and subscription data never leave your computer (well, straight to OpenAI, but that's it). Request any number of suggestions, filter by your favorite topics, and even ask the app to critique its own output for better results.

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

## Why Build an Alternative Recommender?

Social media platforms often rely on proprietary recommendation algorithms that
prioritize engagement. While convenient, they can also create **echo bubbles**
where users are repeatedly shown similar content. Over time, this reinforces a
narrow perspective and limits exposure to diverse viewpoints.

With this project, you control the recommendation process. By providing your own
subscriptions and topics of interest, GPT can surface channels outside your
usual YouTube feed. Diversifying recommendations reduces the risk of becoming
trapped in a single content bubble and encourages discovery of new ideas.

Unlike YouTube’s opaque suggestions, this open-source tool lets you tweak
parameters, filter by keywords, and even review the API prompts. It’s a simple
way to gain fresh perspectives while maintaining transparency about how the
recommendations are generated.

## Conclusion

This project makes it easy to discover new YouTube creators tailored to your interests. The GPT‑4.1‑nano model provides curated results, while real‑time link verification ensures each channel is valid.

*Published 09 Jun 2025.*

