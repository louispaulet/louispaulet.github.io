# JEV Playground: Trying Out TypeSafe’s System One Model

![Diagram showing state entering Jev and a typed decision leaving it](./post_images/jev-system-one-hero.svg)

[Read the Jev documentation](https://jevtypesafe.org/) · [Open the playground repository](https://github.com/louispaulet/jev-playground) · [Read TypeSafe’s launch announcement](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

**4 min read.**

## A new kind of model to try

On 15 September 2026, TypeSafe announced Jev as its first public **System One Model**, available in early access. Jev focuses on fast, typed, probabilistic decisions that software can use directly.

That distinction is the reason I made [jev-playground](https://github.com/louispaulet/jev-playground). I wanted a small place to test the model with real inputs, see how its API feels, and work out where a decision model is more useful than asking a general-purpose LLM to produce JSON and hoping the parser survives.

## What is Jev?

TypeSafe describes Jev as an interface for structured decisions that software can consume directly.

A normal generative model takes context and produces a sequence of tokens. Even when I ask for a small enum or a JSON object, I am still asking a text generator to follow a format. The application then has to parse the response, validate the fields, deal with missing or unexpected values, and decide what to do when the model is uncertain.

Jev starts from a narrower interface. I provide a `state` value and a set of typed questions. The questions describe the decision space in advance, and the response contains structured answers with probabilities and confidence. The current primitives are:

- **Choice**: select one option from a fixed list, such as `support`, `logistics`, or `billing`.
- **Noul**: return a probability for a yes/no judgement, such as whether a message is urgent.
- **Score**: place an input on a defined scale, such as negative, neutral, or positive.

Jev complements chat models and focuses on bounded decisions: routing, scoring, filtering, and branching. It sits closer to a fuzzy `if` statement, turning messy context into a branch, score, or gate.

## Why does that matter?

Many software systems need a clear decision at this point in the workflow.

Should this support ticket go to logistics? Is this message urgent enough to page someone? Is a document relevant to a review queue? Which tool should an agent call next? How risky is this request? These questions can be too fuzzy for hand-written rules. A prose explanation adds little to the branch itself.

Using a generative LLM for every one of these steps can be expensive and operationally awkward. The model may return a valid-looking answer with the wrong shape, vary its wording between equivalent inputs, or make the next branch difficult to inspect. A specialized decision model creates a smaller contract: the application defines the possible outcomes, while the model estimates which one fits.

TypeSafe positions Jev around this gap. Its launch material reports 70–500 ms response times, $0.042 per million input tokens, and free output tokens. Those figures come from TypeSafe’s published material; this playground reports no independent benchmark. They explain the intended use: high-volume decisions, real-time loops, routing, scoring, and other places where a slow text-generation call becomes a bottleneck.

Type-safety still leaves room for mistakes. Jev can return a well-formed, confident decision that is wrong. The useful improvement is that the allowed shape is explicit and uncertainty is part of the returned result, so the surrounding program can set thresholds, log disagreements, and fail safely.

## The first playground experiment: surnames

The first example is intentionally simple. I pass a surname as the state and ask Jev to choose between `male`, `female`, and `unisex`. The result prints the selected choice, the probabilities for all three options, and the confidence value.

This example is a compact way to inspect a `Choice` request, compare the winning option with the model’s uncertainty, and see why the criteria need careful definition. It focuses on API behavior and makes no claim about gender inference from names. If the labels are poorly defined, the model has been given a poorly defined decision problem.

The code is deliberately small. The playground uses the Python client and keeps the API key in a local `TYPESAFE_API_KEY` environment variable. I wanted the first loop to be readable enough that the request, the question definition, and the response handling all fit on one screen.

## Choice, Noul, and Score

From there I added two more small interactive tests.

The `Noul` example takes a message and asks whether it expresses urgency. It exposes urgency as a probability, which gives the application a direct threshold: page immediately above 0.9, put it in a review queue between 0.5 and 0.9, or leave it in the normal flow below that.

The `Score` example asks how positive a message is and defines three criteria: **Negative**, **Neutral or mixed**, and **Positive**. It returns a score, a legend mapping the score back to a human-readable label, probabilities across the scale, and confidence.

These tiny tests were useful because they moved the question from “Can Jev classify this?” to “How should an application consume a classification?” The probability distribution is often more useful than the winning label. It gives the program a chance to abstain, ask for review, or send only high-confidence cases to an automated path.

## From toy calls to Wikipedia links

The more interesting experiment is a Wikipedia race. The objective is to start at one English Wikipedia article and reach another by following only links encountered along the way.

The playground first fetches candidate links from Wikipedia, removes the current page and already visited pages, and keeps the result as a bounded choice set. Jev then ranks which links look most promising. The race runs as a batched beam search: it keeps several candidate paths alive, scores the next batch of links, and expands the strongest paths for another hop.

This is a useful stress test for the model’s intended shape. A Wikipedia page can expose hundreds of possible links. The task asks Jev to choose one item from a large, changing set, repeatedly, while preserving state. The repository defaults to a beam width of 3, 200 candidates per choice, 5 winners per batch, 6 hops, and a budget of 40 uncached Jev calls. The search also caches decisions, reports token usage and estimated cost, and writes structured logs so a failed run can be inspected before rerunning.

The playground remains a set of exploratory tools. That is partly the point. Before building a leaderboard, I want to understand how candidate ordering, page popularity, link extraction, beam width, and the call budget affect the result. A search that reaches the target once is interesting; a search whose behavior can be replayed and explained is much more useful.

## What I want to try next

The current repository is a set of probes. Next, I want to compare Jev’s choices with a hand-written heuristic and with a general-purpose LLM on the same Wikipedia races. I also want to record repeated runs so I can measure agreement, confidence calibration, and the cases where the highest-probability link fails to produce the shortest route.

There are practical questions too: how does Jev behave as the choice set grows, when should a large set be split into scoring and selection stages, and what is the right fallback when confidence is low or the API is unavailable? Those are more interesting to me than a single impressive demo because they determine whether the model can be composed into a reliable system.

Jev was released very recently, so there is still a lot to discover. My playground is a small attempt to explore the boundary between language models that generate text and models that make decisions software can act on. If you want to try the same experiments, the [repository](https://github.com/louispaulet/jev-playground) includes the setup instructions, the three primitive examples, the Wikipedia tools, and the knobs for changing the search.

*Published 24 Sep 2026.*
