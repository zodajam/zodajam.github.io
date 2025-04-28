const phone = document.getElementById("phone");
const head = document.getElementById("head");
const torso = document.getElementById("torso");
const legs = document.getElementById("legs");
const settings = document.getElementById("settings");
const welcome = document.getElementById("welcome");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const english = document.getElementById("english");
const svenska = document.getElementById("svenska");
const settingsCyanU = document.getElementById("settingsCyanU");
const settingsMagentaU = document.getElementById("settingsMagentaU");
const settingsCyanSpan = document.getElementById("settingsCyanSpan");
const settingsMagentaSpan = document.getElementById("settingsMagentaSpan");

const time = document.getElementById("time");
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    time.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);

lightMode.onclick = function() {
    settings.style.backgroundColor = "slategray";
    phone.style.backgroundColor = "silver";
    head.style.color = "cyan";
    torso.style.color = "dodgerblue";
    legs.style.color = "blue";
    welcome.style.color = "blue";
    time.style.color = "magenta";
    settingsCyanU.style.color = "cyan";
    settingsMagentaU.style.color = "magenta";
    settingsCyanSpan.style.color = "cyan";
    settingsMagentaSpan.style.color = "magenta";
}

darkMode.onclick = function() {
    settings.style.backgroundColor = "#17202a";
    phone.style.backgroundColor = "gray";
    head.style.color = "red";
    torso.style.color = "firebrick";
    legs.style.color = "maroon";
    welcome.style.color = "maroon";
    time.style.color = "darkmagenta";
    settingsCyanU.style.color = "teal";
    settingsMagentaU.style.color = "darkmagenta";
    settingsCyanSpan.style.color = "teal";
    settingsMagentaSpan.style.color = "darkmagenta";
}

var isEnglish; // boolean values for checking language
var isSwedish; 

english.onclick = function() {
    welcome.innerText = "WELCOME TO MUGH";
    settingsCyanSpan.innerText = "settings";
    isEnglish = true;
    isSwedish = false;
}

svenska.onclick = function() {
    welcome.innerText = "VÄLKOMMEN TILL MUGH";
    settingsCyanSpan.innerText = "inställningar";
    isEnglish = false;
    isSwedish = true;
}

function on(id) {
    document.getElementById(id).style.display = "block";
}

function off(id) {
    document.getElementById(id).style.display = "none";
}


//
//
// TERMINAL
//
//

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
        if(isEnglish) {
            output.innerHTML = `!- MUGH HELP -!<br><br><b>clear</b> - clears the terminal<br><b>ls</b> - lists files in current directory<br><b>exit</b> - exits terminal<br><b>neofetch</b> - cool thing<br>`;
        } else if(isSwedish) {
            output.innerHTML = `!- MUGH HJÄLP -!<br><br><b>clear</b> - rensar terminalen<br><b>ls</b> - listar alla filer i aktiv katalog<br><b>exit</b> - lämnar terminalen<br><b>neofetch</b> - cool sak<br>`;
        }
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
        if(isEnglish) {
        output.innerHTML = `<pre>
##       ##  root@mugh
####   ####  OS: MUGH-1.0
## ## ## ##  made by zodajam
##  ###  ##  ( ͡ᵔ ͜ʖ ͡ᵔ )
        </pre>`; } else if(isSwedish) {
            output.innerHTML = `<pre>
##       ##  root@mugh
####   ####  OS: MUGH-1.0
## ## ## ##  skapat av zodajam
##  ###  ##  ( ͡ᵔ ͜ʖ ͡ᵔ )
            </pre>`;
        }
        input.focus();
    } else if(input.value === "exit") {
        input.value = "";
        output.innerHTML = "";
        off("terminal");
    } 
    
    else {
        input.value = "";
        if(isEnglish){output.innerHTML = "That is not a command";}
        else if(isSwedish){output.innerHTML = "Det där är inte ett kommando";}
        input.focus();
    }
}
