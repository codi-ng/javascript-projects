//a program that converts celsius to fahrenheit and maybe fahrenheit to celsius


import readlineSync from 'readline-sync'

import chalk from 'chalk'

import exit from 'node:process'


//fahrenheit = celsius * 1.8 + 32; celsius = fahrenheit - 32 / .5556;


let tempOptions = ['Fahrenheit', 'Celsius']


let startConv = readlineSync.keyInSelect(tempOptions, "Choose which temperature type to conver to.")

console.log();


// console.log(startConv[0])


if(startConv == 0 || startConv == 1){
    startTemp()

};

function startTemp(){
    if(startConv == 0){
        let askTempF = readlineSync.questionInt("Input the temperature you would like to convert ")
        
        console.log(`${askTempF}°F in celsius is ${Math.round((askTempF - 32) * 5/9)}°C`)
    }

    if(startConv == 1){
        let askTempC = readlineSync.questionInt("Input the temperature you would like to convert ")

        console.log(`${askTempC}°C to fahrenheit is ${Math.round((askTempC * 1.8) + 32)}°F`)
    }
};