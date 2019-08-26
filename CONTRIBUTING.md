# Contributing Agreement

> Here are our rules and guidelines for contributions.

![Contribution and collaboration][octicon-heart] We gratefully accept
contributions like documentation, testing, defect-fixes, refactoring, and
feature requests. If you're down, scroll down!

## Table of Contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC) -->

-   [1. Code of Conduct][1]

-   [2. Support][2]

-   [3. Git][3]

    -   [3.1. Default branch][4]

    -   [3.2. Workflow Model][5]

-   [4. Commits][6]

    -   [4.1. Atomic Commits][7]

    -   [4.2. Commit Message Format][8]

    -   [4.3. Revert][9]

    -   [4.4. Type][10]

    -   [4.5. Scope][11]

    -   [4.5. Subject][12]

    -   [4.6. Body][13]

    -   [4.7. Footer][14]

    -   [4.8. Examples][15]

-   [5. Source Code Style Guidelines][16]

    -   [5.1. Linting][17]

    -   [5.2. JavaScript Standard Style][18]

-   [6. Configuration][19]

-   [7. Testing][20]

-   [8. Troubleshooting][21]

-   [9. References][22]

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

-   [**Defect** reports][24]

-   [**Feature** requests][25]

-   [**Metrics** proposals][26]

-   [**Refactoring** suggestions][27]

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

-   The `master` branch is always stable and deployable.

-   To work on something new, branch off `master` and give the new branch a
    descriptive name:

    > `777-feat-unicorn-husbandry` where:
    >
    > -   `777` is the related Issue number (optional)
    >
    > -   `feat` is the [type of change][10] you're making
    >
    > -   `unicorn-husbandry` describes the change (or gives the changes a
    >     meaningful label)

-   Regularly **rebase** that branch against `master` and push your work to a
    branch with the same name on the server.

-   When you need feedback, help or think you are ready, [submit a pull
    request][29].

-   Once the branch has been merged (or rebased) into `master`, delete it from
    both your local and remote repository.

## 4. Commits

<img alt="git commit symbol" height="64" width="64" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-commit.svg">

> ![Citation][octicon-quote] git-commit - Record changes to the repository [^1]

### 4.1. Atomic Commits

If possible, make [atomic commits
![external link][octicon-link-external]][atomic-commits-url], which means:

-   Each commit should contain exactly one self-contained functional change

-   A functional change should be contained in exactly one commit

