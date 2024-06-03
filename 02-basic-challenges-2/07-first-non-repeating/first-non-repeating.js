function findFirstNonRepeatingCharacter(str) {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        // console.log(charCount);
    }

    for (const char of str) {
        if ( charCount[char] === 1 ) {
            return char;
        }
    }
    return null;

}

module.exports = findFirstNonRepeatingCharacter;
