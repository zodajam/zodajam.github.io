const main = document.getElementById("main"); // main box to add opened skin
const balText = document.getElementById("balance");

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

const reds = [
    "Large pumpkin",
    "Regular Coconut",
];

const golds = [ // all golds
    "Golden Banana",
    "Holy Blueberry",
    "Humongous Coconut"
];

let balance = 100;

function clear() {
    while(main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

let clicker = document.getElementById("click");

clicker.onclick = function() {
    balance += 0.25;
    balText.textContent = balance;
}

function openCase() {
    let randomNum = Math.floor(Math.random() * 100); 
    let skinType;
    balance -= 5;
    balText.textContent = balance;

    if(balance <= 0) {
        document.getElementById("openCaseBtn").onclick = function() { alert("no money!") }
    }

    if(randomNum <= 70) {
        skinType = "blue";
        balance += 0.25;
        balText.textContent = balance;
        let randomBlue = blues[Math.floor(Math.random() * blues.length)];
        let blue = document.createElement("b");
        blue.style.color = "blue";
        blue.innerHTML = `${randomBlue}<br>`;
        main.appendChild(blue);
    }
    
    if(randomNum > 70) {
        skinType = "purple";
        balance += 1;
        balText.textContent = balance;
        let randomPurple = purples[Math.floor(Math.random() * purples.length)];
        let purple = document.createElement("b");
        purple.style.color = "#5600c4";
        purple.innerHTML = `${randomPurple}<br>`;
        main.appendChild(purple);
    }
    
    if(randomNum < 10 && randomNum > 5) {
        skinType = "pink";
        balance += 25;
        balText.textContent = balance;
        let randomPink = pinks[Math.floor(Math.random() * pinks.length)];
        let pink = document.createElement("b");
        pink.style.color = "#ff00fb";
        pink.innerHTML = `${randomPink}<br>`;
        main.appendChild(pink);
    }
    
    if(randomNum < 5 && randomNum > 3) {
        skinType = "red";
        balance += 50;
        balText.textContent = balance;
        let randomRed = reds[Math.floor(Math.random() * reds.length)];
        let red = document.createElement("b");
        red.style.color = "red";
        red.innerHTML = `${randomRed}<br>`;
        main.appendChild(red);
    }
    
    if(randomNum == 1) {
        skinType = "gold";
        balance += 250;
        balText.textContent = balance;
        let randomGold = golds[Math.floor(Math.random() * golds.length)];
        let gold = document.createElement("b");
        gold.style.color = "gold";
        gold.innerHTML = `${randomGold}<br>`;
        main.appendChild(gold);
    }
}