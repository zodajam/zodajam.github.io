const player = document.getElementById("player");

const MOVE_SPEED = 25;
let positionX = 0;
let positionY = 0;

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
});