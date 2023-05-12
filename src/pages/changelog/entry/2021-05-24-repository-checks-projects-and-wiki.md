---
layout: ../../../layouts/NewsSingleViewLayout.astro
title: "Repository Checks: Projects and Wiki"
pubDate: '2021-05-24'
cover: "/images/changelog/2021-05-24-repository-checks-projects-and-wiki/github-wiki-used-not-used.png"
images: ["/images/changelog/2021-05-24-repository-checks-projects-and-wiki/github-wiki-used-not-used.png"]
description: "We are introducing two new checks to improve the UX/UI of your GitHub page slightly."
---

Providing a good User Interface (UI) and a flawless User Experience is a tough job.
For our Open Source Projects hosted on GitHub, we can't influence both areas.
We are not able to customize our GitHub pages like our MySPace profiles back then.

However, we can ensure that we only show relevant menu items by deactivating not used GitHub Features.

## Wiki

The Wiki is used for documentation, tutorials, guides, benchmarks, or relevant resources like books or related projects.
Good examples are:

* [the programing language Go](https://github.com/golang/go/wiki)
* [the ohmyzsh project](https://github.com/ohmyzsh/ohmyzsh/wiki)
* [the text editor vscode](https://github.com/microsoft/vscode/wiki)
* [the JavaScript library d3.js](https://github.com/d3/d3/wiki)

Many projects on GitHub don't leverage the Wiki functionality, even if this feature is enabled by default when creating a new repository.

In this case, we can disable the Wiki overall because it shows a menu point without having helpful information for the user.
One menu item less to click and to care about.

## Projects

Projects are a powerful feature of GitHub to manage bigger efforts for your projects.
It comes especially handy for the organization of a lot of issues and tracking progress with multiple contributors.
Good examples are:

* [the public roadmap of GitHub](https://github.com/github/roadmap/projects/1)
* [the cross-compile mobile framework flutter](https://github.com/flutter/flutter/projects)
* [the container scheduling and management platform kubernetes](https://github.com/kubernetes/kubernetes/projects)
* [the home automation platform HomeAssistant](https://github.com/home-assistant/core/projects)

Similar to the Wiki, this feature

* is enabled by default when creating a new repository
* often not used at all (due to various reasons)

In this case, this can be disabled to optimize the user flow.

## Now online

Since today, both checks are available in our [Repository Checks dashboard](/changelog/entry/2021-04-26-repository-checks-open-source-best-practices).