const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let y = 0;

const greens = [
    "green",
    "limegreen",
    "lime"
];

let size = Math.floor(Math.random() * 8) + 4;

setInterval(function() {
    y++;
    size = Math.floor(Math.random() * 8) + 4;
    ctx.fillRect(Math.floor(Math.random () * 2500), y, size, size);
    ctx.fillStyle = greens[Math.floor(Math.random() * greens.length)];
}, 50);