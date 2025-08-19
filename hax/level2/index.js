sessionStorage.clear();

const ball = document.getElementById("ball");
let score = 0;

ball.addEventListener("click", function() {
    score++;
    document.getElementById("clicks").textContent = score;
});

const btn = document.getElementById("btn");

btn.onclick = function() {
    sessionStorage.greg = Math.floor(Math.random() * 100) + 1 + Math.floor(Math.random() * 10000) + 1;
}

const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(input.value === sessionStorage.greg) {
            alert("Congrats!!! You have won the medium level");
            input.value = "";
        } else {
            alert("Wrong password!");
            input.value = "";
        }
    }
});