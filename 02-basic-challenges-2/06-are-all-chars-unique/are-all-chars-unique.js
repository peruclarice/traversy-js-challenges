// function areAllCharactersUnique(str) {
//     let uniqueChar = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (uniqueChar[char]){
//             return false;
//         } 
//         uniqueChar[char] = true;
//     }
//     return true;
// }

function areAllCharactersUnique(str) {
    let uniqueCharSet = new Set();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (uniqueCharSet.has(char)){
            return false;
        } 
        uniqueCharSet.add(char);
    }
    return true;
}

module.exports = areAllCharactersUnique;
