# Displaying Product Maturity (GitHub)

> Treat every new repository as a _reference_ repository in order to improve our
> code; engage the open source community; and delivery better products.

## Table of Contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of Contents) -->

-   [1. README.md](#1-readmemd)
    -   [1.1. Product status](#11-product-status)
    -   [1.2. RunKit playground notebooks](#12-runkit-playground-notebooks)
-   [2. Project dashboard](#2-project-dashboard)
-   [3. Code quality](#3-code-quality)
    -   [3.1. Pull Request quality summaries](#31-merge-request-quality-summaries)
    -   [3.2. Source code (and commit message) conventions, quality, vulnerability, and testing tools](#32-source-code-and-commit-message-conventions-quality-vulnerability-and-testing-tools)
    -   [3.3. Automated status checks](#33-automated-status-checks)
-   [4. Open Source maturity models](#4-open-source-maturity-models)

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 1. <samp>README.md</samp>

> ![info][octicon-info] All of the badges you see below are served in
> _real-time_ by CI-services.
> [`commonality`][org-url]/[`readme-inspector`][repo-url].

### 1.1. Product status

Every repository's README.md provides real-time, core product status badges that
declare

1.  The product's FOSS license
1.  Third-party FOSS license obligation status (with [FOSSA
    ![link-external][octicon-link-external]][fossa-url])
1.  Security vulnerability status (with the [Node Security Program
    ![link-external][octicon-link-external]][fossa-url] and [Snyk
    ![link-external][octicon-link-external]][vulnerabilities-url])
1.  Production and development dependency drift status (with [David DM
    ![link-external][octicon-link-external]][daviddm-url])
1.  Build and test status on MacOS, Ubuntu, and Windows (with [Travis CI
    ![link-external][octicon-link-external]][travis-url] and [Appveyor
    ![link-external][octicon-link-external]][appveyor-url])
1.  Test coverage percentage (with [Codacy
    ![link-external][octicon-link-external]][codacy-url])
1.  Code quality status (with [Codacy
    ![link-external][octicon-link-external]][codacy-url])
1.  Maintenance status
1.  [NPMS ![link-external][octicon-link-external]][npms-url] score
1.  Downloads per month

* * *

[![NPM version][npm-image]][npm-url]
[![GitHub release][github-release-image]][github-release-url]

> <img align="middle" alt="markdown" height="50" width="50"  src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/markdown.svg">
> Inspect GitHub (Enterprise) repositories for the presence and quality of
> READMEs.

[![The MIT License][license-image]][license-url]
[![FOSSA Status][fossa-image]][fossa-url] [![NSP Status][nsp-image]][nsp-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]<br>
[![Dependency Status][daviddm-image]][daviddm-url]
[![Development Dependency Status][daviddm-dev-image]][daviddm-dev-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coverage percentage][codacy-coverage-image]][codacy-url]
[![Codacy code quality][codacy-image]][codacy-url]
![Maintenance][maintenance-image]<br> [![NPMS score][npms-image]][npms-url]
[![NPM downloads per month][npm-downloads-month]][npm-url]

* * *

### 1.2. RunKit playground notebooks

> [![runkit-logo][runkit-img]][runkit-url]

We
[link to interactive RunKit Notebooks ![link-external][octicon-link-external]](https://runkit.com/commonality/5acc09bde794d70011a136e5)
as soon as our Node.js-based products are available on NPM, so you can try
before you rely.

## 2. Project dashboard

> <img align="bottom" alt="dashboard" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/dashboard.svg">
> We openly guage community activity and engagement on every repository's
> `/docs/project/README.md` page.

| Measure                                 | Status/info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Community engagement                    | [![contributor-count][contributor-count-image]][contributor-count-url]<br>[![author][author-image]][author-url]<hr>![commits-per-year][commit-activity-one-year-image]<br>[![last-commit][commit-last-image]][commit-last-url]<hr>[![NPM downloads per month][npm-downloads-month]][npm-url]<br>[![used-by][used-by-image]][used-by-url]<br>[![github-forks][github-forks-image]][github-forks-url]<br>[![github-stars][github-stars-image]][github-stars-url]<br>[![github-watchers][github-watchers-image]][github-watchers-url] |
| Issues                                  | [![issue-opened][octicon-issue-opened] ![issues-open][issues-open-image]][issues-open-url]<br>[![megaphone][octicon-megaphone] ![breaking-change-issues-open][issues-open-breaking-change-image]][issues-open-breaking-change-url]<br>[![bell][octicon-bell] ![feature-issues-open][issues-open-feature-image]][issues-open-url]<br>[![bug][octicon-bug] ![defect-issues-open][issues-open-defect-image]][issues-open-url]<hr>[![issue-closed][octicon-issue-closed] ![issues-closed][issues-closed-image]][issues-closed-url]     |
| Pull Requests and merges                | [![prs-open][octicon-git-pull-request] ![pull-requests-open][pull-requests-open-image]][pull-requests-open-url]<br>[![git-merge][octicon-git-merge] ![pull-requests-closed][pull-requests-closed-image]][pull-requests-closed-url]                                                                                                                                                                                                                                                                                                 |
| Product releases, maintenance, and size | [![last-release-date][release-date-image]][releases-url]<br>![maintenance][maintenance-image]<br>![code-size-in-bytes][code-size-bytes-image]<br>![repository-size][repo-size-bytes-image]<br>                                                                                                                                                                                                                                                                                                                                     |

## 3. Code quality

### 3.1. Pull Request quality summaries

> <img align="bottom" alt="git-pull-request" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg">
> Our
> [`PULL_REQUEST_TEMPLATE.md`](https://github.com/commonality/readme-inspector/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
> provides SonarCloud badges to help engineers quickly assess any major code
> smells or technical debt.

| Measure             | Scores                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quality gate**    | [![Overall Quality][sonar-gate-img]][sonar-gate-url]                                                                                                                                                                                                                                                                                                                                                     |
| **Complexity**      | [![Complexity][sonar-complexity-img]][sonar-complexity-url]<br>[![Cognitive complexity][sonar-cognitive-img]][sonar-cognitive-url]<br>[![Complexity per Class][sonar-complexity-class-img]][sonar-complexity-class-img]<br>[![Complexity per file][sonar-complexity-file-img]][sonar-complexity-file-img] <br>[![Complexity per Function][sonar-complexity-function-img]][sonar-complexity-function-url] |
| **Duplications**    | [![Duplications][sonar-duplications-img]][sonar-duplications-url]                                                                                                                                                                                                                                                                                                                                        |
| **Issues**          | [![Issues][sonar-issues-img]][sonar-issues-url]                                                                                                                                                                                                                                                                                                                                                          |
| **Maintainability** | [![Code smells][sonar-code-smells-img]][sonar-code-smells-url]<br>[![Maintainability][sonar-maintainability-img]][sonar-maintainability-url]<br>[![Technical debt][sonar-tech-debt-img]][sonar-tech-debt-url]                                                                                                                                                                                            |
| **Reliability**     | [![Reliability][sonar-reliability-img]][sonar-reliability-url]                                                                                                                                                                                                                                                                                                                                           |
| **Security**        | [![Security][sonar-security-img]][sonar-security-url]<br>[![Vulnerabilities][sonar-vulnerabilities-img]][sonar-vulnerabilities-url]                                                                                                                                                                                                                                                                      |
| **Test coverage**   | [![Coverage Status][sonar-coverage-img]][sonar-coverage-url]<br>[![Coveralls coverage][coveralls-img]][coveralls-url]                                                                                                                                                                                                                                                                                    |

### 3.2. Source code (and commit message) conventions, quality, vulnerability, and testing tools

> We plainly reference our standards and conventions, as well as the tools we
> use to enforce those standards.

|                                    Code Style                                    |                                 Linters                                 |                           Test frameworks                           |                                    Git commit messages                                   |
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-----------------------------------------------------------------: | :--------------------------------------------------------------------------------------: |
|           [![JavaScript Style Guide][standardjs-logo]][standardjs-url]           |                   [![ESLint][eslint-logo]][eslint-url]                  |                  [![Jest BDD][jest-logo]][jest-url]                 |   [![Conventional Commits][conventional-commits-badge-image]][conventional-commits-url]  |
| [Standard JS user guide ![link-external][octicon-link-external]][standardjs-url] | [ESlint user guide ![link-external][octicon-link-external]][eslint-url] | [Jest user guide ![link-external][octicon-link-external]][jest-url] | [Conventional Commits ![link-external][octicon-link-external]][conventional-commits-url] |

### 3.3. Automated status checks

> <img align="bottom" alt="git-pull-request" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/git-pull-request.svg">
> Finally, we require multiple passing status checks with every push to a Pull
> Request.

![status checks](https://github.com/commonality/readme-inspector/wiki/img-github-status-checks.png)

## 4. Open Source maturity models

1.  [The Apache Project Maturity Model][maturity-model-apache-url]

    _Goal:_

    > ![quote][octicon-quote] The goal of this maturity model is to describe how
    > Apache projects operate, in a concise and high-level way, and to provide a
    > basic framework that projects may choose to use to evaluate themselves.
    >
    > _Apache Community Development - A Maturity Model for Apache Projects._
    > (2018). _Community.apache.org._ Retrieved 15 May 2018, from
    > <http://community.apache.org/apache-way/apache-project-maturity-model.html>

1.  <http://oss-watch.ac.uk/resources/ssmm>

1.  <http://osswatch.jiscinvolve.org/wp/2014/12/11/open-or-fauxpen-use-the-oss-watch-openness-rating-tool-to-find-out/>

1.  <https://blogs.apache.org/comdev/entry/what_makes_apache_projects_different>

1.  <http://rfc.zeromq.org/spec:16>

1.  <http://oss-watch.ac.uk/resources/reusereadinessrating>

1.  <http://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration>

1.  <https://www.apache.org/dev/project-requirements>

* * *

<h4 align="center">
  Previous: <a href="/docs/maintainer-guide/merge-requests.md"><img align="bottom" alt="chevron-left" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-left.svg">2. Reviewing Pull Requests</a>
  |
  <a href="/docs/maintainer-guide/#readme"><img align="bottom" alt="arrow-up" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/arrow-up.svg">Back to Maintainer Guide</a>
  |
  Next: <a href="/docs/maintainer-guide/releases.md">4. Release management <img align="bottom" alt="chevron-right" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/chevron-right.svg"></a>
</h4>

<h4 align="center">

![chevron-left][octicon-chevron-left] Previous:
[1. Issue management](/docs/maintainer-guide/pull-request.md) \|
[![arrow-up][octicon-arrow-up] Back to Maintainer Guide](/docs/maintainer-guide/#readme)
| Next:
[3. Using Product Maturity Models for Competitive Advantage ![chevron-right][octicon-chevron-right]](/docs/maintainer-guide/product-maturity-model.md)

</h4>

<!-- ⛔️ Please do not remove this comment or anything beneath it ⛔️ -->

[maturity-model-apache-url]: http://community.apache.org/apache-way/apache-project-maturity-model.html

[org-url]: https://github.com/commonality

[repo-url]: https://github.com/commonality/readme-inspector/#readme

[runkit-img]: https://github.com/commonality/readme-inspector/wiki/img-runkit-logo.png

[runkit-url]: https://runkit.com/commonality/5acc09bde794d70011a136e5

<!-- 🔗 ci services 🔗 -->

[appveyor-image]: https://img.shields.io/appveyor/ci/commonality/readme-inspector.svg?style=flat-square&logo=appveyor&label=windows%20build

[appveyor-url]: https://ci.appveyor.com/project/commonality/readme-inspector

[codacy-coverage-image]: https://img.shields.io/codacy/coverage/21f517a2d5bf4304895f40c5cbb596c4.svg?style=flat-square

[codacy-image]: https://img.shields.io/codacy/grade/21f517a2d5bf4304895f40c5cbb596c4.svg?style=flat-square

[codacy-url]: https://www.codacy.com/app/greg_7/readme-inspector?utm_source=github.com&utm_medium=referral&utm_content=commonality/readme-inspector&utm_campaign=Badge_Grade

[coveralls-image]: https://img.shields.io/coveralls/github/commonality/readme-inspector/master.svg

[coveralls-url]: https://coveralls.io/r/commonality/readme-inspector

[daviddm-dev-image]: https://david-dm.org/commonality/readme-inspector/dev-status.svg?theme=shields.io&style=flat-square

[daviddm-dev-url]: https://david-dm.org/commonality/readme-inspector?type=dev

[daviddm-image]: https://david-dm.org/commonality/readme-inspector.svg?theme=shields.io&style=flat-square

[daviddm-url]: https://david-dm.org/commonality/readme-inspector

[fossa-image]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector.svg?type=shield&style=flat-square

[fossa-url]: https://app.fossa.io/projects/git%2Bgithub.com%2Fcommonality%2Freadme-inspector?ref=badge_shield

[github-release-image]: https://img.shields.io/github/release/commonality/readme-inspector.svg?style=flat-square

[github-release-url]: https://github.com/commonality/readme-inspector/releases/latest

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

[license-url]: http://opensource.org/licenses/MIT

[maintenance-image]: https://img.shields.io/maintenance/readme-inspector/2018.svg?style=flat-square

[notice-url]: https://app.fossa.io/reports/07123904-7d26-40a6-b6af-c74e82a53789

[npm-downloads-month]: https://img.shields.io/npm/dm/readme-inspector.svg?style=social

[npm-image]: https://img.shields.io/npm/v/readme-inspector.svg?style=flat-square

[npm-url]: https://npmjs.org/package/readme-inspector

[npms-image]: https://badges.npms.io/readme-inspector.svg?style=flat-square

[npms-url]: https://npms.io/search?q=readme-inspector

[nsp-image]: https://nodesecurity.io/orgs/commonality/projects/a2aa0184-ae94-4307-8b87-f0e12324368a/badge

[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/a2aa0184-ae94-4307-8b87-f0e12324368a

[travis-image]: https://img.shields.io/travis/commonality/readme-inspector.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis

[travis-url]: https://travis-ci.org/commonality/readme-inspector

[vulnerabilities-image]: https://snyk.io/test/github/commonality/readme-inspector/badge.svg?style=flat-square&targetFile=package.json

[vulnerabilities-url]: https://snyk.io/test/github/commonality/readme-inspector?targetFile=package.json

<!-- 🔗 logo references 🔗  -->

[standardjs-logo]: https://cdn.rawgit.com/feross/standard/master/badge.svg

[standardjs-url]: https://github.com/feross/standard

[eslint-logo]: https://github.com/archetypes-rules/signatures/raw/master/docs/img/logos/logo-eslint.png

[eslint-url]: https://eslint.org/docs/user-guide/getting-started

[jest-logo]: https://github.com/archetypes-rules/signatures/raw/master/docs/img/logos/logo-jest.png

[jest-url]: https://facebook.github.io/jest/docs/en/getting-started.html

<!-- 🔗 project statistics 🔗 -->

[author-image]: https://img.shields.io/github/issues/detail/u/commonality/readme-inspector/1.svg?style=social

[author-url]: https://github.com/gregswindle

[code-size-bytes-image]: https://img.shields.io/github/languages/code-size/commonality/readme-inspector.svg?style=flat-square

[commit-activity-one-year-image]: https://img.shields.io/github/commit-activity/y/commonality/readme-inspector.svg?style=social

[commit-last-image]: https://img.shields.io/github/last-commit/commonality/readme-inspector.svg?style=social

[commit-last-url]: https://github.com/commonality/readme-inspector/graphs/commit-activity

[contributor-count-image]: https://img.shields.io/github/contributors/commonality/readme-inspector.svg?style=social

[contributor-count-url]: https://github.com/commonality/readme-inspector/graphs/contributors

[conventional-commits-badge-image]: https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg?style=flat-square

[conventional-commits-url]: https://conventionalcommits.org/

[github-forks-image]: https://img.shields.io/github/forks/commonality/readme-inspector.svg?style=social&label=Forks

[github-forks-url]: https://github.com/commonality/readme-inspector/network/members

[github-stars-image]: https://img.shields.io/github/stars/commonality/readme-inspector.svg?style=social&label=Stars

[github-stars-url]: https://github.com/commonality/readme-inspector/stargazers

[github-watchers-image]: https://img.shields.io/github/watchers/commonality/readme-inspector.svg?style=social&label=Watchers

[github-watchers-url]: https://github.com/commonality/readme-inspector/watchers

[issues-closed-image]: https://img.shields.io/github/issues-closed/commonality/readme-inspector.svg?style=flat-square&colorB=D23240

[issues-closed-url]: https://github.com/commonality/readme-inspector/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed

[issues-open-breaking-change-image]: https://img.shields.io/github/issues/commonality/readme-inspector/type%3A%20breaking%20change.svg?style=flat-square&colorB=b60205

[issues-open-breaking-change-url]: https://github.com/commonality/readme-inspector/labels/type%3A%20breaking%20change

[issues-open-defect-image]: https://img.shields.io/github/issues/commonality/readme-inspector/type:%20defect.svg?style=flat-square&colorB=e99695

[issues-open-defect-url]: https://github.com/commonality/readme-inspector/labels/type%3A%20defect

[issues-open-feature-image]: https://img.shields.io/github/issues/commonality/readme-inspector/type:%20feature.svg?style=flat-square&colorB=0052cc

[issues-open-feature-url]: https://github.com/commonality/readme-inspector/labels/type%3A%20feature

[issues-open-image]: https://img.shields.io/github/issues/commonality/readme-inspector.svg?style=flat-square&colorB=249D3D

[issues-open-url]: https://github.com/commonality/readme-inspector/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc

[language-count-image]: https://img.shields.io/github/languages/count/commonality/readme-inspector.svg?style=flat-square

[language-top-image]: https://img.shields.io/github/languages/top/commonality/readme-inspector.svg?style=flat-square

[language-top-url]: https://github.com/commonality/readme-inspector/search?l=javascript

[maintenance-image]: https://img.shields.io/maintenance/readme-inspector/2018.svg?style=flat-square

[maintenance-image]: https://img.shields.io/maintenance/readme-inspector/2018.svg?style=flat-square

[npm-downloads-month]: https://img.shields.io/npm/dm/readme-inspector.svg?style=social

[npm-downloads-year]: https://img.shields.io/npm/dy/readme-inspector.svg?style=social

[pull-requests-closed-image]: https://img.shields.io/github/issues-pr-closed/commonality/readme-inspector.svg?style=flat-square&colorB=643AB9

[pull-requests-closed-url]: https://github.com/commonality/readme-inspector/pulls?q=is%3Apr+sort%3Aupdated-desc+is%3Aclosed

[pull-requests-open-image]: https://img.shields.io/github/issues-pr/commonality/readme-inspector.svg?style=flat-square&colorB=249D3D

[pull-requests-open-url]: https://github.com/commonality/readme-inspector/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc

[release-date-image]: https://img.shields.io/github/release-date/commonality/readme-inspector.svg?style=flat-square

[releases-url]: https://github.com/commonality/readme-inspector/releases

[repo-size-bytes-image]: https://img.shields.io/github/repo-size/commonality/readme-inspector.svg?style=flat-square

[used-by-image]: https://img.shields.io/sourcegraph/rrc/github.com/commonality/readme-inspector.svg?style=social

[used-by-url]: https://www.npmjs.com/browse/depended/readme-inspector

<!-- 🔗 sonar quality badges 🔗 -->

[coveralls-img]: https://coveralls.io/repos/github/commonality/readme-inspector/badge.svg

[coveralls-url]: https://coveralls.io/github/commonality/readme-inspector

[sonar-code-smells-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=code_smells

[sonar-code-smells-url]: https://sonarcloud.io/component_measures/metric/code_smells/list?id=readme-inspector&metric=code_smells

[sonar-cognitive-img]: https://sonarcloud.io/api/badges/measure?key=readme-inspector&metric=cognitive_complexity

[sonar-cognitive-url]: https://sonarcloud.io/component_measures/metric/cognitive_complexity/list?id=readme-inspector&metric=cognitive_complexity

[sonar-complexity-class-img]: https://sonarcloud.io/api/badges/measure?key=readme-inspector&metric=class_complexity

[sonar-complexity-class-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=class_complexity

[sonar-complexity-file-img]: https://sonarcloud.io/api/badges/measure?key=readme-inspector&metric=file_complexity

[sonar-complexity-file-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=file_complexity

[sonar-complexity-function-img]: https://sonarcloud.io/api/badges/measure?key=readme-inspector&metric=function_complexity

[sonar-complexity-function-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=function_complexity

[sonar-complexity-img]: https://sonarcloud.io/api/badges/measure?key=readme-inspector&metric=complexity

[sonar-complexity-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=complexity

[sonar-coverage-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=coverage

[sonar-coverage-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=coverage

[sonar-duplications-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=duplicated_lines_density

[sonar-duplications-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=duplicated_lines_density

[sonar-gate-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=alert_status

[sonar-gate-url]: https://sonarcloud.io/dashboard?id=readme-inspector

[sonar-issues-img]: https://sonarcloud.io/api/badges/measure?key=readme-inspector&metric=blocker_violations

[sonar-issues-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=violations

[sonar-maintainability-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=sqale_rating

[sonar-maintainability-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=new_maintainability_rating

[sonar-ncloc-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=ncloc

[sonar-ncloc-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=ncloc

[sonar-reliability-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=reliability_rating

[sonar-reliability-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=Reliability

[sonar-security-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=security_rating

[sonar-security-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=vulnerabilities

[sonar-tech-debt-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=sqale_index

[sonar-tech-debt-url]: https://sonarcloud.io/component_measures/metric/sqale_index/list?id=readme-inspector&metric=sqale_index

[sonar-vulnerabilities-img]: https://sonarcloud.io/api/project_badges/measure?project=readme-inspector&metric=vulnerabilities

[sonar-vulnerabilities-url]: https://sonarcloud.io/component_measures?id=readme-inspector&metric=vulnerabilities

<!-- 🔗 octicon images 🔗 -->

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
