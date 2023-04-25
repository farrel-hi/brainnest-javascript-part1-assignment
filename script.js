let errorMessage = "Something seems to be wrong.... Let me fix it first.";


function computerPlay(){
    let computerNumberChoice = Math.floor(Math.random()*3); //Randomize a number form 0 to 2
    let computerStringChoice = "";

    switch(computerNumberChoice){ //Convert the number to string
        case 0:
            computerStringChoice = "Rock";
            break;
        case 1:
            computerStringChoice = "Paper";
            break;
        case 2:
            computerStringChoice = "Scissors";
            break;
        default:
            return errorMessage;
    } 
    return computerStringChoice;
}

function playRound(playerSelection, computerSelection){
    // Code Here
}

function game(){
    // Code Here
}