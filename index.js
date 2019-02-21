// Code your solutions in this file
array = ["Ada", "Brendan", "Ali"]

function printBadges (array)
{
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
    // LOG: Welcome Ada! You are employee #1.
}
  return array
}

function tailsNeverFails () {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }

  let tailsCount = 0;
  while (maybeTrue()) {
    tailsCount++;
  }

  return `You got ${tailsCount} tails in a row!`
}
