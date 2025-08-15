const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("mousemove", (event) => {
    ctx.strokeStyle = "red"; // make it red color

    ctx.beginPath(); // Start a new path
    ctx.moveTo(canvas.width / 2, canvas.height / 2); // Move the pen to (30, 50)
    ctx.lineTo(event.x, event.y); // Draw a line to (150, 100)
    ctx.stroke();
});