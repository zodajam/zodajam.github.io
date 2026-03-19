let username = localStorage.getItem("username");

const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key = "Enter") {
        localStorage.setItem("username", input.value);
        document.getElementById("username").textContent = localStorage.getItem("username");
    }
});

document.getElementById("username").textContent = username;
document.getElementById("avatar").textContent = localStorage.getItem("avatar");

function saveAvatar() {
    localStorage.setItem("avatar", document.getElementById("avatar").value);
}