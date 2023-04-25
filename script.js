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
    lowerTextPlayerSelection = playerSelection.toLowerCase();

    if (computerSelection == lowerTextPlayerSelection){
        return console.log("It's a Tie!!");
    }
    else if (lowerTextPlayerSelection == "rock" && computerSelection == "paper"){
        return console.log("You Lose! Paper beats Rock");
    }
    else if (lowerTextPlayerSelection == "rock" && computerSelection == "scissors"){
        return console.log("You Win! Rock beats Scissors");
    }
    else if (lowerTextPlayerSelection == "paper" && computerSelection == "scissors"){
        return console.log("You Lose! Paper beats Scissors");
    }
    else if (lowerTextPlayerSelection == "paper" && computerSelection == "rock"){
        return console.log("You Win! Paper beats Rock");
    }
    else if (lowerTextPlayerSelection == "scissors" && computerSelection == "paper"){
        return console.log("You Win! Scissors beats Paper");
    }
    else if (lowerTextPlayerSelection == "scissors" && computerSelection == "rock"){
        return console.log("You Lose! Rock beats Scissors");
    }
    else{
        return console.log(errorMessage);
    }
}

// Check each function
// console.log(computerPlay()); //Check computerPlay output
// playRound("RoCk", computerPlay()); //Check playRound output

function game(){
    // Code Here
}