let errMessages = [
    'Cause I\'m totally going to mess someones house up!',
    'Yeah, burn it!',
    'We\'re the moon!',
    'You shall do as the Scorpions have done before you!',
    'We smoke as we shoot the bird!',
    'Man, you hear what he\'s saying?!',
    'On the moon, nerds get their pants pulled down and they are spanked with moon rocks',
    'Challenge us!',
    'Hand over those magazines!',
    'and then you can get tore up!'];
let ignignoktMessages = [
    'Do you have any eggs?',
    'This place is infinitly boring.',
    'Some would say that the Earth is our moon.',
    'Let us assume that \'Here\' is short for \"Here I am, rock you like a hurricane\".',
    'Light up.',
    'Our race is hundreds of years beyond yours.',
    'Your roommate is a nerd.',
    'Our vertical leap is beyond all measurement.',
    'Give us your pornography.',
    'We shall aquire some wine on the way to the mall.'];
let gameOver = false;
let gameLimit = 5;
let sceneImage = [
    '"url(assets/images/ATHF_House.jpg)"',
    '"url(assets/images/ATHF_CarlsHouse.png)"',
    '"url(assets/images/ATHF_Mall.jpg)"']
let i=0
let errWinCount = 0;
let youWinCount = 0;
let totalCount = 0;
document.addEventListener('DOMContentLoaded', function () {
    let flipErr = document.querySelector("#flipErr");
    let resetGame = document.querySelector("#resetGame");
    let errWin = document.querySelector("#err");
    let youWin = document.querySelector("#you");
    let total = document.querySelector("#total");
    let errImage = document.querySelector("#errImage");
    let errMessage = document.querySelector("#errMessage");
    let ignignoktImage = document.querySelector("#ignignoktImage");
    let ignignoktMessage = document.querySelector("#ignignoktMessage");
    document.getElementById('body').style.backgroundImage= 'url(assets/images/ATHF_House.jpg)';

    flipErr.addEventListener('click', function() {
        if (!gameOver) {
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
            errImage.src = "assets/images/err-feet.png";
            errMessage.textContent = errMessages[randomMessage];
            ignignoktMessage.textContent = ignignoktMessages[randomMessage];
            errWinCount++;
        }
        errWin.textContent = errWinCount;
        youWin.textContent = youWinCount;
        total.textContent = totalCount;
        if (totalCount == gameLimit) {gameOver = true}
    } else {
        if (youWinCount>errWinCount) {
            alert("YOU WIN, CONGRADULATIONS!");
            errImage.src = "assets/images/err-head.png";
            ignignoktMessage.textContent = "Let's get out of here.";
            document.getElementById("ignignoktImage").classList.remove("ignignoktStatic");
            document.getElementById("ignignoktImage").classList.add("ignignoktMove");
            document.getElementById("ignignoktMessage").classList.remove("ignignoktMessageShow");
            document.getElementById("ignignoktMessage").classList.add("ignignoktMessageHide");
            document.getElementById("errImage").classList.remove("errStatic");
            document.getElementById("errImage").classList.add("errMove");
            document.getElementById("errMessage").classList.remove("errMessageShow");
            document.getElementById("errMessage").classList.add("errMessageHide");
            //document.getElementById("spacecraft").classList.remove("spacecraftStatic");
            //document.getElementById("spacecraft").classList.add("spacecraftMove");
            } else {
            alert("SORRY, THE MOONINITES WIN!");
            errImage.src = "assets/images/err-flipoff.png";
            ignignoktImage.src = "assets/images/ignignokt-flipoff.png"; 
            errMessage.textContent = 'Take two, mother muchachos!';
            ignignoktMessage.textContent = 'I hope he can see this, because I\'m doing it as hard as I possibly can.';
        }
    }})

    resetGame.addEventListener('click', function() {
            //background switcher is not workin
            if (i=sceneImage.length) { i=0;
            } else {i++}
            document.body.style.backgroundImage=sceneImage[i];
            errImage.src = "assets/images/err-feet.png";
            ignignoktImage.src = "assets/images/ignignoktl.png";
            ignignoktMessage.textContent = "Is your ego satisfied?";
            errMessage.textContent = "DAMN NO!";
            document.getElementById("ignignoktImage").classList.remove("ignignoktMove");
            document.getElementById("ignignoktImage").classList.add("ignignoktStatic");
            document.getElementById("ignignoktMessage").classList.remove("ignignoktMessageHide");
            document.getElementById("ignignoktMessage").classList.add("ignignoktMessageShow");
            document.getElementById("errImage").classList.remove("errMove");
            document.getElementById("errImage").classList.add("errStatic");
            document.getElementById("errMessage").classList.remove("errMessageHide");
            document.getElementById("errMessage").classList.add("errMessageShow");
            //document.getElementById("spacecraft").classList.remove("spacecraftMove");
            //document.getElementById("spacecraft").classList.add("spacecraftStatic");
            errWinCount = 0;
            youWinCount = 0;
            totalCount = 0;
            errWin.textContent = errWinCount;
            youWin.textContent = youWinCount;
            total.textContent = totalCount;
            gameOver = false;
    })

})