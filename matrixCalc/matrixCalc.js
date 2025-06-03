import readlineSync from 'readline-sync';
import chalk from 'chalk';

//*TO BE REVISITED AND FINISHED


const matChoice = ['3x3', '2x2', 'EXIT'];
// let matrix3 = [];
// let matrix2 = [];
let usrMat = [];
let usrMat2 = [];
let usrCalcChoice = 1;


let usrChoice = readlineSync.keyInSelect(matChoice, chalk.greenBright.bold( 'What matrix size do you want to work with? '));
usrChoice === 2 ? process.exit(0) : console.log(chalk.yellowBright.bold(`Initializing ${matChoice[usrChoice]} matrix creation process`));
console.log(chalk.blueBright.bold('---------------------------'));

let usrMatID = (usrChoice === 0 ? 3 : 2);

function createMat(arr){
    let usrMatRows = [];
    //TODO: BUG IS SOMEWHERE HERE. FIND IT. CHECK BELOW FOR BUG DESC
    for(let i = 1; i <= usrMatID; i++){
        usrMatRows = readlineSync.question(chalk.greenBright.bold(`Enter row number ${i} of your ${matChoice[usrChoice]} matrix: `));
        usrMatRows = usrMatRows.replace(/\s+/g, "");
        // console.log(usrMatRows);
        // console.log(usrMatRows);
        // process.exit(0);
        if(usrMatRows.length != 3) {
            console.log(chalk.redBright.bold(`ERROR: Only 3 numbers can be inputted for a ${matChoice[usrChoice]} matrix.`));
            process.exit(1);
        } 
        usrMatRows = usrMatRows.split('');
        arr.push(usrMatRows);
    } 
    return arr;
}
createMat(usrMat);

console.log(chalk.blueBright.bold('Your matrix is: '));
usrMat.forEach(i => console.log(chalk.magentaBright.bold(i + '\n')));

console.log(chalk.blueBright.bold('---------------------------'));
console.log(chalk.yellowBright.bold(`Initiliazing ${matChoice[usrChoice]} matrix calculations: ${"\n"}`))
const calculations = [`Determinant of a ${matChoice[usrChoice]} matrix`, `Multiplication of two ${matChoice[usrChoice]} matrices`, `Subtracion of two ${matChoice[usrChoice]} matrices`, `Addition of two ${matChoice[usrChoice]} matrices`, `Scalar of a ${matChoice[usrChoice]} matrix`, 'EXIT'];

function matScalar(arr, i){
    const scalar = arr.map(y => y.map(x => x * i));
    return scalar;
}

function addMats(mat1, mat2){
    let matSum = [];
    for(let i = 0; i < mat1.length; i++){
        let rowSum = [];
        for(let j = 0; j < mat1[i].length; j++){
            rowSum.push(Number(mat1[i][j]) + Number(mat2[i][j]));
        }
        matSum.push(rowSum);
    }
    matSum.forEach(i => console.log(chalk.magentaBright.bold(i + '\n')));
    return matSum;
}

function subMats(mat1, mat2){
    let matSub = [];
    for(let i = 0; i < mat1.length; i++){
        let rowSub = [];
        for(let j = 0; j < mat1[i].length; j++){
            rowSub.push(Number(mat1[i][j]) - Number(mat2[i][j]));
        }
        matSub.push(rowSub);
    }
    matSub.forEach(i => console.log(chalk.magentaBright.bold(i + '\n')));
    return matSub;
}
function multMats(mat1, mat2){
    let matMult = [];
    for(let i = 0; i < mat1.length; i++){
        let rowMult = [];
        for(let j = 0; j < mat1[i].length; j++){
            rowMult.push(Number(mat1[i][j]) * Number(mat2[i][j]));
        }
        matMult.push(rowMult);
    }
    matMult.forEach(i => console.log(chalk.magentaBright.bold(i + '\n')));
    return matMult;
}


    // TODO: FINISH DETERMINANT.
    // TODO: OPTIMIZE AND CHECK CODE WHEN PROGRAM IS FINISHED
    // TODO: FIX SILENT BUG. ARRAY CANNOT TAKE DOUBLE DIGIT MATRICES BECAUSE OF LENGTH CHECK. PUTTING ROWS INTO ARRAY AND CHECKING LENGTH?
    //* EMPTY ARRAY BUG - FIXED
    //*  USRMAT2 FUNCTION IS DONE
    //*  MULTIPLICATION IS DONE
    //* ADDITION IS DONE
    //* SUBTRACTION IS DONE
    // * SCALAR IS DONE
    // * MOST LIKELY WILL MAKE AN IDENTITY MATRIX GENERATOR.
    // ? 'BACK' BUTTON TO CALCULATE A NEW MATRIX WITHOUT EXITING PROGRAM? CONSOLE.CLEAR()?
    // ? TRANSPOSE MATRIX FEATURE FUNCTION?
while(usrCalcChoice){
    usrCalcChoice = readlineSync.keyInSelect(calculations, chalk.greenBright.bold('Enter the operation: '));

    switch (usrCalcChoice){
        case 0:
           
        break;
        case 1:
            console.log('Initializing second matrix creation process');
            createMat(usrMat2);
            multMats(usrMat,usrMat2);
        break;
        case 2:
            console.log(`Initializing second matrix creation process`);
            createMat(usrMat2);
            subMats(usrMat, usrMat2);
        break;
        case 3:
            console.log(`Initializing second matrix creation process`);
            createMat(usrMat2);
            addMats(usrMat, usrMat2);
        break;
        case 4: {
            let scalarNum = readlineSync.questionInt(chalk.greenBright.bold('Enter the constant: '));
            console.log(chalk.greenBright.bold('The scalar matrix is: '));
            matScalar(usrMat, scalarNum).forEach(i => console.log(chalk.magentaBright.bold(i + '\n')));
        }
        break;
        case 5:
            process.exit(0);
        break;
    }

}









