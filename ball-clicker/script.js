let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let neocoin = 0;

let newNeocoin = parseInt(localStorage.getItem("neocoin"));
if (!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}

circle.addEventListener("click", function() {
    neocoin++;
    let audio = new Audio(`Pop${Math.floor(Math.random() * 2)+ 1}.wav`);
    audio.play();
    localStorage.setItem("neocoin", neocoin);
    scoreElement.textContent = localStorage.getItem("neocoin");
});

scoreElement.textContent = localStorage.getItem("neocoin");

const autoclickerBtn = document.getElementById("autoclicker");

autoclickerBtn.onclick = function() {
  setInterval(function() {
    neocoin++;
    let audio = new Audio(`Pop${Math.floor(Math.random() * 2)+ 1}.wav`);
    audio.play();
    localStorage.setItem("neocoin", neocoin);
    scoreElement.textContent = localStorage.getItem("neocoin");
  }, 1000);
}

const removeAutoclickerBtn = document.getElementById("removeAutoclickerBtn");

removeAutoclickerBtn.onclick = function() {
  location.reload();
}