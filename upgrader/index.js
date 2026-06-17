document.getElementById("levels").textContent = localStorage.getItem("levels");
document.getElementById("neocoins").textContent = localStorage.getItem("neocoin");

let neocoins = +localStorage.getItem("neocoin");
let levels = +localStorage.getItem("levels");

function upgrade() {
    if(neocoins >= 20) {
        neocoins -= Math.floor(Math.random() * 11) + 10;
        localStorage.setItem("neocoin", neocoins);
        levels++;
        localStorage.setItem("levels", levels);
        document.getElementById("levels").textContent = localStorage.getItem("levels");
        document.getElementById("neocoins").textContent = localStorage.getItem("neocoin");
    } else {
        alert("you dont have enough neocoins to upgrade");
    }
}