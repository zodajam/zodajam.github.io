const input = document.getElementById("input"); // input box

input.addEventListener("keydown", (event) => { // check if user press enter button
    if(event.key === "Enter") {
        main(); // then call main function
        input.value = "";
    }
});

document.getElementById("main").onclick = function() { input.focus(); } // focus on the input box if you press on the screen

window.onload = function() { input.value = ""; } // focus on the input box onload

// ↓↓↓ IMPORTANT ↓↓↓
const version = 1.3;
// ↑↑↑ IMPORTANT ↑↑↑

function main() { // main function
    const text = document.getElementById("text"); // text element that changes based on input

    // C 
    //   O
    //     M 
    //       M
    //         A 
    //           N
    //             D 
    //               S
    if(input.value === "help") { // shows help menu
        input.value = "";
        text.innerHTML = `
        uBash v1.3 - help menu<br><br>
        help - shows the help menu<br>
        clear - clears the terminal window<br>
        exit - exits the terminal, duh<br>
        neofetch - shows information about some stuff<br>
        date - shows the date and time<br>
        about - shows info about the terminal<br>
        version - shows the current uBash version<br>
        print - prints the page<br>
        fullscreen - puts you into fullscreen (recommended)`;
    } else if(input.value === "clear") { // clears the terminal window
        input.value = "";
        text.textContent = "";
    } else if(input.value === "exit") {
        location.href = "../";
        input.value = "";
        text.innerHTML = "";
    } else if(input.value === "neofetch") { // shows neofetch screen, which shows info about the user (not real tho)
        input.value = "";
        text.innerHTML = `<pre>
  _     OS: archlinux       
_|_|_   CPU: 12 × AMD Ryzen 5 5500
(o o)   GPU: NVIDIA GeForce GTX 1650
 (_)    RAM: 16GBB DDR4<br></pre>
        `;
    } else if(input.value === "date") {
        input.value = "";
        text.innerHTML = window.Date();
    } else if(input.value === "about") {
        input.value = "";
        text.innerHTML = "uBash is a terminal by me - zodajam.<br>I have made this terminal like 3 times in JavaScript and like 2 times in C++. It's a classic project for me and it's not that difficult.<br>The uBash version before this, now deleted, was a LOT worse since I wasn't a Linux user, so the file system was just really messed up."
    } else if(input.value === "version") {
        input.value = "";
        text.innerHTML = `uBash v${version}`;
    } else if(input.value === "print") {
        input.value = "";
        window.print();
    } else if(input.value === "fullscreen") {
        var el = document.documentElement,
        rfs = el.requestFullscreen;
        if(typeof rfs!="undefined" && rfs){
            rfs.call(el);
        }
    } else if(input.value === "admin ketchup99") {
        location.href = "../gy7Gygw63Yhbg6323gyiYGRbY3/";
        input.value = "";
        text.innerHTML = "";
    }
}