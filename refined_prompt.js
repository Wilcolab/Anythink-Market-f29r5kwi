/**
 * Utility module for converting strings between different case formats.
 * Provides comprehensive case conversion functions with robust error handling
 * and support for multiple separator types (hyphens, underscores, spaces, camelCase).
 * 
 * @module stringCaseConverters
 * @version 1.0.0
 * 
 * @example
 * // Convert to camelCase
 * const camelStr = toCamelCase("hello-world");
 * console.log(camelStr); // "helloWorld"
 * 
 * @example
 * // Convert to dot.case
 * const dotStr = toDotCase("hello_world");
 * console.log(dotStr); // "hello.world"
 * 
 * @throws {TypeError} Functions throw TypeError for invalid input types
 */

/**
 * Converts a string to camelCase format with comprehensive error handling.
 * Handles multiple separator types including hyphens, underscores, spaces,
 * and camelCase boundaries. The first word is lowercase, subsequent words
 * have their first letter capitalized.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase.
 *                       Accepts strings with hyphens, underscores, spaces,
 *                       mixed case, and numeric characters.
 * @returns {string} The converted camelCase string. Returns empty string
 *                   if input is empty or contains no valid words.
 * @throws {TypeError} If input is not a string (null, undefined, or other types)
 * 
 * @example
 * toCamelCase("hello-world")           // "helloWorld"
 * toCamelCase("hello_world_test")      // "helloWorldTest"
 * toCamelCase("HELLO_WORLD")           // "helloWorld"
 * toCamelCase("helloWorld")            // "helloWorld" (already camelCase)
 * toCamelCase("")                      // "" (empty string)
 * toCamelCase("user_id_123")           // "userId123"
 * toCamelCase("_hello-world_test bar_") // "helloWorldTestBar"
 * 
 * @example
 * // Error cases
 * toCamelCase(null)     // throws TypeError
 * toCamelCase(123)      // throws TypeError
 * toCamelCase(undefined) // throws TypeError
 */

/**
 * Converts a string to dot.case format with comprehensive error handling.
 * Handles multiple separator types including hyphens, underscores, spaces,
 * and camelCase boundaries. All words are lowercase and separated by dots.
 * Useful for configuration keys, environment variables, and nested property paths.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case.
 *                       Accepts strings with hyphens, underscores, spaces,
 *                       mixed case, and numeric characters.
 * @returns {string} The converted dot.case string. Returns empty string
 *                   if input is empty or contains no valid words.
 * @throws {TypeError} If input is not a string (null, undefined, or other types)
 * 
 * @example
 * toDotCase("hello-world")              // "hello.world"
 * toDotCase("helloWorld")               // "hello.world"
 * toDotCase("HELLO_WORLD")              // "hello.world"
 * toDotCase("hello world test")         // "hello.world.test"
 * toDotCase("user_id_123")              // "user.id.123"
 * toDotCase("")                         // "" (empty string)
 * toDotCase("hello world_test-case")    // "hello.world.test.case"
 * 
 * @example
 * // Error cases
 * toDotCase(null)     // throws TypeError
 * toDotCase(undefined) // throws TypeError
 */
