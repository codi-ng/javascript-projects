const eightBallfunc = () => {
    //Useless

    let randomNumber = Math.ceil(Math.random() * 8);
    let eightBall = randomNumber;

    switch (randomNumber) {
        case 1:
            eightBall = 'Yes!';
            console.log(eightBall);
            break;
        case 2:
            eightBall = 'No';
            console.log(eightBall);
            break;
        case 3:
            eightBall = 'My sources say yes.';
            console.log(eightBall);
            break;
        case 4:
            eightBall = 'My sources say no';
            console.log(eightBall);
            break;
        case 5:
            eightBall = 'Maybe';
            console.log(eightBall);
            break;
        case 6:
            eightBall = 'It is certainly so.';
            console.log(eightBall);
            break;
        case 7:
            eightBall = 'Outlook not so good.';
            console.log(eightBall);
            break;
        case 8:
            eightBall = 'Outlook good.';
            console.log(eightBall);
            break;
    }

    return eightBall;
};

eightBallfunc();
