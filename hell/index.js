const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let r = Math.floor(Math.random() * 255) + 1;
let g = Math.floor(Math.random() * 255) + 1;
let b = Math.floor(Math.random() * 255) + 1;

document.addEventListener("mousemove", (event) => {
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    ctx.strokeStyle = `rgb(${r},${g},${b})`;

    ctx.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    ctx.lineTo(event.x, event.y, Math.floor(Math.random() * 16) + 1, Math.floor(Math.random() * 16) + 1);
    ctx.stroke();
});