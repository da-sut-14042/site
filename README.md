# DA-SUT course archive

[![Pages](https://github.com/da-sut-14042/site/actions/workflows/pages.yml/badge.svg)](https://github.com/da-sut-14042/site/actions/workflows/pages.yml)

A standalone, static MkDocs archive of the Algorithm Design course material.
The site is Persian and right-to-left. It contains the archive landing page,
six assignments, lectures, and course materials. Administrative pages and
dynamic application controls have been removed.

## Production snapshot

- Source: `da:~/website/student-site`
- Retrieved read-only: 2026-08-22T23:00:22Z
- Media: 195 referenced files archived in the
  [`media-2026-08-23` GitHub Release](https://github.com/da-sut-14042/site/releases/tag/media-2026-08-23)

Files that were not referenced by this archive were not transferred.

The Markdown is a one-time archive snapshot. This repository does not depend
on the production database or backend to build.

The published archive is available at
<https://da-sut-14042.github.io/site/>.

## Run locally

Python 3.11 or newer is required.

```sh
make setup
make serve
```

Open <http://127.0.0.1:8000/>. To produce the static site with strict warning
checks, run:

```sh
make build
```

The generated site is written to `site/`.

## Deployment

Pull requests run the same strict build in GitHub Actions. A successful build
on `main` is deployed automatically to GitHub Pages. The workflow can also be
run manually from the Actions tab; only runs for `main` deploy the site.
