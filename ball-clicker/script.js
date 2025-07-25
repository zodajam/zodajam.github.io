let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

let newScore = parseInt(localStorage.getItem("score"));
if (!isNaN(newScore)) {
  score = newScore;
}

circle.addEventListener("click", function() {
    score++;
    let audio = new Audio(`Pop${Math.floor(Math.random() * 2)+ 1}.wav`);
    audio.play();
    localStorage.setItem("score", score);
    scoreElement.textContent = localStorage.getItem("score");
});

scoreElement.textContent = localStorage.getItem("score");

const autoclickerBtn = document.getElementById("autoclicker");

autoclickerBtn.onclick = function() {
  if(score >= 2500) {
    score -= 2500;
    setInterval(function() {
      score++;
      let audio = new Audio(`Pop${Math.floor(Math.random() * 2)+ 1}.wav`);
      audio.play();
      localStorage.setItem("score", score);
      scoreElement.textContent = localStorage.getItem("score");
    }, 1000);
  }
}