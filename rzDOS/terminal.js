const input = document.getElementById("input");
const output = document.getElementById("terminalOutput");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        checkCommand();
        input.value = "";
    }
});

var version = 1.1;

function checkCommand() {
    if(input.value.toLowerCase() === "help") {
        output.innerHTML = "rzDOS help menu:<br><br><b>help</b> - shows the help menu<br><b>clear</b> - clears the screen<br><b>version</b> - shows the current rzDOS version<br><b>doom</b> - plays the only thing they fear is you<br>doom stop - stops the doom song :("
    } else if(input.value.toLowerCase() === "clear") {
        output.innerHTML = "";
    } else if(input.value.toLowerCase() === "version") {
        output.innerHTML = `rzDOS v${version}`;
    } else if(input.value.toLowerCase() === "exit") {
        document.getElementById("terminal").style.display = "none";
    } else if(input.value.toLowerCase() === "doom") {
        output.innerHTML = "now playing: the only thing they fear is you";
        doom.play();
    } else if(input.value.toLowerCase() === "doom stop") {
        output.innerHTML = "stopped playing the only thing they fear is you";
        doom.pause();
        doom.currentTime = 0;
    } else {
        output.innerHTML = `[${input.value}] is not a command`;
    }
}