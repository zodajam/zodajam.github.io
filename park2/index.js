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

const speed = 12;
let hp = 100;

let neocoin = +localStorage.getItem("neocoin");

const player = new Object(10, 10, 50, 50);

const key = new Object(canvas.width - 250, canvas.height / 2, 25, 25);

const wall1 = new Object(400, 0, 50, 500);
const wall2 = new Object(400, canvas.height - 200, 50, 200);
const wall3 = new Object(600, 450, 500, 50);
const wall4 = new Object(1100, 150, 50, 350);
const wall5 = new Object(1100, 150, 100, 50);
const wall6 = new Object(canvas.width - 400, 0, 50, 200);
const wall7 = new Object(canvas.width - 450, 150, 100, 50);

function render() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = "silver";
    ctx.fillRect(wall1.x, wall1.y, wall1.width, wall1.height);
    ctx.fillRect(wall2.x, wall2.y, wall2.width, wall2.height);
    ctx.fillRect(wall3.x, wall3.y, wall3.width, wall3.height);
    ctx.fillRect(wall4.x, wall4.y, wall4.width, wall4.height);
    ctx.fillRect(wall5.x, wall5.y, wall5.width, wall5.height);
    ctx.fillRect(wall6.x, wall6.y, wall6.width, wall6.height);
    ctx.fillRect(wall7.x, wall7.y, wall7.width, wall7.height);
    ctx.fillStyle = "red";
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
    ctx.fillStyle = "mediumaquamarine";
    ctx.fillRect(key.x, key.y, key.width, key.height);
}

function isCollidingX(x1, w1, x2, w2) { return x1 < x2 + w2 && x1 + w1 > x2; }
function isCollidingY(y1, h1, y2, h2) { return y1 < y2 + h2 && y1 + h1 > y2; }

const ai = new Object(500, 500, 250, 250);
const ai_speed = 150;

function ai_bot() {
    ctx.clearRect(ai.x, ai.y, ai.width, ai.height);
    let randomChance = Math.floor(Math.random() * 4);

    if(randomChance == 0) { ai.x += speed; }
    if(randomChance == 1) { ai.x -= speed; }
    if(randomChance == 2) { ai.y += speed; }
    if(randomChance == 3) { ai.y -= speed; }

    if(ai.x < 0) { ai.x += ai_speed; }
    if(ai.x > canvas.width - ai.width) { ai.x -= ai_speed; }
    if(ai.y < 0) { ai.y += ai_speed; }
    if(ai.y > canvas.height - ai.height) { ai.y -= ai_speed; }

    render();
    requestAnimationFrame(ai_bot);
}

ai_bot();

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function main() {
    ctx.clearRect(player.x, player.y, player.width, player.height);

    let oldX = player.x;
    let oldY = player.y;

    if(keys["w"]) { player.y -= speed; }
    if(keys["s"]) { player.y += speed; }
    if(keys["a"]) { player.x -= speed; }
    if(keys["d"]) { player.x += speed; }

    if(player.x < 0) { player.x += speed; }
    if(player.x > canvas.width - player.width) { player.x -= speed; }
    if(player.y < 0) { player.y += speed; }
    if(player.y > canvas.height - player.height) { player.y -= speed; }




    // hej framtida rasmus förlåt för att jag bara använder if-satser, om du läser detta måste du fixa denna dåliga kod

    if(
        isCollidingX(player.x, player.width, wall1.x, wall1.width) &&
        isCollidingY(player.y, player.height, wall1.y, wall1.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, wall2.x, wall2.width) &&
        isCollidingY(player.y, player.height, wall2.y, wall2.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, wall3.x, wall3.width) &&
        isCollidingY(player.y, player.height, wall3.y, wall3.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, wall4.x, wall4.width) &&
        isCollidingY(player.y, player.height, wall4.y, wall4.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, wall5.x, wall5.width) &&
        isCollidingY(player.y, player.height, wall5.y, wall5.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, wall6.x, wall6.width) &&
        isCollidingY(player.y, player.height, wall6.y, wall6.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, wall7.x, wall7.width) &&
        isCollidingY(player.y, player.height, wall7.y, wall7.height)
    ) {
        player.x = oldX;
        player.y = oldY;
    }

    if(
        isCollidingX(player.x, player.width, ai.x, ai.width) &&
        isCollidingY(player.y, player.height, ai.y, ai.height)
    ) {
        player.x = oldX;
        player.y = oldY;
        hp--;
        document.getElementById("hp-text").textContent = hp;
        if(hp <= 0) { document.getElementById("popup").style.display = "block"; }
    }

    if(
        isCollidingX(player.x, player.width, key.x, key.width) &&
        isCollidingY(player.y, player.height, key.y, key.height)
    ) {
        neocoin += 10;
        document.getElementById("neocoin-text").textContent = `you have ${neocoin} neocoins`;
        document.getElementById("key-popup").style.display = "block";
        player.x = 0;
        player.y = 0;
        localStorage.setItem("neocoin", neocoin);
    }

    render();
    requestAnimationFrame(main);
}

main();