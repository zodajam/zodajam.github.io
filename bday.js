const text = document.getElementById("bday");

function checkBirthday() {
  const date = new Date();

  if (date.getMonth() === 1 && date.getDate() === 18) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

checkBirthday();
setInterval(checkBirthday, 60000);