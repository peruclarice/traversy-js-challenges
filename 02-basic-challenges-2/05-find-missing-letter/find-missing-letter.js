function findMissingLetter(arr) {
    if (arr.length === 0 || !arr) {
        return '';
    }

    // Create a string of the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Find the index of the first letter in the array in the alphabet string
    const startIndex = alphabet.indexOf(arr[0]);
    let combinedArr = arr.join('').toLowerCase();
    
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] !== alphabet[startIndex + i]) {
            return alphabet[startIndex + i];
        }
    }
    return combinedArr;
}

module.exports = findMissingLetter;
