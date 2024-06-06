function validatePassword(password) {
    if ( password.length < 8) {
        return false;
    }

    const validLength = password.length >= 8;

    const splitPassword = password.split('');
    
    const hasUpperCase = splitPassword.some( (char) => {
        if( char === char.toUpperCase() && char !== char.toLowerCase()){
            return true;
        }
    });

    const hasLowerCase = splitPassword.some( (char) => {
        if( char === char.toLowerCase() && char !== char.toUpperCase()){
            return true;
        }
    });

    const hasDigit = splitPassword.some(
        (char) => !isNaN(parseInt(char, 10))
    );

    return validLength && hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = validatePassword;
