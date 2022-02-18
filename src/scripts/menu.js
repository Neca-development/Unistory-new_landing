import "vanilla-hamburger/twirl-burger.js";

const burger = document.querySelector("twirl-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const allMobileLinks = document.querySelectorAll(".mobile-menu__item");

burger.addEventListener("pressed-changed", (event) => {
  const pressed = event.detail.value;

  if (pressed) {
    mobileMenu.classList.toggle("mobile-menu_hidden");
    document.body.style.overflow = "hidden";
  } else {
    mobileMenu.classList.toggle("mobile-menu_hidden");
    document.body.style.overflow = "auto";
  }
});

allMobileLinks.forEach((item) => {
  item.addEventListener("click", () => {
    burger.click();
  });
});
