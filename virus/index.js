const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

function run() {
    canvas.style.display = "block";

    let newText = document.createElement("p");
    setInterval(function() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        newText = document.createElement("p");

        newText.innerHTML = Math.floor(Math.random() * (10000000000 - 100000)) + 10000000000;
        newText.style.color = `rgb(${r},${g},${b})`;
        newText.className = "newText";
        document.getElementById("canvasOverlay").appendChild(newText); 
    }, 100);

    document.addEventListener("mousemove", (event) => {
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        ctx.strokeStyle = `rgb(${r},${g},${b})`;

        ctx.moveTo(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
        ctx.lineTo(event.x, event.y, Math.floor(Math.random() * 16) + 1, Math.floor(Math.random() * 16) + 1);
        ctx.stroke();
    });
}
