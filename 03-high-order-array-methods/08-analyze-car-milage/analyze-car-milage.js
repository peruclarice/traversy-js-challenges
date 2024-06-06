// function analyzeCarMileage(carArr) {
//     const totalMileage = carArr.reduce( (sum, value) => 
//        sum + value.mileage, 0);

//     const roundedUpMileage = parseFloat(totalMileage.toFixed(2));
//     // console.log(roundedUp);

//     const avgMileage = totalMileage / carArr.length;

//     const highestMileageCar = carArr.reduce( (highest, value) =>
//     (value.mileage > highest.mileage ? value : highest) , carArr[0]);

//     const lowesttMileageCar = carArr.reduce( (lowest, value) => 
//     (value.mileage < lowest.mileage ? value : lowest) , carArr[0])
    
//     return {
//         avgMileage: parseFloat(avgMileage.toFixed(2)), 
//         highestMileageCar, 
//         lowesttMileageCar, 
//         totalMileage
//     };
// }

function analyzeCarMileage(cars) {
    
    const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
    
    const averageMileage = totalMileage / cars.length;
    
    const highestMileageCar = cars.reduce(
      (highest, car) => (car.mileage > highest.mileage ? car : highest),
      cars[0]
    );
    
    const lowestMileageCar = cars.reduce(
      (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
      cars[0]
    );
  
    return {
      averageMileage: parseFloat(averageMileage.toFixed(2)),
      highestMileageCar,
      lowestMileageCar,
      totalMileage,
    };
  }

module.exports = analyzeCarMileage;
