var scrollTrigger = 390;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector("header").classList.add("white");
  } else {
    document.querySelector("header").classList.remove("white");
  }
};
