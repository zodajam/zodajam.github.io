const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        if(input.value === "g5RsT75sgU") {
            alert("Congrats!!! You have won the easy level!");
            input.value = "";
        } else {
            alert("Wrong password!");
            input.value = "";
        }
    }
});