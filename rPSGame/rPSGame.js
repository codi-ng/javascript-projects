/*make a let computerChoice = math.ceil(Math.random()* 3) and if math.random is 1, then computerChoice = 'Rock', if 2
computerChoice = 'Scissors'
if 3 computerChoice = 'paper' */

//My first oficial JavaScript project!

//Hi GitHub
// if(userChoice !== 'Rock' || userChoice !== 'Scissors' || userChoice !== 'Paper'){
//   return 'Invalid input.'
// }

let computerChoice = Math.ceil(Math.random() * 3);

if (computerChoice === 1) {
    computerChoice = 'Rock';
} else if (computerChoice === 2) {
    computerChoice = 'Scissors';
} else if (computerChoice === 3) {
    computerChoice = 'Paper';
}

const getuserChoice = (userChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        return 'You lose!';
    } else if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        return 'You lose!';
    } else if (computerChoice === 'Paper' && userChoice === 'Rock') {
        return 'You lose!';
    } else {
        return 'You win!';
    }
};

console.log(computerChoice);

/*input "Rock",
"Paper" or
"Scissors"(first letter uppercase)
below in the quotes       ⬇   */
console.log(getuserChoice('Rock'));
