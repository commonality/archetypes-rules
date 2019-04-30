# Release management

## Table of Contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of Contents) -->

-   [1. Overview](#1-overview)
    -   [1.1. The **archetypes-rules** Node.js module](#11-the-archetypes-rulessignatures-nodejs-module)
    -   [1.2. Releases and the npm public registry](#12-releases-and-the-npm-public-registry)
    -   [1.3. Dependency managers install releases](#13-dependency-managers-install-releases)
    -   [1.5. Pre-releases and regular releases](#15-pre-releases-and-regular-releases)
-   [1. Continuous deployment with `semantic-release`](#1-continuous-deployment-with-semantic-release)
-   [2. Publishing to npm](#2-publishing-to-npm)
-   [3. Installing archetypes-rules](#3-installing-archetypes-rulessignatures)
-   [4. Release team](#4-release-team)
-   [5. Release communication](#5-release-communication)
    -   [5.1. Release issues](#51-release-issues)
    -   [5.2. Communication channels](#52-communication-channels)
-   [6. Process](#6-process)
    -   [6.1. Patching defects for a release](#61-patching-defects-for-a-release)
    -   [6.2. Publishing the patch](#62-publishing-the-patch)
-   [7. Emergency releases](#7-emergency-releases)

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. Overview

### 1.1. The **archetypes-rules** Node.js module

**archetypes-rules** is a Node.js [module
![offsite web page][octicon-link-external]][npmjs-about-modules-doc] that
encapsulates read-only API access to data-leakage detection definitions. We call
the data structure that represents a data-leakage detection defintion a
"signature." We store a community-tested list of signatures in a file called
`signatures.json`.

### 1.2. Releases and the npm public registry

We use a product manifest file called `package.json` to describe and publish
**archetypes-rules** revisions as [packages
![offsite web page][octicon-link-external]][npmjs-about-packages-doc] on the
[public npm registry
![offsite web page][octicon-link-external]][npmjs-public-registry-doc], which is
a database of JavaScript packages.

### 1.3. Dependency managers install releases

The development community usually installs Node.js packages with a dependency
manager. The two most popular Node.js dependency managers are

1.  npm
1.  Yarn

> <h4><img alt="Stop!" height="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/stop.svg" valign="bottom" width="30"> Don't download releases manually</h4>
>
> **Always** _install_, _uninstall_, and _update_ modules with a dependency
> manager.

### 1.5. Pre-releases and regular releases

<dl>
  <dt>Regular releases</dt>
  <dd>Production-ready modules that designate the
  types of changes in each release with [semantic versioning][semver-spec].</dd>
  <dt>Pre-releases</dt>
  <dd>Preview releases that are not yet considered production-ready.</dd>
</dl>

* * *

![Important note][octicon-alert]
[**Reuse/Release Equivalence Principle** ![external link][octicon-link-external]](http://wiki.c2.com/?ReuseReleaseEquivalencePrinciple)

If your source code cannot be installed (e.g., with a dependency manager), or
has no public API, it's not a release candidate!

* * *

## 1. Continuous deployment with `semantic-release`

**archetypes-rules** uses [`semantic-release`][semantic-release-readme].
Whenever source code is merged into `master` (after passing all unit tests with
code coverage thresholds satisfied), we automatically:

1.  **Bump the semantic version** of **archetypes-rules** (based on conventional
    commits).

1.  **Update the CHANGELOG.md** file.

1.  **Generate release notes**.

1.  **Publish** the **archetypes-rules** to the public npm registry.

## 2. Publishing to npm

The semantic-release package will publish a new package whenever changes have
been successfully merged into `master`.

```shell
npm run semantic-release
```

* * *

<details>

<summary><img src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/beaker.svg" height="30" width="30" alt="semantic-release dry-runs" valign="middle" hspace="8"> Test semantic-release without really publishing</summary>

Open a Terminal and change into your **archetypes-rules** directory.

Then run:

```shell
npm run semantic-release -- --dry-run
```

The `--dry-run` option executes semantic-release without actually publishing
anything. You should see output similar to this:

```shell
> archetypes-rules@0.0.0 semantic-release /Users/username/Projects/gitlab/archetypes-rules/signatures
> semantic-release "--dry-run"

[8:00:23 PM] [semantic-release] › ℹ  Running semantic-release version 15.13.3
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/changelog"
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/gitlab"
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "verifyConditions" from "@semantic-release/npm"
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "analyzeCommits" from "@semantic-release/commit-analyzer"
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "generateNotes" from "@semantic-release/release-notes-generator"
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "publish" from "@semantic-release/gitlab"
[8:00:23 PM] [semantic-release] › ✔  Loaded plugin "publish" from "@semantic-release/npm"
[8:00:23 PM] [semantic-release] › ℹ  This test run was triggered on the branch 1-api-signatures, while semantic-release is configured to only publish from master, therefore a new version won’t be published.
```

</details>

* * *

## 3. Installing archetypes-rules

```shell
npm install **archetypes-rules** --global
```

## 4. Release team

Try to form a team of at least two people to validate every release. This
release team—usually a Maintainer (or Trusted Committer) and a
Contributor—should oversee every release. This two-person team is responsible
for:

1.  The (scheduled) release
1.  Monitoring issues over the weekend
1.  Determining if a patch release is necessary
1.  Publishing the patch release (if necessary)

The two-person team should seek input from the whole team two business days
following a release to double-check if a patch release is necessary.

## 5. Release communication

### 5.1. Release issues

Each release should have a release issue in Gitlab. The release issue is the
source of information for the team about the status of a release. Be sure the
release issue has the <kbd>type: release</kbd> label so that it's easy to find.

### 5.2. Communication channels

Each product SHOULD use the following communication channels:

-   **Twitter**: every product should have a dedicated Twitter account
-   **Repository CHANGELOG.md** to document the changes made with every release
    ever made
-   **Repository README.md** edits (for new features or breaking API changes)
-   **NOTICE.md** updates that publically list all product dependencies and their
    SPDX licenses
-   **Gitlab Release** with the changes made by (semantic) version
-   **Public artifact registry/repository documentation** for each release (e.g.,
    npm, Maven Central)

## 6. Process

On the day of a release, the release team should follow these steps:

1.  Review open Pull Requests to see if any should be merged. In general, you
    can merge Pull Requests that:
    -   Have been open at least two days and have been reviewed (these are just
        waiting for merge).
    -   Important Pull Requests (as determined by the team). You should stop and
        have people review before merging if they haven't been already.
    -   Documentation changes.
    -   Small defect fixes written by a team member.
1.  Squash and merge the branch with changes into `master`.
1.  Wait for the "semantic-release" job (in the .gitlab-ci.yml) to complete.
1.  Update the release blog post with a "Highlights" section, including new
    rules and anything else that's important.
1.  Make a release announcement on Twitter.
1.  Make a release announcement on the release issue. Document any problems that
    occurred during the release, and remind the team not to merge anything other
    than documentation changes and defect fixes. Leave the release issue open.
1.  Add the `patch release pending` label to the release issue. (When this label
    is present, `eslint-github-bot` will create a pending status check on
    non-semver-patch Pull Requests, to ensure that they aren't accidentally
    merged while a patch release is pending.)

### 6.1. Patching defects for a release

Two business days following the (scheduled) release, the release team needs to
determine if a patch release is necessary. A patch release is considered
necessary if any of the following occurred since the scheduled release:

-   A regression defect is causing people's lint builds to fail when it previously
    passed.
-   Any defect that is causing a lot of problems for users (frequently happens due
    to new functionality).

The patch release decision should be made as early as possible. If a patch
release is necessary, then follow the same steps as the scheduled release
process.

In rare cases, a second patch release might be necessary if the release is known
to have a severe regression that hasn't been fixed by Monday. If this occurs,
the release team should announce the situation on the release issue, and leave
the issue open until all patch releases are complete. However, it's usually
better to fix defects for the next release cycle rather than doing a second
patch release.

### 6.2. Publishing the patch

After the patch release has been published (or no patch release is necessary),
close the release issue and inform the team that they can start merging in
semver-minor changes again.

## 7. Emergency releases

In general, we try not to do emergency releases (an emergency release is
unplanned and isn't the regularly scheduled release or the anticipated patch
release). Even if there is a regression, it's best to wait the weekend to see if
any other problems arise so a patch release can fix as many issues as possible.

The only real exception is if **archetypes-rules** is completely unusable by
most of the current users. For instance, we once pushed a release that errored
for everyone because it was missing some core files. In that case, an emergency
release is appropriate.

* * *

<nav align="center">

![chevron-left][octicon-chevron-left] Previous:
[2. Issue management](/docs/maintainer-guide/issues.md) \|
[![arrow-up][octicon-arrow-up] Back to Maintainer Guide](/docs/maintainer-guide/#readme)
| Next:
[5. Governance ![chevron-right][octicon-chevron-right]](/docs/maintainer-guide/governance.md)

</nav>

[semantic-release-readme]: https://github.com/semantic-release/semantic-release#readme

<!-- ⛔️ Do not remove this comment or anything below it ⛔️  -->

<!-- Documentation links -->

[npmjs-about-modules-doc]: https://docs.npmjs.com/about-packages-and-modules#about-modules

[npmjs-about-packages-doc]: https://docs.npmjs.com/about-packages-and-modules#about-packages

[npmjs-public-registry-doc]: https://docs.npmjs.com/about-the-public-npm-registry

[semver-spec]: https://semver.org "Semantic Versioning 2.0.0 specification"

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/alert.svg

[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-down.svg

[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-left.svg

[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-right.svg

[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-down.svg

[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-left.svg

[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-right.svg

[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-up.svg

[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-up.svg

[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/beaker.svg

[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bell.svg

[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bold.svg

[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/book.svg

[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bookmark.svg

[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/briefcase.svg

[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/broadcast.svg

[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/browser.svg

[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bug.svg

[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/calendar.svg

[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/check.svg

[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/checklist.svg

[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-down.svg

[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-left.svg

[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-right.svg

[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-up.svg

[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circle-slash.svg

[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circuit-board.svg

[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clippy.svg

[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clock.svg

[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-download.svg

[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-upload.svg

[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/code.svg

[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment-discussion.svg

[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment.svg

[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/credit-card.svg

[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dash.svg

[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dashboard.svg

[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/database.svg

[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/desktop-download.svg

[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera-video.svg

[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera.svg

[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-desktop.svg

[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-mobile.svg

[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-added.svg

[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-ignored.svg

[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-modified.svg

[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-removed.svg

[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-renamed.svg

[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff.svg

[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipses.svg

[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipsis.svg

[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/eye.svg

[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-binary.svg

[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-code.svg

[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-directory.svg

[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-media.svg

[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-pdf.svg

[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-submodule.svg

[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-directory.svg

[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-file.svg

[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-text.svg

[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-zip.svg

[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file.svg

[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/flame.svg

[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/fold.svg

[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gear.svg

[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gift.svg

[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist-secret.svg

[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist.svg

[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-branch.svg

[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-commit.svg

[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-compare.svg

[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-merge.svg

[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg

[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/globe.svg

[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/grabber.svg

[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/graph.svg

[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/heart.svg

[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/history.svg

[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/home.svg

[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/horizontal-rule.svg

[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/hubot.svg

[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/inbox.svg

[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/info.svg

[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-closed.svg

[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-opened.svg

[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-reopened.svg

[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/italic.svg

[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/jersey.svg

[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/key.svg

[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/keyboard.svg

[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/law.svg

[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/light-bulb.svg

[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg

[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link.svg

[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-ordered.svg

[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-unordered.svg

[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/location.svg

[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/lock.svg

[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-gist.svg

[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-github.svg

[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-read.svg

[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-reply.svg

[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail.svg

[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mark-github.svg

[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/markdown.svg

[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/megaphone.svg

[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mention.svg

[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/milestone.svg

[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mirror.svg

[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mortar-board.svg

[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mute.svg

[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/no-newline.svg

[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/octoface.svg

[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/organization.svg

[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/package.svg

[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/paintcan.svg

[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pencil.svg

[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/person.svg

[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pin.svg

[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plug.svg

[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus-small.svg

[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus.svg

[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-dot.svg

[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-square.svg

[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pulse.svg

[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/question.svg

[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/quote.svg

[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/radio-tower.svg

[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/reply.svg

[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-clone.svg

[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-force-push.svg

[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-forked.svg

[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-pull.svg

[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-push.svg

[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo.svg

[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rocket.svg

[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rss.svg

[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ruby.svg

[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/search.svg

[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/server.svg

[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/settings.svg

[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/shield.svg

[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-in.svg

[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-out.svg

[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/smiley.svg

[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/squirrel.svg

[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/star.svg

[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/stop.svg

[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sync.svg

[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tag.svg

[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tasklist.svg

[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/telescope.svg

[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/terminal.svg

[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/text-size.svg

[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/three-bars.svg

[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsdown.svg

[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsup.svg

[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tools.svg

[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/trashcan.svg

[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-down.svg

[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-left.svg

[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-right.svg

[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-up.svg

[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unfold.svg

[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unmute.svg

[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unverified.svg

[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/verified.svg

[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/versions.svg

[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/watch.svg

[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/x.svg
