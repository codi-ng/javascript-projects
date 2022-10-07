
//Nano test
//Github test

let readlineSync = require('readline-sync')


let isDivisible = (i) => {
  
  let i = parseInt(readlineSync.question('Input number: '))
   

  if (i % 2 == 0) {
    console.log("This number is divisible by 2!");
  }
  // if(typeof i !== 'number'){
  //   console.log("This is not a number.")
  // }
  else if (i % 2 !== 0) {
    console.log("This number is not divisible by 2!");
  }
  
};


console.log(i)



//console.log('test')
