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

const speed = 4;
const bot = new Object(canvas.width / 2, canvas.height / 2, 50, 50);
let hunger = 0;
let stress = 0;
let deathCause;

function AI() {
    ctx.clearRect(bot.x, bot.y, bot.width, bot.height);

    let randomNum = Math.floor(Math.random() * 4);
        
    if(randomNum === 0) { bot.x += speed; }
    if(randomNum === 1) { bot.x -= speed; }
    if(randomNum === 2) { bot.y += speed; }
    if(randomNum === 3) { bot.y -= speed; }

    if(bot.x <= 0) { bot.x += speed; }
    if(bot.y <= 0) {bot.y += speed; }
    if(bot.x >= canvas.width - 45) { bot.x -= speed; }
    if(bot.y >= canvas.height - 45) { bot.y -= speed; }

    ctx.fillRect(bot.x, bot.y, bot.width, bot.height);
    requestAnimationFrame(AI);
}

document.addEventListener("click", (event) => {
    ctx.clearRect(event.x - 20, event.y - 40, 50, 50);
});

document.addEventListener("keydown", (event) => {
    if(event.key === " ") {
        hunger -= 5;
        if(hunger < 0) { hunger += 5; }
    } 
    
    if(event.key === "Enter") {
        stress -= 5;
        if(stress < 0) { stress += 5 }
    }
});

setInterval(function() {
    hunger++;
    stress++;
    if(stress <= 0) { stress += 5; }
    if(stress > 100) { death(); }
    if(hunger <= 0) { hunger += 5 }
    if(hunger > 100) { death(); }
    document.getElementById("hunger").textContent = hunger;
    document.getElementById("stress").textContent = stress;
}, 250);

document.getElementById("how-to-play-text").onclick = function() { toggle("how-to-play") }

function death() {
    on("death");
    off("how-to-play");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hunger = 123;
    stress = 456;
    requestAnimationFrame(death);
}

function on(id) { document.getElementById(id).style.display = "block"; }
function off(id) { document.getElementById(id).style.display = "none"; }

function toggle(id) {
    if(document.getElementById(id).style.display === "block") {
        document.getElementById(id).style.display = "none";
    } else {
        document.getElementById(id).style.display = "block";
    }
}

AI();