"use strict";
let point = 0;
let count = 0;


function game() {

    let computerHands = ["rock", "paper", "scissors"];
    let playerHand = prompt("rock, paper or scissors?:" ).toLowerCase();
    console.log("You: " + playerHand);
    let computerHand = computerHands[Math.floor(Math.random()*computerHands.length)];
    console.log("COM: " + computerHand);

    if (playerHand == "rock" && computerHand == "paper" ) {
        console.log("COM won!");
        count ++;
    }
    else if (playerHand == "paper" && computerHand == "scissors") {
        console.log("COM won!");
        count ++;
    }
    else if (playerHand == "scissors" && computerHand == "rock") {
        console.log("COM won!");
        count ++;
    }
    else if (playerHand == "rock" && computerHand == "scissors") {
        console.log("You won!");
        count ++;
        point ++;
    }
    else if (playerHand == "paper" && computerHand == "rock") {
        console.log("You won!");
        count ++;
        point ++;
    }
    else if (playerHand == "scissors" && computerHand == "paper") {
        console.log("You won!");
        count ++;
        point ++;
    }
    else {
        console.log("You're tie!");
        count ++;
    }

}

while (count < 5) {
    game();
}

if (point >= 4) {
    console.log("your point is " + point + " ;)");
}
else if (point == 3) {
    console.log("your point is " + point + " :)");
}
else {
    console.log("your point is " + point + " :(");

}