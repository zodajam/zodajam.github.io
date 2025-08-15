const neocoinText = document.getElementById("neocoin");

let neocoin = 0;

let newNeocoin = parseInt(localStorage.getItem("neocoin"));
if (!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}

const cpuTempText = document.getElementById("cpuTemp");

function start() {
    setInterval(function() {
        cpuTempText.textContent = Math.floor(Math.random() * (45 - 30 + 1)) + 30 + "." + Math.floor(Math.random() * 9) + 1 + "°C";
    }, 1000);

    setInterval(function() {
        neocoin++;
        localStorage.setItem("neocoin", neocoin);
        neocoinText.textContent = localStorage.getItem("neocoin");
    }, 1000);
}

function stop() {
    location.reload()
}

neocoinText.textContent = localStorage.getItem("neocoin");
