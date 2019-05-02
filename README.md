# archetypes-rules

![banner](docs/img/logos/logo.png)

[![The MIT License][license-image]][license-url]
[![NPM version][npm-image]][npm-url] [![FOSSA Status][fossa-image]][fossa-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]<br>
[![Dependency Status][daviddm-image]][daviddm-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coveralls test coverage][coveralls-image]][coveralls-url]
[![Codacy code quality][codacy-image]][codacy-url]

> Move conditional logic out of source code and database triggers and into a
> reusable package, where explicit rules can be independently defined and
> managed.

`archetypes-rules` models Boolean logic. Instead of writing conditionals like
<samp>if / else if / else</samp>, you can instead create Rules that describe and
evaluate Facts (aka, RuleContexts).

## Table of Contents

<!-- toc -->

- [1. Overview](#1-overview)
  - [1.1. `Rules`](#11-rules)
  - [1.2. `RuleElements`](#12-ruleelements)
    - [1.2.1. `Propositions`](#121-propositions)
    - [1.2.2. `Variables`](#122-variables)
    - [1.2.3. `Operators`](#123-operators)
  - [1.3. `RuleContexts` (aka "facts")](#13-rulecontexts-aka-facts)
  - [1.4. `Rules` evaluate `RuleContexts`/`Facts`](#14-rules-evaluate-rulecontextsfacts)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
  - [3.1. Example 1: Is this customer eligible for a discount?](#31-example-1-is-this-customer-eligible-for-a-discount)
  - [3.2. Example 2: Group discount for six or more people](#32-example-2-group-discount-for-six-or-more-people)
  - [3.3. Example 3: Is an airline passenger eligible for an upgrade?](#33-example-3-is-an-airline-passenger-eligible-for-an-upgrade)
- [4. Maintainers](#4-maintainers)
- [5. Contributions](#5-contributions)
- [6. License](#6-license)

<!-- tocstop -->

<!-- tocend -->

## 1. Overview

_Figure 1: Class diagram for the `archetypes.rules` namespace._

![Figure 1: Class diagram for the archetypes.rules namespace][archetypes-rules-overview]

### 1.1. `Rules`

Rules are explicit constraints that govern actions. Rules evaluate Facts, or
RuleContexts.

Rules are defined with⏤and stored as⏤JSON.

### 1.2. `RuleElements`

Rules contain one or more RuleElements. There are three types of `RuleElements`:
`Propositions`, `Operators`, and `Variables`.

#### 1.2.1. `Propositions`

**Propositions** are statements that are either, `true`, `false`, or `null`
(unknown).
[_Learn more..._](https://github.com/commonality/archetypes-rules/wiki/Propositions)

#### 1.2.2. `Variables`

**Variables** are symbols that represent the value of something.
[_Learn more..._](https://github.com/commonality/archetypes-rules/wiki/Variables)

#### 1.2.3. `Operators`

**Operators**: Boolean and quantifier operators.

### 1.3. `RuleContexts` (aka "facts")

`RuleContexts` are facts, stored as JSON in files, databases, etc.

### 1.4. `Rules` evaluate `RuleContexts`/`Facts`

`Rules` evaluate `RuleContexts`. During evaluation, we determine whether a
`RuleContext`/`Fact` complies with a `Rule`.

returning a `Proposition` that tells us whether a given set of facts conform to
the defined `Rule`.

`RuleElements` are evaluated using
[Reverse Polish Notation (RPN)](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
See the examples below for details.

<small>[![Back to Table of contents][octicon-triangle-up]
[toc]][toc-anchor]</small>

## 2. Installation

```sh
npm install archetypes-rules
```

<small>[![Back to Table of contents][octicon-triangle-up]
[toc]][toc-anchor]</small>

## 3. Usage

### 3.1. Example 1: Is this customer eligible for a discount

Suppose we have a very simple rule that checks whether a customer is eligible
for a discount. In order to be eligible, the customer simply needs to be a Gold
Card holder.

```javascript
const { Rule, RuleContext } = require('archetypes-rules')

// Create the rule
const rule = new Rule('eligibleForDiscount')

// Add a Proposition, i.e., a statement that has a value of true or false
rule.addProposition('customerIsGoldCardHolder', true)

// Create a RuleContext, i.e., a "Fact"
const ruleContext = RuleContext('eligibleForDiscountContext')

// Provide the truth statement as to whether the actual customer
// has a Gold Card
ruleContext.addProposition('customerIsGoldCardHolder', true)

// Evaluate
const result = rule.evaluate(ruleContext)

// Log the resulting Proposition

// Outputs
// Proposition statement = customerIsGoldCardHolder, value = true
```

### 3.2. Example 2: Group discount for six or more people

Say you provide a discount to a group of six or more people:

```javascript
// Create the rule
const rule = Rule('eligible-for-group-discount')

// Declare a "placeholder" variable for the actual number of people
// (This value will be retrieved from the RuleContext)
rule.addVariable('actual-num-people', null)

// Declare the minimum number of people required for discount
rule.addVariable('min-num-people', 6)

// Compare the two, i.e.,
// actual-num-people >= min-num-people
rule.addOperator(Operator.GREATER_THAN_OR_EQUAL_TO)

// Create a RuleContext, i.e., a "Fact"
const ruleContext = RuleContext('eligible-for-group-discount-fact')

// How many people are there?
ruleContext.addVariable('actual-num-people', 5)

// Declare the "placeholder" minimun number of people required for discount
// (This value will be retrieved from the Rule)
ruleContext.addVariable('min-num-people', 'NULL_NUMBER_VARIABLE')

// Evaluate
const result = rule.evaluate(ruleContext)

// Log the resulting Proposition

// OUTPUT:
// Proposition statement =
// (actualNumPeople >= minNumPeople), value = false
```

### 3.3. Example 3: Is an airline passenger eligible for an upgrade?

In this example, we’re determining whether a given airline passenger is eligible
to have their coach seat upgraded to a first-class seat. In order to be
eligible, a passenger must:

- Be in economy class now and either
  - Hold a Gold member card or
  - Hold a Silver member card and
- Their carry-on luggage must be less than or equal to 15.0 pounds.

In order to determine this, we must compare a passenger’s facts with our rule.

```javascript
const { Rule, RuleContext, RuleElement } = require('archetypes-rules')

// Create the rule
const rule = Rule('eligible-for-upgrade')

// Populate the rule using method chaining
rule
  .addProposition('passenger-is-economy', true)
  .addProposition('passenger-is-gold-card-holder', true)
  .addProposition('passenger-is-silver-card-holder', true)
  .addOperator('OR')
  .addOperator('AND')
  .addVariable('passenger-carry-on-baggage-weight', 'NULL_NUMBER_VARIABLE')
  .addVariable('passenger-carry-on-baggage-allowance', 15.0)
  .addOperator('LESS_THAN_OR_EQUAL_TO')
  .addOperator('AND')

// Create the RuleContext
const fact = RuleContext('eligibleForUpgradeFact')

// Load it with the facts about the passenger
fact
  .addProposition('passengerIsEconomy', true)
  .addProposition('passengerIsGoldCardHolder', true)
  .addProposition('passengerIsSilverCardHolder', false)
  .addVariable('passenger-carry-on-baggage-weight', 10.0)
  .addVariable('passenger-carry-on-baggage-allowance', 'NULL_NUMBER_VARIABLE')

// Log the resulting Proposition

// =>
// Proposition statement = (
//  (passengerIsEconomy AND
//    (passengerIsGoldCardHolder OR passengerIsSilverCardHolder)
//  ) AND (
//    passenger-carry-on-baggage-weight <= passenger-carry-on-baggage-allowance
//  )
// ), value = true
```

<small>[![Back to Table of contents][octicon-triangle-up]
[toc]][toc-anchor]</small>

## 4. Maintainers

[@gregswindle](https://github.com/gregswindle)

> ![Information for Maintainers][octicon-book] The
> [Maintainer Guide](./docs/maintainer-guide/README.md) describes how we develop
> and release **archetype-rules** (and has useful information for Maintainers
> and Trusted Committers).

<small>[![Back to Table of contents][octicon-triangle-up]
[toc]][toc-anchor]</small>

## 5. Contributions

[![GitHub Contributors](https://img.shields.io/github/contributors/commonality/archetypes-rules.svg?style=social)](https://github.com/commonality/archetypes-rules/graphs/contributors)
[![GitHub](https://img.shields.io/github/stars/commonality/archetypes-rules.svg?style=social)](https://github.com/commonality/archetypes-rules)
[![GitHub](https://img.shields.io/github/forks/commonality/archetypes-rules.svg?style=social)](https://github.com/commonality/archetypes-rules/network)
[![Greenkeeper badge](https://badges.greenkeeper.io/commonality/archetypes-rules.svg?style=flat-square)](https://greenkeeper.io/)

![Gratitude][octicon-heart] We gratefully accept Pull Requests. Here's what you
need to know to get started.

Before submitting a Pull Request, please read our:

- [Code of Conduct](code-of-conduct.md)
- [Contributing Aggreement](CONTRIBUTING.md)
- [Developer Guide](docs/developer-guide#README.md)
- [Maintainer/Trusted Committer Guide](docs/maintainer-guide#readme)
- [Architecture Decision Records](docs/adr#readme)

<small>[![Back to Table of contents][octicon-triangle-up]
[toc]][toc-anchor]</small>

## 6. License

[MIT](LICENSE) © 2019 Greg Swindle

> [![Open Source Licenses][octicon-law] View the latest **detailed legal
> NOTICE** report
> ![This link will take you to another Web site][octicon-link-external]][fossa-legal-notice-url].

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules.svg?type=large)](https://app.fossa.com/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules?ref=badge_large)

<small>[![Back to Table of contents][octicon-triangle-up]
[toc]][toc-anchor]</small>

<!-- ⛔️ Do not remove this line or anything under it. ⛔️  -->

<!-- Link and image refs -->

[appveyor-image]:
  https://img.shields.io/appveyor/ci/gregswindle/archetypes-rules.svg?style=flat-square&logo=appveyor&label=windows%20build
[appveyor-url]: https://ci.appveyor.com/project/gregswindle/archetypes-rules
[archetypes-rules-overview]: ./docs/assets/archetypes.rules-overview.png
[codacy-coverage-image]: https://img.shields.
[codacy-image]:
  https://api.codacy.com/project/badge/Grade/bc3fdfbea2d84079b5d785b6de0886ab
[codacy-url]:
  https://www.codacy.com/app/commonality/archetypes-rules?utm_source=github.com&utm_medium=referral&utm_content=commonality/archetypes-rules&utm_campaign=Badge_Grade
[coveralls-image]:
  https://coveralls.io/repos/github/commonality/archetypes-rules/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/commonality/archetypes-rules
[daviddm-image]:
  https://david-dm.org/commonality/archetypes-rules.svg?theme=shields.io&style=flat-square
[daviddm-url]: https://david-dm.org/commonality/archetypes-rules
[fossa-image]:
  https://app.fossa.com/api/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules.svg?type=shield
[fossa-legal-notice-url]:
  https://app.fossa.com/attribution/5895d784-6a99-4c46-961c-6aecd9414623
[fossa-url]:
  https://app.fossa.com/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules?ref=badge_shield
[license-image]:
  https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[npm-image]: https://img.shields.io/npm/v/archetypes-rules.svg?style=flat-square
[npm-url]: https://npmjs.org/package/archetypes-rules
[toc-anchor]: #table-of-contents
[travis-image]:
  https://img.shields.io/travis/com/commonality/archetypes-rules.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.com/commonality/archetypes-rules
[vulnerabilities-image]:
  https://snyk.io/test/github/commonality/archetypes-rules/badge.svg?style=flat-square&targetFile=package.json
[vulnerabilities-url]:
  https://snyk.io/test/github/commonality/archetypes-rules?targetFile=package.json

[daviddm-dev-image]: https://david-dm.org/commonality/archetypes-rules/dev-status.svg?theme=shields.io&style=flat-square

<!-- Octicon img references  -->

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
