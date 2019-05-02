# <img align="bottom" alt="git Pull Request" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg" height="50" width="50"> Pull Request (PR)

_Please describe your changes here._

## Associated issue(s)

Closes #ISSUE_NUMBER

---

- [ ] 1.  The **acceptance criteria** for all associated issues have been
      completed, tested, and validated.
- [ ] 2.  The **README** either reflects my changes or does not require updates.
- [ ] 3.  The **CONTRIBUTING** document either reflects my changes or does not
      require updates.

---

<details><summary>View the <strong>"Code Review Cheat-sheet"...</strong></summary>

### Rule 1: Review all Code before Releasing it

Do the code reviews before deployment.

_Why:_

> Your team will end up, on average, spending 7% more of its time on building
> new features compared with those who do after, and 10% more than those who
> don’t do code reviews at all.

### Rule 2: All developers review code

Make sure all your developers get to review code.

_Why:_

> This will improve the feeling of empowerment, facilitate knowledge transfer,
> and improve developer satisfaction and productivity.

### Rule 3: Four-to-Eight (4-8) Hours per Developers per Week

The optimal amount of time to spend on code reviews is between 0.5 to 1 day per
week per developer.

### Rule 4: Don't Release Code that Fails Reviews

Make code reviews blocking, that is, don’t deploy before they have been carried
out.

### Rule 5: More Rigor, Better Quality and Velocity

Be strict and thorough when reviewing code.

_Why:_

> Your code quality and velocity will thank you.

</details>

---

## Code quality summary

| Measure             | Scores                                                                                                                                                                                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quality gate**    | [![Sonar Alert Status Metrics][sonar-alert-status-badge]][sonar-alert-status-url]                                                                                                                                                                                                                                     |
| **Duplications**    | [![Sonar Duplicated Lines Density Metrics][sonar-duplicated-lines-density-badge]][sonar-duplicated-lines-density-url]                                                                                                                                                                                                 |
| **Maintainability** | [![Sonar Code Smells Metrics][sonar-code-smells-badge]][sonar-code-smells-url]<br>[![Sonar Sqale Rating Metrics][sonar-sqale-rating-badge]][sonar-sqale-rating-url]<br>[![Sonar Sqale Index Metrics][sonar-sqale-index-badge]][sonar-sqale-index-url]<br>[![Sonar Ncloc Metrics][sonar-ncloc-badge]][sonar-ncloc-url] |
| **Reliability**     | [![Sonar Reliability Rating Metrics][sonar-reliability-rating-badge]][sonar-reliability-rating-url]<br>[![Sonar Bugs Metrics][sonar-bugs-badge]][sonar-bugs-url]                                                                                                                                                      |
| **Security**        | [![Sonar Security Rating Metrics][sonar-security-rating-badge]][sonar-security-rating-url]<br>[![Sonar Vulnerabilities Metrics][sonar-vulnerabilities-badge]][sonar-vulnerabilities-url]                                                                                                                              |
| **Test coverage**   | [![Sonar Coverage Metrics][sonar-coverage-badge]][sonar-coverage-url]                                                                                                                                                                                                                                                 |

<!-- ⛔️ Please! DO NOT delete anything below this line. ⛔️  -->

### Code quality, vulnerability, and standards compliance tools

|                                    Code Style                                    |                                 Linters                                 |                           Test frameworks                           |
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-----------------------------------------------------------------: |
|           [![JavaScript Style Guide][standardjs-logo]][standardjs-url]           |                  [![ESLint][eslint-logo]][eslint-url]                   |                 [![Jest BDD][jest-logo]][jest-url]                  |
| [Standard JS user guide ![link-external][octicon-link-external]][standardjs-url] | [ESlint user guide ![link-external][octicon-link-external]][eslint-url] | [Jest user guide ![link-external][octicon-link-external]][jest-url] |

### How to format, lint, and test your changes

Open a Terminal, go to the root directory for **archetypes-rules**, and run:

```bash
$ npm test
```

> ![info][octicon-info] Completed tasks are _not_ required to open a PR, and may
> be addressed while the PR is open.
>
> ![alert][octicon-alert] **_All_ tasks _must_ be completed** and **verified**
> before a PR may be merged into <samp>master</samp>, however.

### How to test a release

