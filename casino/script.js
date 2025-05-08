var yenom = 100;
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const result = document.getElementById("result");

red.onclick = function() {
    for(let i = 0; i > 10; i++) {
        setInterval((function() {result.style.backgroundColor = red;result.innerText = "RED"}), 1000)
        setInterval((function() {result.style.backgroundColor = blue;result.innerText = "BLUE"}), 1000)
    }
}