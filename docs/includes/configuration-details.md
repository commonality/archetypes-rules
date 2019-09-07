> ![info][octicon-info] **@archetypes/rules** stores configuration details in the
> environment— separate from code—with the [`dotenv-extended` >
> ![Go to its README on GitHub][octicon-link-external]][1] module.
>
> Read _[The Twelve-Factor App: Store config in the environment
> ![Read Factor 3, "Config"][octicon-link-external]][2]_ for details.

* * *

<details><summary>Click here for detailed <samp>.env</samp> variable initialization instructions.</summary><p>

> [![info][octicon-info] View **dotenv-extended**'s README
> ![External link][octicon-link-external]][1] for detailed `.env` variable set
> up instructions.

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
# corresponding to Merge/Pull Requests, feature, and fix branches.
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
