#!/usr/bin/env bash
# Verify that the /etherscan page contains required token information
# for non-JS crawlers (plain HTML, no JavaScript execution).
#
# Usage:
#   npm run verify:etherscan                    # checks https://pgbp.io/etherscan
#   URL=http://localhost:4173 npm run verify:etherscan  # checks local preview

set -euo pipefail

BASE_URL="${URL:-https://pgbp.io}"
PAGE="$BASE_URL/etherscan"
PASS=0
FAIL=0

echo "Fetching $PAGE ..."
HTML=$(curl -sL -A "Mozilla/5.0 (compatible; EtherscanBot)" "$PAGE")

check() {
  local label="$1"
  local pattern="$2"
  if echo "$HTML" | grep -qi "$pattern"; then
    echo "  PASS: $label"
    PASS=$((PASS + 1))
  else
    echo "  FAIL: $label (pattern: $pattern)"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "Checking required content..."
check "Token name"        "Pegged GBP"
check "Symbol"            "PGBP"
check "Contract address"  "0x5239c659a13f043358d551360c3b8ff1251d76d9"
check "Fixed supply"      "300,000,000"
check "Minting disabled"  "Minting.*disabled\|minting.*disabled"
check "Burn enabled"      "Burn.*enabled\|burn.*enabled"
check "Immutable"         "Immutable\|immutable"
check "Source verified"   "Verified\|verified"
check "Email"             "@pgbp.io"
check "Ethereum"          "Ethereum"

echo ""
echo "Results: $PASS passed, $FAIL failed"

if [ "$FAIL" -gt 0 ]; then
  echo "VERIFICATION FAILED"
  exit 1
else
  echo "ALL CHECKS PASSED"
  exit 0
fi
