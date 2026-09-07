# Nitter, XCancel, and the Case for Small Off-Ramps

![Dark Nitter interface illustration for the self-hosted instance](./post_images/my-nitter-instance.svg)

[Open the live Nitter instance](https://x.thefrenchartist.dev/) · [View the deployment repository](https://github.com/louispaulet/my_nitter) · [Read the Hacker News discussion](https://news.ycombinator.com/item?id=49588988) · [Find it in my projects](https://louispaulet.github.io/#/projects)

**4 min read.**

## The news that prompted it

On 6 September 2026, Hacker News linked to an upstream Nitter update titled **“Nitter and XCancel resume service after legal advice.”** It followed a disruption in which XCancel stopped serving and Nitter instances faced pressure from X Corp's cease-and-desist campaign. The news is a useful reminder that the ability to read public posts can depend on the legal and operational choices of a single platform owner.

I do not want to turn this into a defense of X. I strongly disagree with the way the platform is being handled by its post-truth billionaire owner. But the platform is still where some public information appears first, and sometimes only appears in a practical, readable form there. Transit operators, researchers, local groups, journalists, event organizers, and small projects still publish announcements to it. A platform can be badly governed and still contain information that people need to access.

That is the awkward gap alternative frontends help with: they provide an off-ramp from the platform without requiring every reader to endorse its incentives, install its app, create an account, or participate in its attention economy.

## What I actually deployed

The project is called [`my_nitter`](https://github.com/louispaulet/my_nitter), and the live instance is [x.thefrenchartist.dev](https://x.thefrenchartist.dev/). This is intentionally a modest project. It is **not a fork of Nitter**, and it is not a new frontend implementation. It is a small deployment wrapper around upstream Nitter, with the infrastructure and operational checks needed to host one instance.

The current shape is straightforward:

- Nitter runs in a pinned Docker build on Google Cloud Run.
- Valkey runs beside it as an ephemeral cache.
- Cloud Run can scale to zero and is capped at one instance.
- A dedicated X account was created for this deployment rather than using my normal account.
- The account session is created locally; the X password and TOTP seed stay local, while only the session material and Nitter HMAC key are sent to Google Cloud Secret Manager.

That last point matters. A public-facing proxy that depends on an authenticated upstream account has a real security boundary. The session file is credential-equivalent, so it should be treated like a password: never printed, committed, or baked into a container image. The repository keeps that boundary explicit instead of pretending that a tiny deployment has no operational risk.

## Why free frontends still matter

The case for a free frontend is not that X is good. It is that access and endorsement are different things.

Nitter gives a reader a more limited, legible route to public posts. It can remove some of the pressure to log in, scroll an algorithmic feed, accept the platform's interface decisions, or expose more browsing behavior than necessary. A person can follow a link, inspect a public post, and leave.

That is a small design choice, but it has a larger civic implication. If essential announcements are placed inside a privately controlled feed, then the public needs multiple ways to reach them. An independent frontend does not replace the original source, and it does not make a post true. It creates another access path that can be used by people who do not want an X account or who want to keep their reading separate from the platform itself.

The Hacker News discussion around the disruption made this concrete. Several readers pointed out that public services still use X as an announcement channel, even when their websites and apps are slower or less reliable. That is not an argument for centralizing public information on X; it is an argument for making the information available elsewhere too, and for keeping tools that let people reach it while that transition has not happened.

## Small hosts are part of the answer

One giant alternative frontend is still a single point of failure. A collection of small, independently operated instances is more resilient: each host can choose its own limits, privacy defaults, maintenance schedule, and risk tolerance. If one disappears, another may remain.

This model is not free of trade-offs. Hosting still costs money. Upstream changes can break the service. X can rate-limit or block sessions. A host can receive legal pressure. A one-instance Cloud Run service is deliberately not designed for a public traffic spike, and my instance may be unavailable or incomplete at any time.

Those limitations are not a reason to avoid the experiment. They are the reason to keep the experiment small, honest, and inspectable. The repository contains the deployment wrapper, Docker and Compose configuration, session validation, Google Cloud scripts, and smoke tests. It does not claim to solve the politics of X or to provide a permanent archive.

## An off-ramp, not an excuse

I am hosting this because I want an independent way to read information that still lives on X—not because I want to help the platform grow. I will continue to treat its posts as claims that need context and verification, not as authoritative truth. For durable or important information, the original organization should also publish it on a site it controls, and readers should look for that primary source.

That distinction is the point. Supporting free frontends is compatible with criticizing X, its business model, its owner, and the way public conversation is being managed there. A usable off-ramp gives people more control over access while the broader web works toward less dependence on one billionaire-owned feed.

[Try the public instance](https://x.thefrenchartist.dev/) if you need to read a public post without going through the normal X interface, or [inspect the repository](https://github.com/louispaulet/my_nitter) if you want to see how the small deployment is wired together.

*Published 07 Sep 2026.*
