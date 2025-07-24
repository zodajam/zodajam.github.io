let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

let newScore = parseInt(localStorage.getItem("score"));
if (!isNaN(newScore)) {
  score = newScore;
}

circle.addEventListener("click", function() {
    score++;
    if(localStorage.getItem("score") === "1000000") {
      alert("YOU HAVE REACHED ONE MILLION CLICKS! YOU WILL NOW GET ACCESS TO ADMIN PAGE! Go to uBash and type \"admin ketchup99\"");
    }
    let audio = new Audio(`Pop${Math.floor(Math.random() * 2)+ 1}.wav`);
    audio.play();
    localStorage.setItem("score", score);
    scoreElement.textContent = localStorage.getItem("score");
});

scoreElement.textContent = localStorage.getItem("score");