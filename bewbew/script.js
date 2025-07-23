const input = document.getElementById("input");

input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        document.getElementById("searchFrame").src = `https://bing.com/search?q=${input.value}`;
        input.value = "";
    }
});