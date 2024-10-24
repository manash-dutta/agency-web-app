// Navbar
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const navItem = document.querySelector(".nav-link");
import Swiper from "swiper";
import "swiper/css";

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

document.addEventListener("pointerdown", (e) => {
  // Check if the clicked element is not the menu or nav-link
  // !navItem.contains(e.target) &&
  if (!menu.contains(e.target)) {
    navbar.classList.remove("change");
    menu.classList.remove("change");
  }
});

// About Us Section
const video = document.querySelector(".video");
const playPauseBtn = document.querySelector(".buttons i");
const videoBar = document.querySelector(".video-bar");

const playPause = () => {
  if (video.paused) {
    video.play();
    playPauseBtn.className = "far fa-pause-circle";
    video.style.opacity = 0.7;
  } else {
    video.pause();
    playPauseBtn.className = "far fa-play-circle";
    video.style.opacity = 0.3;
  }
};

playPauseBtn.addEventListener("pointerdown", () => {
  playPause();
});

video.addEventListener("timeupdate", () => {
  const barWidth = video.currentTime / video.duration;
  videoBar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    playPauseBtn.className = "far fa-play-circle";
    video.style.opacity = 0.3;
  }
});

// Pricing Section
// Swiper.js
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
