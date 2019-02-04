// Code your solutions in this file

 let spy = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(spy) {
  for (let i = 0; i < spy.length; i++) {
    console.log(`Welcome ${spy[i]}! You are employee #${i+1}.`);
  }
  return spy;
}


 function tailsNeverFails(){
   let tails = 0;
  while(Math.random() >=0.5){
    tails++;
  }
 return `You got ${tails} tails in a row!`
}
