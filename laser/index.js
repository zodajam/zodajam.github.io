const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing;

document.addEventListener("mousedown", () => {
    drawing = true;
    ctx.strokeStyle = "red";

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(event.x, event.y);
    ctx.stroke();
    draw();
});

e

document.addEventListener("mousemove", (event) => {
    if(drawing) {
        ctx.strokeStyle = "red"; 

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(event.x, event.y); 
        ctx.stroke();
    }
});