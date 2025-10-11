let stonks = 0;

let newStonks = parseInt(localStorage.getItem("stonk"));
if(!isNaN(newStonks)) {
  stonks = newStonks;
}

localStorage.setItem("stonk", stonks);

document.getElementById("stonk-count").textContent = localStorage.getItem("stonk");
document.getElementById("stonks").textContent = localStorage.getItem("stonk");
document.getElementById("neocoins").textContent = localStorage.getItem("neocoin");

let neocoin = localStorage.getItem("neocoin");

let newNeocoin = parseInt(localStorage.getItem("neocoin"));
if(!isNaN(newNeocoin)) {
  neocoin = newNeocoin;
}

function buy() {
    neocoin--;
    stonks++;

    if(neocoin < 0) {
        neocoin++;
        stonks--;
    }

    localStorage.setItem("neocoin", neocoin);
    localStorage.setItem("stonk", stonks);

    document.getElementById("stonk-count").textContent = localStorage.getItem("stonk");
    document.getElementById("stonks").textContent = localStorage.getItem("stonk");
    document.getElementById("neocoins").textContent = localStorage.getItem("neocoin");

    if(stonks >= 10000) { document.getElementById("a").style.display = "block"; }
}

function sell() {
    neocoin++;
    stonks--;

    if(stonks < 0) {
        neocoin--;
        stonks++;
    }

    localStorage.setItem("neocoin", neocoin);
    localStorage.setItem("stonk", stonks);

    document.getElementById("stonk-count").textContent = localStorage.getItem("stonk");
    document.getElementById("stonks").textContent = localStorage.getItem("stonk");
    document.getElementById("neocoins").textContent = localStorage.getItem("neocoin");

    if(stonks >= 10000) {
        document.getElementById("a").style.display = "block";
    } else {
        document.getElementById("a").style.display = "none";
    }
}

if(stonks >= 10000) { document.getElementById("a").style.display = "block"; }