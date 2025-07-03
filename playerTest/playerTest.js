import readlineSync from 'readline-sync';
import chalk from 'chalk';

// * all entity actions that player and enemy will inherit. not for creating instances but for sharing common methods.
function EntityActions() {}

EntityActions.prototype.move = function () {
    console.log(chalk.yellowBright.bold(`${this.name || this.type} moves...`));
};

EntityActions.prototype.takeDamage = function () {
    console.log(
        chalk.yellowBright.bold(`${this.name || this.type} takes damage!`)
    );
    if (this.name) {
        this.health -= 25;
        return;
    } else {
        return;
    }
};
// * constructors for both player and enemy. these are expected to be used with the `new` keyword
function PlayerMaker(name = 'John Doe', ability = 'Ice', weapon = 'Stick') {
    if (!new.target) {
        throw Error('You must use the new keyword for this constructor!!!');
    }
    (this.name = name), (this.ability = ability), (this.stamina = 100);
    this.health = 100;
    (this.weapon = weapon),
        (this.healthPot = 'health potion'),
        (this.stamPot = 'stamina potion'),
        (this.intro = function () {
            console.log(
                chalk.yellowBright(
                    `My name is ${name} and my special ability is ${ability}`
                )
            );
        });
}

function EnemyMaker(ability) {
    if (!new.target) {
        throw Error('You must use the new keyword for this constructor!!!');
    }
    (this.type = 'Goblin'), (this.ability = ability), (this.dead = false);
    this.health = 25;
    (this.club = 'club'),
        (this.growl = function () {
            console.log(chalk.redBright.bold('GRAHHH'));
        });
}

//* main game logic. this is where most of the methods, keys-value pairs get used.
function mainGame() {
    const nextMoves = [
        'Move forward...',
        `${this.weapon === 'bow' ? 'Shoot arrow' : 'Swing weapon'}`,
        'Drink Potion',
        'Introduce yourself'
    ];
    const playerNext = readlineSync.keyInSelect(
        nextMoves,
        chalk.greenBright.bold("What's your next move?")
    );
    const playerMoves = () => {
        console.log(
            chalk.yellowBright.bold(
                `Oh no! ${this.name} has encountered ${goblin.ability === 'earth' || goblin.ability === 'electricity' ? 'an' : 'a'} ${goblin.ability} goblin!`
            )
        );
        goblin.growl();
        goblin.enemyAttack();
        this.takeDamage();
        console.log(
            chalk.yellowBright.bold(
                `The ${goblin.ability} goblin attacked you! ${chalk.blueBright.bold('(-25 health)')}`
            )
        );
        console.log(
            chalk.blueBright.bold(
                '_____________________________________________'
            )
        );
        const playerGobChoices = ['Attack goblin!'];
        const playerGobChooses = readlineSync.keyInSelect(
            playerGobChoices,
            chalk.greenBright.bold('Attack goblin?!')
        );
        console.log(
            chalk.blueBright.bold(
                '_____________________________________________'
            )
        );
        if (playerGobChooses === 0) {
            this.playerAttack();
            goblin.takeDamage();
            if (this.weapon === 'battle axe' || this.weapon === 'greatsword') {
                goblin.health -= 25;
                goblin.takeDamage();
                console.log(
                    chalk.yellowBright.bold(
                        `${this.name} attacks goblin! ${chalk.blueBright.bold('(-25 health)')}`
                    )
                );
                goblin.enemyDies();
                console.log(
                    chalk.yellowBright.bold(
                        `Good job ${this.name}! You defeated the ${goblin.ability} goblin! Replenish your health or stamina before your next adventure!`
                    )
                );
                console.log(
                    chalk.blueBright.bold(
                        '_____________________________________________'
                    )
                );
                this.drinkPot();
                console.log(
                    chalk.yellowBright.bold.underline(
                        `Good job, adventurer! You win!`
                    )
                );
            } else {
                console.log(
                    chalk.yellowBright.bold(
                        `${this.name} attacked the ${goblin.ability} goblin! ${chalk.blueBright.bold('(-15 health)')}`
                    )
                );
                goblin.health -= 15;
                goblin.enemyTaunt();
                console.log(
                    chalk.yellowBright.bold(`Oh no! The goblin wasn't killed!`)
                );
                readlineSync.keyInSelect(
                    ['Finish it off!'],
                    chalk.greenBright.bold('Attack one more time!')
                );
                console.log(
                    chalk.blueBright.bold(
                        '_____________________________________________'
                    )
                );
                this.playerAttack();
                goblin.takeDamage();
                console.log(
                    chalk.yellowBright.bold(
                        `${this.name} attacks goblin! ${chalk.blueBright.bold('(-15 health)')}`
                    )
                );
                goblin.health = 0;
                goblin.enemyDies();
                console.log(
                    chalk.blueBright.bold(
                        '_____________________________________________'
                    )
                );
                console.log(
                    chalk.yellowBright.bold(
                        `Good job ${this.name}! You defeated the ${goblin.ability} goblin! Replenish your health or stamina before your next adventure!`
                    )
                );
                this.drinkPot();
                console.log(
                    chalk.yellowBright.bold.underline(
                        `Good job, adventurer! You win!`
                    )
                );
            }
        }
    };
    switch (playerNext) {
        case 0:
            this.move();
            console.log(
                chalk.blueBright.bold(
                    '_____________________________________________'
                )
            );
            playerMoves();
            break;
        case 1:
            console.log(
                chalk.blueBright.bold(
                    '_____________________________________________'
                )
            );
            this.playerAttack();
            break;
        case 2:
            console.log(
                chalk.blueBright.bold(
                    '_____________________________________________'
                )
            );
            this.drinkPot();
            break;
        case 3:
            console.log(
                chalk.blueBright.bold(
                    '_____________________________________________'
                )
            );
            this.intro();
            break;
    }
}

