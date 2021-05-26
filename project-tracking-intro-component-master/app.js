const navCheckbox = document.querySelector(".nav-toggle__checkbox");
const navIcon = document.querySelector(".nav-toggle__img");
const nav = document.querySelector(".page__nav");

const toggleNav = function () {
  nav.classList.add("transition");
  nav.clientWidth;
  nav.classList.toggle("open");
  nav.classList.remove("transition");
  nav.classList.contains("open")
    ? (navIcon.src = "./images/icon-close.svg")
    : (navIcon.src = "./images/icon-hamburger.svg");
};

navCheckbox.addEventListener("input", function (e) {
  toggleNav();
});
