const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        search();
        input.value = "";
    }
});

function search() { window.open(`https://duckduckgo.com/?q=${input.value}`); }