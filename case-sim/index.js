const main = document.getElementById("main"); // main box to add opened skin
const balText = document.getElementById("balance");
const dropText = document.getElementById("drop");
const openCaseBtn = document.getElementById("openCaseBtn");

const blues = [ // all blue skins
    "Rotten Carrot",
    "Soggy Banana",
    "Smashed Watermelon"
];

const purples = [ // all purple skins
    "Small Pumpkin",
    "Regular Banana",
    "Smashed Blueberry"
];

const pinks = [ // all pink skins
    "Banana Gun",
    "Regular Blueberry",
    "Small Coconut"
];

const reds = [ // all red skins
    "Large pumpkin",
    "Regular Coconut",
];

const golds = [ // all golds
    "Golden Banana",
    "Holy Blueberry",
    "Humongous Coconut"
];

let balance = 100;

function openCase() {
    let randomNum = Math.floor(Math.random() * 100); 
    let skinType;
    const plusMoneyText = document.getElementById("plusMoney");
    balance = balText.textContent;

    if(balance <= 0) {
        openCaseBtn.onclick = function() { alert("no money!") }
    }
    
    balance -= 5;
    balText.textContent = balance;

    if(randomNum <= 70) {
        plusMoneyText.style.color = "blue";
        plusMoneyText.textContent = "+$0.25";
        skinType = "blue";
        balance += 0.25;        
        balText.textContent = balance;
        let randomBlue = blues[Math.floor(Math.random() * blues.length)];
        dropText.style.color = "blue";
        dropText.innerHTML = randomBlue;
    }
        
    if(randomNum > 70) {
        plusMoneyText.style.color = "#5600c4";
        plusMoneyText.textContent = "+$1";
        skinType = "purple";
        balance += 1;
        balText.textContent = balance;
        let randomPurple = purples[Math.floor(Math.random() * purples.length)];
        dropText.style.color = "#5600c4";
        dropText.innerHTML = randomPurple;
    }
        
    if(randomNum < 10 && randomNum > 5) {
        plusMoneyText.style.color = "#ff00fb";
        plusMoneyText.textContent = "+$25";
        skinType = "pink";
        balance += 25;
        balText.textContent = balance;
        let randomPink = pinks[Math.floor(Math.random() * pinks.length)];
        dropText.style.color = "#ff00fb";
        dropText.innerHTML = randomPink;
    }            
        
    if(randomNum < 5 && randomNum > 3) {
        plusMoneyText.style.color = "red";
        plusMoneyText.textContent = "+$50";
        skinType = "red";
        balance += 50;
        balText.textContent = balance;
        let randomRed = reds[Math.floor(Math.random() * reds.length)];
        dropText.style.color = "red";
        dropText.innerHTML = randomRed;
    }
        
    if(randomNum == 1) {
        plusMoneyText.style.color = "gold";
        plusMoneyText.textContent = "+$250";
        skinType = "gold";
        balance += 250;
        balText.textContent = balance;
        let randomGold = golds[Math.floor(Math.random() * golds.length)];
        dropText.style.color = "gold";
        dropText.innerHTML = randomGold;
    }
}

let clicker = document.getElementById("click");

clicker.onclick = function() {
    balance += 0.25;
    balText.textContent = balance;
}