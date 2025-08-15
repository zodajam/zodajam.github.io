const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("mousemove", (event) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(event.x, event.y, 4, 4,);
});