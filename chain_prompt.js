/**
 * Converts a string to kebab-case format
 * @param {string} str - The input string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {TypeError} If input is not a string or is null/undefined
 * 
 * @example
 * toKebabCase("helloWorld") // "hello-world"
 * toKebabCase("hello_world") // "hello-world"
 * toKebabCase("Hello World") // "hello-world"
 * toKebabCase("HELLO_WORLD") // "hello-world"
 * toKebabCase("user_id_123") // "user-id-123"
 * toKebabCase("") // ""
 */
function toKebabCase(str) {
    // Error handling: Check if input is a valid string
    if (str === null || str === undefined) {
        throw new TypeError("Input must be a string, received " + typeof str);
    }
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string, received " + typeof str);
    }

    // Handle empty string
    if (str === "") {
        return "";
    }

    // Step 1: Insert hyphens before uppercase letters (camelCase boundaries)
    let result = str.replace(/([a-z])([A-Z])/g, "$1-$2");

    // Step 2: Replace spaces, underscores, and other separators with hyphens
    result = result.replace(/[\s_]+/g, "-");

    // Step 3: Convert to lowercase
    result = result.toLowerCase();

    // Step 4: Remove consecutive hyphens
    result = result.replace(/-+/g, "-");

    // Step 5: Remove leading and trailing hyphens
    result = result.replace(/^-+|-+$/g, "");

    return result;
}

// ========================================
// TEST SUITE
// ========================================

function runTests() {
    const tests = {
        normal: [
            { input: "helloWorld", expected: "hello-world" },
            { input: "hello_world", expected: "hello-world" },
            { input: "Hello World", expected: "hello-world" },
            { input: "HELLO_WORLD", expected: "hello-world" },
            { input: "user_id_123", expected: "user-id-123" },
            { input: "APIResponse", expected: "a-p-i-response" },
            { input: "getHTTPResponseCode", expected: "get-h-t-t-p-response-code" },
            { input: "version2APIClient", expected: "version2-a-p-i-client" },
        ],
        edgeCases: [
            { input: "", expected: "" },
            { input: "hello", expected: "hello" },
            { input: "hello__world", expected: "hello-world" },
            { input: "_hello-world_", expected: "hello-world" },
            { input: "hello-world", expected: "hello-world" },
            { input: "hello---world___test bar", expected: "hello-world-test-bar" },
        ],
        errors: [
            { input: null, shouldThrow: true },
            { input: undefined, shouldThrow: true },
            { input: 123, shouldThrow: true },
            { input: { key: "value" }, shouldThrow: true },
        ],
    };

    let passed = 0;
    let failed = 0;

    console.log("========================================");
    console.log("KEBAB-CASE FUNCTION TEST SUITE");
    console.log("========================================\n");

    // Normal Cases
    console.log("📋 NORMAL CASES:");
    console.log("----------------------------------------");
    tests.normal.forEach((test, index) => {
        try {
            const result = toKebabCase(test.input);
            const isPass = result === test.expected;
            const status = isPass ? "✅ PASS" : "❌ FAIL";
            console.log(`Test ${index + 1}: ${status}`);
            console.log(`  Input:    "${test.input}"`);
            console.log(`  Expected: "${test.expected}"`);
            console.log(`  Actual:   "${result}"\n`);
            isPass ? passed++ : failed++;
        } catch (error) {
            console.log(`Test ${index + 1}: ❌ FAIL (Unexpected error)`);
            console.log(`  Input: "${test.input}"`);
            console.log(`  Error: ${error.message}\n`);
            failed++;
        }
    });

    // Edge Cases
    console.log("🔍 EDGE CASES:");
    console.log("----------------------------------------");
    tests.edgeCases.forEach((test, index) => {
        try {
            const result = toKebabCase(test.input);
            const isPass = result === test.expected;
            const status = isPass ? "✅ PASS" : "❌ FAIL";
            console.log(`Test ${index + 1}: ${status}`);
            console.log(`  Input:    "${test.input}"`);
            console.log(`  Expected: "${test.expected}"`);
            console.log(`  Actual:   "${result}"\n`);
            isPass ? passed++ : failed++;
        } catch (error) {
            console.log(`Test ${index + 1}: ❌ FAIL (Unexpected error)`);
            console.log(`  Input: "${test.input}"`);
            console.log(`  Error: ${error.message}\n`);
            failed++;
        }
    });

    // Error Cases
    console.log("⚠️  ERROR HANDLING CASES:");
    console.log("----------------------------------------");
    tests.errors.forEach((test, index) => {
        try {
            const result = toKebabCase(test.input);
            console.log(`Test ${index + 1}: ❌ FAIL (Should have thrown TypeError)`);
            console.log(`  Input:  ${test.input}`);
            console.log(`  Result: "${result}"\n`);
            failed++;
        } catch (error) {
            const isTypeError = error instanceof TypeError;
            const status = isTypeError ? "✅ PASS" : "❌ FAIL";
            console.log(`Test ${index + 1}: ${status}`);
            console.log(`  Input: ${test.input}`);
            console.log(`  Error: ${error.message}\n`);
            isTypeError ? passed++ : failed++;
        }
    });

    // Summary
    console.log("========================================");
    console.log("TEST SUMMARY");
    console.log("========================================");
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📊 Total:  ${passed + failed}`);
    console.log(`📈 Success Rate: ${(((passed) / (passed + failed)) * 100).toFixed(2)}%`);
    console.log("========================================\n");
}

// Run the tests
runTests();