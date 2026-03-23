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
let balance = +localStorage.getItem("money");
document.getElementById("money").textContent = localStorage.getItem("money");
const player = new Object(canvas.width / 2, 800, 50, 50);
const wall1 = new Object(100, 100, 50, 800);
const wall2 = new Object(canvas.width - 100, 100, 50, 800);
const wall3 = new Object(100, 100, 2000, 50);
const moneyBlock = new Object(canvas.width/2 - 50, 150, 150, 50);

const dropper1 = new Object(250, 700, 50, 50);
let dropper1Owned = localStorage.getItem("dropper1Owned") == 1;

const dropper2 = new Object(250, 600, 50, 50);
let dropper2Owned = localStorage.getItem("dropper2Owned") == 1;

const dropper3 = new Object(250, 500, 50, 50);
let dropper3Owned = localStorage.getItem("dropper3Owned") == 1;

const dropper4 = new Object(250, 400, 50, 50);
let dropper4Owned = localStorage.getItem("dropper4owned") == 1;

const dropper5 = new Object(250, 300, 50, 50);
let dropper5Owned = localStorage.getItem("dropper5Owned") == 1;

let playtime = +localStorage.getItem("playtime");
document.getElementById("playtime").textContent = playtime;

const dropper1Bought = new Object(2000, 700, 50, 50);
const dropper2Bought = new Object(2000, 600, 50, 50);
const dropper3Bought = new Object(2000, 500, 50, 50);
const dropper4Bought = new Object(2000, 400, 50, 50);
const dropper5Bought = new Object(2000, 300, 50, 50);

const lab = new Object(1400, 800, 100, 100);
let labOwned = localStorage.getItem("labOwned") == 1;

setInterval(function() {
    playtime++;
    localStorage.setItem("playtime", playtime);
    document.getElementById("playtime").textContent = playtime;
}, 1000);

if(localStorage.getItem("dropper1Owned") == 1) {
    ctx.fillStyle = "purple";
    ctx.fillRect(dropper1Bought.x, dropper1Bought.y, dropper1Bought.width, dropper1Bought.height);
    setInterval(function() {
        balance++;
        localStorage.setItem("money" ,balance);
        document.getElementById("money").textContent = balance;
    }, 100);
}

if(localStorage.getItem("dropper2Owned") == 1) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(dropper2Bought.x, dropper2Bought.y, dropper2Bought.width, dropper2Bought.height);
    setInterval(function() {
        balance++;
        localStorage.setItem("money" ,balance);
        document.getElementById("money").textContent = balance;
    }, 10);
}

if(localStorage.getItem("dropper3Owned") == 1) {
    ctx.fillStyle = "blue";
    ctx.fillRect(dropper3Bought.x, dropper3Bought.y, dropper3Bought.width, dropper3Bought.height);
    setInterval(function() {
        balance++;
        localStorage.setItem("money" ,balance);
        document.getElementById("money").textContent = balance;
    }, 1);
}

if(localStorage.getItem("dropper4Owned") == 1) {
    ctx.fillStyle = "red";
    ctx.fillRect(dropper4Bought.x, dropper4Bought.y, dropper4Bought.width, dropper4Bought.height);
    setInterval(function() {
        balance += 3;
        localStorage.setItem("money" ,balance);
        document.getElementById("money").textContent = balance;
    }, 1);
}

if(localStorage.getItem("dropper5Owned") == 1) {
    ctx.fillStyle = "pink";
    ctx.fillRect(dropper5Bought.x, dropper5Bought.y, dropper5Bought.width, dropper5Bought.height);
    setInterval(function() {
        balance += 6;
        localStorage.setItem("money" ,balance);
        document.getElementById("money").textContent = balance;
    }, 1);
}

if(localStorage.getItem("labOwned") == 1) {
    setInterval(function() {
        balance += Math.floor(Math.random() * 25);
        localStorage.setItem("money", balance);
        document.getElementById("money").textContent = balance;
    }, 100);
}

let drugs = +localStorage.getItem("drugs");

setInterval(function() {
    localStorage.setItem("drugs", balance / 150);
    const savedDrugs = localStorage.getItem("drugs");
    const numDrugs = parseFloat(savedDrugs);
    document.getElementById("totalDrugs").textContent = numDrugs.toFixed(0);
}, 100);

let randomChance;
const double = new Object(1650, 300, 25, 25);

