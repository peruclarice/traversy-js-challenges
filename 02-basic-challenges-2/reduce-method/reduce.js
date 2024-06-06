// Use the following snippet to test your code before submitting
export const runner = () => {
    const array = [1,2,3,4,5];
    // sumArray(array);
    // productArray(array);
    maxArray(array);
    minArray(array);
  };
  
  /*
    Exercise 1/5
    Use array.reduce to return the sum of all the numbers in the array
    The function should return 0 if the array is empty 
  */
  export function sumArray(array) {
    // let sumArray = [];
    if(array.length === 0 || !array){
      return 0;
    } else {
      return array.reduce( (sum, element) => sum + element, 0);
      // console.log('sumArray' + sumArray);
    }
  }
  
  /* 
    Exercise 2/5
    Use array.reduce to return the product of all the numbers in the array
    The function should return 1 if the array is empty 
  */
  export function productArray(array) {
    let productArray = [];
    if(array.length === 0 || !array){
      return 1;
    } else {
      productArray = array.reduce( (product, element) => product * element, 1);
      // console.log('productArray:' + productArray);
      return productArray;
    }
  }
  
  /*
    Exercise 3/5
    Use array.reduce to return the largest number in the array
    The function should return -Infinity if the array is empty
  */
  export function maxArray(array) {
    if(array.length === 0 || !array){
      return -Infinity;
    } else {
      const maxValue = array.reduce( (result, element) => 
        Math.max(result, element), -Infinity);
      // console.log('maxValue:' + maxValue);
      return maxValue;
    }
  }
  
  /*
    Exercise 4/5
    Use array.reduce to return the smallest number in the array
    The function should return Infinity if the array is empty
  */
  export function minArray(array) {
    if( array.length === 0 || !array ){
      return Infinity;
    } else {
      const minValue = array.reduce( (result, element) => Math.min(result, element), Infinity);
      // console.log(minValue);
      return minValue;
    }
  }
  
  /* 
    Exercise 5/5
    Use array.reduce to return the average of all the numbers in the array
    The function should return 0 if the array is empty
  */
  export function averageArray(array) {
    throw new Error("Not implemented.");
  }