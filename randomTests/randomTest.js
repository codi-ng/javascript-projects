// console.log("hello world")

// const { DynamicCustomSchemaRequestRegistration } = require("yaml-language-server/out/server/src/requestTypes");


// const { Survey } = require('enquirer');

// import inquirer from 'inquirer';

// import chalkAnimation from 'chalk-animation'

import pkg from 'readline-sync';
const  readlineSync  = pkg;

import { exit } from "node:process"

import { setTimeout } from 'node:timers'

import  chalk  from 'chalk'
import { read } from 'node:fs';
import { type } from 'node:os';
import { get } from 'node:http';

// function sayHelloWorld(param1 = 'Hello World'){
//     for(let i = 0; i < 69; i++){
//         console.log(param1)
//     }
// }




// sayHelloWorld();

// let objectTest = {
//     username: 'codi-ng',
//     magic: "fire",
//     pet:  'dragon'
// };



// let arrTest = ['username: codi-ng', 'magic: fire', 'pet: dragon'];

// console.log(arrTest);

// console.log(objectTest);

// let var1 = "Hello World"


// if(var1){
// }

// console.log(var1)

// let var1 = "Hello World"

// function sayHi(){
//     console.log("Hi")

//     setTimeout(()=>{let var2 = readlineSync.question("input something")
//      console.log(var2)
//     },100)
//     // let var2 = readlineSync.question(" ")
//     // console.log(var2)
// };

// if(var1){
//     sayHi()
//     setTimeout(()=>{ process.exitCode = 0}, 3000)
// };


// console.log("===========================================================================================================================================================================".length)
// console.log("Welcome to storyGame.js".length)

// console.log("==============================================================" + " Welcome to storyGame.js " + "==============================================================")



// let diffFood = ["Oreo", "Ice-cream", "Pizza", "Burger"]

// let i =  readlineSync.keyInSelect(diffFood, "Which one if your favorite?")

// console.log(`Great I love ${diffFood[i]}, too!`)

// let var1 = readlineSync.questionInt("What is your favorite number?")

// console.log(var1)


// let animalChooseRoom = [chalk.yellowBright.bold("Lion"), chalk.yellowBright.bold("Bear"), chalk.yellowBright.bold("Tiger")]

// let chooseDecision = readlineSync.keyInSelect(animalChooseRoom, chalk.yellowBright.bold("You enter a room, you see a lion, a bear and a tiger, the bear is slowest but strongest, the lion is fastest but weakest and the tiger stats are unknown, you have a weak wooden sword.\n Which animal do you attempt to kill?") )

// console.log(chalk.yellowBright.bold(`You chose ${animalChooseRoom[chooseDecision]}`));



// console.log("Hello world")

// let objectUserTest = {
//     username: readlineSync.question(chalk.greenBright("Input your username " )),
//     "Test Key": "Test Value " ,
//     Health: "100/100"
// };


// console.log(Object.keys(objectUserTest))

// Object.keys(objectUserTest).forEach(key => console.log(chalk.whiteBright.bold(key) + chalk.whiteBright.bold(":") + chalk.greenBright(` ${objectUserTest[key]}`)));

// const response =  await prompt({
//     type: 'input',
//     name: 'username',
//     message: 'What is your username?',
// });
// console.log(response)

 

// //console.log(response)

// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'reptile',
//       message: 'Which is better?',
//       choices: ['alligator', 'crocodile'],
//     },
//   ])
//   .then(answers => {
//     console.log('Answer:', answers.reptile);
//   });   

// console.log("test")

// inquirer.prompt([
//     {
//     type: "list",
//      name: "choose",
//       message:"You enter a room, in the room there is a lion, a bear, and a tiger, \nthe lion is the fastest but weakest, the bear is the slowest but strongest, and the tiger's strength and speed is unknown, \nyou have a fairly useless wooden sword. Which animal do you attempt to kill?", 
//       choices:["Lion", "Bear", "Tiger"]
//     },
    
// ])
// .then(answer => console.log('You chose the: ', answer.choose))


// let foobar = ['foo', 'bar', 'baz']

// // readlineSync.keyInSelect(foobar, "pick one")


// function getFizzBuzz(n){
//     if(n % 3 === 0){
//         console.log('Fizz')
//         return 'Fizz'
//     }
//     else if(n % 5 === 0){
//         console.log('Buzz')
//         return 'Buzz'
//     }
//     else if(n % 3 === 0 && n % 5 === 0){
//         console.log('FizzBuzz')
//         return 'FizzBuzz'
//     }else{
//         console.log(n)
//         return n
//     }
// }

// getFizzBuzz(3)