const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const navItem = document.querySelector(".nav-link");

menu.addEventListener("pointerdown", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navbar.classList.remove("change");
    menu.classList.remove("change");
  }
});

document.addEventListener("pointerdown", (event) => {
  // Check if the clicked element is not the menu or nav-link
  if (!navItem.contains(event.target) && !menu.contains(event.target)) {
    navbar.classList.remove("change");
    menu.classList.remove("change");
  }
});
