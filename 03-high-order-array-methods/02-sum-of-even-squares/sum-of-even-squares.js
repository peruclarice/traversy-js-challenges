function sumOfEvenSquares(arr) {
    let evenNumbers = arr.filter( (num) => num % 2 === 0 );
    let squaredEvenNumbers = evenNumbers.map( (num) => num**2 );
    let sumOfSquaredEvenNumbers = squaredEvenNumbers.reduce( (sum, num) => sum + num , 0);
    return sumOfSquaredEvenNumbers
}

module.exports = sumOfEvenSquares;