// * creating necessary object instances and getting user info
const weaponChoices = ['sword', 'bow', 'battle axe', 'greatsword', 'lance'];
const playerName = readlineSync.question(
    chalk.greenBright.bold("Enter your character's name: ")
);
const playerAbility = readlineSync.question(
    chalk.greenBright.bold(
        `Enter ${playerName}'s special ability (superpower): `
    )
);
const playerWeapon = readlineSync.keyInSelect(
    weaponChoices,
    chalk.greenBright.bold(`Choose your weapon ${playerName}`)
);
const player = new PlayerMaker(
    playerName,
    playerAbility,
    weaponChoices[playerWeapon]
);

const goblinAbs = ['fire', 'electricity', 'water', 'earth'];
const goblin = new EnemyMaker(goblinAbs[Math.floor(Math.random() * 4)]);

// * Player actions and enemy actions. (i.e: player attack, potion drinking, enemy attack, enemy taunt)
const playerActions = {
    playerAttack: function () {
        if (this.weapon === 'battle axe' || this.weapon === 'greatsword') {
            console.log(
                chalk.yellowBright(
                    `You ${this.weapon === 'bow' ? 'shoot' : 'swing'} ${this.weapon === 'bow' ? 'an' : 'your'} ${this.weapon === 'bow' ? 'arrow' : this.weapon}!!! ${chalk.blueBright.bold(`(-25 stamina)`)}`
                )
            );
            this.stamina -= 25;
        } else {
            console.log(
                chalk.yellowBright(
                    `You ${this.weapon === 'bow' ? 'shoot' : 'swing'} ${this.weapon === 'bow' ? 'an' : 'your'} ${this.weapon === 'bow' ? 'arrow' : this.weapon}!!! ${chalk.blueBright.bold(`(-15 stamina)`)}`
                )
            );
            this.stamina -= 15;
        }
    },

    drinkPot: function () {
        console.log(
            chalk.yellowBright.bold(
                `These are your vitals now! Stamina: ${this.stamina} -- Health: ${this.health}`
            )
        );
        const potChoice = [this.healthPot, this.stamPot];
        const potion = readlineSync.keyInSelect(
            potChoice,
            chalk.greenBright(`Choose a potion to take!`)
        );
        potion === 1
            ? (this.stamina =
                  this.stamina + 75 >= 100 ? 100 : this.stamina + 75)
            : (this.health = this.health + 75 >= 100 ? 100 : this.health + 75);
        console.log(
            chalk.yellowBright(
                `You drank a ${potChoice[potion]}! These are your vitals now - Stamina: ${this.stamina} -- Health: ${this.health}`
            )
        );
    }
};

const enemyActions = {
    enemyAttack: function () {
        console.log(
            chalk.redBright.bold(`${this.type} attacks ${playerName}!!`)
        );
    },
    enemyDies: function () {
        console.log(chalk.redBright.bold(`AGHHHH!!`));
    },
    enemyTaunt: function () {
        console.log(chalk.redBright.bold(`HAR HAR HAR!`));
    }
};

// * Create different prototype chains for Player and Enemy
Object.setPrototypeOf(player, playerActions);
Object.setPrototypeOf(playerActions, PlayerMaker.prototype);
Object.setPrototypeOf(PlayerMaker.prototype, EntityActions.prototype);
Object.setPrototypeOf(goblin, enemyActions);
Object.setPrototypeOf(enemyActions, EnemyMaker.prototype);
Object.setPrototypeOf(EnemyMaker.prototype, EntityActions.prototype);

//* Adding mainGame function as a player method
player.mainGame = mainGame;
player.mainGame();