setInterval(function() {
    randomChance = Math.floor(Math.random() * 600);

    if(randomChance == 1) {
        double.x = 1650;
        double.y = 300;
        ctx.fillRect(double.x, double.y, double.width, double.height);
        ctx.fillStyle = "gold";
        ctx.fillText("money 2x", 1600, 290);
    }
}, 1000);

function render() {
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = "silver";
    ctx.fillRect(wall1.x, wall1.y, wall1.width, wall1.height);
    ctx.fillRect(wall2.x, wall2.y, wall2.width, wall2.height);
    ctx.fillRect(wall3.x, wall3.y, wall3.width, wall3.height);
    ctx.fillStyle = "green";
    ctx.fillRect(moneyBlock.x, moneyBlock.y, moneyBlock.width, moneyBlock.height);
    ctx.font = "25px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("free money", moneyBlock.x + 10, moneyBlock.y + 30);
    ctx.fillStyle = "cyan";
    ctx.fillText("bought droppers", 1900, 250);
    ctx.fillStyle = "red";
    ctx.fillText("$1000", 300, 750);
    ctx.fillText("$5000", 300, 650);
    ctx.fillText("$15000", 300, 550);
    ctx.fillText("$50000", 300, 450);
    ctx.fillText("$100000", 300, 350);
    ctx.font = "50px Arial";
    ctx.fillStyle = "magenta";
    ctx.fillText("drug", canvas.width/2 - 100, 80);
    ctx.fillStyle = "cyan";
    ctx.fillText("tycoon", canvas.width/2, 80)
    ctx.fillStyle = "purple";
    ctx.fillRect(dropper1.x, dropper1.y, dropper1.width, dropper1.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(dropper2.x, dropper2.y, dropper2.width, dropper2.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(dropper3.x, dropper3.y, dropper3.width, dropper3.height);
    ctx.fillStyle = "red";
    ctx.fillRect(dropper4.x, dropper4.y, dropper4.width, dropper4.height);
    ctx.fillStyle = "pink";
    ctx.fillRect(dropper5.x, dropper5.y, dropper5.width, dropper5.height);
    ctx.fillStyle = "mediumaquamarine";
    ctx.fillRect(lab.x, lab.y, lab.width, lab.height);
    ctx.fillStyle = "mediumaquamarine";
    ctx.font = "30px Arial",
    ctx.fillText("meth lab $10000", lab.x - 70, lab.y);
}

document.getElementById("resetSave").addEventListener("click", () => {
    localStorage.setItem("dropper1Owned", 2);
    localStorage.setItem("dropper2Owned", 2);
    localStorage.setItem("dropper3Owned", 2);
    localStorage.setItem("dropper4Owned", 2);
    localStorage.setItem("dropper5Owned", 2);
    localStorage.setItem("money", "0");
    localStorage.setItem("drugs", "0");
    localStorage.setItem("labOwned", 2);
    location.reload();
});

const keys = {};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    keys[event.key] = false;
});

function isCollidingX(x1, w1, x2, w2) { return x1 < x2 + w2 && x1 + w1 > x2; }
function isCollidingY(y1, h1, y2, h2) { return y1 < y2 + h2 && y1 + h1 > y2; }

