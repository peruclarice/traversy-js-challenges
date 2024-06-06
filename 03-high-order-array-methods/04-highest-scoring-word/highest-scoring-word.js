function highestScoringWord(str) {
    const splitArr = str.split(' ');

    const calculatedWordsScore = splitArr.map( (word) =>
        Array.from(word).reduce((sum, letter) => sum + letter.charCodeAt(0) -96, 0) )
    // console.log(calculatedWordsScore);

    const highestScoringWord = Math.max(...calculatedWordsScore);
    const highestScoringWordIndex = calculatedWordsScore.indexOf(highestScoringWord)

    return splitArr[highestScoringWordIndex]
}

module.exports = highestScoringWord;
