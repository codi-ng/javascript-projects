import readlineSync from 'readline-sync';
import chalk from 'chalk';

console.log(
    chalk.yellowBright.bold(
        'This program will help you calculate the percentage of numbers, for example the percentage on a test.'
    )
);

let firstNum = readlineSync.questionInt(
    `${chalk.blue('Input the first number. (E.g ')}${chalk.greenBright.bold('25')}${chalk.blue('/ 100')}${chalk.blue(')')} `
);

let secondNum = readlineSync.questionInt(
    `${chalk.blue('Input the second second number. (E.g: 25/')}${chalk.greenBright.bold('100')}${chalk.blue(')')} `
);

function calcPercent() {
    //console.log(`${firstNum} percent of ${secondNum} is ${Math.round((firstNum/100) * secondNum/1 )}%`);
    let result = (firstNum / secondNum) * 100;
    console.log(
        chalk.blue.bold(
            `${firstNum} percent of ${secondNum} is ${chalk.green.bold(result.toFixed(2) + '%')}`
        )
    );
}

if (secondNum && firstNum) {
    calcPercent();
}
