//a program/game that picks a random number and then asks the player to guess the number
//if the player is correct move on to the next round
//if not then shame them and abort the program
//hi github2
//let readlineSync = require("readline-sync");

import readlineSync from 'readline-sync'

import exitCode from 'node:process'

let scoreKeeper = 0;



console.log(
    "Welcome to Number Guesser!!! The game where I think of a number from 1-3 and as the name suggests, you try to guess it"
        );

console.log("======================");

console.log(
    "Whenever you choose right, you get to move on to the next round, the more rounds you win, the higher your score gets"
    );
    
    console.log("   ");
    console.log(
        "If you miss at least ONE round, your counter goes back down to 0 and you lose the game."
        );
        
        console.log(`Your current score is ${scoreKeeper}`);
        console.log("======================");
        
        console.log(
            "Now without further ado, let's start! I will pick a number in 3, 2, 1 "
            );
            console.log(
                "(This countdown is very unnecesary as I already pick the number when you run this program)"
                );
                
                console.log("======================");
                console.log("Guess!");
                let userInputStart = readlineSync.question("Input your guess: ");
                
                if(parseInt(userInputStart) === 1 || parseInt(userInputStart) === 2 || parseInt(userInputStart) === 3){
                    startGameRound()
}

else if (typeof userInputStart === "string") {
    console.log("This isn't a number");
}

while (scoreKeeper >= 1){
 let randomNum = Math.ceil(Math.random() * 3);

}

//while(scoreKeeper >= 1){
    
    
    //    randomNum = Math.ceil(Math.random() * 3)
    
    let currentRound = scoreKeeper + 1
    
    console.log(`Time for round ${currentRound}`)
    
    console.log("=====================")
    console.log(" ")
    
    console.log("Guess!")
    console.log(" ")
    
    let userInputStart2 = readlineSync.question("Input your guess: ")

    if(parseInt(userInputStart2) === 1 || parseInt(userInputStart2) === 2 || parseInt(userInputStart2) === 3){
        startGameRound()
    }
    

//     if(parseInt(userInputStart2) != randomNum){
//         console.log("WRONG!!!")
//         scoreKeeper = 0
//         console.log(`Your score is now ${scoreKeeper}, get better 😈`)
//         process.exitCode = 0
    
// };

function startGameRound(){
    if(parseInt(userInputStart) === randomNum){
        console.log("You guessed right!!")
        console.log(" ")
        scoreKeeper++
        console.log(`Your score is now ${scoreKeeper}`)
        console.log(" ")

    }

    if(parseInt(userInputStart) != randomNum){
        console.log("WRONG!!!")
        console.log(" ")
        scoreKeeper = 0
        console.log(`Your score is now ${scoreKeeper}, get better 😈`)
    }
}