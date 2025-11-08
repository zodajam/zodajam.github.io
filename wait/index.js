const meter = document.getElementById("meter");

let time = 0;

setInterval(function() {
    time += 0.1;
    meter.value = time;

    if(time == 100) {
        document.getElementById("text").style.display = "block";
    } 

}, 100);