////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
     
    if (playerMove === computerMove) {
        winner ='tie';
    } else if   
        ( (playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper') ) {
            winner ='player';
    } else if ( (playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'rock') ){
        winner='computer';
    } else console.log('invalid move');
    return winner;
}

function playToX() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    // Change "maxWins" variable to however many wins we want (computer or player) before the match stops
     var maxWins = 5;

     // Declares variable "winner", & initializes the round number (numOfRound to zero
     var winner;
     var numOfRound = 0;

     // Start the loop, why are we using AND&& instead of OR||, because we want the statement in the while loop to register as false (knocking us out of the loop), when player or computer reaches maxWins => whichever comes first. http://bit.ly/1MyW3gf
    while ( (playerWins < maxWins) && (computerWins < maxWins) ) {
        numOfRound+=1;
        
        //Display the moves
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log('Player has chosen ' + playerMove)
        console.log('Computer has chosen ' + computerMove + '....');

        // Pick and dispay winner for current round, calls the getWinner function
        winner = getWinner(playerMove,computerMove);
        if (winner==='player') {
            playerWins +=1;
        } else if (winner==='computer') {
            computerWins +=1;
        } else {
            playerWins +=0;
        }
        console.log('The winner of round ' + numOfRound + ' is the ' + winner);
        console.log('The current score is ' + 'player: ' + playerWins + '; computer: ' + computerWins + '\n');
    }

        // display match winner
    var matchWinner = (playerWins > computerWins) ? 'player' : 'computer';
    
    console.log('The winner of the match is the ' + matchWinner + ' in ' + numOfRound + ' rounds. \n Wasn\'t that fun\?');
    return [playerWins, computerWins];
    
}

playToX();