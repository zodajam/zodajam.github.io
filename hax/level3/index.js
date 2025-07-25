const btn = document.getElementById("btn");
const input = document.getElementById("input");

sessionStorage.clear();

function upload() {
    const file = document.getElementById("file");
    if(file.files[0].name === "key.txt") {
        sessionStorage.setItem("key", Math.floor(Math.random() * 10000) + 1);
    }
}

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(input.value === sessionStorage.getItem("key")) {
            alert("Congrats!!! You have won the hard level");
            input.value = "";
        } else {
            alert("Wrong password!");
            input.value = "";
        }
    }
});

btn.onclick = function() {
    sessionStorage.password = Math.floor(Math.random() * 10000) + 1;
}

const ball = document.getElementById("ball");
let score = 0;

ball.addEventListener("click", function() {
    score++;
    document.getElementById("clicks").textContent = score;
});