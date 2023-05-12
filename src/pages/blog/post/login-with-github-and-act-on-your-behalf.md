---
layout: ../../../layouts/NewsSingleViewLayout.astro
title: 'Login with GitHub and "Act on your behalf"'
pubDate: '2021-04-22'
author: 'Andy Grunwald'
authorLink: 'https://twitter.com/andygrunwald'
cover: '/images/blog/login-with-github-and-act-on-your-behalf/cover-picture.png'
images: ['/images/blog/login-with-github-and-act-on-your-behalf/cover-picture.png']
description: 'A few users have contacted us saying that the phrase "Act on your behalf", which appears during the first login with GitHub, discourages them from using sourcectl. This post explains why this phrase is misleading and why we can''t act on your behalf.'
---

A few users have contacted us saying that the phrase "_Act on your behalf_", which appears during the first login with GitHub, discourages them from using sourcectl.
This post **explains** why this phrase is misleading and **why we can't act on your behalf**.

> **tl;dr**:
>
> We are **not able to act on your behalf**.
> We **can read your email address** entered in your GitHub.com account; **nothing else**.
> This is a limit by the defined OAuth Scope _Email addresses (read)_.
> In this case, the sentence "Act on your behalf" is misleading and not in our control.

## User login at sourcectl

sourcectl is leveraging [GitHub's OAuth 2.0 Authorization workflow](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) to sign in users on our platform.

When you login into sourcectl for the first time, GitHub verifies your GitHub identity and prompts you with an authorization screen for the [sourcectl GitHub app](https://github.com/apps/sourcectl).
You can see an example of the screen on top of this article on the right side.

This authorization screen is essential because it lists all permissions requested by the [sourcectl GitHub app](https://github.com/apps/sourcectl).
In the context of this authorization model, the permissions are called [OAuth 2.0 Scopes](https://oauth.net/2/scope/).

Every owner of a GitHub App can decide which permissions to request.
And with [over 25 available scopes](https://docs.github.com/en/developers/apps/scopes-for-oauth-apps#available-scopes), the list is long.

## What sourcectl can do with your account

sourcectl is requesting one OAuth Scope: `user:email`.

This scope grants the platform read access to a user's email addresses.
In practice, this means we can read the data you have entered at [github.com/settings/emails](https://github.com/settings/emails).

From this data, we are using your _primary address_ for identification and contact purposes.

API-wise, we can make these calls:

- [List public email addresses for the authenticated user](https://docs.github.com/en/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)
- [List email addresses for the authenticated user](https://docs.github.com/en/rest/reference/users#list-email-addresses-for-the-authenticated-user)

## GitHub's _Act on your behalf_

The phrase _Act on your behalf_ is a hardcoded string on GitHub's OAuth2 authorization screen.
Sadly, it is not in our control.

**In our scenario, this phrase is misleading.**
**We can only read your email address; nothing else.**

Other community members [facing similar challenges](https://github.community/t/enable-you-to-trigger-actions-in-github/117938/5) and GitHub is having this on their radar.
GitHub Staff [confirmed _that this is poorly and confusingly worded for this kind of scenario_](https://github.community/t/why-does-this-forum-need-permission-to-act-on-my-behalf/120453/2) ([github.community](https://github.community/) is the service in question here, but applies the same settings like sourcectl).

While we understand the security and transparency aspect and the good intentions of this phrase, services that integrate with GitHub suffer from this via concerned customers.
We are looking forward to GitHub's iteration and happy to support wherever we can.

## Final words

If you have further questions about this, please reach out and get in contact with us.
Either via [twitter @sourcectl](https://twitter.com/sourcectl) or [GitHub sourcectl/feedback](https://github.com/sourcectl/feedback).

Happy to talk to you.
