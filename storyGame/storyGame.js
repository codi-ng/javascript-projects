//create a game/program that is basically a story/RPG game
//will probably be my biggest project yet
//test5

import pkg from 'readline-sync';
const  readlineSync  = pkg;

import chalk from 'chalk'

import { setTimeout } from 'node:timers'

import { exit } from 'node:process'
import { read } from 'node:fs';


const usrHelp = "Hello, this is a help manual to help you get acquainted with how you play this story game and the different keywords, to exit the game entirely input 'fq', which stands for 'forcequit'"

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")


console.log(chalk.red("========================================================================= ") + chalk.bold.white.italic.underline("Welcome To storyGame.js") + chalk.red(" ========================================================================="))
console.log("===========================================================================================================================================================================")
console.log(chalk.redBright.bgRed("|                                                                                                                                                                         |"))

console.log(chalk.bgRed.bold("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------"))
console.log(" ")
console.log(chalk.red("========================================================================= ") + chalk.whiteBright.underline.bold("Are you ready to start?") + chalk.red(" ========================================================================="))

let varStartTestyN = readlineSync.question(chalk.bold("                                                                                   [Y/N] ")).toUpperCase()