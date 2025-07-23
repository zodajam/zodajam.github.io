const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

let PLAYERchosen;

const AIchose = [
    "rock",
    "paper",
    "scissors"
];

rock.onclick = function() {
    PLAYERchosen = "rock";
    runAI();
}

paper.onclick = function() {
    PLAYERchosen = "paper";
    runAI();
}

scissors.onclick = function() {
    PLAYERchosen = "scissors";
    runAI();
}

function runAI() {
    let AIchosen = AIchose[Math.floor(Math.random() * AIchose.length)];

    if(AIchosen === PLAYERchosen) {
        alert(`Tie! BOT Connor also chose ${PLAYERchosen}`);
        location.reload();
    }

    if(AIchosen === "rock" && PLAYERchosen === "paper") {
        alert(`You won! BOT Connor chose rock`);
        location.reload();
    }

    if(AIchosen === "paper" && PLAYERchosen === "rock") {
        alert("You lose! BOT Connor chose paper");
        location.reload();
    }

    if(AIchosen === "scissors" && PLAYERchosen === "rock") {
        alert(`You won! BOT Connor chose scissors`);
        location.reload();
    }

    if(AIchosen === "scissors" && PLAYERchosen === "paper") {
        alert(`You lose! BOT Connor chose scissors`);
        location.reload();
    }

    if(AIchosen === "paper" && PLAYERchosen === "scissors") {
        alert(`You win! BOT Connor chose paper`);
        location.reload();
    }

    if(AIchosen === "rock" && PLAYERchosen === "scissors") {
        alert(`You lose! BOT Connor chose rock`);
        location.reload();
    }
}