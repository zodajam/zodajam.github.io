const btn = document.getElementById("btn");
const input = document.getElementById("input");

sessionStorage.clear();

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(input.value === sessionStorage.password) {
            alert("Congrats!!! You have won the medium level");
            input.value = "";
        } else {
            alert("Wrong password!");
            input.value = "";
        }
    }
});

btn.onclick = function() {
    sessionStorage.password = Math.floor(Math.random() * 1000) + 1;
}

const ball = document.getElementById("ball");
let score = 0;

ball.addEventListener("click", function() {
    score++;
    document.getElementById("clicks").textContent = score;
});