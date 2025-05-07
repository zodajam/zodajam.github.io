const powerBtn = document.getElementById("power");
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const terminalBtn = document.getElementById("terminal-icon");
const terminal = document.getElementById("terminal");

powerBtn.onclick = function() {
    if(menu.style.display === "none") {
        on('menu');
    } else {
        off('menu');
    }
}

terminalBtn.onclick = function() {
    if(terminal.style.display === "none") {
        on('terminal');
    } else {
        off('terminal');
    }
}

$("#terminal").draggable();

function on(id) {document.getElementById(id).style.display = "block";}
function off(id) {document.getElementById(id).style.display = "none";}