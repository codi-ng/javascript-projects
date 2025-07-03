//create a program like eightB.js but with CLI. Hopefully it is fun......
//

// let readlineSync = require("readline-sync");
import readlineSync from 'readline-sync';

console.log(
    'Welcome to the magic Eight Ball! I will tell you your future! Just ask and I will answer.'
);

console.log('==============================================');

function startGameFunc() {
    let computerChoose = Math.ceil(Math.random() * 15);

    if (computerChoose === 1) {
        computerChoose = 'Yes';
        console.log(computerChoose);
    } else if (computerChoose === 2) {
        computerChoose = 'No';
        console.log(computerChoose);
    } else if (computerChoose === 3) {
        computerChoose = 'My sources say yes!';
        console.log(computerChoose);
    } else if (computerChoose === 4) {
        computerChoose = 'Absolutely not, sorry';
        console.log(computerChoose);
    } else if (computerChoose === 5) {
        computerChoose = 'If you try, it will happen';
        console.log(computerChoose);
    } else if (computerChoose === 6) {
        computerChoose = 'My sources say no';
        console.log(computerChoose);
    } else if (computerChoose === 7) {
        computerChoose = 'Oof I guess the answer is no.';
        console.log(computerChoose);
    } else if (computerChoose === 8) {
        computerChoose = 'The answer is yes!';
        console.log(computerChoose);
    } else if (computerChoose === 9) {
        computerChoose = 'My answer is yes!';
        console.log(computerChoose);
    } else if (computerChoose === 10) {
        computerChoose = "I'm afraid not";
        console.log(computerChoose);
    } else if (computerChoose === 11) {
        computerChoose = 'Lucky for you, the answer is yes!';
        console.log(computerChoose);
    } else if (computerChoose === 12) {
        computerChoose = 'Nah, sorry bro';
        console.log(computerChoose);
    } else if (computerChoose === 13) {
        computerChoose = 'I guess so, congrats!';
        console.log(computerChoose);
    } else if (computerChoose === 14) {
        computerChoose = 'Hard no, wait let me check again.... Nah sorry';
        console.log(computerChoose);
    } else if (computerChoose === 15) {
        computerChoose = 'Yup';
        console.log(computerChoose);
    }
}

let startGameQues = readlineSync
    .question('Are you ready to know about your future? ')
    .toLowerCase();

if (startGameQues === 'yes') {
    console.log('  ');
    console.log("Great let's begin");
    console.log('  ');
} else if (startGameQues === 'no') {
    console.log('  ');
    console.log('Then why did you even run this program?');
    console.log('  ');
} else if (startGameQues != 'no' || startGameQues != 'yes') {
    console.log('  ');
    console.log('Just say, yes or no.');
    console.log('  ');
} else if (typeof startGameQues.indexOf() === 'number') {
    console.log('  ');
    console.log("This isn't even a word");
    console.log('  ');
}

let startGame = readlineSync.question('What is your question? ');

if (startGame.includes('?')) {
    console.log('  ');
    startGameFunc();
}

if (typeof startGame === 'number') {
    console.log("This isn't a question");
} else if (!startGame.includes('?')) {
    console.log("This isn't a question");
}

let restartGameDecFunc = () => {
    let restartGameDec = Math.ceil(Math.random() * 6);

    if (restartGameDec === 3 || restartGameDec === 2 || restartGameDec === 1) {
        restartGame();
    }
};

function getRestartGameDec() {
    let randomNumDec = Math.ceil(Math.random() * 6);

    if (randomNumDec === 3 || randomNumDec === 2 || randomNumDec === 1) {
        restartGameDecFunc();
    }
}

getRestartGameDec();

function restartGame() {
    let restartGameQues = readlineSync
        .question('Would you like to ask again? ')
        .toLowerCase();
    console.log('  ');

    if (restartGameQues === 'yes') {
        console.log('  ');

        console.log('Great');
    } else if (restartGameQues === 'no') {
        console.log('  ');

        console.log('Then why did you even run this program?');
    } else if (restartGameQues != 'no' || startGameQues != 'yes') {
        console.log('  ');

        console.log('Just say, yes or no.');
    } else if (typeof restartGameQues.indexOf() === 'number') {
        console.log('  ');

        console.log("This isn't even a word");
    }

    console.log('  ');

    readlineSync.question('What is your question? ');

    if (startGame.includes('?')) {
        startGameFunc();
    }

    if (typeof startGame === 'number') {
        console.log('  ');

        console.log("This isn't a question");
    } else if (!startGame.includes('?')) {
        console.log('  ');

        console.log("This isn't a question");
    }
}
