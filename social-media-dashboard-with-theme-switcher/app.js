// Theme switcher
const themeSwitcher = document.querySelector(
  ".theme-switcher .toggle__checkbox"
);

const switchTheme = () => {
  if (themeSwitcher.checked) {
    document.body.classList.add("light-mode");
    window.localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    window.localStorage.setItem("theme", "dark");
  }
};

themeSwitcher.addEventListener("input", switchTheme);

// localStorage
const theme = window.localStorage.getItem("theme");
if (theme === "light") {
  document.body.classList.add("light-mode");
  themeSwitcher.checked = true;
} else if (theme === "dark") {
  document.body.classList.remove("light-mode");
  themeSwitcher.checked = false;
}

// Sortable
const options = {
  animation: 300,
  easing: "ease",

  delay: 200,
  delayOnTouchOnly: true,
};

const summaryCards = document.querySelector(".summary");
const sortableSummary = Sortable.create(summaryCards, options);

const overviewCards = document.querySelector(".overview__grid");
const sortableOverview = Sortable.create(overviewCards, options);
