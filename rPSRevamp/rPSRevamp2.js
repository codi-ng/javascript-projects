//do rpsrevamp but with readlinesync keyinselect this will make it so that options are more readable
import readlineSync from 'readline-sync';

import chalk from 'chalk';

let computerChoice = Math.ceil(Math.random() * 3);

let score = 0;

switch (computerChoice) {
    case 1:
        computerChoice = 'Scissors';
        break;
    case 2:
        computerChoice = 'Rock';
        break;
    case 3:
        computerChoice = 'Paper';
        break;
}

console.log(chalk.greenBright.bold('Welcome to Rock Paper Scissors!'));

console.log();

console.log(
    chalk.greenBright.bold(
        'The rules are simple, if you win your score goes up and you go in to the next round, the more you win\n the more your counter goes up, BUT if you lose at least one round\n your score goes back to zero and you are kicked from the game 😈'
    )
);

console.log();

console.log(chalk.greenBright.bold("Now without further ado, let's begin!"));

console.log('============');

let usrNameInput = readlineSync.question(
    'Before we start I need to know your name: '
);
console.log();
console.log(
    `Hello ${usrNameInput}, nice to meet you, get ready to lose by the way 🙄.`
);

let usrOpts = ['Rock', 'Paper', 'Scissors'];

console.log(
    `I hope you're ready ${usrNameInput}, I'm really good at this game 🙄`
);

console.log();

let startGame1 = readlineSync.keyInSelect(usrOpts, 'Rock, paper, scissors!');

let usrChoice;

switch (startGame1) {
    case 0:
        usrChoice = 'Rock';
        break;
    case 1:
        usrChoice = 'Paper';
        break;
    case 2:
        usrChoice = 'Scissors';
        break;
}
console.log();
console.log(chalk.greenBright.underline('Shoot!'));

console.log();

console.log(
    chalk.cyanBright.bold.underline(
        `You threw ${usrChoice}, I threw ${computerChoice}.`
    )
);

const checkForWinner = () => {
    if (usrChoice === computerChoice) {
        console.log(chalk.yellowBright.bold('Tie!'));
        console.log();
        console.log(chalk.greenBright.bold("I'll take it as a win 🙄"));
    } else if (startGame1 == 0 && computerChoice == 'Scissors') {
        score++;
        console.log(chalk.green.underline('You win!'));
        console.log();
        console.log(chalk.cyan('You just got lucky! 🙄'));
        console.log();
        console.log(chalk.green.italic(`Your score is now ${score}`));
    } else if (startGame1 == 1 && computerChoice == 'Rock') {
        score++;
        console.log(chalk.green.underline('You win!'));
        console.log();
        console.log(chalk.cyan('Ugh the wind made me lose I swear 😒 '));
        console.log();
        console.log(chalk.green.italic(`Your score is now ${score}`));
    } else if (startGame1 == 2 && computerChoice == 'Paper') {
        score++;
        console.log(chalk.green.underline('You win!'));
        console.log();
        console.log(chalk.cyan("This isn't fair! 😭"));
        console.log();
        console.log(chalk.green.italic(`Your score is now ${score}`));
    }
};
checkForWinner();

//make round2+, try a while loop

while (score >= 1) {
    let computerChoice2 = Math.ceil(Math.random() * 3);

    switch (computerChoice2) {
        case 1:
            computerChoice2 = 'Scissors';
            break;
        case 2:
            computerChoice2 = 'Rock';
            break;
        case 3:
            computerChoice2 = 'Paper';
            break;
    }

    let round = score + 1;
    console.log(chalk.greenBright.bold(`Time for round ${round}!`));

    let usrOpts2 = ['Rock', 'Paper', 'Scissors'];

    let startGame2 = readlineSync.keyInSelect(
        usrOpts2,
        'Rock, paper, scissors!'
    );

    let usrChoice2;

    console.log(`You threw ${usrChoice2}, I threw ${computerChoice2}`);

    switch (startGame2) {
        case 0:
            usrChoice2 = 'Rock';
            break;
        case 1:
            usrChoice2 = 'Paper';
            break;
        case 2:
            usrChoice2 = 'Scissors';
            break;
    }

    if (usrChoice2 === computerChoice2) {
        console.log(`You threw ${usrChoice2}, I threw ${computerChoice2}`);
        console.log();
        console.log(chalk.yellowBright.bold('Tie!'));
        console.log();
        console.log(chalk.greenBright.bold("I'll take it as a win 🙄"));
    } else if (startGame2 == 0 && computerChoice2 == 'Scissors') {
        console.log(`You threw ${usrChoice2}, I threw ${computerChoice2}`);
        console.log();
        score++;
        console.log(chalk.green.underline('You win!'));
        console.log();
        console.log(chalk.cyan('You just got lucky! 🙄'));
        console.log();
        console.log(chalk.green.italic(`Your score is now ${score}`));
    } else if (startGame2 == 1 && computerChoice2 == 'Rock') {
        console.log(`You threw ${usrChoice2}, I threw ${computerChoice2}`);
        console.log();
        score++;
        console.log(chalk.green.underline('You win!'));
        console.log();
        console.log(chalk.cyan('Ugh the wind made me lose I swear 😒 '));
        console.log();
        console.log(chalk.green.italic(`Your score is now ${score}`));
    } else if (startGame2 == 2 && computerChoice2 == 'Paper') {
        console.log(`You threw ${usrChoice2}, I threw ${computerChoice2}`);
        console.log();
        score++;
        console.log(chalk.green.underline('You win!'));
        console.log();
        console.log(chalk.cyan("This isn't fair! 😭"));
        console.log();
        console.log(chalk.green.italic(`Your score is now ${score}`));
    } else {
        console.log(`You threw ${usrChoice2}, I threw ${computerChoice2}`);
        console.log();
        console.log(chalk.redBright.bold('You lose!'));
        console.log();
        console.log(
            chalk.cyan('HAHA! I TOLD YOU I WAS REALLY GOOD AT THIS GAME 😈')
        );

        break;
    }
}
