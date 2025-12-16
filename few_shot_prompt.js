function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Examples
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber
function addNumbers(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Inputs cannot be null or undefined');
    }
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('Inputs cannot be NaN');
    }
    
    return a + b;
}

// Examples
console.log(addNumbers(5, 3));           // 8
console.log(addNumbers(10, -5));         // 5
console.log(addNumbers(0, 0));           // 0
try {
    console.log(addNumbers('5', 3));     // throws error
} catch (e) {
    console.log(e.message);
}