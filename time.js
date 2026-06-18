let time = Number(localStorage.getItem("time")) || 0;

setInterval(() => {
    time += 1;
    localStorage.setItem("time", String(time));
}, 1000);