const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let width = 150;
let height = 150;

ctx.fillStyle = "cyan";
ctx.fillRect(x, y, width, height);

let randomNum = Math.floor(Math.random() * 3);

let botX = Math.floor(Math.random() * canvas.width);
let botY = Math.floor(Math.random() * canvas.height);
let botWidth = 150;
let botHeight = 150;


let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

const botColor = ctx.fillStyle = `rgb(${r},${g},${b})`;
function renderBot() {
    randomNum = Math.floor(Math.random() * 9);
    if(randomNum === 1) { botWidth += 5; }
    if(randomNum === 2) { botWidth -= 5; }
    if(randomNum === 3) { botHeight += 5; }
    if(randomNum === 4) { botHeight -= 5; }
    if(randomNum === 5) { botX += 5; }
    if(randomNum === 6) { botX -= 5; }
    if(randomNum === 7) { botY += 5; }
    if(randomNum === 8) { botY -= 5; }
    
    ctx.fillStyle = botColor;
    ctx.fillRect(botX, botY, botWidth, botHeight);
    requestAnimationFrame(renderBot);
}

renderBot();

function isCollidingX(x1, w1, x2, w2) { return x1 < x2 + w2 && x1 + w1 > x2; }
function isCollidingY(y1, h1, y2, h2) { return y1 < y2 + h2 && y1 + h1 > y2; }

document.addEventListener("click", (event) => {
    ctx.fillStyle = "cyan";
    ctx.fillRect(event.x, event.y, 50, 50);
});

function main() {
    ctx.fillStyle = "cyan";
    randomNum = Math.floor(Math.random() * 9);
    if(randomNum === 1) { width += 5; }
    if(randomNum === 2) { width -= 5; }
    if(randomNum === 3) { height += 5; }
    if(randomNum === 4) { height -= 5; }
    if(randomNum === 5) { x += 5; }
    if(randomNum === 6) { x -= 5; }
    if(randomNum === 7) { y += 5; }
    if(randomNum === 8) { y -= 5; }
    ctx.fillRect(x, y, width, height);
    requestAnimationFrame(main);
}

main();