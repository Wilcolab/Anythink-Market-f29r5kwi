// basic_prompt.js
// Prompt describing a function that converts strings to camelCase.

const prompt = `
Write a function named toCamelCase(input) that converts arbitrary strings to lower camelCase.

Requirements:
- Accept a single string argument. If the argument is not a string or is empty/whitespace, return an empty string.
- Treat spaces, underscores, hyphens, and most punctuation as word separators.
- Remove non-alphanumeric characters except digits (digits may remain within words).
- Lowercase the entire first word; capitalize the first letter of each subsequent word and lowercase the rest.
- Collapse consecutive separators into a single boundary.
- Preserve digits inside words (e.g., "version 2 update" -> "version2Update").

Examples:
- "hello world" -> "helloWorld"
- "  Foo_bar-baz  " -> "fooBarBaz"
- "XML parser" -> "xmlParser"
- "user id 2" -> "userId2"
`;

module.exports = prompt;