import readlineSync from 'readline-sync'
import chalk from 'chalk'
import exit from 'node:process'

// ? IDEAS FOR FUTURE REVAMPS
// ? Leaderboard saved to a file using fs.
//? Different difficulties: e.g., “Easy” has the computer randomly choose moves; “Hard” adapts based on your pattern.
//? Sound effects using packages like play-sound.


//*Computer faces. used to give the opponent some feelings
class compFaces{

    static get sadFace(){
            return chalk.blueBright.bold( `
     ____________
    /            \\
   /              \\
   |     .   .    |
   |              |
   |     ____     |
   \\    /    \\   /
    \\___________/
    `)
    }
    static get shockedFace(){
        return chalk.yellowBright.bold(`
  ____________
 /            \\
/              \\
|     O   O    |
|      ___     |
|     /   \\    |
|     \\___/    |
\\              /
 \\____________/
            `)
    }

    static get happyFace(){
        return chalk.yellowBright.bold( `
     _________
   /           \\
  /             \\
 |     ^   ^     |
 |               |
 |    \\______/   |
  \\             /
   \\___________/
`)
    }

    static get angryFace(){
        return chalk.redBright.bold( `
     _________
   /           \\
  /             \\
 |     >   <     |
 |      ____     |
 |     /    \\    |
  \\             /
   \\___________/
`)
    }

    static get evilLaugh(){
        return chalk.red.bold(`
     _________
   /           \\
  /             \\
 |   >     <     |
 |     ---       |
 |     \\_/       |
  \\             /
   \\___________/
`)
    }
}

//*Class player, player object, computer object and RPS logic creation and set up
class Player{
    constructor(userName){
        this._userName = userName;
        this._score = 5;
    }

    set userName(name){
        while(name.length < 3){
        console.log(chalk.redBright.bold("Please choose a longer name (3 or more characters)"));
        name = readlineSync.question(chalk.greenBright.bold('Enter your name: '));          
    }
    	this._userName = name;
     	return;
    }

    scoreDecrement(){
        this._score--;
    }
    get score(){
        return chalk.blueBright.bold(this._score);
    }

    get userName(){
        return chalk.blueBright.bold(`${this._userName}`);
    } 



}


let playerName = readlineSync.question(chalk.greenBright.bold('Enter your name: '));
const player = new Player(playerName);
player.userName = playerName;
const computer = {
    _name: '',
    _favFood: '',
    _degree: '',
    _score: 5,
    _move: -1,

	genDegree(){
		const degrees = ['Enology', 'Transpersonal Psychology', 'Ethnobotany', 'Archeoastronomy', 'Puppetry Arts'];
		const doctorate = ['Bachelors', 'Masters', 'PhD'];

		this._degree = `${doctorate[Math.floor(Math.random() * doctorate.length)]} in ${degrees[Math.floor(Math.random()* degrees.length)]}`
	},

	genName(){
		const names = ['Bobby', 'Tim', 'Bob', 'Bloopo Fizzwizzle the Splendid', 'Cassandra Bowman', 'Sam', 'Lisp', 'Mocha', 'Duke', 'Ferris'];

		this._name = `${names[Math.floor(Math.random() * names.length)]}`;
	},

	genFavFood(){
		const foodOpts = ['Blue Raspberry', 'Krabby Patty', 'Scooby Snacks', 'Grilled Cheese Sandwich', 'Pizza'];
		
		this._favFood = `${foodOpts[Math.floor(Math.random()*foodOpts.length)]}`;
	},

    genMove(){

        this._move = Math.floor(Math.random()* 3);
        switch(this._move){
            case 0:
                this._move = 'rock'
                break;
            case 1:
                this._move = 'paper'
                break;
            case 2:
                this._move = 'scissors'
                break;
        }
        
    },

    get move(){
        return chalk.yellowBright.bold(this._move);
    },

    scoreDecrement(){
        this._score--;
    },
    get score(){
        return chalk.yellowBright.bold(this._score);
    },
    get intro(){
        return chalk.yellowBright.bold(`Hello, ${player.userName}! My name is ${this._name} and I will be your oponent! A little bit about me: \n * I have a ${this.degree} \n * My favorite food is ${this.favFood}`);
    },
	get favFood(){
		return this._favFood;
	},
	get name(){
		return chalk.yellow.bold(this._name);
	},
	get degree(){
		return this._degree
	}

}
const rpsLogic = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors' 
}

