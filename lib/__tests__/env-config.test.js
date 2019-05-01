const envConfig = require('../env-config.js')

describe('envConfig', () => {
  it('initializes all environment variables', () => {
    const envConfigKeys = [
      'GH_TOKEN',
      'GITHUB_TOKEN',
      'GITLAB_ENDPOINT',
      'GITLAB_JSON_OUTPUT',
      'GITLAB_PROJECT_ID',
      'GITLAB_REF',
      'GITLAB_RESOLVE_BODY_ONLY',
      'GITLAB_RESOURCE',
      'GITLAB_TOKEN',
      'JEST_JUNIT_ANCESTOR_SEPARATOR',
      'JEST_JUNIT_CLASSNAME',
      'JEST_JUNIT_OUTPUT',
      'JEST_JUNIT_OUTPUT_DIR',
      'JEST_JUNIT_OUTPUT_NAME',
      'JEST_JUNIT_SUITE_NAME',
      'JEST_JUNIT_TITLE',
      'JEST_SUITE_NAME',
      'JEST_USE_PATH_FOR_SUITE_NAME',
      'K8S_SECRET_GITLAB_TOKEN',
      'K8S_SECRET_SONAR_TOKEN',
      'NPM_PACKAGE_NAME',
      'NPM_PACKAGE_VERSION',
      'NPM_TOKEN',
      'SONAR_BRANCH_TARGET',
      'SONAR_HOST_URL',
      'SONAR_ORGANIZATION',
      'SONAR_PROJECT_KEY',
      'SONAR_PROJECT_NAME',
      'SONAR_PROJECT_VERSION',
      'SONAR_TOKEN',
      'SONAR_TOKEN_ARCHETYPES_RULES'
    ]
    expect(envConfig).toBeDefined()
    expect(Object.keys(envConfig).length).toBe(envConfigKeys.length)
  })
})
