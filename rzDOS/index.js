off("bootOverlay"); // temporary (DELETE)

document.getElementById("nanoText").value = localStorage.text; // immidiatly set nano text to stored text

const cpuTemp = document.getElementById("cpuTemp"); 
setInterval((function() { // change cpu temp every 0.5 seconds
    var max = 65;
    var min = 60;
    cpuTemp.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min + "." + Math.floor(Math.random() * 10)
}), 500);

const ramPercent = document.getElementById("ramPercent");
setInterval((function() {
    var max = 35;
    var min = 30;
    ramPercent.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min + "." + Math.floor(Math.random() * 10);
}), 500);

function on(id) { document.getElementById(id).style.display = "block"; } // show
function off(id) { document.getElementById(id).style.display = "none"; } // hide

function toggle(id) { // toggle visibility
    if(document.getElementById(id).style.display === "block") {
        document.getElementById(id).style.display = "none";
    } else {
        document.getElementById(id).style.display = "block";
    }
}

function saveText() { // save text in nano
    localStorage.text = document.getElementById("nanoText").value;
}

function loadText() { // load text in nano
    document.getElementById("nanoText").value = localStorage.text;
}