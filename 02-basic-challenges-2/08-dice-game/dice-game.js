function rollingDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
    const resultsArr = []; 
  
    for (let i = 0; i < numSimulations; i++) {
      const dice1 = rollingDice(); 
      const dice2 = rollingDice();
      const sum = dice1 + dice2; 
  
      let result = ''; 
  
      if (sum === 7 || sum === 11) {
        result = 'win';
      } else if (sum === 2 || sum === 3 || sum === 12) {
        result = 'lose';
      } else {
        result = 'roll again';
      }
  
      resultsArr.push({ dice1, dice2, sum, result });
    }
  
    return resultsArr;
  }



module.exports = diceGameSimulation;
