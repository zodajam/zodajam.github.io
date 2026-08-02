const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let fillStyle = "red";
ctx.fillStyle = fillStyle;

function rect(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
}

function run() {
    eval(document.getElementById("textarea").value);
    ctx.fillStyle = fillStyle;
}

let neocoin = +localStorage.getItem("neocoin");

function plusNeocoin() { +localStorage.setItem("neocoin", neocoin++); }

function setBackground(color) { document.body.style.backgroundColor = color; }

function setColor(color) { document.body.style.color = color; }

let text = document.getElementById("text");