let time = new Date();
let hour = time.getHours();

const timeText = document.getElementById("time");
const clock = document.getElementById("clock");

if(hour < 12 && hour > 3) {
    timeText.textContent = "morning";
    clock.style.background = "linear-gradient(to bottom right, orangered, orange)";
}

if(hour >= 12 && hour < 19) {
    timeText.textContent = "day";
    clock.style.background = "linear-gradient(to bottom right, blue, lightblue)";
}

if(hour >= 19 && hour < 22) {
    timeText.textContent = "evening";
    clock.style.background = "linear-gradient(to bottom right, orangered, orange)";
}

if(hour >= 22 && hour < 24) {
    timeText.textContent = "night";
    clock.style.background = "linear-gradient(to bottom right, black, midnightblue)";
}

if(hour >= 0 && hour < 3) {
    timeText.textContent = "night";
    clock.style.background = "linear-gradient(to bottom right, black, midnightblue)";
}