function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const nummer = ["1", "2", "3", "4", "5", "6"];
const resultat = getRandomItem(nummer);

document.getElementById("valdaNummer").innerHTML = resultat;