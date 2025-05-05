document.getElementById("terminalBtn").onclick = function() {
    on('terminal');
    on('cover');
    document.getElementById('input').focus()
}

function on(id) {
    document.getElementById(id).style.display = "block";
}

function off(id) {
    document.getElementById(id).style.display = "none";
}

$( function() {
    $( "#terminal" ).draggable();
  } );
