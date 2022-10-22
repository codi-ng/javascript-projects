//a program that converts celsius to fahrenheit, farenheit to celsius, fahrenheit to kelvin, celsius to kelvin, kelvin to celsius and kelvin to fahrenheit, might add rankine, idk tho kinda lazy plus it's a lot of math


import readlineSync from 'readline-sync'

import chalk from 'chalk'

// import exit from 'node:process'
// import { start } from 'node:repl'



let tempOptions = ['Fahrenheit', 'Celsius', 'Kelvin']


let startConv = readlineSync.keyInSelect(tempOptions, "Choose which temperature type to convert to.")

console.log();



if(startConv == 0){
    startFah()
};

if(startConv == 1){
    startCels()
};

if(startConv == 2){
    startKelv()
};

if(startConv == 3){
    startRan()
};

function startKelv(){
    let kelvOpts = ['Fahrenheit to Kelvin', 'Celsius to Kelvin']

    let askTempKelv = readlineSync.keyInSelect(kelvOpts, "Input the temperature type you would like to convert to Kelvin")

    if(askTempKelv == 0){
      let inputKelvF =  readlineSync.questionInt("Input the temperature you would like to convert ")

      console.log(chalk.greenBright.bold(`${inputKelvF}°F to kelvin is ${Math.round((inputKelvF - 32) / 1.8 + 273.15)}K`))
    }

    if(askTempKelv == 1){
        
      let inputKelvC =  readlineSync.questionInt("Input the temperature you would like to convert ")

        console.log(chalk.greenBright.bold(`${inputKelvC}°C to kelvin is ${Math.round(inputKelvC + 273.15)}K`))
    }
};


function startFah(){
    let inputFOpts = ['Celsius to Fahrenheit', 'Kelvin to Fahrenheit']

    let askTempFOpts = readlineSync.keyInSelect(inputFOpts, 'Input the temperature type you would like to convert to Fahrenheit ')
    if(askTempFOpts == 0){
        let askTempCF = readlineSync.questionInt("Input the temperature you would like to convert ")
        
        console.log(chalk.bold.greenBright(`${askTempCF}°C to fahrenheit is ${Math.round((askTempCF * 1.8) + 32)}°F`))
    }

    if(askTempFOpts == 1){
        let askTempKelvF = readlineSync.questionInt("Input the temperature you would like to convert ")

        console.log(chalk.bold.greenBright(`${askTempKelvF}K to fahrenheit is ${Math.round(1.8 * (askTempKelvF - 273) + 32)}°F`))

    }

};

function startCels(){
    let inputCOpts = ['Fahrenheit to Celsius', 'Kelvin to Celsius']

    let askTempCOpts = readlineSync.keyInSelect(inputCOpts, 'Input the temperature type you would to convert to celsius ')

    if(askTempCOpts == 0){
        let askTempFC = readlineSync.questionInt("Input the temperature you would like to convert ")

        console.log(chalk.bold.greenBright(`${askTempFC}°F to celsius is ${Math.round((askTempFC - 32) * 5/9)}°C`))
    }

    if(askTempCOpts == 1){
        let askTempKC = readlineSync.questionInt("Input the temperature you would like to convert ")

        console.log(chalk.bold.greenBright(`${askTempKC}K to celsius is ${Math.round(askTempKC - 273.15)}°C`))
    }
};

function startRan(){
    
}