# My sponsors

Thank you to everyone who sponsors my open-source work:

- [Kubb](https://github.com/kubb-labs/kubb): generates types, clients, hooks, validators, and mocks from OpenAPI.
- [Agents](https://github.com/stijnvanhulle/agents): shared skills and rules for Claude Code, Cursor, and Codex.
- [Template](https://github.com/stijnvanhulle/template): a TypeScript monorepo starter.

[Become a sponsor](https://github.com/sponsors/stijnvanhulle) to support these projects and get your logo on kubb.dev and in the READMEs.

<p align="center">
  <a href="https://github.com/sponsors/stijnvanhulle">
    <img src="https://raw.githubusercontent.com/stijnvanhulle/sponsors/main/sponsors.svg" alt="My sponsors" />
  </a>
</p>

## Add the sponsors image to a README

````markdown
## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/stijnvanhulle">
    <img src="https://raw.githubusercontent.com/stijnvanhulle/sponsors/main/sponsors.svg" alt="Sponsors of Stijn Van Hulle" />
  </a>
</p>
````

## How it works

A daily GitHub Actions workflow runs [sponsorkit](https://github.com/antfu-collective/sponsorkit), then commits the updated `sponsors.*` files. The [portfolio sponsors page](https://stijnvanhulle.be/sponsors) reads `sponsors.json` from this repository.

To run it locally, set `SPONSORKIT_GITHUB_TOKEN` in your environment and run `pnpm install && pnpm build`. Never commit the token.
