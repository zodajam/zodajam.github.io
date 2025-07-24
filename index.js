document.getElementById("changelog").onclick = function() { // open changelog
    on('log');
    on('cover');
    document.getElementById('cover').onclick = function() { // click anywhere to close it
        off('log');
        off('cover');
    }
}

document.getElementById("unlistedProjectsBtn").onclick = function() {
    on('unlistedProjects');
    on('cover');
    document.getElementById('cover').onclick = function() {
        off('unlistedProjects');
        off('cover');
    }
}

function on(id) { document.getElementById(id).style.display = "block"; } // show stuff
function off(id) { document.getElementById(id).style.display = "none"; } // hide stuff

function isMobile() { return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent); } // what do you think this does?

if (isMobile()) { // js mobile optimization :sob:
   document.getElementById("titlePre").innerHTML = `
   <div style="text-align: center;"><h1 style="font-size: 5rem;">NEOCORAL</h1><span>Copyright © 2025 zodajam</span></div>
   `;
   document.getElementById("main").style.width = "fit-content";
   document.getElementById("pre-dude").style.marginTop = "-2%";
   document.getElementById("pre-dude").style.marginLeft = "-6%";
   document.getElementById("pre-dude2").style.marginTop = "-2%";
   document.getElementById("phone1").src = "";
   document.getElementById("phone2").src = "";
   document.getElementById("phone3").src = "";
   document.getElementById("log").style.width = "fit-content";
   document.getElementById("unlistedProjects").style.width = "fit-content";
}
