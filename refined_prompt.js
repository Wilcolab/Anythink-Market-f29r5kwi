/**
 * Convert an arbitrary string into camelCase.
 *
 * Behavior and rules:
 * - If input is null or undefined -> returns an empty string ''.
 * - If input is not a string -> throws a TypeError.
 * - Leading and trailing whitespace is trimmed before processing.
 * - Underscores (_), hyphens (-) and any whitespace are treated as word separators and normalized.
 * - All other punctuation and special characters are removed; only Unicode letters and numbers are preserved.
 * - Unicode property escapes are used to recognize letters and numbers (requires a runtime supporting
 *   ECMAScript 2018+ Unicode property escapes).
 * - The first word is entirely lowercase. Each subsequent word is lowercased then capitalized
 *   (first character uppercased, remainder lowercased).
 * - If, after normalization, no word characters remain -> returns ''.
 *
 * Examples:
 * - toCamelCase(null) -> ''
 * - toCamelCase('') -> ''
 * - toCamelCase('   ') -> ''
 * - toCamelCase('hello world') -> 'helloWorld'
 * - toCamelCase('convert_this-string') -> 'convertThisString'
 * - toCamelCase('FOO_BAR') -> 'fooBar'
 * - toCamelCase('déjà-vu_example') -> 'déjàVu'  // preserves Unicode letters
 *
 * @param {string|null|undefined} input - The input to convert. Null/undefined => empty string.
 * @returns {string} The camelCased result. Returns empty string for null/undefined/empty/normalized-empty input.
 * @throws {TypeError} If input is not a string. The thrown message follows the form:
 *                      "toCamelCase: expected a string input (received <type>)"
 * @see toDotCase
 */
 
/**
 * Convert an arbitrary string into dot.case (lowercase, dot-separated) format.
 *
 * Behavior and rules:
 * - If input is null or undefined -> returns an empty string ''.
 * - If input is not a string -> throws a TypeError.
 * - Leading and trailing whitespace is trimmed before processing.
 * - Underscores (_), hyphens (-) and any whitespace are treated as word separators and normalized.
 * - All other punctuation and special characters are removed; only Unicode letters and numbers are preserved.
 * - Unicode property escapes are used to recognize letters and numbers (requires a runtime supporting
 *   ECMAScript 2018+ Unicode property escapes).
 * - All words are lowercased and joined with a single '.' between words.
 * - If, after normalization, no word characters remain -> returns ''.
 *
 * Examples:
 * - toDotCase(null) -> ''
 * - toDotCase('') -> ''
 * - toDotCase('Hello World') -> 'hello.world'
 * - toDotCase('convert_this-string') -> 'convert.this.string'
 * - toDotCase('FOO_BAR') -> 'foo.bar'
 * - toDotCase('déjà-vu_example') -> 'déjà.vu'  // preserves Unicode letters
 *
 * @param {string|null|undefined} input - The input to convert. Null/undefined => empty string.
 * @returns {string} The dot.cased result. Returns empty string for null/undefined/empty/normalized-empty input.
 * @throws {TypeError} If input is not a string. The thrown message follows the form:
 *                      "toDotCase: expected a string input (received <type>)"
 * @see toCamelCase
 */
    // Build camelCase: first word lowercase, subsequent words capitalized
    const first = words[0].toLowerCase();
    const rest = words.slice(1).map(w => {
        const lower = w.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    });

    return [first, ...rest].join('');

function toDotCase(input) {
    // Handle null/undefined explicitly
    if (input == null) return '';

    // Ensure input is a string
    if (typeof input !== 'string') {
        throw new TypeError('toDotCase: expected a string input (received ' + typeof input + ')');
    }

    // Trim whitespace and return empty string if nothing remains
    const trimmed = input.trim();
    if (trimmed.length === 0) return '';

    // Normalize separators (underscores, hyphens, any whitespace) to a single space
    // Remove any remaining characters that are not letters, numbers, or spaces.
    const normalized = trimmed
        .replace(/[_\-\s]+/g, ' ')
        .replace(/[^\p{L}\p{N} ]+/gu, '')
        .trim();

    if (normalized.length === 0) return '';

    // Split into words, lowercase each, and join with dots
    const words = normalized.split(' ').filter(Boolean).map(w => w.toLowerCase());
    return words.join('.');
}

/**
 * Convert an arbitrary string into lower camel case (also known as "lowerCamelCase").
 *
 * This function normalizes a wide range of input forms into a single, predictable
 * camel-cased identifier. It:
 * - Splits the input on common word separators (spaces, tabs, newlines, underscores, hyphens, and dots).
 * - Also detects transitions from lower-to-upper case and treats them as word boundaries
 *   (so PascalCase / camelCase input is handled).
 * - Removes empty segments produced by repeated separators.
 * - Lowercases the first word and capitalizes the first letter of each subsequent word,
 *   leaving the remainder of each word in lowercase.
 *
 * The output is a concatenation of these words with the first character in lowercase,
 * suitable for use as JavaScript variable or property names.
 *
 * Examples:
 * // -> "helloWorld"
 * toCamelCase("hello-world")
 *
 * // -> "helloWorld"
 * toCamelCase("Hello World")
 *
 * // -> "snakeCaseExample"
 * toCamelCase("snake_case_example")
 *
 * // -> "dotCaseExample"
 * toCamelCase("dot.case.example")
 *
 * // -> "xmlHttpRequest"
 * toCamelCase("XML_http_request")
 *
 * // -> "alreadyCamel"
 * toCamelCase("alreadyCamel")
 *
 * @function toCamelCase
 * @param {string} input - The input string to convert. Leading/trailing whitespace and separators are ignored.
 * @returns {string} The input converted to lower camel case.
 * @throws {TypeError} If the provided input is not a string.
 * @since 1.0.0
 */

/**
 * Convert an arbitrary string into dot case (lowercase words separated by dots).
 *
 * This function:
 * - Splits the input on common separators (spaces, underscores, hyphens, and dots) and on
 *   camel/pascal case transitions.
 * - Removes empty segments from repeated separators.
 * - Lowercases all resulting segments and joins them with a single '.' character.
 * - Trims any leading or trailing separators so the result does not start or end with a dot.
 *
 * The output is a predictable dot-separated, lowercase representation useful for
 * configuration keys, namespacing, or consistent serialization.
 *
 * Examples:
 * // -> "hello.world"
 * toDotCase("helloWorld")
 *
 * // -> "hello.world"
 * toDotCase("Hello-World")
 *
 * // -> "snake.case"
 * toDotCase("snake_case")
 *
 * // -> "already.dot.case"
 * toDotCase("already.dot.case")
 *
 * // -> "xml.http.request"
 * toDotCase("XMLHttpRequest")
 *
 * @function toDotCase
 * @param {string} input - The input string to convert. Must be a string.
 * @returns {string} The input converted to dot.case (lowercase, dot-separated).
 * @throws {TypeError} If the provided input is not a string.
 * @since 1.0.0
 */
export default { toCamelCase, toDotCase };
