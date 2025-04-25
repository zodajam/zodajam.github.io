document.getElementById("settingsBtn").onclick = function() {
    on('settings');
    on('cover');
    document.getElementById('cover').onclick = function() {
        off('settings');
        off('cover');
    }
}

document.getElementById("changelog").onclick = function() {
    on('log');
    on('cover');
    document.getElementById('cover').onclick = function() {
        off('log');
        off('cover');
    }
}

function on(id) {
    document.getElementById(id).style.display = "block";
}

function off(id) {
    document.getElementById(id).style.display = "none";
}

function play(id) {
    var audio = document.getElementById(id);
    audio.play();
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0;
    }
}

function pause(id) {
    var audio = document.getElementById(id);
    audio.pause();
}

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
   document.getElementById("titlePre").innerHTML = `<h1 style="font-size:3rem;">Neocoral</h1><br><span>Copyright © 2025 zodajam</span>`;
   document.getElementById("main").style.width = "fit-content";
   document.getElementById("pre-dude").style.marginTop = "-2%";
   document.getElementById("pre-dude").style.marginLeft = "-6%";
   document.getElementById("pre-dude2").style.marginTop = "-2%";
   document.getElementById("phone1").src = "";
   document.getElementById("phone2").src = "";
   document.getElementById("phone3").src = "";
   document.getElementById("settings").style.width = "fit-content";
   document.getElementById("background-music").style.paddingLeft = "5rem";
   document.getElementById("background-music").style.paddingRight = "5rem";
   document.getElementById("background-music").style.border = "none";
   document.getElementById("log").style.width = "fit-content";
}
