function firstNonRepeatedChar(str) {
    // Create an object to store character counts
    const charCount = {};

    // Count the occurrences of each character in the string
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character that has a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Example usage:
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
console.log(firstNonRepeatedChar(''));        // Output: null
console.log(firstNonRepeatedChar('abcabcde')); // Output: 'd'