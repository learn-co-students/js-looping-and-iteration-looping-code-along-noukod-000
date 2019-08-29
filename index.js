// Code your solutions in this file
const array = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(array){
    for (let i=0; i < array.length; i++){
       // console.log(array[i]);
        console.log(`Welcome ${array[i]}! You are employee #${ i + 1}.`);
        'Welcome Joe! You are employee #1.'
    }
    return array;
}

function tailsNeverFails () {
    let tails = 0;
  
    while (Math.random() >= 0.5) {
      tails++;
    }
  
    return `You got ${tails} tails in a row!`;
  }