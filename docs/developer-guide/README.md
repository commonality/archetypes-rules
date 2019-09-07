# Developer Guide

> <img align="bottom" alt="code" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/code.svg">
> This guide is for those who want to contribute code to **@archetypes/rules**.
> This guide describes how to set up your development environment so that you
> can build and test **@archetypes/rules**.

## Table of Contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of Contents) -->

-   [1. Recommended skills](#1-recommended-skills)
-   [2. Development software](#2-development-software)
-   [3. Getting the source code](#3-getting-the-source-code)
-   [4. Installing dependencies](#4-installing-dependencies)
-   [5. Configuration](#5-configuration)
-   [6. Testing](#6-testing)
    -   [6.1. Running tests](#61-running-tests)
    -   [6.2. Troubleshooting](#62-troubleshooting)
-   [7. Source code style guidelines](#7-source-code-style-guidelines)
-   [8. DevSecOps](#8-devsecops)
-   [9. Design](#9-design)
-   [10. Roadmap](#10-roadmap)

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Recommended skills

In order to work with **@archetypes/rules** as a developer, we recommend you feel
comfortable with:

| Skill                                                | Reason                                                                                                     |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![code][octicon-code] JavaScript                     | **@archetypes/rules** is written in JavaScript (CommonJS)                                                   |
| ![markdown][octicon-markdown] Documentation          | Docs build community and enable asyncronous collaboration                                                  |
| ![package][octicon-package] NPM                      | We use the npm dependency manager and publish to the npm public registry                                   |
| ![platform][octicon-server] Node.js                  | **@archetypes/rules** runs on Node.js                                                                       |
| ![terminal][octicon-terminal] Command-line-interface | We use the CLI to build, test, and publish **@archetypes/rules**                                            |
| ![tests][octicon-beaker] Unit testing                | Unit tests are a form of executable documentation that make collaboration, fixes, and refactoring possible |

If that sounds like you, then continue reading to get started.

## 2. Development software

Before you can build and test **@archetypes/rules**, you must install and
configure the following products on your development machine:

1.  [Git ![link-external][octicon-link-external]](http://git-scm.com)

    _Why:_

    > **@archetypes/rules** is hosted on GitLab and uses Git for source control.
    > In order to obtain the source code, you must first install Git on your
    > system. Instructions for installing and setting up Git can be found at
    > <https://help.github.com/articles/set-up-git>.

1.  [Node.js ![link-external][octicon-link-external]](http://nodejs.org),
    (version specified in the engines field of
    [`package.json`](../package.json)).

    _Why:_

    > **@archetypes/rules** uses Node.js modules to generate tables of contents,
    > version, and publish documentation.

1.  **NPM** (which installs with Node.js) or
    [Yarn ![link-external][octicon-link-external]](https://yarnpkg.com)

    _Why:_

    > NPM and Yarn install and update `@archetypes/rules's` third-party
    > dependencies.

## 3. Getting the source code

Fork and clone the **@archetypes/rules** repository:

1.  [**Sign in**](https://github.com/login) to Gitlab.
1.  [**Fork**](https://docs.github.com/ee/gitlab-basics/fork-project.html#how-to-fork-a-project)
    the
    [main **@archetypes/rules** repository](https://github.com/@archetypes/rules/signatures/forks/new)
    (aka, "`origin`").
1.  **Clone _your_ fork** of the **@archetypes/rules** repository and define an
    `upstream` remote pointing back to the **@archetypes/rules** repository that
    you forked in the first place.

    > ```shell
    > # Clone your GitLab repository:
    > git clone git@github.com:<your-account>/@archetypes/rules.git
    >
    > # Go to the repo root directory:
    > cd @archetypes/rules
    >
    > # Add the main GitLab repository as an upstream remote
    > # to your repository:
    > git remote add upstream https://github.com/@archetypes/rules/signatures.git
    > ```

* * *

<details>

<summary><strong><img alt="directory structure" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-directory.svg" height="30" width="30" valign="middle"> Toggle project directory structure view...</strong></summary>

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=../../) -->

    signatures/
    ├─┬ .gitlab/
    │ ├─┬ issue_templates/
    │ │ ├── ADR.md
    │ │ ├── Defect.md
    │ │ ├── Feature.md
    │ │ ├── Metric.md
    │ │ └── Refactoring.md
    │ ├─┬ merge_request_templates/
    │ │ └── merge_request.md
    │ └─┬ rc/
    │   ├─┬ bash/
    │   │ └── .envvarsrc
    │   ├─┬ jsdoc/
    │   │ └── conf.json
    │   ├─┬ labels/
    │   │ ├── create-group-labels.js
    │   │ ├── delete-group-labels.js
    │   │ └── labels.json
    │   ├─┬ md/
    │   │ ├── .remarkignore
    │   │ ├── .remarkrc.yml
    │   │ └── markdown.config.js
    │   ├─┬ sonar/
    │   │ └── scan.js
    │   └── eslint-rules.js
    ├─┬ .vscode/
    │ ├── launch.json
    │ └── settings.json
    ├─┬ contributing/
    │ └── STYLE_GUIDES.md
    ├─┬ dist/
    │ └── @archetypes/rules.js
    ├─┬ docs/
    │ ├─┬ .ci/
    │ │ ├── eslint-rules
    │ │ └── signatures2summary.js
    │ ├─┬ adr/
    │ │ ├── adr-0001-architecture-decision-record-use-adrs.md
    │ │ ├── adr-0002-architecture-decision-record-modular-design.md
    │ │ ├── adr-0003-architecture-decision-record-adopt-googleapis%2fnodejs-dlp-interfaces.md
    │ │ └── README.md
    │ ├─┬ developer-guide/
    │ │ ├── codacy-ebook-metrics.pdf
    │ │ ├── collaborator-guide.md
    │ │ ├── mozilla-community-metrics-community-builders.pdf
    │ │ └── README.md
    │ ├─┬ includes/
    │ │ ├── configuration-details.md
    │ │ ├── eg-convert-json-to-signatures.js
    │ │ └── octicons.md
    │ ├─┬ maintainer-guide/
    │ │ ├─┬ governance-models/
    │ │ │ ├── benevolent-dictator-governance-model.md
    │ │ │ ├── governance-role-terminology-comparision.md
    │ │ │ ├── loosely-coupling-work-from-orgs.md
    │ │ │ ├── meritocratic-governance-model.md
    │ │ │ └── README.md
    │ │ ├── codacy-ebook-code-reviews.pdf
    │ │ ├── displaying-product-maturity.md
    │ │ ├── governance.md
    │ │ ├── issues.md
    │ │ ├── merge-requests.md
    │ │ ├── README.md
    │ │ └── releases.md
    │ └── README.md
    ├─┬ lib/
    │ ├─┬ __tests__/
    │ │ ├─┬ __fixtures__/
    │ │ │ ├── gl-got-resp-failure.json
    │ │ │ ├── gl-got-resp-success.js
    │ │ │ ├── options.json
    │ │ │ ├── regexes.json
    │ │ │ └── signatures.json
    │ │ ├─┬ __mocks__/
    │ │ │ └── is-main.js
    │ │ ├── @archetypes/rules.test.js
    │ │ └── env-config.test.js
    │ ├─┬ gitlab/
    │ │ └─┬ prohibited-file-names/
    │ │   ├─┬ __tests__/
    │ │   │ ├── prohibited-file-names.test.js
    │ │   │ └── to-expression.test.js
    │ │   ├─┬ filter/
    │ │   │ └── by-fs-parts.js
    │ │   ├── index.js
    │ │   └── to-expression.js
    │ ├─┬ signature/
    │ │ ├─┬ __tests__/
    │ │ │ ├── signature-class.test.js
    │ │ │ └── signature.test.js
    │ │ ├── index.js
    │ │ ├── json-re2-replacer.js
    │ │ ├── match.js
    │ │ ├── null-signature.js
    │ │ ├── signature.js
    │ │ ├── to-re2.js
    │ │ ├── valid-signature-parts.js
    │ │ └── valid-signature-types.js
    │ ├── env-config.js
    │ └── index.js
    ├── .adr.json
    ├── .all-contributorsrc
    ├── .editorconfig
    ├── .env.defaults
    ├── .env.schema
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .eslintrc.yaml
    ├── .fossa.yml
    ├── .gitattributes
    ├── .gitignore
    ├── .gitlab-ci.yml
    ├── .npmrc
    ├── CHANGELOG.md
    ├── code-of-conduct.md
    ├── CONTRIBUTING.md
    ├── @archetypes/rules-1.0.4.tgz
    ├── files_blacklist.yml
    ├── jest.config.js
    ├── LICENSE
    ├── NOTICE.md
    ├── npm-shrinkwrap.json
    ├── package.json
    ├── README.md
    ├── ROADMAP.md
    ├── rollup.config.js
    └── signatures.json

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

* * *

## 4. Installing dependencies

Next, install the JavaScript modules needed to build and test
**@archetypes/rules**:

```shell
# Install all project dependencies (package.json)
npm install
```

* * *

<details><summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/package.svg" height="30" width="30" valign="bottom"> <strong>View current dependencies for @archetypes/rules...</strong></summary>

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE) -->

| **Dependency**                                                                                                                                         | **Description**                                                                                                               | **Version** | **License**  | **Type**   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ---------- |
| [debug@4.1.1](https://github.com/visionmedia/debug#readme)                                                                                             | small debugging utility                                                                                                       | 4.1.1       | MIT          | production |
| [dotenv-extended@^2.3.0](https://github.com/keithmorris/node-dotenv-extended#readme)                                                                   | A module for loading .env files and optionally loading defaults and a schema for validating all values are present.           | 2.4.0       | MIT          | production |
| [fs-extra@7.0.1](https://github.com/jprichardson/node-fs-extra)                                                                                        | fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.        | 7.0.1       | MIT          | production |
| [git-repo-info@^2.1.0](https://github.com/rwjblue/git-repo-info)                                                                                       | Retrieve current sha and branch name from a git repo.                                                                         | 2.1.0       | MIT          | production |
| [lodash.set@^4.3.2](https://lodash.com/)                                                                                                               | The lodash method `_.set` exported as a module.                                                                               | 4.3.2       | MIT          | production |
| [lodash.template@4.4.0](https://lodash.com/)                                                                                                           | The lodash method `_.template` exported as a module.                                                                          | 4.4.0       | MIT          | production |
| [lodash.topairs@^4.3.0](https://lodash.com/)                                                                                                           | The lodash method `_.toPairs` exported as a module.                                                                           | 4.3.0       | MIT          | production |
| [re2@1.8.4](http://github.com/uhop/node-re2)                                                                                                           | Bindings for RE2: fast, safe alternative to backtracking regular expression engines.                                          | 1.8.4       | BSD-3-Clause | production |
| [gl-got@9.0.3](https://github.com/singapore/gl-got#readme)                                                                                             | Convenience wrapper for `got` to interact with the GitLab API                                                                 | 9.0.3       | MIT          | optional   |
| [@semantic-release/changelog@^3.0.2](https://github.com/semantic-release/changelog#readme)                                                             | semantic-release plugin to create or update a changelog file                                                                  | 3.0.2       | MIT          | dev        |
| [@semantic-release/commit-analyzer@^6.1.0](https://github.com/semantic-release/commit-analyzer#readme)                                                 | semantic-release plugin to analyze commits with conventional-changelog                                                        | 6.1.0       | MIT          | dev        |
| [@semantic-release/git@^7.0.8](https://github.com/semantic-release/git#readme)                                                                         | semantic-release plugin to commit release assets to the project's git repository                                              | 7.0.8       | MIT          | dev        |
| [@semantic-release/gitlab@^3.1.2](https://github.com/semantic-release/gitlab#readme)                                                                   | semantic-release plugin to publish a GitLab release                                                                           | 3.1.2       | MIT          | dev        |
| [@semantic-release/npm@^5.1.4](https://github.com/semantic-release/npm#readme)                                                                         | semantic-release plugin to publish a npm package                                                                              | 5.1.4       | MIT          | dev        |
| [@semantic-release/release-notes-generator@^7.1.4](https://github.com/semantic-release/release-notes-generator#readme)                                 | semantic-release plugin to generate changelog content with conventional-changelog                                             | 7.1.4       | MIT          | dev        |
| [all-contributors-cli@6.1.2](https://github.com/all-contributors/all-contributors-cli#readme)                                                          | Tool to easily add recognition for new contributors                                                                           | 6.1.2       | MIT          | dev        |
| [commitplease@^3.2.0](https://github.com/jzaefferer/commitplease#readme)                                                                               | Validates strings as commit messages                                                                                          | 3.2.0       | MIT          | dev        |
| [eslint@5.15.1](https://eslint.org)                                                                                                                    | An AST-based pattern checker for JavaScript.                                                                                  | 5.15.1      | MIT          | dev        |
| [eslint-config-prettier@4.1.0](https://github.com/prettier/eslint-config-prettier#readme)                                                              | Turns off all rules that are unnecessary or might conflict with Prettier.                                                     | 4.1.0       | MIT          | dev        |
| [eslint-config-standard@^12.0.0](https://github.com/standard/eslint-config-standard)                                                                   | JavaScript Standard Style - ESLint Shareable Config                                                                           | 12.0.0      | MIT          | dev        |
| [eslint-config-xo@^0.26.0](https://github.com/xojs/eslint-config-xo#readme)                                                                            | ESLint shareable config for XO                                                                                                | 0.26.0      | MIT          | dev        |
| [eslint-find-rules@3.3.1](https://github.com/sarbbottam/eslint-find-rules#readme)                                                                      | Find built-in ESLint rules you don't have in your custom config.                                                              | 3.3.1       | MIT          | dev        |
| [eslint-plugin-import@2.16.0](https://github.com/benmosher/eslint-plugin-import)                                                                       | Import with sanity.                                                                                                           | 2.16.0      | MIT          | dev        |
| [eslint-plugin-json@1.4.0](https://github.com/azeemba/eslint-plugin-json#readme)                                                                       | Lint JSON files                                                                                                               | 1.4.0       | ISC          | dev        |
| [eslint-plugin-no-unsafe-innerhtml@^1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/)                                          | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML                                            | 1.0.16      | MPL-2.0      | dev        |
| [eslint-plugin-no-unsanitized@^3.0.2](https://github.com/mozilla/eslint-plugin-no-unsanitized/)                                                        | ESLint rule to disallow unsanitized code                                                                                      | 3.0.2       | MPL-2.0      | dev        |
| [eslint-plugin-node@^8.0.1](https://github.com/mysticatea/eslint-plugin-node#readme)                                                                   | Additional ESLint's rules for Node.js                                                                                         | 8.0.1       | MIT          | dev        |
| [eslint-plugin-prettier@^3.0.1](https://github.com/prettier/eslint-plugin-prettier#readme)                                                             | Runs prettier as an eslint rule                                                                                               | 3.0.1       | MIT          | dev        |
| [eslint-plugin-promise@^4.0.1](https://github.com/xjamundx/eslint-plugin-promise#readme)                                                               | Enforce best practices for JavaScript promises                                                                                | 4.0.1       | ISC          | dev        |
| [eslint-plugin-scanjs-rules@^0.2.1](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules/)                                                         | ESLint plugin that contains ScanJS rules                                                                                      | 0.2.1       | MPL-2.0      | dev        |
| [eslint-plugin-security@^1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme)                                                         | Security rules for eslint                                                                                                     | 1.4.0       | Apache-2.0   | dev        |
| [eslint-plugin-sonarjs@0.3.0](https://github.com/SonarSource/eslint-plugin-sonarjs)                                                                    | SonarJS rules for ESLint                                                                                                      | 0.3.0       | LGPL-3.0     | dev        |
| [eslint-plugin-standard@^4.0.0](https://github.com/standard/eslint-plugin-standard#readme)                                                             | ESlint Plugin for the Standard Linter                                                                                         | 4.0.0       | MIT          | dev        |
| [eslint-plugin-unicorn@^7.1.0](https://github.com/sindresorhus/eslint-plugin-unicorn#readme)                                                           | Various awesome ESLint rules                                                                                                  | 7.1.0       | MIT          | dev        |
| [eslint-plugin-xss@^0.1.9](https://github.com/Rantanen/eslint-plugin-xss#readme)                                                                       | Validates XSS related issues of mixing HTML and non-HTML content in variables.                                                | 0.1.9       | ISC          | dev        |
| [generator-jest@1.6.0](https://github.com/SBoudrias/generator-jest#readme)                                                                             | Add jest support to any projects                                                                                              | 1.6.0       | MIT          | dev        |
| [husky@^1.3.1](https://github.com/typicode/husky#readme)                                                                                               | Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)   | 1.3.1       | MIT          | dev        |
| [jest@24.1.0](https://jestjs.io/)                                                                                                                      | Delightful JavaScript Testing.                                                                                                | 24.1.0      | MIT          | dev        |
| [jest-junit@6.3.0](https://github.com/jest-community/jest-junit#readme)                                                                                | A jest reporter that generates junit xml files                                                                                | 6.3.0       | Apache-2.0   | dev        |
| [jest-sonar-reporter@2.0.0](https://github.com/3dmind/jest-sonar-reporter#readme)                                                                      | A Sonar test reporter for Jest.                                                                                               | 2.0.0       | MIT          | dev        |
| [jsdoc@^3.5.5](https://github.com/jsdoc3/jsdoc#readme)                                                                                                 | An API documentation generator for JavaScript.                                                                                | 3.5.5       | Apache-2.0   | dev        |
| [lint-staged@8.1.5](https://github.com/okonet/lint-staged#readme)                                                                                      | Lint files staged by git                                                                                                      | 8.1.5       | MIT          | dev        |
| [markdown-magic@^0.1.25](https://github.com/DavidWells/markdown-magic#readme)                                                                          | Automatically update markdown files with content from external sources                                                        | 0.1.25      | MIT          | dev        |
| [markdown-magic-dependency-table@^1.3.2](https://github.com/camacho/markdown-magic-dependency-table#readme)                                            | Generate table of information about dependencies automatically in markdown                                                    | 1.3.2       | MIT          | dev        |
| [markdown-magic-directory-tree@^1.2.3](https://github.com/camacho/markdown-magic-directory-tree#readme)                                                | Print an archy tree for markdown file                                                                                         | 1.2.3       | MIT          | dev        |
| [markdown-magic-package-scripts@^1.2.1](https://github.com/camacho/markdown-magic-package-scripts#readme)                                              | Print list of scripts in package.json with descriptions                                                                       | 1.2.1       | MIT          | dev        |
| [marked@0.6.1](https://marked.js.org)                                                                                                                  | A markdown parser built for speed                                                                                             | 0.6.1       | MIT          | dev        |
| [prettier@1.16.4](https://prettier.io)                                                                                                                 | Prettier is an opinionated code formatter                                                                                     | 1.16.4      | MIT          | dev        |
| [recursive-readdir@2.2.2](https://github.com/jergason/recursive-readdir#readme)                                                                        | Get an array of all files in a directory and subdirectories.                                                                  | 2.2.2       | MIT          | dev        |
| [remark@^10.0.1](https://remark.js.org)                                                                                                                | Markdown processor powered by plugins                                                                                         | 10.0.1      | MIT          | dev        |
| [remark-cli@^6.0.1](https://remark.js.org)                                                                                                             | CLI to process markdown with remark using plugins                                                                             | 6.0.1       | MIT          | dev        |
| [remark-preset-lint-markdown-style-guide@^2.1.2](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-markdown-style-guide) | remark preset to configure remark-lint with rules that enforce the markdown style guide                                       | 2.1.2       | MIT          | dev        |
| [remark-preset-lint-recommended@3.0.2](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-recommended)                    | remark preset to configure remark-lint with rules that prevent mistakes or syntaxes that do not work correctly across vendors | 3.0.2       | MIT          | dev        |
| [remark-reference-links@4.0.3](https://github.com/remarkjs/remark-reference-links#readme)                                                              | Transform links and images into references and definitions                                                                    | 4.0.3       | MIT          | dev        |
| [remark-stringify@6.0.4](https://remark.js.org)                                                                                                        | Markdown compiler for remark                                                                                                  | 6.0.4       | MIT          | dev        |
| [rollup@1.4.1](https://github.com/rollup/rollup)                                                                                                       | Next-generation ES module bundler                                                                                             | 1.4.1       | MIT          | dev        |
| [rollup-plugin-commonjs@9.2.1](https://github.com/rollup/rollup-plugin-commonjs)                                                                       | Convert CommonJS modules to ES2015                                                                                            | 9.2.1       | MIT          | dev        |
| [rollup-plugin-json@3.1.0](https://github.com/rollup/rollup-plugin-json#readme)                                                                        | Convert .json files to ES6 modules:                                                                                           | 3.1.0       | MIT          | dev        |
| [rollup-plugin-node-resolve@4.0.1](https://github.com/rollup/rollup-plugin-node-resolve#readme)                                                        | Bundle third-party dependencies in node_modules                                                                               | 4.0.1       | MIT          | dev        |
| [rollup-plugin-terser@4.0.4](https://github.com/TrySound/rollup-plugin-terser#readme)                                                                  | Rollup plugin to minify generated es bundle                                                                                   | 4.0.4       | MIT          | dev        |
| [semantic-release@^15.13....](https://github.com/semantic-release/semantic-release#readme)                                                             | Automated semver compliant package publishing                                                                                 | 15.13.3     | MIT          | dev        |
| [sonar-scanner@3.1.0](https://github.com/bcaudan/node-sonar-scanner)                                                                                   | Wrap sonar-scanner as a node module                                                                                           | 3.1.0       | MIT          | dev        |
| [sonarqube-scanner@2.4.0](https://github.com/bellingard/sonar-scanner-npm)                                                                             | SonarQube/SonarCloud Scanner for the JavaScript world                                                                         | 2.4.0       | LGPL-3.0     | dev        |
| [yo@2.0.5](http://yeoman.io)                                                                                                                           | CLI tool for running Yeoman generators                                                                                        | 2.0.5       | BSD-2-Clause | dev        |

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

* * *

## 5. Configuration

> ![info][octicon-info] **@archetypes/rules** stores configuration details in the
> environment— separate from code—with the [`dotenv-extended` >
> ![Go to its README on GitHub][octicon-link-external]][dotenv-extended-readme]
> module.
>
> Read _[The Twelve-Factor App: Store config in the environment
> ![Read Factor 3, "Config"][octicon-link-external]][12-factor-config-url]_ for
> details.

* * *

<details><summary>Click here for detailed <samp>.env</samp> variable initialization instructions.</summary><p>

> [![info][octicon-info] View **dotenv-extended**'s README
> ![External link][octicon-link-external]][dotenv-extended-readme] for detailed
> `.env` variable set up instructions.

<h4><img align="bottom" alt="file" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg"> <samp>.env.schema</samp></h4>

Defines a schema of what variables should be defined in the combination of
<samp>.env</samp> and <samp>.env.defaults</samp>.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../../.env.schema&syntax=properties) -->

<!-- The below code snippet is automatically added from ../../.env.schema -->

```properties
# .env.schema, committed to repo

## See https://github.com/keithmorris/node-dotenv-extended/#readme
## ⛔️
## 🚫  DO NOT COMMIT YOUR ACTUAL .env file to version control.
## 🚫  It should only include environment-specific values such
## 🚫  as database passwords or API keys.
## 🚫  Your production database should have a different password
## 🚫  than your development database.

NODE_ENV=

#
# Product manifest (package.json) variables
#

NPM_PACKAGE_NAME=
NPM_PACKAGE_VERSION=

#
# Gitlab variables
#

GITLAB_ENDPOINT=
GITLAB_PROJECT_ID=
# The name of the branch, tag, or commit SHA with the signatures.json resource.
GITLAB_REF=
GITLAB_RESOURCE=
GITLAB_TOKEN=
K8S_SECRET_GITLAB_TOKEN=

#
# Jest JUnit for JavaScript BDD test suites
# @see https://github.com/jest-community/jest-junit#configuration
#

# name attribute of <testsuites>
# @default "jest tests"
JEST_SUITE_NAME=

# File path to save the output.
# @default "./junit.xml"
JEST_JUNIT_OUTPUT=

# Directory to save the output.
# null
JEST_JUNIT_OUTPUT_DIR=

# File name for the output.
# @default "./junit.xml"
JEST_JUNIT_OUTPUT_NAME=

# Template string for name attribute of the <testsuite>.
# @default "{title}"
JEST_JUNIT_SUITE_NAME=

# Template string for the classname attribute of <testcase>.
# @default "{classname} {title}"
JEST_JUNIT_CLASSNAME=

# Template string for the name attribute of <testcase>.
# @default "{classname} {title}"
JEST_JUNIT_TITLE=

# Character(s) used to join the describe blocks.
# @default " "
JEST_JUNIT_ANCESTOR_SEPARATOR=

# DEPRECATED. Use suiteNameTemplate instead. Use file path as the name attribute of <testsuite>
# @default "false"
JEST_USE_PATH_FOR_SUITE_NAME=

#
# SonarCloud variables (CI/CD code analysis)
#

# Name of the current working branch.
# This is a short-lived branch
# corresponding to Pull/Pull Requests, feature, and fix branches.
# To get the current working branch name, run:
# npm --loglevel silent run vars:git:branch:name
# @see https://sonarcloud.io/documentation/branches/overview/

SONAR_BRANCH_NAME=

# The default branch of the repository; it should almost always
# be "master".

SONAR_BRANCH_TARGET=
SONAR_DATA_LOSS_SIGNATURES_TOKEN=
SONAR_HOST_URL=
SONAR_ORGANIZATION=
SONAR_PROJECT_DESCRIPTION=
SONAR_PROJECT_KEY=
SONAR_PROJECT_NAME=
SONAR_PROJECT_VERSION=
SONAR_TOKEN=
K8S_SECRET_SONAR_TOKEN=
```

<!-- AUTO-GENERATED-CONTENT:END -->

<h4><img align="bottom" alt="file" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg"> <samp>.env.defaults</samp></h4>

<samp>.env.defaults</samp> provides common configuration defaults across all
environments (commited to source control). This contains overall app
configuration values that would be common across environments. The
<samp>.env.defaults</samp> file is loaded first; then the <samp>.env</samp> file
is loaded and will overwrite any values from the <samp>.env.defaults</samp>
file.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../../.env.defaults&syntax=properties) -->

<!-- The below code snippet is automatically added from ../../.env.defaults -->

```properties
# .env.defaults, committed to repo

## See https://github.com/keithmorris/node-dotenv-extended/#readme
## ⛔️
## 🚫  DO NOT COMMIT YOUR ACTUAL .env file to version control.
## 🚫  It should only include environment-specific values such
## 🚫  as database passwords or API keys.
## 🚫  Your production database should have a different password
## 🚫  than your development database.

#
# Product manifest (package.json) variables
#

NPM_PACKAGE_NAME=@archetypes/rules
NPM_PACKAGE_VERSION=

#
# Gitlab variable defaults
#

GITLAB_ENDPOINT=https://github.com/api/v4
GITLAB_JSON_OUTPUT=true
GITLAB_PROJECT_ID=10416318
GITLAB_REF=master
GITLAB_RESOLVE_BODY_ONLY=true
GITLAB_RESOURCE=signatures.json
GITLAB_TOKEN=
K8S_SECRET_GITLAB_TOKEN=

#
# Jest JUnit for JavaScript BDD test suites
# @see https://github.com/jest-community/jest-junit#configuration
#

# name attribute of <testsuites>
# @default "jest tests"
JEST_SUITE_NAME=@archetypes/rules tests

# File path to save the output.
# @default "./junit.xml"
JEST_JUNIT_OUTPUT=./jest-junit.xml

# Directory to save the output.
# null
JEST_JUNIT_OUTPUT_DIR=

# File name for the output.
# @default "./junit.xml"
JEST_JUNIT_OUTPUT_NAME=./jest-junit.xml

# Template string for name attribute of the <testsuite>.
# @default "{title}"
JEST_JUNIT_SUITE_NAME=

# Template string for the classname attribute of <testcase>.
# @default "{classname} {title}"
JEST_JUNIT_CLASSNAME=

# Template string for the name attribute of <testcase>.
# @default "{classname} {title}"
JEST_JUNIT_TITLE=

# Character(s) used to join the describe blocks.
# @default " "
JEST_JUNIT_ANCESTOR_SEPARATOR=

# DEPRECATED. Use suiteNameTemplate instead. Use file path as the name attribute of <testsuite>
# @default "false"
JEST_USE_PATH_FOR_SUITE_NAME=

#
# SonarCloud variable defaults
#

# SonarCloud static code analysis
SONAR_BRANCH_TARGET=master
SONAR_HOST_URL=https://sonarcloud.io
SONAR_ORGANIZATION=@archetypes/rules
SONAR_PROJECT_KEY=signatures
SONAR_PROJECT_NAME=@archetypes/rules
SONAR_PROJECT_VERSION=$SONAR_PROJECT_VERSION
SONAR_TOKEN=
K8S_SECRET_SONAR_TOKEN=
```

<!-- AUTO-GENERATED-CONTENT:END -->

<h4><img align="bottom" alt="file" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file.svg"> <samp>.env</samp></h4>

The environment-specific file (not committed to source control). This file will
have sensitive information such as usernames, passwords, api keys, etc. These
would be specific to each environment and **should not be committed to source
control**.

```properties
GITLAB_TOKEN=<private-access-token>
SONAR_TOKEN=<private-access-token>
SONAR_DATA_LOSS_SIGNATURES_TOKEN=<private-access-token>
```

</pre></details>

* * *

## 6. Testing

> [![Jest BDD][jest-logo] **@archetypes/rules** uses Jest for Behavior-Driven
> Development (BDD) and unit tests
> ![link-external][octicon-link-external]][jest-url].
>
> Your test suites must pass within coverage thresholds before your Pull Request
> will be reviewed on GitLab.

### 6.1. Running tests

To run tests:

```shell
$ npm test
# => Run all @archetypes/rules tests on node
```

### 6.2. Troubleshooting

You can troubleshoot issues in two ways:

1.  `debug` module

    _How:_

    > ![info][octicon-info] Prefix REPL runs with DEBUG=dls. E.g.:
    >
    > ```bash
    > DEBUG=dls npm test
    > ```

1.  The best way to troubleshoot your tests is with a debugger.

    _How:_

    > **![tip][octicon-light-bulb] Debugging Jest with VS Code**
    >
    > Read [Debugging tests in VS Code
    > ![link-external][octicon-link-external]][debug-tests-vscode-url] for
    > step-by-step set-up and execution instructions.

## 7. Source code style guidelines

![verified][octicon-verified] **@archetypes/rules** uses

1.  [ESLint ![link-external][octicon-link-external]](http://clang.llvm.org/docs/ClangFormat.html)
    to evaluate and format source code;
1.  [Prettier ![link-external][octicon-link-external]](https://www.npmjs.com/package/eslint-plugin-prettier)
    to format JSON, Markdown, and YAML.
1.  [Standard JS code style
    ![link-external][octicon-link-external]][standardjs-url] for code clarity
    and community conventions.

You can both evaluate and format your all sources by running:

```shell
$ npm run lint
# => Formats and lints all JavaScript, JSON, Markdown, and
#    package.json.
```

You can also format sources by type:

```shell
# Evaluate and format JavaScript:
npm run lint:js

# Format JSON:
npm run lint:json

# Format all markdown files:
npm run lint:md
```

* * *

<details><summary><strong><img alt="code style rules" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/checklist.svg" valign="bottom"> View the ESLint rules we enforce...</strong></summary>

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=../.ci/eslint-rules&syntax=markdown) -->

<!-- The below code snippet is automatically added from ../.ci/eslint-rules -->

```markdown
current rules 396 rules found

accessor-pairs https://eslint.org/docs/rules/accessor-pairs
array-bracket-newline https://eslint.org/docs/rules/array-bracket-newline
array-bracket-spacing https://eslint.org/docs/rules/array-bracket-spacing
array-callback-return https://eslint.org/docs/rules/array-callback-return
array-element-newline https://eslint.org/docs/rules/array-element-newline
arrow-body-style https://eslint.org/docs/rules/arrow-body-style arrow-parens
https://eslint.org/docs/rules/arrow-parens arrow-spacing
https://eslint.org/docs/rules/arrow-spacing block-scoped-var
https://eslint.org/docs/rules/block-scoped-var block-spacing
https://eslint.org/docs/rules/block-spacing brace-style
https://eslint.org/docs/rules/brace-style callback-return
https://eslint.org/docs/rules/callback-return camelcase
https://eslint.org/docs/rules/camelcase capitalized-comments
https://eslint.org/docs/rules/capitalized-comments class-methods-use-this
https://eslint.org/docs/rules/class-methods-use-this comma-dangle
https://eslint.org/docs/rules/comma-dangle comma-spacing
https://eslint.org/docs/rules/comma-spacing comma-style
https://eslint.org/docs/rules/comma-style complexity
https://eslint.org/docs/rules/complexity computed-property-spacing
https://eslint.org/docs/rules/computed-property-spacing consistent-return
https://eslint.org/docs/rules/consistent-return consistent-this
https://eslint.org/docs/rules/consistent-this constructor-super
https://eslint.org/docs/rules/constructor-super curly
https://eslint.org/docs/rules/curly default-case
https://eslint.org/docs/rules/default-case dot-location
https://eslint.org/docs/rules/dot-location dot-notation
https://eslint.org/docs/rules/dot-notation eol-last
https://eslint.org/docs/rules/eol-last eqeqeq
https://eslint.org/docs/rules/eqeqeq for-direction
https://eslint.org/docs/rules/for-direction func-call-spacing
https://eslint.org/docs/rules/func-call-spacing func-name-matching
https://eslint.org/docs/rules/func-name-matching func-names
https://eslint.org/docs/rules/func-names func-style
https://eslint.org/docs/rules/func-style function-paren-newline
https://eslint.org/docs/rules/function-paren-newline generator-star
https://eslint.org/docs/rules/generator-star generator-star-spacing
https://eslint.org/docs/rules/generator-star-spacing getter-return
https://eslint.org/docs/rules/getter-return global-require
https://eslint.org/docs/rules/global-require guard-for-in
https://eslint.org/docs/rules/guard-for-in handle-callback-err
https://eslint.org/docs/rules/handle-callback-err id-blacklist
https://eslint.org/docs/rules/id-blacklist id-length
https://eslint.org/docs/rules/id-length id-match
https://eslint.org/docs/rules/id-match implicit-arrow-linebreak
https://eslint.org/docs/rules/implicit-arrow-linebreak import/default
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
import/export
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
import/first
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
import/named
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
import/namespace
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
import/no-duplicates
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
import/no-named-default
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
import/no-unresolved
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
import/no-webpack-loader-syntax
https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
indent https://eslint.org/docs/rules/indent indent-legacy
https://eslint.org/docs/rules/indent-legacy init-declarations
https://eslint.org/docs/rules/init-declarations jsx-quotes
https://eslint.org/docs/rules/jsx-quotes key-spacing
https://eslint.org/docs/rules/key-spacing keyword-spacing
https://eslint.org/docs/rules/keyword-spacing line-comment-position
https://eslint.org/docs/rules/line-comment-position linebreak-style
https://eslint.org/docs/rules/linebreak-style lines-around-comment
https://eslint.org/docs/rules/lines-around-comment lines-around-directive
https://eslint.org/docs/rules/lines-around-directive lines-between-class-members
https://eslint.org/docs/rules/lines-between-class-members max-classes-per-file
https://eslint.org/docs/rules/max-classes-per-file max-depth
https://eslint.org/docs/rules/max-depth max-len
https://eslint.org/docs/rules/max-len max-lines
https://eslint.org/docs/rules/max-lines max-lines-per-function
https://eslint.org/docs/rules/max-lines-per-function max-nested-callbacks
https://eslint.org/docs/rules/max-nested-callbacks max-params
https://eslint.org/docs/rules/max-params max-statements
https://eslint.org/docs/rules/max-statements max-statements-per-line
https://eslint.org/docs/rules/max-statements-per-line multiline-comment-style
https://eslint.org/docs/rules/multiline-comment-style multiline-ternary
https://eslint.org/docs/rules/multiline-ternary new-cap
https://eslint.org/docs/rules/new-cap new-parens
https://eslint.org/docs/rules/new-parens newline-after-var
https://eslint.org/docs/rules/newline-after-var newline-before-return
https://eslint.org/docs/rules/newline-before-return newline-per-chained-call
https://eslint.org/docs/rules/newline-per-chained-call no-alert
https://eslint.org/docs/rules/no-alert no-array-constructor
https://eslint.org/docs/rules/no-array-constructor no-arrow-condition
https://eslint.org/docs/rules/no-arrow-condition no-async-promise-executor
https://eslint.org/docs/rules/no-async-promise-executor no-await-in-loop
https://eslint.org/docs/rules/no-await-in-loop no-bitwise
https://eslint.org/docs/rules/no-bitwise no-buffer-constructor
https://eslint.org/docs/rules/no-buffer-constructor no-caller
https://eslint.org/docs/rules/no-caller no-case-declarations
https://eslint.org/docs/rules/no-case-declarations no-catch-shadow
https://eslint.org/docs/rules/no-catch-shadow no-class-assign
https://eslint.org/docs/rules/no-class-assign no-comma-dangle
https://eslint.org/docs/rules/no-comma-dangle no-compare-neg-zero
https://eslint.org/docs/rules/no-compare-neg-zero no-cond-assign
https://eslint.org/docs/rules/no-cond-assign no-confusing-arrow
https://eslint.org/docs/rules/no-confusing-arrow no-console
https://eslint.org/docs/rules/no-console no-const-assign
https://eslint.org/docs/rules/no-const-assign no-constant-condition
https://eslint.org/docs/rules/no-constant-condition no-continue
https://eslint.org/docs/rules/no-continue no-control-regex
https://eslint.org/docs/rules/no-control-regex no-debugger
https://eslint.org/docs/rules/no-debugger no-delete-var
https://eslint.org/docs/rules/no-delete-var no-div-regex
https://eslint.org/docs/rules/no-div-regex no-dupe-args
https://eslint.org/docs/rules/no-dupe-args no-dupe-class-members
https://eslint.org/docs/rules/no-dupe-class-members no-dupe-keys
https://eslint.org/docs/rules/no-dupe-keys no-duplicate-case
https://eslint.org/docs/rules/no-duplicate-case no-duplicate-imports
https://eslint.org/docs/rules/no-duplicate-imports no-else-return
https://eslint.org/docs/rules/no-else-return no-empty
https://eslint.org/docs/rules/no-empty no-empty-character-class
https://eslint.org/docs/rules/no-empty-character-class no-empty-function
https://eslint.org/docs/rules/no-empty-function no-empty-pattern
https://eslint.org/docs/rules/no-empty-pattern no-eq-null
https://eslint.org/docs/rules/no-eq-null no-eval
https://eslint.org/docs/rules/no-eval no-ex-assign
https://eslint.org/docs/rules/no-ex-assign no-extend-native
https://eslint.org/docs/rules/no-extend-native no-extra-bind
https://eslint.org/docs/rules/no-extra-bind no-extra-boolean-cast
https://eslint.org/docs/rules/no-extra-boolean-cast no-extra-label
https://eslint.org/docs/rules/no-extra-label no-extra-parens
https://eslint.org/docs/rules/no-extra-parens no-extra-semi
https://eslint.org/docs/rules/no-extra-semi no-fallthrough
https://eslint.org/docs/rules/no-fallthrough no-floating-decimal
https://eslint.org/docs/rules/no-floating-decimal no-func-assign
https://eslint.org/docs/rules/no-func-assign no-global-assign
https://eslint.org/docs/rules/no-global-assign no-implicit-coercion
https://eslint.org/docs/rules/no-implicit-coercion no-implicit-globals
https://eslint.org/docs/rules/no-implicit-globals no-implied-eval
https://eslint.org/docs/rules/no-implied-eval no-inline-comments
https://eslint.org/docs/rules/no-inline-comments no-inner-declarations
https://eslint.org/docs/rules/no-inner-declarations no-invalid-regexp
https://eslint.org/docs/rules/no-invalid-regexp no-invalid-this
https://eslint.org/docs/rules/no-invalid-this no-irregular-whitespace
https://eslint.org/docs/rules/no-irregular-whitespace no-iterator
https://eslint.org/docs/rules/no-iterator no-label-var
https://eslint.org/docs/rules/no-label-var no-labels
https://eslint.org/docs/rules/no-labels no-lone-blocks
https://eslint.org/docs/rules/no-lone-blocks no-lonely-if
https://eslint.org/docs/rules/no-lonely-if no-loop-func
https://eslint.org/docs/rules/no-loop-func no-magic-numbers
https://eslint.org/docs/rules/no-magic-numbers no-misleading-character-class
https://eslint.org/docs/rules/no-misleading-character-class no-mixed-operators
https://eslint.org/docs/rules/no-mixed-operators no-mixed-requires
https://eslint.org/docs/rules/no-mixed-requires no-mixed-spaces-and-tabs
https://eslint.org/docs/rules/no-mixed-spaces-and-tabs no-multi-assign
https://eslint.org/docs/rules/no-multi-assign no-multi-spaces
https://eslint.org/docs/rules/no-multi-spaces no-multi-str
https://eslint.org/docs/rules/no-multi-str no-multiple-empty-lines
https://eslint.org/docs/rules/no-multiple-empty-lines no-native-reassign
https://eslint.org/docs/rules/no-native-reassign no-negated-condition
https://eslint.org/docs/rules/no-negated-condition no-negated-in-lhs
https://eslint.org/docs/rules/no-negated-in-lhs no-nested-ternary
https://eslint.org/docs/rules/no-nested-ternary no-new
https://eslint.org/docs/rules/no-new no-new-func
https://eslint.org/docs/rules/no-new-func no-new-object
https://eslint.org/docs/rules/no-new-object no-new-require
https://eslint.org/docs/rules/no-new-require no-new-symbol
https://eslint.org/docs/rules/no-new-symbol no-new-wrappers
https://eslint.org/docs/rules/no-new-wrappers no-obj-calls
https://eslint.org/docs/rules/no-obj-calls no-octal
https://eslint.org/docs/rules/no-octal no-octal-escape
https://eslint.org/docs/rules/no-octal-escape no-param-reassign
https://eslint.org/docs/rules/no-param-reassign no-path-concat
https://eslint.org/docs/rules/no-path-concat no-plusplus
https://eslint.org/docs/rules/no-plusplus no-process-env
https://eslint.org/docs/rules/no-process-env no-process-exit
https://eslint.org/docs/rules/no-process-exit no-proto
https://eslint.org/docs/rules/no-proto no-prototype-builtins
https://eslint.org/docs/rules/no-prototype-builtins no-redeclare
https://eslint.org/docs/rules/no-redeclare no-regex-spaces
https://eslint.org/docs/rules/no-regex-spaces no-reserved-keys
https://eslint.org/docs/rules/no-reserved-keys no-restricted-globals
https://eslint.org/docs/rules/no-restricted-globals no-restricted-imports
https://eslint.org/docs/rules/no-restricted-imports no-restricted-modules
https://eslint.org/docs/rules/no-restricted-modules no-restricted-properties
https://eslint.org/docs/rules/no-restricted-properties no-restricted-syntax
https://eslint.org/docs/rules/no-restricted-syntax no-return-assign
https://eslint.org/docs/rules/no-return-assign no-return-await
https://eslint.org/docs/rules/no-return-await no-script-url
https://eslint.org/docs/rules/no-script-url no-self-assign
https://eslint.org/docs/rules/no-self-assign no-self-compare
https://eslint.org/docs/rules/no-self-compare no-sequences
https://eslint.org/docs/rules/no-sequences no-shadow
https://eslint.org/docs/rules/no-shadow no-shadow-restricted-names
https://eslint.org/docs/rules/no-shadow-restricted-names no-space-before-semi
https://eslint.org/docs/rules/no-space-before-semi no-spaced-func
https://eslint.org/docs/rules/no-spaced-func no-sparse-arrays
https://eslint.org/docs/rules/no-sparse-arrays no-sync
https://eslint.org/docs/rules/no-sync no-tabs
https://eslint.org/docs/rules/no-tabs no-template-curly-in-string
https://eslint.org/docs/rules/no-template-curly-in-string no-ternary
https://eslint.org/docs/rules/no-ternary no-this-before-super
https://eslint.org/docs/rules/no-this-before-super no-throw-literal
https://eslint.org/docs/rules/no-throw-literal no-trailing-spaces
https://eslint.org/docs/rules/no-trailing-spaces no-undef
https://eslint.org/docs/rules/no-undef no-undef-init
https://eslint.org/docs/rules/no-undef-init no-undefined
https://eslint.org/docs/rules/no-undefined no-underscore-dangle
https://eslint.org/docs/rules/no-underscore-dangle no-unexpected-multiline
https://eslint.org/docs/rules/no-unexpected-multiline
no-unmodified-loop-condition
https://eslint.org/docs/rules/no-unmodified-loop-condition no-unneeded-ternary
https://eslint.org/docs/rules/no-unneeded-ternary no-unreachable
https://eslint.org/docs/rules/no-unreachable no-unsafe-finally
https://eslint.org/docs/rules/no-unsafe-finally
no-unsafe-innerhtml/no-unsafe-innerhtml
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
no-unsafe-negation https://eslint.org/docs/rules/no-unsafe-negation
no-unsanitized/method
https://github.com/mozilla/eslint-plugin-no-unsanitized/blob/master/docs/rules/method.md
no-unsanitized/property
https://github.com/mozilla/eslint-plugin-no-unsanitized/blob/master/docs/rules/property.md
no-unused-expressions https://eslint.org/docs/rules/no-unused-expressions
no-unused-labels https://eslint.org/docs/rules/no-unused-labels no-unused-vars
https://eslint.org/docs/rules/no-unused-vars no-use-before-define
https://eslint.org/docs/rules/no-use-before-define no-useless-call
https://eslint.org/docs/rules/no-useless-call no-useless-catch
https://eslint.org/docs/rules/no-useless-catch no-useless-computed-key
https://eslint.org/docs/rules/no-useless-computed-key no-useless-concat
https://eslint.org/docs/rules/no-useless-concat no-useless-constructor
https://eslint.org/docs/rules/no-useless-constructor no-useless-escape
https://eslint.org/docs/rules/no-useless-escape no-useless-rename
https://eslint.org/docs/rules/no-useless-rename no-useless-return
https://eslint.org/docs/rules/no-useless-return no-var
https://eslint.org/docs/rules/no-var no-void
https://eslint.org/docs/rules/no-void no-warning-comments
https://eslint.org/docs/rules/no-warning-comments no-whitespace-before-property
https://eslint.org/docs/rules/no-whitespace-before-property no-with
https://eslint.org/docs/rules/no-with no-wrap-func
https://eslint.org/docs/rules/no-wrap-func node/exports-style
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
node/no-deprecated-api
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
node/no-extraneous-import
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
node/no-extraneous-require
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
node/no-missing-import
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
node/no-missing-require
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
node/no-unpublished-bin
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
node/no-unpublished-import
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
node/no-unpublished-require
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
node/no-unsupported-features/es-syntax
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
node/process-exit-as-throw
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
node/shebang
https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
nonblock-statement-body-position
https://eslint.org/docs/rules/nonblock-statement-body-position
object-curly-newline https://eslint.org/docs/rules/object-curly-newline
object-curly-spacing https://eslint.org/docs/rules/object-curly-spacing
object-property-newline https://eslint.org/docs/rules/object-property-newline
object-shorthand https://eslint.org/docs/rules/object-shorthand one-var
https://eslint.org/docs/rules/one-var one-var-declaration-per-line
https://eslint.org/docs/rules/one-var-declaration-per-line operator-assignment
https://eslint.org/docs/rules/operator-assignment operator-linebreak
https://eslint.org/docs/rules/operator-linebreak padded-blocks
https://eslint.org/docs/rules/padded-blocks padding-line-between-statements
https://eslint.org/docs/rules/padding-line-between-statements
prefer-arrow-callback https://eslint.org/docs/rules/prefer-arrow-callback
prefer-const https://eslint.org/docs/rules/prefer-const prefer-destructuring
https://eslint.org/docs/rules/prefer-destructuring prefer-named-capture-group
https://eslint.org/docs/rules/prefer-named-capture-group prefer-numeric-literals
https://eslint.org/docs/rules/prefer-numeric-literals prefer-object-spread
https://eslint.org/docs/rules/prefer-object-spread prefer-promise-reject-errors
https://eslint.org/docs/rules/prefer-promise-reject-errors prefer-reflect
https://eslint.org/docs/rules/prefer-reflect prefer-rest-params
https://eslint.org/docs/rules/prefer-rest-params prefer-spread
https://eslint.org/docs/rules/prefer-spread prefer-template
https://eslint.org/docs/rules/prefer-template promise/param-names
https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
quote-props https://eslint.org/docs/rules/quote-props quotes
https://eslint.org/docs/rules/quotes radix https://eslint.org/docs/rules/radix
require-atomic-updates https://eslint.org/docs/rules/require-atomic-updates
require-await https://eslint.org/docs/rules/require-await require-jsdoc
https://eslint.org/docs/rules/require-jsdoc require-unicode-regexp
https://eslint.org/docs/rules/require-unicode-regexp require-yield
https://eslint.org/docs/rules/require-yield rest-spread-spacing
https://eslint.org/docs/rules/rest-spread-spacing
scanjs-rules/accidental_assignment
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_hostname
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_href
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_location
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_onmessage
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_pathname
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_protocol
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_search
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/assign_to_src
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_Function
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_addEventListener
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_addEventListener_deviceproximity
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_addEventListener_message
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_connect
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_eval
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_execScript
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_hide
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_open_remote=true
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_parseFromString
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_setImmediate
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_setInterval
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/call_setTimeout
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/identifier_indexedDB
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/identifier_localStorage
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/identifier_sessionStorage
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/new_Function
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_addIdleObserver
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_createContextualFragment
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_crypto
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_geolocation
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_getUserMedia
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_indexedDB
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_localStorage
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_mgmt
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
scanjs-rules/property_sessionStorage
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-buffer-noassert
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-child-process
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-disable-mustache-escape
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-eval-with-expression
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-new-buffer
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-no-csrf-before-method-override
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-non-literal-fs-filename
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-non-literal-regexp
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-non-literal-require
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-object-injection
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-possible-timing-attacks
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-pseudoRandomBytes
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
security/detect-unsafe-regex
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
semi https://eslint.org/docs/rules/semi semi-spacing
https://eslint.org/docs/rules/semi-spacing semi-style
https://eslint.org/docs/rules/semi-style sonarjs/cognitive-complexity
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/max-switch-cases
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-all-duplicated-branches
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-duplicate-string
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-duplicated-branches
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-element-overwrite
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-extra-arguments
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-identical-conditions
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-identical-expressions
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-identical-functions
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-inverted-boolean-check
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-one-iteration-loop
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-redundant-boolean
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-small-switch
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-use-of-empty-return-value
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/no-useless-catch
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/prefer-immediate-return
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/prefer-object-literal
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/prefer-single-boolean-return
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sonarjs/prefer-while
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
sort-imports https://eslint.org/docs/rules/sort-imports sort-keys
https://eslint.org/docs/rules/sort-keys sort-vars
https://eslint.org/docs/rules/sort-vars space-after-function-name
https://eslint.org/docs/rules/space-after-function-name space-after-keywords
https://eslint.org/docs/rules/space-after-keywords space-before-blocks
https://eslint.org/docs/rules/space-before-blocks space-before-function-paren
https://eslint.org/docs/rules/space-before-function-paren
space-before-function-parentheses
https://eslint.org/docs/rules/space-before-function-parentheses
space-before-keywords https://eslint.org/docs/rules/space-before-keywords
space-in-brackets https://eslint.org/docs/rules/space-in-brackets
space-in-parens https://eslint.org/docs/rules/space-in-parens space-infix-ops
https://eslint.org/docs/rules/space-infix-ops space-return-throw-case
https://eslint.org/docs/rules/space-return-throw-case space-unary-ops
https://eslint.org/docs/rules/space-unary-ops space-unary-word-ops
https://eslint.org/docs/rules/space-unary-word-ops spaced-comment
https://eslint.org/docs/rules/spaced-comment standard/array-bracket-even-spacing
https://github.com/xjamundx/eslint-plugin-standard#rules-explanations
standard/computed-property-even-spacing
https://github.com/xjamundx/eslint-plugin-standard#rules-explanations
standard/no-callback-literal
https://github.com/xjamundx/eslint-plugin-standard#rules-explanations
standard/object-curly-even-spacing
https://github.com/xjamundx/eslint-plugin-standard#rules-explanations strict
https://eslint.org/docs/rules/strict switch-colon-spacing
https://eslint.org/docs/rules/switch-colon-spacing symbol-description
https://eslint.org/docs/rules/symbol-description template-curly-spacing
https://eslint.org/docs/rules/template-curly-spacing template-tag-spacing
https://eslint.org/docs/rules/template-tag-spacing unicode-bom
https://eslint.org/docs/rules/unicode-bom unicorn/catch-error-name
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
unicorn/custom-error-definition
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
unicorn/escape-case
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
unicorn/explicit-length-check
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
unicorn/filename-case
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
unicorn/import-index
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
unicorn/new-for-builtins
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
unicorn/no-abusive-eslint-disable
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
unicorn/no-array-instanceof
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
unicorn/no-fn-reference-in-iterator
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
unicorn/no-hex-escape
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
unicorn/no-new-buffer
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
unicorn/no-process-exit
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
unicorn/number-literal-case
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
unicorn/prefer-starts-ends-with
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
unicorn/prefer-type-error
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
unicorn/regex-shorthand
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
unicorn/throw-new-error
https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
use-isnan https://eslint.org/docs/rules/use-isnan valid-jsdoc
https://eslint.org/docs/rules/valid-jsdoc valid-typeof
https://eslint.org/docs/rules/valid-typeof vars-on-top
https://eslint.org/docs/rules/vars-on-top wrap-iife
https://eslint.org/docs/rules/wrap-iife wrap-regex
https://eslint.org/docs/rules/wrap-regex xss/no-location-href-assign
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
xss/no-mixed-html
https://github.com/jfmengels/eslint-rule-documentation/blob/master/contributing.md
yield-star-spacing https://eslint.org/docs/rules/yield-star-spacing yoda
https://eslint.org/docs/rules/yoda
```

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

* * *

## 8. DevSecOps

> [![Travis CI logo][travis-ci-logo]][travis-ci-url]
>
> **@archetypes/rules** uses [Travis CI
> ![Gitlab documentation][octicon-link-external]][travis-ci-url] for continuous
> integration and delivery.

All tests, linting, and quality gates are executed with Continuous Integration
services.

* * *

<details><summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/terminal.svg" height="30" width="30" valign="bottom"> <strong>View all available npm-scripts...</strong></summary>

_To execute any of the following scripts, open a Terminal and run:_

```bash
npm run <Script>
```

_Examples:_

```bash
# Auto-generate TOCs, dependency tables, etc.
npm run docs:md

# Lint all *.js source code files
npm run lint:js
```

<!-- AUTO-GENERATED-CONTENT:START (SCRIPTS) -->

| Script                       | Description                                                                                                                                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bundle`                     | `rollup -c ./rollup.config.js --environment INCLUDE_DEPS,BUILD:production`                                                                                                                                     |
| `ci:lint:js`                 | `eslint . --fix -f json -o eslint-report.json`                                                                                                                                                                 |
| `ci:test`                    | `dotenv-extended --path=.env --defaults=.env.defaults --errorOnMissing=false jest --coverage --verbose true`                                                                                                   |
| `postci:test`                | `npm run posttest && source ./.gitlab/rc/bash/.envvarsrc && npm run qa:review:sonar`                                                                                                                           |
| `contributors:add`           | `all-contributors add`                                                                                                                                                                                         |
| `contributors:gen`           | `all-contributors generate`                                                                                                                                                                                    |
| `docs:api`                   | `rm -rf ./docs/api/ && ./node_modules/.bin/jsdoc ./src/**/*.js -d ./docs/api/ -c ./.gitlab/rc/jsdoc/conf.json -d ./docs/api/`                                                                                  |
| `docs:lint:js:rules`         | `eslint-find-rules`                                                                                                                                                                                            |
| `docs:lint:js:rules:current` | `eslint-find-rules --current --no-error .eslintrc.yml --verbose > ./docs/.ci/eslint-rules.txt`                                                                                                                 |
| `docs:lint:js:rules:unused`  | `eslint-find-rules --unused --no-error .eslintrc.yml --verbose >> ./docs/.ci/eslint-rules.txt`                                                                                                                 |
| `predocs:md`                 | `npm run docs:lint:js:rules`                                                                                                                                                                                   |
| `docs:md`                    | `node .gitlab/rc/md/markdown.config.js`                                                                                                                                                                        |
| `lint`                       | `npm run lint:js && npm run lint:json && npm run lint:md`                                                                                                                                                      |
| `lint:js`                    | `eslint . --fix -f json -o eslint-report.json`                                                                                                                                                                 |
| `lint:js:check`              | \`eslint --print-config .                                                                                                                                                                                      |
| `lint:json`                  | `prettier --write **/*.json`                                                                                                                                                                                   |
| `lint:manifest`              | `npm prune && npm dedupe && npm shrinkwrap`                                                                                                                                                                    |
| `lint:md`                    | `remark --rc-path "./.gitlab/rc/md/.remarkrc.yml" --ignore-path "./.gitlab/rc/md/.remarkignore" .`                                                                                                             |
| `postversion`                | `npm run bundle`                                                                                                                                                                                               |
| `preqa:review:sonar`         | `npm start`                                                                                                                                                                                                    |
| `qa:review:sonar`            | `sonar-scanner -Dproject.settings=./sonar-project.properties -Dsonar.projectKey=$SONAR_PROJECT_KEY -Dsonar.organization=$SONAR_ORGANIZATION -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=$SONAR_TOKEN` |
| `security:audit`             | `npm audit --json`                                                                                                                                                                                             |
| `security:fix`               | `npm audit fix --depth=100 --json`                                                                                                                                                                             |
| `semantic-release`           | `semantic-release`                                                                                                                                                                                             |
| `start`                      | `node -r dotenv-extended ./src/env-config.js`                                                                                                                                                                  |
| `pretest`                    | `npm run lint:js`                                                                                                                                                                                              |
| `test`                       | `jest --coverage --verbose true`                                                                                                                                                                               |
| `posttest`                   | `npm run security:audit`                                                                                                                                                                                       |
| `test:create`                | `yo jest:test --`                                                                                                                                                                                              |
| `test:dist`                  | `jest ./dist/index.js --coverage --verbose`                                                                                                                                                                    |
| `vars:git:branch:name`       | \`git branch                                                                                                                                                                                                   |
| `vars:package:description`   | `node -pe "require('./package.json').description"`                                                                                                                                                             |
| `vars:package:keywords`      | `node -pe "require('./package.json').keywords.join(', ')"`                                                                                                                                                     |
| `vars:package:name`          | `node -pe "require('./package.json').name"`                                                                                                                                                                    |
| `vars:package:version`       | `node -pe "require('./package.json').version"`                                                                                                                                                                 |

<!-- AUTO-GENERATED-CONTENT:END -->

</details>

* * *

1.  Pull Requests will only be approved and merged once all tests pass.
1.  Travis CI will fail if any of the test suites fails, or a linting rule is
    violated.

<img valign="bottom" alt="alert" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/alert.svg">
CI will fail and the Pull Requests cannot be
merged unless changes pass:<br>
<br>

-   Linting,
-   Unit tests, and
-   Code coverage thresholds

<!-- ⛔️ Do not remove this comment or anything below it ⛔️ -->

[dotenv-extended-readme]: https://github.com/keithmorris/node-dotenv-extended#readme

[vscode-logo]: ../img/logos/vscode.png

[debug-tests-vscode-url]: https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests#debugging-tests-in-vs-code

[standardjs-img]: https://img.shields.io/badge/code_style-standard-F1DA40.svg?style=flat-sqaure

[standardjs-url]: https://standardjs.com

<!-- 🔗 Help link references 🔗  -->

[12-factor-config-url]: https://12factor.net/config

[ghh-closing-issues-keywords-url]: https://help.github.com/articles/closing-issues-using-keywords/

<!-- 🔗 Logo img references 🔗 -->

[standardjs-logo]: https://cdn.rawgit.com/feross/standard/master/badge.svg

[standardjs-url]: https://github.com/standard/standard#readme

[travis-ci-logo]: ../img/logos/logo-travis-ci.png

[travis-ci-url]: https://travis-ci.com/

[eslint-logo]: ../img/logos/logo-eslint.png

[eslint-url]: https://eslint.org/docs/user-guide/getting-started

[jest-logo]: ../img/logos/logo-jest.png

[jest-url]: https://facebook.github.io/jest/docs/en/getting-started.html

<!-- 🔗  Body link references 🔗   -->

[issue-workflow-img]: ../icons8/contribution-lifecycle-create-issue.png

[label-status-triage-img]: https://fakeimg.pl/200x24/d4c5f9/000/?text=status:+triage&font_size=20&font=museo

[pr-workflow-img]: ../icons8/contribution-lifecycle-pr.png

<!-- 🔗  Octicon img references 🔗   -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/alert.svg

[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-down.svg

[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-left.svg

[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-right.svg

[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-down.svg

[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-left.svg

[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-right.svg

[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-up.svg

[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-up.svg

[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/beaker.svg

[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bell.svg

[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bold.svg

[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/book.svg

[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bookmark.svg

[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/briefcase.svg

[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/broadcast.svg

[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/browser.svg

[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bug.svg

[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/calendar.svg

[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/check.svg

[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/checklist.svg

[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-down.svg

[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-left.svg

[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-right.svg

[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-up.svg

[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/circle-slash.svg

[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/circuit-board.svg

[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/clippy.svg

[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/clock.svg

[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/cloud-download.svg

[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/cloud-upload.svg

[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/code.svg

[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/comment-discussion.svg

[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/comment.svg

[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/credit-card.svg

[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/dash.svg

[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/dashboard.svg

[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/database.svg

[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/desktop-download.svg

[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-camera-video.svg

[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-camera.svg

[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-desktop.svg

[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-mobile.svg

[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-added.svg

[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-ignored.svg

[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-modified.svg

[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-removed.svg

[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-renamed.svg

[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff.svg

[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ellipses.svg

[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ellipsis.svg

[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/eye.svg

[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-binary.svg

[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-code.svg

[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-directory.svg

[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-media.svg

[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-pdf.svg

[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-submodule.svg

[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-symlink-directory.svg

[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-symlink-file.svg

[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-text.svg

[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-zip.svg

[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file.svg

[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/flame.svg

[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/fold.svg

[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gear.svg

[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gift.svg

[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gist-secret.svg

[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gist.svg

[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-branch.svg

[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-commit.svg

[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-compare.svg

[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-merge.svg

[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-pull-request.svg

[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/globe.svg

[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/grabber.svg

[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/graph.svg

[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/heart.svg

[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/history.svg

[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/home.svg

[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/horizontal-rule.svg

[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/hubot.svg

[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/inbox.svg

[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/info.svg

[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/issue-closed.svg

[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/issue-opened.svg

[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/issue-reopened.svg

[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/italic.svg

[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/jersey.svg

[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/key.svg

[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/keyboard.svg

[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/law.svg

[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/light-bulb.svg

[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/link-external.svg

[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/link.svg

[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/list-ordered.svg

[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/list-unordered.svg

[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/location.svg

[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/lock.svg

[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/logo-gist.svg

[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/logo-github.svg

[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mail-read.svg

[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mail-reply.svg

[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mail.svg

[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg

[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/markdown.svg

[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/megaphone.svg

[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mention.svg

[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/milestone.svg

[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mirror.svg

[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mortar-board.svg

[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mute.svg

[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/no-newline.svg

[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/octoface.svg

[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/organization.svg

[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/package.svg

[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/paintcan.svg

[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pencil.svg

[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/person.svg

[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pin.svg

[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plug.svg

[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plus-small.svg

[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plus.svg

[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/primitive-dot.svg

[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/primitive-square.svg

[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pulse.svg

[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/question.svg

[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/quote.svg

[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/radio-tower.svg

[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/reply.svg

[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-clone.svg

[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-force-push.svg

[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-forked.svg

[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-pull.svg

[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-push.svg

[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo.svg

[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rocket.svg

[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rss.svg

[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ruby.svg

[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/search.svg

[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/server.svg

[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/settings.svg

[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/shield.svg

[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/sign-in.svg

[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/sign-out.svg

[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/smiley.svg

[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/squirrel.svg

[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/star.svg

[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/stop.svg

[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/sync.svg

[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/tag.svg

[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/tasklist.svg

[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/telescope.svg

[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/terminal.svg

[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/text-size.svg

[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/three-bars.svg

[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/thumbsdown.svg

[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/thumbsup.svg

[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/tools.svg

[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/trashcan.svg

[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-down.svg

[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-left.svg

[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-right.svg

[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-up.svg

[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/unfold.svg

[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/unmute.svg

[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/unverified.svg

[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/verified.svg

[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/versions.svg

[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/watch.svg

[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/x.svg
