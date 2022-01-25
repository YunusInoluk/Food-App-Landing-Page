"use strict";
const menu = document.querySelector(".header-menu");
const hamburger = document.querySelector(".header-hamburger");
const closeBtn = document.querySelector(".close");

hamburger.addEventListener("click", (e) => {
  menu.style.display = "flex";
});
closeBtn.addEventListener("click", (e) => {
  menu.style.removeProperty("display");
});
