#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Call 'view' functions on the contract"
echo ---------------------------------------------------------
echo

near view $CONTRACT  getCounter

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Call 'change' functions on the contract"
echo ---------------------------------------------------------
echo
echo "run the function to increment counter by 1"

near call  $CONTRACT incrementCounter '{"value":1}' --account_id $CONTRACT

echo
echo "now run the function to decrement counter by 1"
echo
echo

near call  $CONTRACT decrementCounter '{"value":1}' --account_id $CONTRACT

echo
echo "now run the function to reset the counter"
echo
echo

near call $CONTRACT resetCounter --account_id $CONTRACT

echo
echo

exit 0
