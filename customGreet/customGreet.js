let readlineSync = require('readline-sync')

//aa
let customGreet = (i) =>{
    i = readlineSync.question('Who are you? ')

    console.log(`Oh, Hello ${i}`)

    let j = readlineSync.question('How are you doing today? ').toLowerCase()
    
    if(j){
        console.log(`I'm happy you're doing well today `)
    }

    else if(j === 'bad' || j === 'Bad' || j === 'bad.' || j === 'Bad.' ){
        console.log(`I'm sorry you're not doing well today `)
    }

    else if(j === !'bad' || j === !'Bad' || j === !'bad.' || j === !'Bad.' ){
        console.log(`Alright that's enough smalltalk for today ${i}, bye bye now.`)
    }

    else if(j === !'good' || j === !'Good' || j === !'good.' || j === !'Good.'){
        console.log(`Alright that's enough smalltalk for today ${i}, leave now.`)
    }

    let h = readlineSync.question(`Do you like cookies ${i}? `)

    if(h === 'yes' || h === 'Yes' || h === 'Yes.' || h === 'yes.'){
        console.log(`Me too! Wait looks like my programmer didn't leave any more lines for me to say, so good smalltalk, bye now ${i}`)
    }

    if(h === 'No' || h === 'no' || h === 'No.' || h === 'no.'){
        console.log(`Why ${i}? Are you a psychopath? You disgust me.`)
    }

    else if(h === !'No' || h === !'no' || h === !'No.' || h === !'no'){
        console.log(`Alright that's enough smalltalk for today ${i}, bye bye now.`)
    }

    // if(h === 'no' || h === 'No.' || h === 'no.' && j === 'bad'  || j === 'bad.' || j ==='Bad' || j === 'Bad.'){
    //     console.log(`You know maybe that's why you're not doing well today, go eat a cookie ${i}, can't believe you don't like them. Leave me alone.`)
    // }
}

customGreet();
