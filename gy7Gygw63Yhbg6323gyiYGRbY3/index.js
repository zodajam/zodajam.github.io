let stonks = 0;

let newStonks = parseInt(localStorage.getItem("stonk"));
if(!isNaN(newStonks)) {
  stonks = newStonks;
}

window.onload = function() {
    if(stonks < 10000) {
        alert("access denied");
        location.href = "../";
    }
}