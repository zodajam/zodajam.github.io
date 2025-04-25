document.getElementById("terminalBtn").onclick = function() {
    on('terminal');
    on('cover');
    document.getElementById('input').focus()
}

document.getElementById("shrekexe").onclick = function() {
    on('shrekexeOpen');
}

function on(id) {
    document.getElementById(id).style.display = "block";
}

function off(id) {
    document.getElementById(id).style.display = "none";
}

$( function() {
    $( "#shrekexeOpen" ).draggable();
  } );

$( function() {
    $( "#terminal" ).draggable();
  } );
