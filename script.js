let errorMessage = "Something seems to be wrong.... Let me fix it first.";

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
            return console.log(errorMessage);
    } 
}

function playRound(playerSelection, computerSelection){
    // Code Here
    if (computerSelection == playerSelection){
        return console.log("It's a Tie!!");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        return console.log("You Win! Rock beats Scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        return console.log("You Lose! Paper beats Scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return console.log("You Win! Scissors beats Paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        return console.log("You Lose! Rock beats Scissors");
    }
    else{
        return console.log(errorMessage);
    }
}

//Still need to fix the undefined result, add the winning count
function game(){
    // let userWinningCount = 0;
    alert("Time to Play Rock-Paper-Scissors!!\nThis is going to be a Five Round Match againts a Computer\nAre you Ready??")
    
    for (let i=0;i<5;i++){
        console.log(`Round ${i+1}!`);
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

        console.log(`You chose ${userGameInput}`);

        let computerSelection = computerPlay();
        console.log(`The Computer chose ${computerSelection}`);

        let roundResult = playRound(userGameInput,computerSelection);
        console.log(roundResult);
    }
}

game();
