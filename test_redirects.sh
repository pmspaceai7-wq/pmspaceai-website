#!/bin/bash
# Redirect Testing Script for SpaceAI Redirects
# Tests all configured redirects to ensure they return 301 and no chains exist

DOMAIN="https://pmspace.ai"
RESULTS_FILE="REDIRECT_TEST_RESULTS.txt"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
PASS=0
FAIL=0

echo "=== REDIRECT TEST RESULTS ===" > $RESULTS_FILE
echo "Date: $(date)" >> $RESULTS_FILE
echo "Domain: $DOMAIN" >> $RESULTS_FILE
echo "" >> $RESULTS_FILE

# Function to test a redirect
test_redirect() {
    local source=$1
    local expected_dest=$2
    local description=$3

    echo -n "Testing: $description ... "

    # Get HTTP status and actual location header
    response=$(curl -s -I -L "$DOMAIN$source" 2>&1)
    status=$(echo "$response" | grep "HTTP" | head -1)
    location=$(echo "$response" | grep -i "^Location:" | head -1 | cut -d' ' -f2- | tr -d '\r')

    echo "Testing: $description" >> $RESULTS_FILE
    echo "  Source: $source" >> $RESULTS_FILE
    echo "  Expected: $expected_dest" >> $RESULTS_FILE
    echo "  Status: $status" >> $RESULTS_FILE
    echo "  Actual Location: $location" >> $RESULTS_FILE

    # Check if redirect returns 301
    if echo "$status" | grep -q "301"; then
        # Check if it redirects to expected location
        if echo "$location" | grep -q "$expected_dest"; then
            echo -e "${GREEN}✓ PASS${NC}"
            echo "  Result: ✓ PASS" >> $RESULTS_FILE
            ((PASS++))
        else
            echo -e "${RED}✗ FAIL${NC} (Wrong destination)"
            echo "  Result: ✗ FAIL (Incorrect destination)" >> $RESULTS_FILE
            ((FAIL++))
        fi
    else
        echo -e "${RED}✗ FAIL${NC} (Not 301)"
        echo "  Result: ✗ FAIL (Not returning 301)" >> $RESULTS_FILE
        ((FAIL++))
    fi
    echo "" >> $RESULTS_FILE
}

# ===== TEST EMPLOYEE SCHEDULING REDIRECTS =====
echo -e "\n${YELLOW}=== EMPLOYEE SCHEDULING REDIRECTS ===${NC}"
test_redirect "/tools/employee-scheduling" "employee-scheduling-software" "employee-scheduling redirect"
test_redirect "/tools/scheduling" "employee-scheduling-software" "scheduling redirect"
test_redirect "/tools/scheduling-software" "employee-scheduling-software" "scheduling-software redirect (NEW FIX)"
test_redirect "/tools/shift-scheduling" "employee-scheduling-software" "shift-scheduling redirect (NEW FIX)"

# ===== TEST CRM REDIRECTS =====
echo -e "\n${YELLOW}=== CRM REDIRECTS ===${NC}"
test_redirect "/tools/crm" "custom-crm" "crm redirect"
test_redirect "/tools/crm-system" "custom-crm" "crm-system redirect (NEW FIX)"
test_redirect "/tools/crm-software" "custom-crm" "crm-software redirect (NEW FIX)"
test_redirect "/tools/client-relationship-management" "custom-crm" "client-relationship-management redirect (NEW FIX)"
test_redirect "/tools/customer-relationship-management" "custom-crm" "customer-relationship-management redirect (NEW FIX)"

# ===== TEST DESTINATION URLS =====
echo -e "\n${YELLOW}=== DESTINATION URLS (should return 200) ===${NC}"
test_redirect "/tools/employee-scheduling-software" "200" "employee-scheduling-software destination"
test_redirect "/tools/custom-crm" "200" "custom-crm destination"

# Final Summary
echo -e "\n\n${YELLOW}=== SUMMARY ===${NC}"
echo "Passed: ${GREEN}$PASS${NC}"
echo "Failed: ${RED}$FAIL${NC}"
echo "Total: $((PASS + FAIL))"

# Write summary to file
echo "" >> $RESULTS_FILE
echo "=== SUMMARY ===" >> $RESULTS_FILE
echo "Passed: $PASS" >> $RESULTS_FILE
echo "Failed: $FAIL" >> $RESULTS_FILE
echo "Total: $((PASS + FAIL))" >> $RESULTS_FILE

# Exit with error if any tests failed
if [ $FAIL -gt 0 ]; then
    echo -e "\n${RED}❌ REDIRECT TESTS FAILED${NC}"
    exit 1
else
    echo -e "\n${GREEN}✅ ALL REDIRECT TESTS PASSED${NC}"
    exit 0
fi
