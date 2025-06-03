//do talking ben

import readlineSync from "readline-sync";

import chalk from "chalk";

import process from "node:process";

let benChoose = Math.ceil(Math.random() * 4);

let startBen;

process.stdout.write(chalk.yellow.italic("Call ben? "));
startBen = readlineSync.keyInYNStrict(" ");

switch (benChoose) {
  case 1:
    benChoose = chalk.green.bold.underline("No");
    break;
  case 2:
    benChoose = chalk.green.bold.underline("Yes");
    break;
  case 3:
    benChoose = chalk.green.bold.underline("Hohoho 😂");
    break;
  case 4:
    benChoose = chalk.green.bold.underline("Eugh 😒");
    break;
}

function startGame() {
  readlineSync.question("Ask ben a question: ");

  if (startBen === true) {
    console.log(benChoose);
  } else {
    process.exitCode = 0;
  }
}

startGame();

// while (invisibleScore >= 1){

//     let benChoose2 = Math.ceil(Math.random()* 4)

//     switch(benChoose2){
//         case 1:
//             benChoose2 = chalk.green.bold.underline('No')
//             break;
//         case 2:
//             benChoose2 = chalk.green.bold.underline('Yes')
//             break;
//         case 3:
//             benChoose2 = chalk.green.bold.underline('Hohoho 😂')
//             break;
//         case 4:
//             benChoose2 = chalk.green.bold.underline('Eugh 😒')
//             break;
//     }

//     let usrInput2 = readlineSync.keyInYNStrict("Would you like to ask again?")

//     startGame()

//     if(invisibleScore === 5){
//         break;
//     }
//     if (usrInput2 === false){
//         // break;
//         process.exit(0)
//         process.exitCode = 0
//     }
// };
