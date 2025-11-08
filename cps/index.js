const box = document.getElementById("clicker");

let num = 0;

function clicker(event) {
    if(num == 1) {
        setTimeout(function() {
            on("result");
            document.getElementById("total").textContent = `you have a clicks per second rate of ${num}`;
            box.removeEventListener("click", clicker);
        }, 1000);
    }

    num++;
    document.getElementById("num").textContent = num;
}

box.addEventListener("click", clicker);

function on(id) { document.getElementById(id).style.display = "block"; }