#!/bin/bash

get_cc_test_reporter_url() {
  if [[ "$TRAVIS_OS_NAME" == "osx" ]]
  then
    echo "https://codeclimate.com/downloads/test-reporter/test-reporter-latest-darwin-amd64"
  else
    echo "https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64"
  fi
}

dl_cc_test_reporter() {
  CC_URL=$(get_cc_test_reporter_url)
  curl -L "$CC_URL" > "$TRAVIS_BUILD_DIR/cc-test-reporter"
  echo "[code-climate-init]: OK: Dowloaded script to $TRAVIS_BUILD_DIR/cc-test-reporter"
}

init_cc_test_reporter() {
  chmod +x "$TRAVIS_BUILD_DIR/cc-test-reporter"
  echo "[code-climate-init]: OK: Apply exec to $TRAVIS_BUILD_DIR/cc-test-reporter"
}

main() {
  dl_cc_test_reporter
  init_cc_test_reporter
  echo "[code-climate-init]: OK: $TRAVIS_BUILD_DIR/cc-test-reporter is ready for use."
  exit 0
}

main
