const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Object {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

const speed = 10;
const player = new Object(30, 50, 50, 50);
const playerIMG = new Image();
playerIMG.src = "terrorist.png";

const house1 = new Object(1200, 600, 180, 200);
const house1IMG = new Image();
house1IMG.src = "house1.png";

const house2 = new Object(400, 700, 180, 200);
const house2IMG = new Image();
house2IMG.src = "house2.png";

const house3 = new Object(550, 300, 140, 160);
const house3IMG = new Image();
house3IMG.src = "house3.png";

const house4 = new Object(1500, 590, 180, 200);
const house4IMG = new Image();
house4IMG.src = "house4.png";

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

document.getElementById("bombs").textContent = localStorage.getItem("bombs");

let bombs = +localStorage.getItem("bombs");

function explode() {
    ctx.fillStyle = "yellow";
    bombs++;
    localStorage.setItem("bombs", bombs);
    document.getElementById("bombs").textContent = localStorage.getItem("bombs");
    let bombWidth = 50;
    let bombHeight = 50;
    let bombInterval = setInterval(function() {
        if(bombWidth >= 500) { clearInterval(bombInterval); }
        if(bombWidth >= 400) { ctx.fillStyle = "orange"; }
        bombWidth += 15;
        bombHeight += 15;
        ctx.fillRect(player.x - bombWidth/2, player.y - bombHeight/2, bombWidth, bombHeight);
    }, 1);
    setTimeout(function() {
        location.reload();
    }, 1500);
}

function render() {
    ctx.drawImage(playerIMG, player.x, player.y, player.width, player.height);
    ctx.drawImage(house1IMG, house1.x, house1.y, house1.width, house1.height);
    ctx.drawImage(house2IMG, house2.x, house2.y, house2.width, house2.height);
    ctx.drawImage(house3IMG, house3.x, house3.y, house3.width, house3.height);
    ctx.drawImage(house4IMG, house4.x, house4.y, house4.width, house4.height);
}

let bombActive;

function isCollidingX(x1, w1, x2, w2) { return x1 < x2 + w2 && x1 + w1 > x2; }
function isCollidingY(y1, h1, y2, h2) { return y1 < y2 + h2 && y1 + h1 > y2; }

function game() {
    ctx.clearRect(player.x, player.y, player.width, player.height);

    let oldX = player.x;
    let oldY = player.y;

    if(!bombActive) {
        if(keys["w"]) { player.y -= speed; }
        if(keys["s"]) { player.y += speed; }
        if(keys["a"]) { player.x -= speed; }
        if(keys["d"]) { player.x += speed; }

        if(keys[" "]) {
            explode();
            bombActive = true;
        }
    }

    if(player.x < 0) { player.x += speed; }
    if(player.x > canvas.width - player.width) { player.x -= speed; }
    if(player.y < 0) { player.y += speed; }
    if(player.y > canvas.height - player.height) { player.y -= speed; }

    if(
        isCollidingX(player.x, player.width, house1.x, house1.width) &&
        isCollidingY(player.y, player.height, house1.y, house1.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, house2.x, house2.width) &&
        isCollidingY(player.y, player.height, house2.y, house2.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, house3.x, house3.width) &&
        isCollidingY(player.y, player.height, house3.y, house3.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, house4.x, house4.width) &&
        isCollidingY(player.y, player.height, house4.y, house4.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    render();
    requestAnimationFrame(game);
}

game();