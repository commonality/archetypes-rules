---
    description: Configuration for AI behavior when interacting with Codacy's MCP Server
    applyTo: '**'
---

<h1>Codacy Rules</h1>

> Configuration for AI behavior when interacting with Codacy's MCP Server

<h2>Table of contents</h2>

[TOC]

## 1. Using any tool that accepts the arguments: `provider`, `organization`, or `repository`

1. ALWAYS use:
   1. provider: gh
   1. organization: commonality
   1. repository: archetypes-rules
1. Avoid calling `git remote -v` unless really necessary

## 2. CRITICAL: After ANY successful `edit_file` or `reapply` operation

1. YOU MUST IMMEDIATELY run the `codacy_cli_analyze` tool from Codacy's MCP
   Server for each file that was edited, with:
   1. `rootPath`: set to the workspace path
   1. `file`: set to the path of the edited file
   1. `tool`: leave empty or unset
1. If any issues are found in the new edits, propose and apply fixes for them.

   > [!CAUTION]
   >
   > Failure to follow this rule is considered a critical error.

## 3. When you tried to run the `codacy_cli_analyze` tool and the Codacy CLI is not installed

1. Ask the user 'Codacy CLI is not installed. Would you like me to install it
   now?'
1. If the user responds with "yes", run the `codacy_cli_install` tool and then
   continue with the original task
1. If the user responds with "no", instruct the user that they can disable
   automatic analysis in the extension settings
1. Wait for the user to respond before proceeding with any other actions

## 4. After every response

If you made any file edits in this conversation, verify you ran
`codacy_cli_analyze` tool from Codacy's MCP Server

## 5. When there are no Codacy MCP Server tools available, or the MCP Server is not reachable

1. Suggest the user the following troubleshooting steps:
   1. Try to reset the MCP on the extension
   1. If the user is using VSCode, suggest them to review their Copilot > MCP
      settings in Github, under their organization or personal account. Refer
      them to Settings > Copilot > Enable MCP servers in Copilot. Suggested URL
      (<https://github.com/settings/copilot/features>) or
      <https://github.com/organizations/zaira-ardor-llc/settings/copilot/features>
      (This can only be done by their organization admins / owners)
1. If none of the above steps work, suggest the user to contact Codacy support

## 6. Trying to call a tool that needs a rootPath as a parameter

Always use the standard, non-URL-encoded file system path

## 7. CRITICAL: Dependencies and Security Checks

1. IMMEDIATELY after ANY of these actions:
   1. Running npm/yarn/pnpm install
   1. Adding dependencies to package.json
   1. Adding requirements to requirements.txt
   1. Adding dependencies to pom.xml
   1. Adding dependencies to build.gradle
   1. Any other package manager operations
1. You MUST run the `codacy_cli_analyze` tool with:
   1. `rootPath`: set to the workspace path
   1. `tool`: set to "trivy"
   1. `file`: leave empty or unset
1. If any vulnerabilities are found because of the newly added packages:
   1. Stop all other operations
   1. Propose and apply fixes for the security issues
   1. Only continue with the original task after security issues are resolved
1. EXAMPLE:
   1. After: npm install react-markdown
   1. Do: Run codacy_cli_analyze with trivy
   1. Before: Continuing with any other tasks

## 8. General

1. Repeat the relevant steps for each modified file.
1. "Propose fixes" means to both suggest and, if possible, automatically apply
   the fixes.
1. You MUST NOT wait for the user to ask for analysis or remind you to run the
   tool.
1. Do not run `codacy_cli_analyze` looking for changes in duplicated code or
   code complexity metrics.
1. Complexity metrics are different from complexity issues. When trying to fix
   complexity in a repository or file, focus on solving the complexity issues
   and ignore the complexity metric.
1. Do not run `codacy_cli_analyze` looking for changes in code coverage.
1. Do not try to manually install Codacy CLI using either brew, npm, npx, or any
   other package manager.
1. If the Codacy CLI is not installed, just run the `codacy_cli_analyze` tool
   from Codacy's MCP Server.
1. When calling `codacy_cli_analyze`, only send provider, organization and
   repository if the project is a git repository.

## 9. Whenever a call to a Codacy tool that uses `repository` or `organization` as a parameter returns a 404 error

1. Offer to run the `codacy_setup_repository` tool to add the repository to
   Codacy
1. If the user accepts, run the `codacy_setup_repository` tool
1. Do not ever try to run the `codacy_setup_repository` tool on your own
1. After setup, immediately retry the action that failed (only retry once)
