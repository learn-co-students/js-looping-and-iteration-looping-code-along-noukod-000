function printBadges(employees){
    for(let i =0; i < employees.length; i++){
        console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`);
    }
    return employees;
}

function tailsNeverFails(){
    // tails = ;
    let nbreTails = 0;
    while(Math.random() >= 0.5){
        nbreTails++;
    }
    return `You got ${nbreTails} tails in a row!`;
}