function game() {
    ctx.clearRect(player.x, player.y, player.width, player.height);

    let oldX = player.x;
    let oldY = player.y;

    if(keys["w"]) { player.y -= speed; }
    if(keys["s"]) { player.y += speed; }
    if(keys["a"]) { player.x -= speed; }
    if(keys["d"]) { player.x += speed; }

    if(player.x <= 0) { player.x += speed; }
    if(player.x >= canvas.width - player.width) { player.x -= speed; }
    if(player.y <= 0) { player.y += speed; }
    if(player.y >= canvas.height - player.height) { player.y -= speed; }

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
        isCollidingX(player.x, player.width, moneyBlock.x, moneyBlock.width) &&
        isCollidingY(player.y, player.height, moneyBlock.y, moneyBlock.height)
    ) {
        balance++;
        document.getElementById("money").textContent = balance;
        localStorage.setItem("money", balance);
    }

    if(
        isCollidingX(player.x, player.width, dropper1.x, dropper1.width) &&
        isCollidingY(player.y, player.height, dropper1.y, dropper1.height)
    ) {
        if(keys[" "]) {
            if(!dropper1Owned) {
                if(balance >= 1000) {
                    balance -= 1000;
                    dropper1Owned = localStorage.setItem("dropper1Owned", 1);
                    ctx.fillStyle = "purple";
                    ctx.fillRect(dropper1Bought.x, dropper1Bought.y, dropper1Bought.width, dropper1Bought.height);
                    setInterval(function() {
                        balance++;
                        localStorage.setItem("money" ,balance);
                        document.getElementById("money").textContent = balance;
                    }, 100);
                }
            }
        }
    }

    if(
        isCollidingX(player.x, player.width, dropper2.x, dropper2.width) &&
        isCollidingY(player.y, player.height, dropper2.y, dropper2.height)
    ) {
        if(keys[" "]) {
            if(!dropper2Owned) {
                if(balance >= 5000) {
                    balance -= 5000;
                    dropper2Owned = localStorage.setItem("dropper2Owned", 1);
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(dropper2Bought.x, dropper2Bought.y, dropper2Bought.width, dropper2Bought.height);
                    setInterval(function() {
                        balance++;
                        localStorage.setItem("money" ,balance);
                        document.getElementById("money").textContent = balance;
                    }, 10);
                }
            }
        }
    }

    if(
        isCollidingX(player.x, player.width, dropper3.x, dropper3.width) &&
        isCollidingY(player.y, player.height, dropper3.y, dropper3.height)
    ) {
        if(keys[" "]) {
            if(!dropper3Owned) {
                if(balance >= 15000) {
                    balance -= 15000;
                    dropper3Owned = localStorage.setItem("dropper3Owned", 1);
                    ctx.fillStyle = "blue";
                    ctx.fillRect(dropper3Bought.x, dropper3Bought.y, dropper3Bought.width, dropper3Bought.height);
                    setInterval(function() {
                        balance++;
                        localStorage.setItem("money" ,balance);
                        document.getElementById("money").textContent = balance;
                    }, 1);
                }
            }
        }
    }

    if(
        isCollidingX(player.x, player.width, dropper4.x, dropper4.width) &&
        isCollidingY(player.y, player.height, dropper4.y, dropper4.height)
    ) {
        if(keys[" "]) {
            if(!dropper4Owned) {
                if(balance >= 50000) {
                    balance -= 50000;
                    dropper4Owned = localStorage.setItem("dropper4Owned", 1);
                    ctx.fillStyle = "red";
                    ctx.fillRect(dropper4Bought.x, dropper4Bought.y, dropper4Bought.width, dropper4Bought.height);
                    setInterval(function() {
                        balance += 3;
                        localStorage.setItem("money" ,balance);
                        document.getElementById("money").textContent = balance;
                    }, 1);
                }
            }
        }
    }

    if(
        isCollidingX(player.x, player.width, dropper5.x, dropper5.width) &&
        isCollidingY(player.y, player.height, dropper5.y, dropper5.height)
    ) {
        if(keys[" "]) {
            if(!dropper5Owned) {
                if(balance >= 100000) {
                    balance -= 100000;
                    dropper4Owned = localStorage.setItem("dropper5Owned", 1);
                    ctx.fillStyle = "pink";
                    ctx.fillRect(dropper5Bought.x, dropper5Bought.y, dropper5Bought.width, dropper5Bought.height);
                    setInterval(function() {
                        balance += 6;
                        localStorage.setItem("money" ,balance);
                        document.getElementById("money").textContent = balance;
                    }, 1);
                }
            }
        }
    }

    if(
        isCollidingX(player.x, player.width, double.x, double.width) &&
        isCollidingY(player.y, player.height, double.y, double.height)
    ) {
        balance = balance * 2;
        double.x = 1000000;
        double.y = 1000000;
        ctx.clearRect(moneyBlock.x + 10, moneyBlock.y + 30, 1600, 290); // "money 2x" texten tas bort
        localStorage.setItem("money", balance);
        document.getElementById("money").textContent = balance;
    }

    if(
        isCollidingX(player.x, player.width, lab.x, lab.width) &&
        isCollidingY(player.y, player.height, lab.y, lab.height)
    ) {
        if(keys[" "]) {
            if(!labOwned) {
                if(balance >= 10000) {
                    labOwned = localStorage.setItem("labOwned", 1);
                    balance -= 10000;
                    location.reload();
                    setInterval(function() {
                        balance += Math.floor(Math.random() * 25);
                        localStorage.setItem("money", balance);
                        document.getElementById("money").textContent = balance;
                    }, 100);
                }
            }
        }
    }

    render();
    requestAnimationFrame(game);
}

game();
