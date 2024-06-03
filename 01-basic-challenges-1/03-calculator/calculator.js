function calculator(num1, num2, operator) {
    let result;

    if ( operator === '+'){
        return num1 + num2;
    }else if (operator === '-'){
        return num1 - num2;
    }else if (operator === '*'){
        return num1 * num2;
    }else if ( operator === '/' ){
        return num1 / num2;
    }else {
        throw new Error ('Invalid operator used');
    }
}

module.exports = calculator;
