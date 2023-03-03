var scrollTrigger = 390;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector("header").classList.add("white");
    document.querySelector(".header__nav-item--button").classList.add("green");
  } else {
    document.querySelector("header").classList.remove("white");
    document
      .querySelector(".header__nav-item--button")
      .classList.remove("green");
  }
};
