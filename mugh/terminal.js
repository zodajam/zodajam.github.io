const input = document.getElementById("input");
const output = document.getElementById("output");
var user = document.getElementById("user");
input.focus();

document.getElementById("terminal").onclick = function() {
    input.focus();
}

function on(id) {document.getElementById(id).style.display = "block";}
function off(id) {document.getElementById(id).style.display = "none";}

input.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    run();
  }
});

function run() {
    if(input.value === "help") {
        input.value = "";
        output.innerHTML = `!- MUGH HELP -!<br><br><b>clear</b> - clears the terminal<br><b>ls</b> - lists files in current directory<br><b>exit</b> - exits terminal<br><b>neofetch</b> - cool thing<br>`;
        input.focus();
    } else if(input.value === "clear") {
        input.value = "";
        output.innerHTML = "";
        input.focus();
    } else if(input.value === "ls") {
        input.value = "";
        output.innerHTML = "oobga-booga.txt";
        input.focus();
    } else if(input.value === "neofetch") {
        input.value = "";
        output.innerHTML = `<pre>
##       ##  root@mugh
####   ####  OS: MUGH-1.0
## ## ## ##  made by zodajam
##  ###  ##  ( ͡ᵔ ͜ʖ ͡ᵔ )
        </pre>`;
        input.focus();
    } else if(input.value === "exit") {
        input.value = "";
        output.innerHTML = "";
        off("terminal");
    } 
    
    else {
        input.value = "";
        output.innerHTML = "That is not a command";
        input.focus();
    }
}