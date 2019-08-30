// Code your solutions in this file
const name = ['Joe', 'Gabe'];
function printBadges(name){
    for (let i = 0; i < name.length; i++) {
        console.log(`Welcome ${name[i]}! You are employee #${i+1}.`);
    }
    return name;
}

function maybeTrue() {
    return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let count = 0;
  while (maybeTrue()) {
    count++;
    console.log(`You got ${count} tails in a row!`);
  }
  return `You got ${count} tails in a row!`;
}