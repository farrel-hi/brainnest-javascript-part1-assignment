let errorMessage = "Something seems to be wrong.... Let me fix it first."
, userWinCount = 0
, userTieCount = 0
, userLoseCount = 0
, userForfeitCount = 0
;

function processingTheRoundWinner(playerSelection, computerSelection){
    if (computerSelection == playerSelection){
        userTieCount +=1;
        return "It's a Tie!!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        userLoseCount +=1;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        userWinCount +=1;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        userLoseCount +=1;
        return "You Lose! Paper beats Scissors";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        userWinCount +=1;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        userWinCount +=1;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        userLoseCount +=1;
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection == "NONE"){
        return "You Forfeit This Round";
    }
    else{
        return alert(errorMessage);
    }
}

function computerPlay(){
    let computerNumberChoice = Math.floor(Math.random()*3); //Randomize a number form 0 to 2

    switch(computerNumberChoice){ //Convert the number to string
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return alert(errorMessage);
    } 
}

function askUserForReplay(){
    let askingToPlayAgain = confirm("Do you want to Play Again?");
    if(askingToPlayAgain){
        userLoseCount = 0;
        userTieCount = 0;
        userWinCount = 0;
        userForfeitCount = 0;
        return game();
    }
    else{
        return alert("The Game has Ended\nThank you for Playing!")
    }
}

function checkUserHandInput(userInput) {
    do{
        console.log(userInput);
        console.log(typeof userInput);
        if (typeof userInput === "string"){
            console.log("Koko");
            userInput = userInput.toLowerCase().trim();
            if(userInput == "rock" || userInput == "paper" || userInput == "scissors"){
                return userInput;
            }
            else{
                userInput = prompt("Please write either Rock/Paper/Scissors");
            }
        }
        else if(typeof userInput ==="object"){ 
            console.log(typeof userInput);
            console.log(userInput);
            let askCancelVerification = confirm("You have pressed the Cancel Button, it means you forfeit the Round. Are you Sure?");
            if (askCancelVerification){
                userForfeitCount+=1;
                return "NONE";
            }
            else{
                userInput = "check"; //"check" is used in order to trigger "Please write either Rock/Paper/Scissors"
                continue;
            }
        }
        else{
            userGameInput = prompt("Please write either Rock/Paper/Scissors");
        }
    }
    while(true);
}

function getUserHandInput() {
    let userGameInput = prompt("Choose your hand (Rock/Paper/Scissors):");
    return checkUserHandInput(userGameInput);
}

function game(){    
    alert("Time to Play Rock-Paper-Scissors!!\nThis is going to be a Five Round Match againts a Computer\nAre you Ready??");
    
    for (let i=0;i<5;i++){
        alert(`Round ${i+1}!\n[Win: ${userWinCount}, Lose: ${userLoseCount}, Tie: ${userTieCount}, Forfeit: ${userForfeitCount}]`);

        const userInput = getUserHandInput();
        const computerSelection = computerPlay();
        const roundResult = processingTheRoundWinner(userInput,computerSelection);

        alert(`You Choose ${userInput}\nThe Computer Choose ${computerSelection}\nThe Result:\n${roundResult}`);
    }
    alert(`Game Over!\nHere are your Results:\nWin: ${userWinCount}x\nLose: ${userLoseCount}x\nTie: ${userTieCount}x\nForfeit: ${userForfeitCount}`);
    
    askUserForReplay();
}

game();
