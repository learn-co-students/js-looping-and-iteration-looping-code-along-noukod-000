// Code your solutions in this file
const names= ['Ada', 'Brendan', 'Ali']


  
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
    }
    return names
  }
  
  function tailsNeverFails() {
    counter = 0
    coin = Math.random()
  
    while(coin >= 0.5) {
      coin = Math.random()
      counter++
    };
  
    return `You got ${counter} tails in a row!`
  }
