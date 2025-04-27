const phone = document.getElementById("phone");
const head = document.getElementById("head");
const torso = document.getElementById("torso");
const legs = document.getElementById("legs");
const welcome = document.getElementById("welcome");
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

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
    phone.style.backgroundColor = "silver";
    head.style.color = "cyan";
    torso.style.color = "dodgerblue";
    legs.style.color = "blue";
    welcome.style.color = "blue";
    time.style.color = "magenta";
}

darkMode.onclick = function() {
    phone.style.backgroundColor = "gray";
    head.style.color = "red";
    torso.style.color = "firebrick";
    legs.style.color = "maroon";
    welcome.style.color = "maroon";
    time.style.color = "darkmagenta";
}

function on(id) {
    document.getElementById(id).style.display = "block";
}

function off(id) {
    document.getElementById(id).style.display = "none";
}
