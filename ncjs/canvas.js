const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function rect(x, y, width, height) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, width, height);
}

function fillStyle(color) { ctx.fillStyle = color; }