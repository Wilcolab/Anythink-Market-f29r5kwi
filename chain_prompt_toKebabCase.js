/**
 * ========================================
 * CHAIN PROMPT: toKebabCase Function
 * ========================================
 * 
 * This is a sequential 3-step chain prompt for building a robust toKebabCase function.
 * Each step builds upon the previous one to create a comprehensive solution.
 * 
 * ========================================
 * STEP 1: UNDERSTAND AND DEFINE THE CORE FUNCTIONALITY
 * ========================================
 * Create a JavaScript function called `toKebabCase(str)` that converts strings 
 * to kebab-case format (words separated by hyphens, all lowercase).
 * 
 * Requirements:
 * - Split input by spaces, underscores, hyphens, and camelCase boundaries
 * - Convert all characters to lowercase
 * - Join words with hyphens
 * - Remove leading and trailing hyphens from the result
 * 
 * Examples to support:
 * - "helloWorld" → "hello-world"
 * - "hello_world" → "hello-world"
 * - "Hello World" → "hello-world"
 * - "HELLO_WORLD" → "hello-world"
 * - "user_id_123" → "user-id-123"
 * 
 * Provide the implementation with basic comments explaining each step.
 * 
 * 
 * ========================================
 * STEP 2: ADD ROBUST ERROR HANDLING AND EDGE CASE SUPPORT
 * ========================================
 * Enhance the toKebabCase function from Step 1 by adding:
 * 
 * Error Handling:
 * - Throw a TypeError if input is not a string or is null/undefined
 * - Return an empty string for empty input
 * 
 * Edge Cases to Handle:
 * - Consecutive separators: "hello__world" or "hello---world"
 * - Mixed separators: "hello-world_test bar"
 * - Leading/trailing separators: "_hello-world_"
 * - Already in kebab-case: "hello-world"
 * - Single words: "hello"
 * - Numbers mixed with text: "version_2_api" → "version-2-api"
 * - Special characters should be treated or removed as appropriate
 * 
 * Update the function to handle all these cases gracefully without throwing 
 * unexpected errors. Add a JSDoc comment with @param, @returns, @throws, and 
 * comprehensive @example tags covering normal cases, edge cases, and errors.
 * 
 * 
 * ========================================
 * STEP 3: IMPLEMENT COMPREHENSIVE TESTING AND VALIDATION
 * ========================================
 * Create a complete test suite for the toKebabCase function that:
 * 
 * 1. Tests normal conversions (at least 8 test cases for typical usage):
 *    - Various input formats (camelCase, snake_case, spaces, mixed)
 *    - Case sensitivity handling
 *    - Numeric content handling
 * 
 * 2. Tests edge cases (at least 6 test cases):
 *    - Empty strings
 *    - Single words
 *    - Consecutive separators
 *    - Leading/trailing separators
 *    - Already kebab-case strings
 * 
 * 3. Tests error scenarios (at least 4 test cases):
 *    - null input
 *    - undefined input
 *    - Non-string types (numbers, objects, arrays, booleans)
 *    - Should verify TypeError is thrown
 * 
 * 4. Display results in a clear format:
 *    - Group tests by category (normal, edge cases, errors)
 *    - Show input → expected output → actual output
 *    - Clearly indicate PASS/FAIL for each test
 *    - Provide a summary count of passed/failed tests
 * 
 * Include a test runner function that executes all tests and reports results.
 */
