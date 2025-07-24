let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

// Hämta score från localStorage, eller sätt till 0 om det inte finns
let score = localStorage.score ? parseInt(localStorage.score) : 0;

scoreElement.textContent = score;

circle.addEventListener("click", function() {
    score++;
    localStorage.score = score;
    scoreElement.textContent = score;

    let audio = new Audio(`Pop${Math.floor(Math.random() * 3) + 1}.wav`);
    audio.play();
});


/*let scoreElement = document.getElementById("score");
let circle = document.getElementById("circle");

let score = 0;

var audio = new Audio(`Pop${Math.floor(Math.random() * 3)+ 1}.wav`);

circle.addEventListener("click", function() {
    score++;
    audio = new Audio(`Pop${Math.floor(Math.random() * 3)+ 1}.wav`);
    audio.play();
    localStorage.score = score;
    scoreElement.textContent = localStorage.score;
});

scoreElement.textContent = localStorage.score;
score = localStorage.score;*/