let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

var audio = new Audio(`Pop${Math.floor(Math.random() * 3)+ 1}.wav`);

let newScore = parseInt(localStorage.getItem("score"));
if (!isNaN(newScore)) {
  score = newScore;
}

circle.addEventListener("click", function() {
    score++;
    audio = new Audio(`Pop${Math.floor(Math.random() * 3)+ 1}.wav`);
    audio.play();
    localStorage.setItem("score", score);
    scoreElement.textContent = localStorage.getItem("score");
});

scoreElement.textContent = localStorage.getItem("score");