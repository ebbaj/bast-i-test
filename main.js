const popup = document.getElementById("popup");

function openLetter() {
  popup.classList.remove("hide");
  popup.classList.add("open");
  console.log(popup.classList);
}

function closeLetter() {
  if (popup.classList.contains("open")) {
    popup.classList.add("hide");
    popup.classList.remove("open");
    console.log(popup.classList);
  }
}
