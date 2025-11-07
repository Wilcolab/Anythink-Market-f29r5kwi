/**
 * Convert a string to camelCase.
 * Handles spaces, underscores, hyphens and mixed case (e.g. "SCREEN_NAME" -> "screenName").
 *
 * Examples:
 *  toCamelCase('first name') -> 'firstName'
 *  toCamelCase('user_id')    -> 'userId'
 *  toCamelCase('SCREEN_NAME')-> 'screenName'
 *  toCamelCase('mobile-number')-> 'mobileNumber'
 */
function toCamelCase(input) {
    if (!input && input !== 0) return '';

    const str = String(input).trim();

    if (str.length === 0) return '';

    // Split on any sequence of non-alphanumeric characters
    const parts = str.split(/[^a-zA-Z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';

    // Single token: preserve interior casing but ensure first character is lowercase
    if (parts.length === 1) {
        const p = parts[0];
        return p.charAt(0).toLowerCase() + p.slice(1);
    }

    // Multiple tokens: lowercase the whole first token, capitalize subsequent tokens
    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join('');

    return first + rest;
}

module.exports = { toCamelCase };

// Example usage:
// console.log(toCamelCase('first name'));    // firstName
// console.log(toCamelCase('user_id'));       // userId
// console.log(toCamelCase('SCREEN_NAME'));   // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber