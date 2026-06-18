const priceText = document.getElementById("price");
const amountStocks = document.getElementById("stocks");
const amountNeocoins = document.getElementById("neocoins");
const updatedPriceText = document.getElementById("updatedPrice");
const countdownText = document.getElementById("countdown");

let price = 1;
if(+localStorage.getItem("stockPrice") > 1) {  // kom på att man kan göra sådär så den kollar om du har en stockPrice som localStorage. kopiera ba den här nästa gång.
    price = +localStorage.getItem("stockPrice");
}
let stocks = +localStorage.getItem("stocks");
let neocoins = +localStorage.getItem("neocoin");

priceText.innerText = price;
amountStocks.innerText = stocks;
amountNeocoins.innerText = neocoins;

function buy() {
    if(!enter) {
        localStorage.setItem("stocks", stocks);
        if(price <= 0) {

        } else {
            stocks++;
            neocoins -= price;
            localStorage.setItem("neocoin", neocoins);
            amountNeocoins.innerText = neocoins;
            amountStocks.innerText = stocks;
        }
    }
}

function sell() {
    if(!enter) {
        localStorage.setItem("stocks", stocks);
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
}

let enter;

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.repeat) {
        event.preventDefault();
        enter = true;
    }
});

let plus;
let minus;

setInterval(function() {
    let plusOrMinus = Math.floor(Math.random() * 2);
    let oldPrice = price;
    if(plusOrMinus == 0) { price += Math.floor(Math.random() * 5); }
    if(plusOrMinus == 1) {
        if(price <= 1) {
            price = 1;
            localStorage.setItem("stockPrice", price);
        } else {
            price -= Math.floor(Math.random() * 5);
        }
    } 
    localStorage.setItem("stockPrice", price);
    if(+localStorage.getItem("stockPrice") > oldPrice) { updatedPriceText.textContent = "↑"; updatedPriceText.style.color = "lime"};
    if(+localStorage.getItem("stockPrice") == oldPrice) { updatedPriceText.textContent = "-"; updatedPriceText.style.color = "orange" };
    if(+localStorage.getItem("stockPrice") < oldPrice)  { updatedPriceText.textContent = "↓"; updatedPriceText.style.color = "red" };
    priceText.innerText = price;
    document.getElementById("tick").style.display = "block";
    setTimeout(function() {
        document.getElementById("tick").style.display = "none";
    }, 250);
}, 10000);