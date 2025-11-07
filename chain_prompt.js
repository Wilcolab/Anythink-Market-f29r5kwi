// /workspaces/Anythink-Market-f29r5kwi/chain_prompt.js

/**
 * Convert a string to kebab-case.
 *
 * Steps:
 * 1. Validate input:
 *    - If null or undefined -> return empty string.
 *    - If not a string -> throw error.
 *    - If empty string -> return empty string.
 * 2. Normalize:
 *    - Remove special characters except spaces, underscores, and hyphens.
 *    - Convert underscores and multiple spaces to a single space.
 *    - Trim.
 * 3. Convert to kebab-case:
 *    - Split on spaces, lowercase, join with hyphens.
 */
function toKebabCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') {
        throw new TypeError('toKebabCase expected a string input');
    }
    if (input.trim() === '') return '';

    // Remove special characters except letters/digits/underscore/space/hyphen
    let cleaned = input.replace(/[^\w\s-]/g, '');

    // Convert underscores and consecutive whitespace into a single space, then trim
    cleaned = cleaned.replace(/[_\s]+/g, ' ').trim();

    if (cleaned === '') return '';

    const words = cleaned
        .split(' ')
        .map((w) => w.toLowerCase());

    return words.join('-');
}

module.exports = { toKebabCase };