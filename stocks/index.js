const priceText = document.getElementById("price");
const amountStocks = document.getElementById("stocks");
const amountNeocoins = document.getElementById("neocoins");

let price = 1;
let stocks = 0;
let neocoins = +localStorage.getItem("neocoin");

priceText.innerText = price;
amountStocks.innerText = stocks;
amountNeocoins.innerText = neocoins;

function buy() {
    if(price <= 0) {

    } else {
        stocks++;
        neocoins -= price;
        localStorage.setItem("neocoin", neocoins);
        amountNeocoins.innerText = neocoins;
        amountStocks.innerText = stocks;
    }
}

function sell() {
    if(stocks <= 0) {
        alert("you dont have any stocks dumbass");
    } else {
        stocks--;
        neocoins += price;
        localStorage.setItem("neocoin", neocoins);
        amountNeocoins.innerText = neocoins;
        amountStocks.innerText = stocks;
    }
}

let plus;
let minus;

setInterval(function() {
    let plusOrMinus = Math.floor(Math.random() * 2);
    if(plusOrMinus == 0) { price += Math.floor(Math.random() * 5); }
    if(plusOrMinus == 1) {
        if(price <= 1) {
            price = 1;
        } else {
            price -= Math.floor(Math.random() * 5);
        }
    } 
    priceText.innerText = price;
}, 10000);