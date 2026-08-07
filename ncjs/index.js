const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let fillStyle = "";

function run() {
    if(fillStyle === "") {
        fillStyle = "red";
    }

    ctx.fillStyle = fillStyle;

    eval(document.getElementById("textarea").value);
}

function rect(x, y, width, height) {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x, y, width, height);
}

let neocoin = +localStorage.getItem("neocoin");

function plusNeocoin() { +localStorage.setItem("neocoin", neocoin++); }

function setBackground(color) { document.body.style.backgroundColor = color; }

function setColor(color) { document.body.style.color = color; }

let text = document.getElementById("text");