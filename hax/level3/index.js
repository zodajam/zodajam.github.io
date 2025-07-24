const btn = document.getElementById("btn");
const input = document.getElementById("input");

function upload() {
    const file = document.getElementById("file");
    if (file) {
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        alert(filename);
    }
}

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(input.value === sessionStorage.key.toString()) {
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