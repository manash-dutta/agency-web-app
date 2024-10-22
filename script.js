const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

menu.addEventListener("pointerdown", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle("change");
});
 