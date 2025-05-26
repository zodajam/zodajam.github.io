const main = document.getElementById("bootOverlay");
main.onclick = function() {
    document.getElementById("input").focus;
}

const bootText = [ // text to loop through and display
    "booting up",
    "25% complete",
    "50% complete",
    "75% complete",
    "100% complete",
    "boot complete"
]

var i = 0; // index counter

const bootProccess = document.getElementById("bootProccess");

document.getElementById("bootOverlay").style.display = "block";

const bootInterval = setInterval((function() {
    var newText = bootText[i];
    i++;
    bootProccess.innerHTML += newText + "<br>";
    if(i >= 6) { // if the boot proccess is done
        clearInterval(bootInterval); // then clear interval to stop it
        const clearBootInterval = setInterval((function() { // and finally wait 1 second to clear the screen
            bootProccess.textContent = ""; // clear the boot text
            clearInterval(clearBootInterval); // clear interval obviously
            off("bootOverlay"); // hide the boot proccess and render home screen
        }), 1000)
    }
}), 1000);