function check() {
    if(localStorage.admin === "true") {
        
    } else {
        alert("admin = false");
        location.href = "../../";
    }
}
