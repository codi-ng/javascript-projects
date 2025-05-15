//make a program that returns a random message when a user runs
//test


import readlineSync from 'readline-sync'

import chalk from 'chalk';

import exitCode from 'node:process'

let msg1 = "Programming isn't about what you know; it's about what you can figure out." + "- Chris Pine";

let msg2 = "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." + "– Martin Fowler";

let msg3 = "First, solve the problem. Then, write the code.- John Johnson";

let msg4 = "Java is to JavaScript what car is to Carpet. - Chris Heilmann";

let msg5 = "Code is like humor. When you have to explain it, it's bad. - Cory House";

let msg6 = "JavaScript is the world's most misunderstood programming language. - Douglas Crockford";

let msg7 = "C Makes It Easy to Shoot Yourself in the Foot; C++ Makes It Harder but When You Do It'll Blow Your Whole Leg Off - Bjarne Stroustrup "

let randomNumChoose = Math.ceil(Math.random() * 7)

switch(randomNumChoose){
    case 1:
        randomNumChoose = chalk.italic.greenBright(msg1)
        break;
    case 2:
        randomNumChoose = chalk.italic.greenBright(msg2)
        break;
    case 3:
        randomNumChoose = chalk.italic.greenBright(msg3)
        break;
    case 4:
        randomNumChoose = chalk.italic.greenBright(msg4)
        break;
    case 5:
        randomNumChoose = chalk.italic.greenBright(msg5)
        break;
    case 6:
        randomNumChoose = chalk.italic.greenBright(msg6)
        break;
    case 7:
        randomNumChoose = chalk.italic.greenBright(msg7)
        break;
    
};

let startProgram = readlineSync.keyInYNStrict("Press Y for a nice quote.")

if(startProgram === false){
    process.exitCode = 0
}

else{
    console.log(randomNumChoose)
}