#!/bin/sh

verify_fossa_cli() {
  if test -n "$(fossa -v)"
  then
    echo "[fossa-init]: OK: fossa-cli installed"
    return 0
  else
    echo "[fossa-init]: ERR: fossa-cli not found."
    return 1
  fi
}

verify_fossa_api_key() {
  if test -n "$FOSSA_API_KEY"
  then
    echo "[fossa-init]: OK: Found FOSSA_API_KEY."
    return 0
  else
    echo "[fossa-init]: ERR: ENVVAR FOSSA_API_KEY not found."
    return 1
  fi
}

install_fossa_cli() {
  echo "[fossa-init]: INSTALL: installing the fossa-cli"
  curl https://raw.githubusercontent.com/fossas/fossa-cli/master/install.sh | bash
}

run_fossa_analysis() {
  echo "[fossa-init]: analyzing your dependencies' legal licenses"
  fossa analyze
}

run_fossa_test() {
  echo "[fossa-init]: testing for legal use compliance risks"
  fossa test
}

main() {
  if verify_fossa_cli && verify_fossa_api_key
  then
    fossa
  else
    install_fossa_cli
    init_fossa
    run_fossa_analysis
    run_fossa_test
  fi
  exit 0
}

main
