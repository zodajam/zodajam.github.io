const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        toggle("search");
        document.getElementById("searchFrame").src = `https://bing.com/search?q=${input.value}`;
        input.value = "";
    }
});

function toggle(id) {
    if(document.getElementById(id).style.display === "block") {
        document.getElementById(id).style.display = "none";
    } else {
        document.getElementById(id).style.display = "block";
    }
}