//create a game/program that is basically a story/RPG game
//will probably be my biggest project yet
//test3

import pkg from 'readline-sync';
const { readlineSync } = pkg;

// let readlineSync = require("readline-sync")

import chalk from 'chalk'

import { setTimeout } from 'node:timers'

// let { setTimeout } = require("node:timers")

import { exit } from 'node:process'

// let { exit } = require("node:process")

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


console.log("========================================================================= Welcome To storyGame.js ==============================================================")
console.log(" ")

console.log(chalk.bgGray("----------------------------------------------------------------------------------------------------------------------------------------------------------------"))

console.log("")
console.log(chalk.blue(usrHelp));