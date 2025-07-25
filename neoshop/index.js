const neocoinsText = document.getElementById("neocoins");

neocoinsText.textContent = localStorage.getItem("neocoin");

let neocoin = localStorage.getItem("neocoin");

let newNeocoin = parseInt(localStorage.getItem("neocoin"));
if (!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}

const howToInstallArchTxt = document.getElementById("how-to-install-arch.txt");

howToInstallArchTxt.onclick = function() {
    if(neocoin < 75) {
        alert("not enough money");
        return;
    } else {
        neocoin -= 75;
        localStorage.setItem("neocoin", neocoin);
        neocoinsText.textContent = localStorage.getItem("neocoin");

        download("tech/how-to-install-arch.txt", "how-to-install-arch.txt");
    }
}

const templeosiso = document.getElementById("templeos.iso");

templeosiso.onclick = function() {
    if(neocoin < 6500) {
        alert("not enough money");
        return;
    } else {
        neocoin -= 6500;
        localStorage.setItem("neocoin", neocoin);
        neocoinsText.textContent = localStorage.getItem("neocoin");

        download("https://raw.githubusercontent.com/zodajam/neocoral-downloads/main/tech/templeos.iso", "templeos.iso");
    }
}

const song1 = document.getElementById("song1");

song1.onclick = function() {
    if(neocoin < 500) {
        alert("not enough money");
        return;
    } else {
        neocoin -= 500;
        localStorage.setItem("neocoin", neocoin);
        neocoinsText.textContent = localStorage.getItem("neocoin");

        download("https://raw.githubusercontent.com/zodajam/neocoral-downloads/main/music/song1.wav", "song1.wav");
    }
}

const song2 = document.getElementById("song2");

song2.onclick = function() {
    if(neocoin < 500) {
        alert("not enough money");
        return;
    } else {
        neocoin -= 500;
        localStorage.setItem("neocoin", neocoin);
        neocoinsText.textContent = localStorage.getItem("neocoin");

        download("https://raw.githubusercontent.com/zodajam/neocoral-downloads/main/music/song2.wav", "song2.wav");
    }
}

const bgjpg = document.getElementById("bg.jpg");

bgjpg.onclick = function() {
    if(neocoin < 100) {
        alert("not enough money");
        return;
    } else {
        neocoin -= 100;
        localStorage.setItem("neocoin", neocoin);
        neocoinsText.textContent = localStorage.getItem("neocoin");

        download("art/bg.jpg", "bg.jpg");
    }
}

function download(url, name) {
    const link = document.createElement("a");
    link.download = name;
    link.href = url;
    link.click();
}