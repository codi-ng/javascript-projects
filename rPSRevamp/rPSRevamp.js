let readlineSync = require("readline-sync");

let computerChoice = Math.ceil(Math.random() * 3);

console.log(
  "Welcome to rock, paper, scissors! The game where you gamble on your luck"
);
console.log("    ");

let startGameQues = readlineSync
  .question("Are you ready to begin? ")
  .toLowerCase();

console.log("    ");

if (startGameQues == "yes") {
  console.log("Okay good let's do this!");
  console.log("    ");
}

let reqName = readlineSync.question(
  "Before we begin I'm going to have to get to know you, what is your name? "
);

console.log("    ");
console.log(`Hello there ${reqName}, I'm J-UAL2818`);
console.log("    ");
console.log("Now let's do this!");
console.log("    ");

console.log("___________________");

console.log(
  "Okay so I don't think I need to explain the rules of this game as everyone and anyone knows how to play this, if you don't you're either too young or you're missing out on life!"
);
console.log("    ");

console.log(
  "But a few things I want you to know is that I'm an AI programmed to pick a number from 1 to 3, so if you lose just know, you lost against a number, but that's not my problem!"
);
console.log("    ");
console.log("Now without further ado, let's play!");
console.log("    ");

let startGame = readlineSync.question("Rock, paper, scissors: ").toLowerCase();

console.log("    ");
console.log("___________________");

let userChoice = startGame;

console.log("    ");
console.log(`You threw ${startGame}`);
console.log("    ");

if (computerChoice === 1) {
  computerChoice = "Rock";
} else if (computerChoice === 2) {
  computerChoice = "Paper";
} else if (computerChoice === 3) {
  computerChoice = "Scissors";
}

console.log(`I threw ${computerChoice}`);
console.log("    ");

function checkForInput() {
  console.log("That's not rock, paper or scissors! Don't waste my time!");
}

if (
  userChoice == !"rock" ||
  userChoice == !"scissors" ||
  userChoice == !"paper"
) {
  checkForInput();
  console.log(userChoice);
}

if (
  (computerChoice === "Scissors" && userChoice === "paper") ||
  (computerChoice === "Scissors" && userChoice === "Paper")
) {
  console.log("Haha! I won! Now leave!");
} else if (
  (computerChoice === "Paper" && userChoice === "rock") ||
  (computerChoice === "Paper" && userChoice === "Rock")
) {
  console.log("Looks like I win and you lose! Technology: 1 Humanity: 0");
} else if (
  (computerChoice === "Rock" && userChoice === "Scissors") ||
  (computerChoice === "Rock" && userChoice === "scissors")
) {
  console.log(
    "I win and you lose! I guess I'm just the better machine in this world."
  );
} else if (
  computerChoice === userChoice ||
  (computerChoice === "Rock" && userChoice === "rock") ||
  (computerChoice === "Scissors" && userChoice === "scissors") ||
  (computerChoice === "Paper" && userChoice === "paper")
) {
  console.log(
    "Tie! But I'll consider that a win since I'm the machine. And I'm always right."
  );
} else if (
  (computerChoice === "Rock" && userChoice === "Scissors") ||
  (computerChoice === "Paper" && userChoice === "Scissors") ||
  (computerChoice === "Scissors" && userChoice === "Rock") ||
  (computerChoice === "Scissors" && userChoice === "rock") ||
  (computerChoice === "Paper" && userChoice === "scissors") ||
  (computerChoice === "Scissors" && userChoice === "rock")
) {
  console.log(
    "Ugh, I should've been programmed better. What are you still doing here, you think I'm gonna give you a price? No I'm a robot, now leave!"
  );
}

let restartDecision3 = Math.ceil(Math.random() * 2);

if (restartDecision3 === 1) {
  restartGame();
}

function restartGame() {
  let computerChoice = Math.ceil(Math.random() * 3);

  if (computerChoice === 1) {
    computerChoice = "Rock";
  } else if (computerChoice === 2) {
    computerChoice = "Paper";
  } else if (computerChoice === 3) {
    computerChoice = "Scissors";
  }

  console.log("              ");

  console.log("Actually I want to play again!!");
  let restart = readlineSync.question("Rock, paper, scissors: ").toLowerCase();

  console.log("              ");

  let userChoice = restart;

  console.log(`You threw ${userChoice}`);
  console.log("              ");

  console.log(`I threw ${computerChoice}`);
  console.log("              ");

  if (computerChoice === "Scissors" && userChoice === "paper") {
    console.log("Haha! I won! Now leave!");
  } else if (computerChoice === "Paper" && userChoice === "rock") {
    console.log("Looks like I win and you lose! Technology: 1 Humanity: 0");
  } else if (computerChoice === "Rock" && userChoice === "Scissors") {
    console.log(
      "I win and you lose! I guess I'm just the better machine in this world."
    );
  } else if (
    computerChoice === userChoice ||
    (computerChoice === "Rock" && userChoice === "rock") ||
    (computerChoice === "Scissors" && userChoice === "scissors") ||
    (computerChoice === "Paper" && userChoice === "paper")
  ) {
    console.log(
      "Tie! But I'll consider that a win since I'm the machine. And I'm always right."
    );
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "rock") ||
    (computerChoice === "Paper" && userChoice === "scissors") ||
    (computerChoice === "Scissors" && userChoice === "rock") ||
    (computerChoice === "Rock" && userChoice === "paper")
  ) {
    console.log(
      "Ugh, I should've been programmed better. What are you still doing here, you think I'm gonna give you a price? No I'm a robot, now leave!"
    );
  }
}

//WARNING: BROKEN CODE BELOW, USED ONLY FOR TESTING

//TEST THE FOLLOWING-

// let restartGameDecision = Math.ceil(Math.random()* 3)
// function getRestartGameDec(){

//     if(restartGameDecision === 2 && computerChoice === 'Rock' && userChoice === 'paper' || restartGameDecision === 2 && computerChoice === 'Scissors' && userChoice === 'rock' || restartGameDecision === 2 && computerChoice === 'Paper' && userChoice === 'scissors' || computerChoice == userChoice){
//         console.log("Actually, I want to play again!")

//         restartGame()
//     }
// }

// if(computerChoice === 'Rock' && userChoice === 'Scissors' || computerChoice === 'Paper' && userChoice === 'Scissors' || computerChoice === 'Scissors' && userChoice === 'Rock' || computerChoice === 'Scissors' && userChoice === 'rock' || computerChoice === 'Paper' && userChoice === 'scissors' || computerChoice === 'Scissors' && userChoice === 'rock'  ){

//     let restartGameDecision = Math.ceil(Math.random() * 4)

//     if(restartGameDecision === 2){
//         console.log("Actually I want to play again!")

//         restartGame()
//     }
// }

// getRestartGameDec();

// let restartDecision = Math.ceil(Math.random()* 4);

// if(restartDecision === 1){
//     restartDecision = 'Let\'s play again!'

//     console.log(restartDecision)

//     restartGame();

// };

// if(typeof startGame == 'number'){
//     console.log("Why would you input a number?? Are you dumb?")
// }
