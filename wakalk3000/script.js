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

const speed = 6;
const player = new Object(10, 10, 48, 48);

let keys = {};

document.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

ctx.fillStyle = "blue";
function game() {
    ctx.clearRect(player.x, player.y, player.width, player.height);

    if(keys["w"]) { player.y -= speed; }
    if(keys["s"]) { player.y += speed; }
    if(keys["a"]) { player.x -= speed; }
    if(keys["d"]) { player.x += speed; }

    if(player.x < 0) { player.x += speed; }
    if(player.y < 0) { player.y += speed; }
    if(player.x > canvas.width - player.width) { player.x -= speed; }
    if(player.y > canvas.height - player.height) { player.y -= speed; }

    ctx.fillRect(player.x, player.y, player.height, player.height);
    requestAnimationFrame(game);
}

game();