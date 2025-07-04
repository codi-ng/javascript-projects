export function capitalize(str){
    let arr = str.split("");
    let firstChar = arr.slice(0, 1)
    firstChar = firstChar[0].toUpperCase()
    arr.splice(0, 1);
    arr.unshift(firstChar);
    return arr.join("");
}

export function reverse(str){
    let arr = str.split("");
    return arr.reverse().join("");
}

export function calculator(op, num1, num2){
    switch(op){
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
    }
}

export function analyzeArr(arr){
    const totalSum = arr.reduce((acc, current) => acc + current);
    const totalEls = arr.length;

    return {
        "average": totalSum / totalEls,
        "min": Math.min(...arr),
        "max": Math.max(...arr),
        "length": arr.length
    }
}


const obj = analyzeArr([1,2,3,4,5]);

console.log(obj);
