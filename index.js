// // Code your solutions in this file
// const badges = ['Lisa', 'Kaitlin', 'Jan'];

function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
    }

    return names;
}


function tailsNeverFails() {
    let flipCoin = 0;
    while (Math.random() >= 0.5) {
        flipCoin++;

    }
    return `You got ${flipCoin} tails in a row!`; 
}