The [Pre-release test instructions](https://github.com/commonality/archetypes-rules/wiki/Pre-release-test-instructions) include step-by-step guidelines for bundling, packing, and testing this module as it would be released on NPM.


---

<!-- SonarCloud badge refs -->

[sonar-alert-status-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=alert_status&template=FLAT
[sonar-alert-status-url]:
  https://sonarcloud.io/dashboard?id=commonality_archetypes-rules
[sonar-bugs-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=bugs&template=FLAT
[sonar-bugs-url]:
  https://sonarcloud.io/dashboard?id=commonality_archetypes-rules
[sonar-code-smells-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=code_smells&template=FLAT
[sonar-code-smells-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=code_smells
[sonar-coverage-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=coverage&template=FLAT
[sonar-coverage-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=coverage
[sonar-duplicated-lines-density-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=duplicated_lines_density&template=FLAT
[sonar-duplicated-lines-density-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=duplicated_lines_density
[sonar-ncloc-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=ncloc&template=FLAT
[sonar-ncloc-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=ncloc
[sonar-reliability-rating-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=reliability_rating&template=FLAT
[sonar-reliability-rating-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=reliability_rating
[sonar-security-rating-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=security_rating&template=FLAT
[sonar-security-rating-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=security_rating
[sonar-sqale-index-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=sqale_index&template=FLAT
[sonar-sqale-index-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=sqale_index
[sonar-sqale-rating-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=sqale_rating&template=FLAT
[sonar-sqale-rating-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=sqale_rating
[sonar-vulnerabilities-badge]:
  https://sonarcloud.io/api/project_badges/measure?project=commonality_archetypes-rules&metric=vulnerabilities&template=FLAT
[sonar-vulnerabilities-url]:
  https://sonarcloud.io/component_measures?id=commonality_archetypes-rules&metric=vulnerabilities

<!-- ⛔️ Badge references ⛔️  -->

[standardjs-img]:
  https://img.shields.io/badge/code_style-standard-F1DA40.svg?style=flat-sqaure
[standardjs-url]: https://standardjs.com

<!-- ⛔️ Help link references ⛔️  -->

[ghh-closing-issues-keywords-url]:
  https://help.github.com/articles/closing-issues-using-keywords/

<!-- ⛔️ Logo img references ⛔️  -->

[standardjs-logo]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[standardjs-url]: https://github.com/feross/standard
[eslint-logo]: https://raw.githubusercontent.com/commonality/archetypes-rules/master/docs/img/logos/logo-eslint.png
[eslint-url]: https://eslint.org/docs/user-guide/getting-started
[jest-logo]: https://raw.githubusercontent.com/commonality/archetypes-rules/master/docs/img/logos/logo-jest.png
[jest-url]: https://facebook.github.io/jest/docs/en/getting-started.html

<!-- ⛔️ Octicon img references ⛔️  -->

[octicon-alert]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/alert.svg
[octicon-arrow-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-down.svg
[octicon-arrow-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-left.svg
[octicon-arrow-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-right.svg
[octicon-arrow-small-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-small-up.svg
[octicon-arrow-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-up.svg
[octicon-beaker]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/beaker.svg
[octicon-bell]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bell.svg
[octicon-bold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bold.svg
[octicon-book]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/book.svg
[octicon-bookmark]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bookmark.svg
[octicon-briefcase]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/briefcase.svg
[octicon-broadcast]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/broadcast.svg
[octicon-browser]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/bug.svg
[octicon-calendar]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/calendar.svg
[octicon-check]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/check.svg
[octicon-checklist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/checklist.svg
[octicon-chevron-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-down.svg
[octicon-chevron-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-left.svg
[octicon-chevron-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-right.svg
[octicon-chevron-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-up.svg
[octicon-circle-slash]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circle-slash.svg
[octicon-circuit-board]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/circuit-board.svg
[octicon-clippy]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clippy.svg
[octicon-clock]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/clock.svg
[octicon-cloud-download]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-download.svg
[octicon-cloud-upload]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/cloud-upload.svg
[octicon-code]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/code.svg
[octicon-comment-discussion]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment-discussion.svg
[octicon-comment]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/comment.svg
[octicon-credit-card]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/credit-card.svg
[octicon-dash]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dash.svg
[octicon-dashboard]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dashboard.svg
[octicon-database]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/database.svg
[octicon-desktop-download]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/desktop-download.svg
[octicon-device-camera-video]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera-video.svg
[octicon-device-camera]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-camera.svg
[octicon-device-desktop]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-desktop.svg
[octicon-device-mobile]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/device-mobile.svg
[octicon-diff-added]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-added.svg
[octicon-diff-ignored]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-ignored.svg
[octicon-diff-modified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-modified.svg
[octicon-diff-removed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-removed.svg
[octicon-diff-renamed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff-renamed.svg
[octicon-diff]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/diff.svg
[octicon-ellipses]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipses.svg
[octicon-ellipsis]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/eye.svg
[octicon-file-binary]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-binary.svg
[octicon-file-code]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-code.svg
[octicon-file-directory]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-directory.svg
[octicon-file-media]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-media.svg
[octicon-file-pdf]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-pdf.svg
[octicon-file-submodule]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-submodule.svg
[octicon-file-symlink-directory]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-symlink-file.svg
[octicon-file-text]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-text.svg
[octicon-file-zip]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file-zip.svg
[octicon-file]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/file.svg
[octicon-flame]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/flame.svg
[octicon-fold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/fold.svg
[octicon-gear]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gear.svg
[octicon-gift]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gift.svg
[octicon-gist-secret]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist-secret.svg
[octicon-gist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/gist.svg
[octicon-git-branch]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-branch.svg
[octicon-git-commit]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-commit.svg
[octicon-git-compare]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-compare.svg
[octicon-git-merge]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-merge.svg
[octicon-git-pull-request]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg
[octicon-globe]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/globe.svg
[octicon-grabber]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/grabber.svg
[octicon-graph]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/graph.svg
[octicon-heart]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/heart.svg
[octicon-history]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/history.svg
[octicon-home]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/home.svg
[octicon-horizontal-rule]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/horizontal-rule.svg
[octicon-hubot]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/hubot.svg
[octicon-inbox]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/inbox.svg
[octicon-info]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/info.svg
[octicon-issue-closed]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-closed.svg
[octicon-issue-opened]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-opened.svg
[octicon-issue-reopened]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/issue-reopened.svg
[octicon-italic]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/italic.svg
[octicon-jersey]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/key.svg
[octicon-keyboard]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/law.svg
[octicon-light-bulb]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/light-bulb.svg
[octicon-link-external]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg
[octicon-link]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link.svg
[octicon-list-ordered]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-ordered.svg
[octicon-list-unordered]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/list-unordered.svg
[octicon-location]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/location.svg
[octicon-lock]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/lock.svg
[octicon-logo-gist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-gist.svg
[octicon-logo-github]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/logo-github.svg
[octicon-mail-read]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-read.svg
[octicon-mail-reply]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail-reply.svg
[octicon-mail]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mail.svg
[octicon-mark-github]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mark-github.svg
[octicon-markdown]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/markdown.svg
[octicon-megaphone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/megaphone.svg
[octicon-mention]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mention.svg
[octicon-milestone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/milestone.svg
[octicon-mirror]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mirror.svg
[octicon-mortar-board]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mortar-board.svg
[octicon-mute]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/mute.svg
[octicon-no-newline]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/no-newline.svg
[octicon-octoface]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/octoface.svg
[octicon-organization]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/organization.svg
[octicon-package]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/package.svg
[octicon-paintcan]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/paintcan.svg
[octicon-pencil]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pencil.svg
[octicon-person]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pin.svg
[octicon-plug]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plug.svg
[octicon-plus-small]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus-small.svg
[octicon-plus]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/plus.svg
[octicon-primitive-dot]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-dot.svg
[octicon-primitive-square]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/primitive-square.svg
[octicon-pulse]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/pulse.svg
[octicon-question]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/question.svg
[octicon-quote]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/quote.svg
[octicon-radio-tower]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/radio-tower.svg
[octicon-reply]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/reply.svg
[octicon-repo-clone]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-clone.svg
[octicon-repo-force-push]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-force-push.svg
[octicon-repo-forked]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-forked.svg
[octicon-repo-pull]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-pull.svg
[octicon-repo-push]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo-push.svg
[octicon-repo]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/repo.svg
[octicon-rocket]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/rss.svg
[octicon-ruby]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/ruby.svg
[octicon-search]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/search.svg
[octicon-server]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/server.svg
[octicon-settings]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/settings.svg
[octicon-shield]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/shield.svg
[octicon-sign-in]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-in.svg
[octicon-sign-out]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sign-out.svg
[octicon-smiley]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/smiley.svg
[octicon-squirrel]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/squirrel.svg
[octicon-star]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/star.svg
[octicon-stop]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/stop.svg
[octicon-sync]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tag.svg
[octicon-tasklist]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tasklist.svg
[octicon-telescope]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/telescope.svg
[octicon-terminal]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/terminal.svg
[octicon-text-size]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/text-size.svg
[octicon-three-bars]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/three-bars.svg
[octicon-thumbsdown]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsdown.svg
[octicon-thumbsup]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/thumbsup.svg
[octicon-tools]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/tools.svg
[octicon-trashcan]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/trashcan.svg
[octicon-triangle-down]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-down.svg
[octicon-triangle-left]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-left.svg
[octicon-triangle-right]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-right.svg
[octicon-triangle-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-up.svg
[octicon-unfold]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unfold.svg
[octicon-unmute]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unmute.svg
[octicon-unverified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/unverified.svg
[octicon-verified]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/verified.svg
[octicon-versions]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/versions.svg
[octicon-watch]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/x.svg
