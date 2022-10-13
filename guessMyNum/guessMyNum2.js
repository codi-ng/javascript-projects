//do guess my num but using readline sync's key in select, this will make sure the user inputs a number
e
import readlineSync from 'readline-sync'

import exit from 'node:process'

import chalk from 'chalk'

import chalkAnimation from 'chalk-animation';

import { setTimeout } from 'node:timers/promises'

let score = 0;

let randomNum = Math.ceil(Math.random() * 3)

console.log("Welcome to Number Guesser!")