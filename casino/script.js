yenom = 100;
const btn = document.getElementById("btn"); // play button
const money = document.getElementById("money"); // money display

money.innerText = yenom;
console.log("Hello, you will see all the money being console.logged (it's just for debugging) so dont worry");

btn.onclick = function() {
    yenom -= 10;
    let result = Math.floor(Math.random() * 100) + 1; // random number
    if(result >= 66) { // 33% chance to win
        yenom += 20;
    }

    if(yenom <= 0) { // if you lose all your money 
        btn.style.pointerEvents = "none";
        document.getElementById("freeMoneyBtn").style.display = "block"; // free money button displaying
        alert(`You are too poor to play`);
    }
    money.innerText = yenom; // displaying money
    console.log(yenom);
    
}

function claimFreeMoney() { // function for claiming free money if you have $0
    btn.style.pointerEvents = "all";
    yenom = 100;
    money.innerText = yenom;
    document.getElementById("freeMoneyBtn").style.display = "none";
}

