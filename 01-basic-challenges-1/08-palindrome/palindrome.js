function isPalindrome(str) {
    let normalStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = normalStr.split('').reverse().join('');
    // return normalStr === reversedStr

    if ( normalStr === reversedStr ){
        return true;
    }else {
        return false;
        // throw new Error ('Not a palindrome');
    }
}

module.exports = isPalindrome;
