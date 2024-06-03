function displayLikes(arrNames) {
    if (arrNames.length === 0) {
        return 'no one likes this';
    } else if (arrNames.length === 1) {
        return `${arrNames[0]} likes this`
    } else if (arrNames.length === 2) {
        return `${arrNames[0]} and ${arrNames[1]} like this`
    } else if (arrNames.length === 3) {
        return `${arrNames[0]}, ${arrNames[1]} and ${arrNames[2]} like this`
    } else {
        return `${arrNames[0]}, ${arrNames[1]} and ${arrNames.length - 2} others like this`
    }
}

module.exports = displayLikes;