-   A commit should not create an inconsistent state (such as test errors, linting
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

The **footer** can contain an [issue closing pattern
![external link][octicon-link-external]][auto-issue-close-docs].

### 4.3. Revert

If the commit reverts a previous commit, it should begin with `revert:`,
followed by the header of the reverted commit. In the body it should say:
`This reverts commit <hash>.`, where the hash is the SHA of the commit being
reverted.

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

-   Use the imperative, present tense: "change" not "changed" nor "changes"

-   Don't capitalize first letter

-   No dot (.) at the end

-   Limit to 72 characters or fewer

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

1.  No [linting][17] errors

1.  A [test][20] for every possible cases introduced by your code change

1.  **100%** test coverage

1.  [Valid commit message(s)][8]

1.  Documentation for new features

1.  Updated documentation for modified features

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

1.  All JavaScript syntax should adhere to [JavaScript Standard Style
    ![external][octicon-link-external]][standardjs-url].

1.  Run `npm run lint:js` to evaluate with [`ESLint`][38].

## 6. Configuration

[![dotenv-extended][40]][39]

All data MUST be stored separately from source code.

We follow the Twelve-Factor App Config convention, and store configuration
details in environment variables.

> ![info][octicon-info] Our [Developer Guidelines for Configuration][41]
> explains how we do this.

## 7. Testing

[![Jest logo][43] Jest][42]

1.  Include thoughtfully-worded, well-structured tests in a `__tests__`
    directory with each module.

1.  Treat `describe` as a noun or situation.

1.  Treat `it` as a statement about state or how an operation changes state.

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

[^1]\:

_Git - git-commit Documentation._ (2019). _Git-scm.com._ Retrieved February 12,
2019, from [https://git-scm.com/docs/git-commit][45]

[^2]\:

_Package principles._ (2014). _En.wikipedia.org._ Retrieved February 13, 2019,
from
[https://en.wikipedia.org/wiki/Package_principles#Principles_of_package_cohesion][46]

[^3]\:

Brack, F. (2017). _Why Do You Need To Know Package Cohesion Fundamentals?_.
Retrieved from
[https://medium.com/@fagnerbrack/why-do-you-need-to-know-package-cohesion-fundamentals-8a3510cba2c1][47]

[^4]\:

Fowler, M. (2019) _Refactoring_. Retrieved February 13, 2019, from
[https://refactoring.com/][48]

<!-- ⛔️ Do not remove this comment or anything below it ⛔️  -->

[octicon-build.css]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/build.css

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/alert.svg

[octicon-archive]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/archive.svg

[octicon-arrow-both]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-both.svg

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

[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ellipsis.svg

[octicon-eye-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/eye-closed.svg

[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/eye.svg

[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-binary.svg

[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-code.svg

[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-directory.svg

[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-media.svg

[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-pdf.svg

[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-submodule.svg

[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-symlink-directory.svg

[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-symlink-file.svg

[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-zip.svg

[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file.svg

[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/flame.svg

[octicon-fold-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/fold-down.svg

[octicon-fold-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/fold-up.svg

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

[octicon-github-action]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/github-action.svg

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

[octicon-kebab-horizontal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/kebab-horizontal.svg

[octicon-kebab-vertical]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/kebab-vertical.svg

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

[octicon-note]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/note.svg

[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/octoface.svg

[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/organization.svg

[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/package.svg

[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/paintcan.svg

[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pencil.svg

[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/person.svg

[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pin.svg

[octicon-play]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/play.svg

[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plug.svg

[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plus-small.svg

[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plus.svg

[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/primitive-dot.svg

[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/primitive-square.svg

[octicon-project]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/project.svg

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

[octicon-report]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/report.svg

[octicon-request-changes]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/request-changes.svg

[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rocket.svg

[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rss.svg

[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ruby.svg

[octicon-screen-full]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/screen-full.svg

[octicon-screen-normal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/screen-normal.svg

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

[octicon-zap]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/zap.svg

[angular-commit-message-url]: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines

[debug-tests-vscode-url]: https://github.com/Microsoft/vscode-recipes/tree/master/debugging-jest-tests#debugging-tests-in-vs-code

[1]: #1-code-of-conduct

[2]: #2-support

[3]: #3-git

[4]: #31-default-branch

[5]: #32-workflow-model

[6]: #4-commits

[7]: #41-atomic-commits

[8]: #42-commit-message-format

[9]: #43-revert

[10]: #44-type

[11]: #45-scope

[12]: #45-subject

[13]: #46-body

[14]: #47-footer

[15]: #48-examples

[16]: #5-source-code-style-guidelines

[17]: #51-linting

[18]: #52-javascript-standard-style

[19]: #6-configuration

[20]: #7-testing

[21]: #8-troubleshooting

[22]: #9-references

[23]: code-of-conduct.md

[24]\:
<https://github.com/commonality/@archetypes/rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Defect>
"Report faulty or unexpected behavior"

[25]\:
<https://github.com/commonality/@archetypes/rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Feature>
"Request a new Feature"

[26]\:
<https://github.com/commonality/@archetypes/rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Metrics>
"Propose Goals, Questions, and Metrics"

[27]\:
<https://github.com/commonality/@archetypes/rules/issues/new?issue[assignee_id]=&issue[milestone_id=&issuable_template=Refactoring>
"Suggest a new Refactoring"

[28]: ./docs/img/github-flow.png

[29]: https://gihub.com/commonality/@archetypes/rules/pull-requests/new

[30]: https://img.shields.io/badge/commit%20message%20format-angular-F96673.svg?style=flat-square

[31]: https://github.com/commitizen/cz-cli

[32]: http://editorconfig.org

[33]: https://eslint.org

[34]: ./docs/img/logos/logo-eslint.png

[35]: https://github.com/prettier/eslint-config-prettier#readme

[36]: ./docs/img/logos/logo-prettier.png

[37]: https://camo.githubusercontent.com/ac8a70bd5fdbcef7bfc0f1095e276471765435d3/68747470733a2f2f63646e2e7261776769742e636f6d2f7374616e646172642f7374616e646172642f6d61737465722f62616467652e737667

[38]: https://eslint.org/

[39]: https://github.com/keithmorris/node-dotenv-extended#readme

[40]: ./docs/img/logos/logo-dotenv.png

[41]: ./docs/developer-guidelines#readme

[42]: https://jestjs.io/

[43]: ./docs/img/logos/logo-jest.png

[44]: ./docs/img/logos/vscode.png

[45]: https://git-scm.com/docs/git-commit

[46]: https://en.wikipedia.org/wiki/Package_principles#Principles_of_package_cohesion

[47]: https://medium.com/@fagnerbrack/why-do-you-need-to-know-package-cohesion-fundamentals-8a3510cba2c1

[48]: https://refactoring.com/

[rfc2119-url]: https://www.ietf.org/rfc/rfc2119.txt

[github-flow]: http://scottchacon.com/2011/08/31/github-flow.html

[atomic-commits-url]: https://en.wikipedia.org/wiki/Atomic_commit

[auto-issue-close-docs]: https://docs.github.com/ee/user/project/issues/automatic_issue_closing.html
