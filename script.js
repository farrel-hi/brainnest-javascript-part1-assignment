let errorMessage = "Something seems to be wrong.... Let me fix it first."
, userWinCount = 0
, userTieCount = 0
, userLoseCount = 0
;


function computerPlay(){
    let computerNumberChoice = Math.floor(Math.random()*3); //Randomize a number form 0 to 2
    let computerStringChoice = "";

    switch(computerNumberChoice){ //Convert the number to string
        case 0:
            return computerStringChoice = "rock";
        case 1:
            return computerStringChoice = "paper";
        case 2:
            return computerStringChoice = "scissors";
        default:
            return alert(errorMessage);
    } 
}

function playRound(playerSelection, computerSelection){
    // Code Here
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
    else{
        return alert(errorMessage);
    }
}

//Still need to fix the undefined result, add the winning count
function game(){
    alert("Time to Play Rock-Paper-Scissors!!\nThis is going to be a Five Round Match againts a Computer\nAre you Ready??")
    
    for (let i=0;i<5;i++){
        alert(`Round ${i+1}!\n[Win: ${userWinCount}, Lose: ${userLoseCount}, Tie: ${userTieCount}]`);
        let userGameInput = prompt("Choose your hand (Rock/Paper/Scissors):");

        do{
            if (typeof userGameInput === "string"){
                userGameInput = userGameInput.toLowerCase();
                if(userGameInput == "rock" || userGameInput == "paper" || userGameInput == "scissors"){
                    break;
                }
                else{
                    userGameInput = prompt("Please write either Rock/Paper/Scissors");
                }
            }
            else{
                userGameInput = prompt("Please write either Rock/Paper/Scissors");
            }
        }
        while(true);

        // console.log(`You chose ${userGameInput}`);

        let computerSelection = computerPlay();
        // console.log(`The Computer chose ${computerSelection}`);

        let roundResult = playRound(userGameInput,computerSelection);
        // console.log(roundResult);

        alert(`You Choose ${userGameInput}\nThe Computer Choose ${computerSelection}\nThe Result:\n${roundResult}`)
    }

    alert(`Game Over!\nHere are your Results:\nWin: ${userWinCount}x\nLose: ${userLoseCount}x\nTie: ${userTieCount}x`);
}

game();
