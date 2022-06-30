document.addEventListener('DOMContentLoaded', function () {
    let flipErr = document.querySelector("#flipErr")
    let resetGame = document.querySelector("#resetGame")
    let errWin = document.querySelector("#err")
    let youWin = document.querySelector("#you")
    let total = document.querySelector("#total")
    let errWinCount = 0
    let youWinCount = 0
    let totalCount = 0
    let errImage = document.querySelector("#errImage")
    let errMessage = document.querySelector("#errMessage")
    let ignignoktImage = document.querySelector("#ignignoktImage")
    let ignignoktMessage = document.querySelector("#ignignoktMessage")
    let errMessages = [
        'Ya all have any eggs? Cause I\'m totally going to mess someones house up!',
        'Yeah, burn it!',
        'We\'re the moon!',
        'You shall do as the Scorpions have done before you!',
        'We smoke as we shoot the bird!',
        'Man, you hear what he\'s saying?!',
        'On the moon, nerds get their pants pulled down and they are spanked with moon rocks',
        'Take two, mother muchachos!',
        'Hand over those magazines!',
        'and then you can get tore up!']
    let ignignoktMessages = [
        'Yes, eggs or pot',
        'This place is infinitly boring.',
        'Some would say that the Earth is our moon.',
        'Let us assume that \'Here\' is short for \"Here I am, rock you like a hurricane\".',
        'Light up.',
        'Our race is hundreds of years beyond yours.',
        'Your roommate is a nerd.',
        'I hope he can see this, because I\'m doing it as hard as I possibly can.',
        'Yes, give us your pornography.',
        'We shall aquire some wine on the way to the mall.']
    //let sceneImage = [
    //    'assets/images/ATHF_House.jpg',
    //    'assets/images/ATHF_CarlsHouse.png',
    //    'assets/images/ATHF_Mall.jpg']
    //let i=0

    flipErr.addEventListener('click', function() {
        let whoWins = Math.round(Math.random())
        totalCount++
        if (whoWins == 0) {
            errImage.src = "assets/images/err-head.png";
            ignignoktImage.src = "assets/images/ignignoktl.png";
            errMessage.textContent = "Hey, put me back!";
            ignignoktMessage.textContent = "Err, get up.";
            youWinCount++;
        } else {   
            let randomMessage = Math.round(Math.random()*9)  
            if(randomMessage == 7) {
                errImage.src = "assets/images/err-flipoff.png";
                ignignoktImage.src = "assets/images/ignignokt-flipoff.png";    
            } else {
                errImage.src = "assets/images/err-feet.png";
                ignignoktImage.src = "assets/images/ignignoktl.png";
            }
            errMessage.textContent = errMessages[randomMessage];
            ignignoktMessage.textContent = ignignoktMessages[randomMessage];
            errWinCount++;
        }
        errWin.textContent = errWinCount;
        youWin.textContent = youWinCount;
        total.textContent = totalCount;
    })

    resetGame.addEventListener('click', function() {
            errImage.src = "assets/images/err-feet.png";
            errMessage.textContent = "DAMN NO!";
            ignignoktMessage.textContent = "Is your ego satsified?";
            errWinCount = 0;
            youWinCount = 0;
            totalCount = 0;
            errWin.textContent = errWinCount;
            youWin.textContent = youWinCount;
            total.textContent = totalCount;
    })
})