<h1>archetypes-rules</h1>
<div align="center">

![banner](https://raw.githubusercontent.com/commonality/archetypes-rules/refs/heads/main/docs/img/logos/logo.png)

</div>

[![The MIT License][license-image]][license-url] [![NPM
version][npm-image]][npm-url] [![FOSSA Status][fossa-image]][fossa-url] [![Known
Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url] [![Coveralls test
coverage][coveralls-image]][coveralls-url] [![Codacy code
quality][codacy-image]][codacy-url]

> Move conditional logic out of source code and database triggers and into a
> reusable package, where explicit rules can be independently defined and
> managed.

`archetypes-rules` models Boolean logic. Instead of writing conditionals like
<samp>if / else if / else</samp>, you can instead create Rules that describe and
evaluate Facts (aka, RuleContexts).

<a name="toc"></a>

<h2>Table of Contents</h2>

<!-- toc -->

- [1. Overview](#1-overview)
  - [1.1. `Rules`](#11-rules)
  - [1.2. `RuleElements`](#12-ruleelements)
    - [1.2.1. `Propositions`](#121-propositions)
    - [1.2.2. `Variables`](#122-variables)
    - [1.2.3. `Operators`](#123-operators)
  - [1.3. `RuleContexts` (aka "facts")](#13-rulecontexts-aka-facts)
  - [1.4. `Rules` evaluate
    `RuleContexts`/`Facts`](#14-rules-evaluate-rulecontextsfacts)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
  - [3.1. Example 1: Is this customer eligible for a
    discount](#31-example-1-is-this-customer-eligible-for-a-discount)
  - [3.2. Example 2: Group discount for six or more
    people](#32-example-2-group-discount-for-six-or-more-people)
  - [3.3. Example 3: Is an airline passenger eligible for an
    upgrade?](#33-example-3-is-an-airline-passenger-eligible-for-an-upgrade)
- [4. Maintainers](#4-maintainers)
- [5. Contributions](#5-contributions)
- [6. License](#6-license)

<!-- tocstop -->

<!-- tocend -->

## 1. Overview

_Figure 1: Class diagram for the `archetypes.rules` namespace._

![Figure 1: Class diagram for the archetypes.rules
namespace][archetypes-rules-overview]

### 1.1. `Rules`

Rules are explicit constraints that govern actions. Rules evaluate Facts, or
RuleContexts.

Rules are defined with⏤and stored as⏤JSON.

### 1.2. `RuleElements`

Rules contain one or more RuleElements. There are three types of `RuleElements`:
`Propositions`, `Operators`, and `Variables`.

#### 1.2.1. `Propositions`

**Propositions** are statements that are either, `true`, `false`, or `null`
(unknown). [_Learn
more..._](https://github.com/commonality/archetypes-rules/wiki/Propositions)

#### 1.2.2. `Variables`

**Variables** are symbols that represent the value of something. [_Learn
more..._](https://github.com/commonality/archetypes-rules/wiki/Variables)

#### 1.2.3. `Operators`

**Operators**: Boolean and quantifier operators.

### 1.3. `RuleContexts` (aka "facts")

`RuleContexts` are facts, stored as JSON in files, databases, etc.

### 1.4. `Rules` evaluate `RuleContexts`/`Facts`

`Rules` evaluate `RuleContexts`. During evaluation, we determine whether a
`RuleContext`/`Fact` complies with a `Rule`.

returning a `Proposition` that tells us whether a given set of facts conform to
the defined `Rule`.

`RuleElements` are evaluated using [Reverse Polish Notation
(RPN)](https://en.wikipedia.org/wiki/Reverse_Polish_notation). See the examples
below for details.

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#toc)</small>

## 2. Installation

```sh
npm install archetypes-rules
```

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#toc)</small>

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

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#toc)</small>

## 4. Maintainers

[@gregswindle](https://github.com/gregswindle)

> [!NOTE]
>
> ![Information for Maintainers][octicon-book] The [Maintainer
> Guide](./docs/maintainer-guide/README.md) describes how we develop and release
> **archetype-rules** (and has useful information for Maintainers and Trusted
> Committers).

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#toc)</small>

## 5. Contributions

[![GitHub
Contributors](https://img.shields.io/github/contributors/commonality/archetypes-rules.svg?style=social)](https://github.com/commonality/archetypes-rules/graphs/contributors)
[![GitHub](https://img.shields.io/github/stars/commonality/archetypes-rules.svg?style=social)](https://github.com/commonality/archetypes-rules)
[![GitHub](https://img.shields.io/github/forks/commonality/archetypes-rules.svg?style=social)](https://github.com/commonality/archetypes-rules/network)
[![Greenkeeper
badge](https://badges.greenkeeper.io/commonality/archetypes-rules.svg)](https://greenkeeper.io/)

![Gratitude][octicon-heart] We gratefully accept Pull Requests. Here's what you
need to know to get started.

Before submitting a Pull Request, please read our:

- [Code of Conduct](code-of-conduct.md)
- [Contributing Aggreement](CONTRIBUTING.md)
- [Developer Guide](docs/developer-guide#README.md)
- [Maintainer/Trusted Committer Guide](docs/maintainer-guide#readme)
- [Architecture Decision Records](docs/adr#readme)

<small>[![Back to Table of contents][octicon-triangle-up][toc]](#toc)</small>

## 6. License

[MIT](LICENSE) © 2019–2026 Greg Swindle

> [!NOTE] [![Open Source Licenses][octicon-law] View the latest **detailed legal
> NOTICE** report ![This link will take you to another Web
> site][octicon-link-external]][fossa-legal-notice-url].

[![FOSSA
Status](https://app.fossa.com/api/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules.svg?type=large)](https://app.fossa.com/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules?ref=badge_large)

<small>[![Back to Table of contents][octicon-triangle-up] [toc]](#toc)</small>

<!-- ⛔️ Do not remove this line or anything under it. ⛔️  -->

<!-- Link and image refs -->

[archetypes-rules-overview]:
    https://raw.githubusercontent.com/commonality/archetypes-rules/refs/heads/main/docs/assets/archetypes.rules-overview.png
    'Class diagram for archetypes.rules'
[codacy-image]:
  https://app.codacy.com/project/badge/Grade/28d1bcd9d85a4c27acb6b9ba5fc8481a
[codacy-url]:
  https://app.codacy.com/gh/commonality/archetypes-rules/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade
[coveralls-image]:
  https://coveralls.io/repos/github/commonality/archetypes-rules/badge.svg
[coveralls-url]: https://coveralls.io/github/commonality/archetypes-rules
[fossa-image]:
  https://app.fossa.com/api/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules.svg?type=shield
[fossa-legal-notice-url]:
  https://app.fossa.com/attribution/5895d784-6a99-4c46-961c-6aecd9414623
[fossa-url]:
  https://app.fossa.com/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-rules?ref=badge_shield
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: http://opensource.org/licenses/MIT
[npm-image]: https://img.shields.io/npm/v/archetypes-rules.svg
[npm-url]: https://npmjs.org/package/archetypes-rules
[travis-image]:
  https://img.shields.io/travis/com/commonality/archetypes-rules.svg?branch=master&label=macOS%20%7C%20ubuntu%20builds&logo=travis
[travis-url]: https://travis-ci.com/commonality/archetypes-rules
[vulnerabilities-image]:
  https://snyk.io/test/github/commonality/archetypes-rules/badge.svg?&targetFile=package.json
[vulnerabilities-url]:
  https://snyk.io/test/github/commonality/archetypes-rules?targetFile=package.json

<!-- Octicon img references  -->

[octicon-book]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/book.svg
[octicon-heart]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/heart.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/law.svg
[octicon-link-external]:
    https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/link-external.svg
[octicon-triangle-up]:
  https://cdnjs.cloudflare.com/ajax/libs/octicons/8.3.0/svg/triangle-up.svg
