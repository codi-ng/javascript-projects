//Nano test
//Github test

import readlineSync from "readline-sync";
import chalk from "chalk";

let isDivisible = () => {
  let usrInput = readlineSync.questionInt("Input number: ");

  if (usrInput % 2 == 0) {
    console.log(
      chalk.greenBright.italic.bold("This number is divisible by 2!"),
    );
  }

  if (usrInput % 2 !== 0) {
    console.log(
      chalk.greenBright.italic.bold("This number is not divisible by 2!"),
    );
  }
};

isDivisible();
