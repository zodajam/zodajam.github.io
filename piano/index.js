const keys = document.getElementsByClassName("key");

for(let i = 1; i < 10; i++) {
    keys[i].onclick = function() {
        let audio = new Audio(`notes/note${i}.wav`);
        audio.play();
    }
}

function randomKey() {
    let audio = new Audio(`notes/note${Math.floor(Math.random() * 10)}.wav`);
    audio.play();
}