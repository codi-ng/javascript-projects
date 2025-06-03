//do guess my num but using readline sync's key in select, this will make sure the user inputs a number

//*TO BE REVISITED AND FINISHED


import prompt from 'synchro-prompt';
import chalk from 'chalk';


prompt({ 
  color: 'green',
  transform: function(input) {
    return input.trim().toLowerCase();
  }
});


function chooseRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
let randomNumsArr = [1,2,3,4,5,6];
let chosenNum = chooseRandom(randomNumsArr);

let score = 0;
let userName = prompt('Enter your username! ');
console.log(`Hello ${userName}!`);
let  answer = prompt('Guess the number! ');
answer = parseInt(answer);

if(isNaN(answer)){
    console.log(chalk.red.bold('Not a number! Disqualified'));
    process.exit(1);
}

else if(answer === chosenNum){
    score++
    console.log(`You chose right! Your score is now ${score}`);
}








