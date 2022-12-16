for(let i = 0; i <= 100; i++){
    
    i % 3 == 0 ? console.log("Fizz") : 
    i % 5 == 0 ? console.log("Buzz") : 
    i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuz") : console.log(i);
}