function pilihanPlayer(playerChoose) {
    console.log(`Player choose ${playerChoose}`);

    const objectPlayer = {rock:"playerRock", paper:"playerPaper", scissors:"playerScissors"};

    document.getElementById(objectPlayer[playerChoose]).classList.add('hand-img-choose');
        console.debug(`${objectPlayer[playerChoose]} bg color has change`)

    const arrayHand = ["playerRock", "playerPaper", "playerScissors"];
    
    
    for(let i = 0; i < arrayHand.length; i++) { 
        document.getElementById(arrayHand[i]).onclick = null;
        document.getElementById(arrayHand[i]).classList.remove('hand-img-hover');
    }

    console.debug(`hand option's onclick features has disabled`)
    

    function win (){
        console.log("PLAYER WIN!");
        document.getElementById("vs").classList.remove('vs-style');
        document.getElementById("vs").classList.add('player-status');
        document.getElementById("vs").innerHTML = "PLAYER 1 WIN!";
    }

    function lose (){
        console.log("PLAYER LOSE :(");
        document.getElementById("vs").classList.remove('vs-style');
        document.getElementById("vs").classList.add('player-status');
        document.getElementById("vs").innerHTML = "COM <br> WIN!";
    }

    function draw (){
        console.log("DRAW!");
        document.getElementById("vs").classList.remove('vs-style');
        document.getElementById("vs").classList.add('draw');
        document.getElementById("vs").innerHTML = "DRAW!";
    }

    function enemyInput(enemyHand) {
        return enemyHand[Math.floor(Math.random()*enemyHand.length)];
    }

    switch (enemyInput(["rock", "paper", "scissors"])) {
        case "rock":
            console.log("Enemy choose rock");
            document.getElementById("enemyRock").classList.add('hand-img-choose');
            
            switch (playerChoose){
                case "rock":
                        draw()
                    break;
                case "paper":
                        win()
                    break;
                case "scissors":
                        lose()
                    break;
                }
            break;

        case "paper":
            console.log("Enemy choose paper");
            document.getElementById("enemyPaper").classList.add('hand-img-choose');
 
            switch (playerChoose){
                case "rock":
                        lose()
                    break;
                case "paper":
                        draw()    
                    break;
                case "scissors":
                        win()
                    break;
                }
            break;

        case "scissors":
            console.log("Enemy choose scissors"); //sementara
            document.getElementById("enemyScissors").classList.add('hand-img-choose');
 
            switch (playerChoose){
                case "rock":
                        win()
                    break;
                case "paper":
                        lose()    
                    break;
                case "scissors":
                        draw()
                    break;
                }
            break;     
    }
    
    // RESET BUTTON
    console.debug('reset button now active');
    const resetButton = document.getElementById("reset");
    resetButton.classList.add('hand-img-hover');
    resetButton.addEventListener("click", () => {
        location.reload();
    });

}