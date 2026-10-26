<h1>Contributing Agreement</h1>

> Here are our rules and guidelines for contributions.

![Contribution and collaboration][octicon-heart] We gratefully accept
contributions like documentation, testing, defect-fixes, refactoring, and
feature requests. If you're down, scroll down!

<a name="toc"></a>

<h2>Table of Contents</h2>

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC) -->

- [1. Code of Conduct](#1-code-of-conduct)
- [2. Support](#2-support)
- [3. Git](#3-git)
  - [3.1. Default branch](#31-default-branch)
  - [3.2. Workflow Model](#32-workflow-model)
- [4. Commits](#4-commits)
  - [4.1. Atomic Commits](#41-atomic-commits)
  - [4.2. Commit Message Format](#42-commit-message-format)
  - [4.3. Revert](#43-revert)
  - [4.4. Type](#44-type)
  - [4.5. Scope](#45-scope)
  - [4.5. Subject](#45-subject)
  - [4.6. Body](#46-body)
  - [4.7. Footer](#47-footer)
  - [4.8. Examples](#48-examples)
- [5. Source Code Style Guidelines](#5-source-code-style-guidelines)
  - [5.1. Linting](#51-linting)
  - [5.2. JavaScript Standard Style](#52-javascript-standard-style)
- [6. Configuration](#6-configuration)
- [7. Testing](#7-testing)
- [8. Troubleshooting](#8-troubleshooting)
- [9. References](#9-references)

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

* * *

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [RFC 2119][rfc2119-url].

* * *

## 1. Code of Conduct

First, please read our [_Code of Conduct_][23].

## 2. Support

> ![Question][octicon-question] **Go to Stack Overflow for Questions and
> Problems**
>
> Do not open issues for general support questions on GitLab. You've got much
> better chances of getting your question answered on dedicated support
> platforms, the best being Stack Overflow.

We use GitLab issues for

- [**Defect** reports][24]

- [**Feature** requests][25]

- [**Metrics** proposals][26]

- [**Refactoring** suggestions][27]

## 3. Git

We use Git to change, review, and version our source code.

### 3.1. Default branch

Our default branch is `master`.

**Never** push changes directly to `master`. The `master` branch MUST be updated
with Pull Requests.

### 3.2. Workflow Model

We use the branch-based [GitHub flow][github-flow] to manage changes. That means
that _anything merged into `master`_ SHOULD be immediately available as an
automated production release.

![GitHub flow example][28]

- The `master` branch is always stable and deployable.

- To work on something new, branch off `master` and give the new branch a
    descriptive name:

    > `777-feat-unicorn-husbandry` where:
    >
    > - `777` is the related Issue number (optional)
    >
    > - `feat` is the [type of change][10] you're making
    >
    > - `unicorn-husbandry` describes the change (or gives the changes a
    >     meaningful label)

- Regularly **rebase** that branch against `master` and push your work to a
    branch with the same name on the server.

- When you need feedback, help or think you are ready, [submit a pull
    request][29].

- Once the branch has been merged (or rebased) into `master`, delete it from
    both your local and remote repository.

## 4. Commits

<img alt="git commit symbol" height="64" width="64"
src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-commit.svg">

> ![Citation][octicon-quote] git-commit - Record changes to the repository [^1]

### 4.1. Atomic Commits

If possible, make [atomic commits ![external
link][octicon-link-external]][atomic-commits-url], which means:

- Each commit should contain exactly one self-contained functional change

- A functional change should be contained in exactly one commit

- A commit should not create an inconsistent state (such as test errors, linting
    errors, partial fix, feature with documentation etc...)

A complex feature can be broken down into multiple commits as long as each one
keep a consistent state and consist of a self-contained change.

### 4.2. Commit Message Format

[![Angular%20Commit%20Message%20Format][30]][angular-commit-message-url]

* * *

![Light bulb][octicon-light-bulb] **TIP: How to Write Perfect Commit Messages
Every Time**

Try a CLI tool like [Commitizen][31], which presents a step-by-step wizard to
create perfect commit messages (till you get the hang of it).

* * *

Each commit message consists of a **header**, a **body** and a **footer**.

The header has a special format that includes a **type**, a **scope** and a
**subject**:

```commit
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory.

The **scope** of the header is optional.

The **footer** can contain an [issue closing pattern ![external
link][octicon-link-external]][auto-issue-close-docs].

### 4.3. Revert

If the commit reverts a previous commit, it should begin with `revert:`,
followed by the header of the reverted commit. In the body it should say: `This
reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### 4.4. Type

Type declares the _kind of changes_ you're making.

Type values MUST be one of the following:

| Type         | Description                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **build**    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)                                                    |
| **chore**    | Administrative and management tasks<hr>![Warning!][octicon-alert] DEPRECATED                                                                           |
| **ci**       | Changes to the CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)                                            |
| **docs**     | Documentation only changes                                                                                                                             |
| **feat**     | A new feature                                                                                                                                          |
| **fix**      | A bug fix                                                                                                                                              |
| **perf**     | A code change that improves performance                                                                                                                |
| **refactor** | Changes made to the internal structure of software to make it easier to understand and cheaper to modify without changing its observable behavior [^4] |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)                                                 |
| **test**     | Adding missing tests or correcting existing tests                                                                                                      |

### 4.5. Scope

The scope should match the name of the package [^2][^3], module, or namespace
(as perceived by the person reading the changelog generated from commit
messages).

### 4.5. Subject

The subject contains succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"

- Don't capitalize first letter

- No dot (.) at the end

- Limit to 72 characters or fewer

### 4.6. Body

Just as in the **subject**, use the imperative, present tense: "change" not
"changed" nor "changes". The body should include the motivation for the change
and contrast this with previous behavior. When only changing documentation,
include `[ci skip]` in the commit body.

### 4.7. Footer

The footer should contain any information about **Breaking Changes** and is also
the place to reference GitLab issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space
or two newlines. The rest of the commit message is then used for this.

### 4.8. Examples

```commit
fix(pencil): stop graphite breaking when too much pressure applied
```

```commit
feat(pencil): add 'graphiteWidth' option

Fix #42
```

```commit
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed.

The default graphite width of 10mm is always used for performance reasons.
```

## 5. Source Code Style Guidelines

To ensure consistency and quality throughout the source code, all source code
MUST have:

1. No [linting][17] errors

1. A [test][20] for every possible cases introduced by your code change

1. **100%** test coverage

1. [Valid commit message(s)][8]

1. Documentation for new features

1. Updated documentation for modified features

* * *

> > > ![Important][octicon-alert] Make sure your editor respects the
> > > [EditorConfig ![external][octicon-link-external]][32] configuration file
> > > we put at the root of the repository.

* * *

### 5.1. Linting

[![ESLint logo][34] ESLint][33] [![Prettier logo][36] Prettier][35]

Before pushing your code changes make sure there are no linting errors.

> **![Tip!][octicon-light-bulb] TIP! `--fix` lint errors and warnings
> automatically**
>
> Many linting errors can be automatically fixed from the Terminal by running:
>
> ```shell
> npm run lint:js --fix
> ```

### 5.2. JavaScript Standard Style

[![JS Standard Code Style][37]][standardjs-url]

1. All JavaScript syntax should adhere to [JavaScript Standard Style
    ![external][octicon-link-external]][standardjs-url].

1. Run `npm run lint:js` to evaluate with [`ESLint`][38].

## 6. Configuration

[![dotenv-extended][40]][39]

All data MUST be stored separately from source code.

We follow the Twelve-Factor App Config convention, and store configuration
details in environment variables.

> ![info][octicon-info] Our [Developer Guidelines for Configuration][41]
> explains how we do this.

## 7. Testing

[![Jest logo][43] Jest][42]

1. Include thoughtfully-worded, well-structured tests in a `__tests__` directory
    with each module.

1. Treat `describe` as a noun or situation.

1. Treat `it` as a statement about state or how an operation changes state.

> ![Tip!][octicon-light-bulb] **Use `npm run test:create <path/to/file.js>`**
>
> This will generate a Jest spec stub for your JavaScript.

## 8. Troubleshooting

[![vscode logo][44] Visual Studio Code][debug-tests-vscode-url]

The best way to troubleshoot your tests is with a debugger.

> **![tip][octicon-light-bulb] Debugging Jest with VS Code**
>
> Read [Debugging tests in VS Code
> ![link-external][octicon-link-external]][debug-tests-vscode-url] for
> step-by-step set-up and execution instructions.

## 9. References

[^1]:

_Git - git-commit Documentation._ (2019). _Git-scm.com._ Retrieved February 12,
2019, from [https://git-scm.com/docs/git-commit][45]

[^2]:

_Package principles._ (2014). _En.wikipedia.org._ Retrieved February 13, 2019,
from
[https://en.wikipedia.org/wiki/Package_principles#Principles_of_package_cohesion][46]

[^3]:

Brack, F. (2017). _Why Do You Need To Know Package Cohesion Fundamentals?_.
Retrieved from
[https://medium.com/@fagnerbrack/why-do-you-need-to-know-package-cohesion-fundamentals-8a3510cba2c1][47]

[^4]:

Fowler, M. (2019) _Refactoring_. Retrieved February 13, 2019, from
[https://refactoring.com/][48]

<!-- ⛔️ Do not remove this comment or anything below it ⛔️  -->

[octicon-alert]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/alert.svg

[octicon-heart]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/heart.svg

[octicon-info]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/info.svg

[octicon-light-bulb]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/light-bulb.svg

[octicon-link-external]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg

[octicon-question]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/question.svg

[octicon-quote]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/quote.svg

[angular-commit-message-url]:
    https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines

[debug-tests-vscode-url]:
    https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests#debugging-tests-in-vs-code

[8]: #42-commit-message-format

[10]: #44-type

[17]: #51-linting

[20]: #7-testing

[23]: code-of-conduct.md

[24]:
<https://github.com/commonality/archetypes-rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Defect>
"Report faulty or unexpected behavior"

[25]:
<https://github.com/commonality/archetypes-rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Feature>
"Request a new Feature"

[26]:
<https://github.com/commonality/archetypes-rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Metrics>
"Propose Goals, Questions, and Metrics"

[27]:
<https://github.com/commonality/archetypes-rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Refactoring>
"Suggest a new Refactoring"

[28]: ./docs/img/github-flow.png

[29]: https://gihub.com/commonality/archetypes-rules/pull-requests/new

[30]:
    https://img.shields.io/badge/commit%20message%20format-angular-F96673.svg?style=flat-square

[31]: https://github.com/commitizen/cz-cli

[32]: http://editorconfig.org

[33]: https://eslint.org

[34]: ./docs/img/logos/logo-eslint.png

[35]: https://github.com/prettier/eslint-config-prettier#readme

[36]: ./docs/img/logos/logo-prettier.png

[37]:
    https://camo.githubusercontent.com/ac8a70bd5fdbcef7bfc0f1095e276471765435d3/68747470733a2f2f63646e2e7261776769742e636f6d2f7374616e646172642f7374616e646172642f6d61737465722f62616467652e737667

[38]: https://eslint.org/

[39]: https://github.com/keithmorris/node-dotenv-extended#readme

[40]: ./docs/img/logos/logo-dotenv.png

[41]: ./docs/developer-guidelines#readme

[42]: https://jestjs.io/

[43]: ./docs/img/logos/logo-jest.png

[44]: ./docs/img/logos/vscode.png

[45]: https://git-scm.com/docs/git-commit

[46]:
    https://en.wikipedia.org/wiki/Package_principles#Principles_of_package_cohesion

[47]:
    https://medium.com/@fagnerbrack/why-do-you-need-to-know-package-cohesion-fundamentals-8a3510cba2c1

[48]: https://refactoring.com/

[rfc2119-url]: https://www.ietf.org/rfc/rfc2119.txt

[github-flow]: http://scottchacon.com/2011/08/31/github-flow.html

[atomic-commits-url]: https://en.wikipedia.org/wiki/Atomic_commit

[auto-issue-close-docs]:
    https://docs.github.com/ee/user/project/issues/automatic_issue_closing.html
