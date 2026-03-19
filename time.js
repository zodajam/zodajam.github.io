time = localStorage.getItem("time");

setInterval(function() {
    time++;
    localStorage.setItem("time", time);
}, 1000);