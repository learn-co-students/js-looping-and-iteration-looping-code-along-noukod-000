// Code your solutions in this file
function printBadges(array){
  for(let i=0;i<=array.length-1;i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails(){
  let r=Math.random()>=0.5
  let tailCount=0
  while(r){
    tailCount++
  }
  return `You got ${tailCount} tails in a row!`
}