//* This is what will appear when the player loses or wins
function victoryScreen(winningPlayer){
    console.clear();

    console.log(chalk.blueBright.bold("_________________________________________________"));
    console.log(chalk.magentaBright.bold(`${winningPlayer === player.userName ? player.userName : computer.name } has won the game!`))
    if(winningPlayer === player.userName){
        console.log(compFaces.angryFace);
        console.log(chalk.redBright.bold('NOT FAIR!'));
        console.log(chalk.magentaBright.bold(`Great job ${player.userName}! You win.... ${chalk.yellowBright('NOTHING!!')}`));
    }
    else{
        console.log(compFaces.evilLaugh);
        console.log(chalk.yellowBright.bold("YES!! HAHA! THAT WAS SO EASY "))

    }
    console.log(chalk.magentaBright.bold.bgWhite("Thanks for playing!!"))
    console.log(chalk.blueBright.bold("_________________________________________________"));

}


//* This is where the main game will run
function mainGame(){
    const choices = ['rock', 'paper', 'scissors'];
    console.log(chalk.blueBright.bold("_________________________________________________"));
    console.log(compFaces.happyFace);
    console.log(chalk.yellowBright.bold(`Great! Let's get started!\n`));
    console.log(chalk.magenta.bold('Initializing scores....'));
    console.log(chalk.magenta.bold(` ${player.userName}'s current score: ${player.score}`));
    console.log(chalk.magenta.bold(` ${computer.name}'s current score: ${computer.score}`));

    while(player._score > 0 && computer._score > 0){
        let userMoveIndex = readlineSync.keyInSelect(['Rock', 'Paper', 'Scissors'], chalk.greenBright.bold(`What's your move ${player.userName}?`));
        let userMove = choices[userMoveIndex];
        // console.log(userMove);
        computer.genMove();
        // console.log(computer._move);
        if(rpsLogic[userMove] == computer._move){
            console.log(chalk.blueBright.bold("_________________________________________________"));
            console.log(chalk.magentaBright.bold( `${chalk.bgWhite(player.userName)} won!`));
            console.log(chalk.magentaBright.bold(` ${player.userName} chose: ${chalk.blueBright.bold(userMove)}\n ${computer.name} chose: ${computer.move}\n`));
            computer.scoreDecrement();
            console.log(chalk.magentaBright.bold(` ${player.userName}'s current score: ${player.score}\n ${computer.name}'s current score: ${computer.score}`));
            console.log(compFaces.angryFace);
            console.log(chalk.redBright.bold('UGH! Not Fair! One more! AGAIN' ));
        }
        else if(rpsLogic[computer._move] == userMove){
            console.log(chalk.blueBright.bold("_________________________________________________"));
            
            console.log(chalk.magentaBright.bold(`${chalk.bgBlue(computer.name)} won!`));
            console.log(chalk.magentaBright.bold(` ${player.userName} chose: ${chalk.blueBright.bold(userMove)}\n ${computer.name} chose: ${computer.move}\n`));
            player.scoreDecrement();
            console.log(chalk.magentaBright.bold(` ${player.userName}'s current score: ${player.score}\n ${computer.name}'s current score: ${computer.score}`));
            console.log(compFaces.evilLaugh);
            console.log(chalk.yellowBright.bold("YES! HAHA! YOU'RE SO BAD AT THIS!"));
        }
        else{
            console.log(chalk.blueBright.bold("_________________________________________________"));
            console.log(chalk.magentaBright.bold('Draw!'));
            console.log(chalk.magentaBright.bold(` ${player.userName} chose: ${chalk.blueBright.bold(userMove)}\n ${computer.name} chose: ${computer.move}\n`));
            console.log(chalk.magentaBright.bold(` ${player.userName}'s current score: ${player.score}\n ${computer.name}'s current score: ${computer.score}\n`));
            console.log(chalk.yellowBright.bold("Let's go again!"));
            console.log(compFaces.shockedFace);
            
        }

        
    }
    let winningPlayer = player._score > 0 ? player.userName : computer.name;
    victoryScreen(winningPlayer)
    
}  



//*Computer object set up
computer.genDegree();
computer.genName();
computer.genFavFood();

//*Game intro
console.log(computer.intro);
console.log(compFaces.happyFace);
console.log(chalk.yellowBright.bold("Now let's get started! Here are the basic rules: "));
console.log(chalk.blueBright.bold("_________________________________________________"));
console.log(chalk.yellowBright.bold(`Both of our scores will begin at ${chalk.blueBright.bold('5')} and it will decrease by one each round one of us ${chalk.redBright.bold('loses')}. \nWhoever reaches a score of ${chalk.redBright.bold('0')} will ${chalk.redBright.bold('lose')} the game.`));

const readyUp = readlineSync.keyInYNStrict(chalk.greenBright.bold('Ready?'));
readyUp === false ? (console.log(chalk.yellowBright.bold("Why even run the program if you're not ready?")), console.log(compFaces.angryFace),  process.exit(1)) : mainGame();