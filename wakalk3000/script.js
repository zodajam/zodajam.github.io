const player = document.getElementById("player");

const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const MOVE_SPEED = 50;

let positionX = 0;
let positionY = 100;

player.style.top = positionY + "px";
player.style.left = positionX + "px";

document.addEventListener("keydown", (event) => {
    if(event.key === "w") { // up
        positionY -= MOVE_SPEED;
        player.style.top = positionY + "px";
        console.log(`X: ${positionX} Y: ${positionY}`);
    }

    if(event.key === "a") { // left
        positionX -= MOVE_SPEED;
        player.style.left = positionX + "px";
        console.log(`X: ${positionX} Y: ${positionY}`);
    }

    if(event.key === "s") { // down
        positionY += MOVE_SPEED;
        player.style.top = positionY + "px";
        console.log(`X: ${positionX} Y: ${positionY}`);
    }

    if(event.key === "d") { // right
        positionX += MOVE_SPEED;
        player.style.left = positionX + "px";
        console.log(`X: ${positionX} Y: ${positionY}`);
    }


    // collision stuff

    if(positionY <= 50) {
        location.reload();
    }
});

const input = document.getElementById("input");
input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        changeUsername();
    }
});

function changeUsername() {
    if(input.value.length > 25) {
        alert(`[${input.value}] is too long, limit is 25 chars`);
    } else {
        player.textContent = input.value.trim();
    }
}