let m = document.querySelectorAll("path");
let numLetters = m.length;

let timer = setInterval(() => {
  let randomIndex = Math.floor(Math.random() * numLetters);
  let currentLetter = m[randomIndex];
  let opacity = window
    .getComputedStyle(currentLetter)
    .getPropertyValue("opacity");
  if (opacity === "1" && !currentLetter.classList.contains("header__logo")) {
    currentLetter.style.opacity = 0;
  } else {
    currentLetter.style.opacity = 1;
  }
}, 100);
