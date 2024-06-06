function validAnagrams(str1, str2) {
    const splitStr1 = str1.split('');
    const splitStr2 = str2.split('');
    
    const frequencyStr1 = splitStr1.reduce( (acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {});

    const frequencyStr2 = splitStr2.reduce( (acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(frequencyStr1).every( (char) => frequencyStr1[char] === frequencyStr2[char]) && Object.keys(frequencyStr2).every( (char) => frequencyStr1[char] === frequencyStr2[char]);

}

module.exports = validAnagrams;
