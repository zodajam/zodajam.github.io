sessionStorage.clear();

const ball = document.getElementById("ball");
let score = 0;

ball.addEventListener("click", function() {
    score++;
    if(score === 100) {
        sessionStorage.key = Math.floor(Math.random() * 100000) + 1;
    }
    document.getElementById("clicks").textContent = score;
});

const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(input.value === sessionStorage.key) {
            alert("Congrats!!! You have won the medium level");
            input.value = "";
        } else {
            alert("Wrong password!");
            input.value = "";
        }
    }
});