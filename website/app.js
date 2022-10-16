// let h1 = document.querySelector('h1')

// let functest = h1.addEventListener('click', function(){
//     let randomNum = Math.ceil(Math.random()* 3)

//     switch(randomNum){
//         case 1:
//             randomNum = 'red'
//             break;
//         case 2:
//             randomNum = 'blue'
//             break;
//         case 3:
//             randomNum = 'pink'
//             break
//     }

//     console.log("I've been clicked!")
    
//     h1.style.color = randomNum

// })

let body = document.body

body.onclick = function changeColor(){
    let randomNum2 = Math.ceil(Math.random()* 3)

    switch(randomNum2){
        case 1:
            randomNum2 = 'red'
            break;
        case 2:
            randomNum2 = 'blue'
            break;
        case 3:
            randomNum2 = 'green'
            break;

    }

    body.style.backgroundColor = randomNum2
}


// if(body.backgroundColor === h1.backgroundColor){
//     console.log("Same color!")
// }