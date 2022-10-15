//create a game/program that is basically a story/RPG game
//will probably be my biggest project yet
//test5
//note, when using keyinYn or something idk, remember it doesnt return the letter you chose whether y or n it returns 'true' for y and 'false' for n
import pkg from 'readline-sync';
const  readlineSync  = pkg;


import chalk from 'chalk'

import stdout from 'node:process'

import { setTimeout } from 'node:timers'

import { exit } from 'node:process'

import { read } from 'node:fs';



const usrHelp = chalk.greenBright.underline("Hello, this is a help manual to help you get acquainted with how you play this story game and the different keywords, to exit the game entirely input 'fq'\n which stands for 'forcequit'")


// console.log(usrHelp);

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log(chalk.red("======================================================================== ") + chalk.bold.white.italic.underline("Welcome To storyGame.js") + chalk.red(" ========================================================================="))
console.log("==========================================================================================================================================================================")
console.log(chalk.redBright.bgRed("|                                                                                                                                                                        |"))

console.log(chalk.bgRed.bold("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------"))
console.log(" ")
console.log(chalk.red("======================================================================== ") + chalk.whiteBright.underline.bold("Are you ready to start?") + chalk.red(" ========================================================================="))

let varStartTestyN = readlineSync.keyInYNStrict(chalk.white("                                                                                  "))


