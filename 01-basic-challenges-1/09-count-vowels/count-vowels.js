function countVowels(str) {
    formatedStr = str.toLowerCase();
    let vowelNumber = 0;

    for ( let i = 0; i < formatedStr.length; i ++) {
        const char = formatedStr[i];
        if (
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
        ) {
            vowelNumber++;
        }
    }
    return vowelNumber;

}

module.exports = countVowels;
