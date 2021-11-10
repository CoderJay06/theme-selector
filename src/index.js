const themeLink = document.getElementById("theme");
const themeSelector = document.getElementById("themes");

function setTheme(e) {
  const { value: theme } = e.target;
  themeLink.setAttribute("href", `src/${theme}.css`);
}

themeSelector.addEventListener("change", setTheme);
