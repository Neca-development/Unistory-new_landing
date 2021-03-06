import WOW from "wow.js";

window.wow = new WOW({
  live: false,
});
window.wow.init();

const scrollableBlock = document.querySelector(
  ".projectHow__scrollableContainer"
);

const itemFirst = document.getElementById("howStageItem1");
const itemSecond = document.getElementById("howStageItem2");
const itemThird = document.getElementById("howStageItem3");

const firstDot = document.getElementById("howStageFirstDot");
const secondDot = document.getElementById("howStageSecondDot");
const thirdDot = document.getElementById("howStageThirdDot");

const imageEl = document.getElementById("step-logo-1");
const imageEl2 = document.getElementById("step-logo-2");
const imageEl3 = document.getElementById("step-logo-3");

window.addEventListener("scroll", () => {
  const scrollableHeight = scrollableBlock.getBoundingClientRect().height;
  const oneRem = parseInt(getComputedStyle(document.documentElement).fontSize);
  const startPosition = oneRem * 50;
  const endPosition = startPosition + scrollableHeight;
  const spaceBetweenPositions = (endPosition - startPosition) / 4;
  const firstStageStart = startPosition + spaceBetweenPositions;
  const secondStageStart = startPosition + spaceBetweenPositions * 2;
  const thirdStageStart = startPosition + spaceBetweenPositions * 3;

  let currentScroll = document.documentElement.scrollTop;

  // Reveal stages on scroll
  if (currentScroll > firstStageStart) {
    itemFirst.classList.add("projectHow__item_active");
  }

  if (currentScroll > secondStageStart) {
    itemSecond.classList.add("projectHow__item_active");
  }

  if (currentScroll > thirdStageStart) {
    itemThird.classList.add("projectHow__item_active");
  }

  // Style management for the current stage
  if (currentScroll > firstStageStart && currentScroll < secondStageStart) {
    firstDot.classList.add("projectHow__itemDot_active");
    imageEl.style.opacity = 1;
    imageEl2.style.opacity = 0;
    imageEl3.style.opacity = 0;
  } else {
    firstDot.classList.remove("projectHow__itemDot_active");
  }

  if (currentScroll > secondStageStart && currentScroll < thirdStageStart) {
    secondDot.classList.add("projectHow__itemDot_active");
    imageEl.style.opacity = 0;
    imageEl2.style.opacity = 1;
    imageEl3.style.opacity = 0;
  } else {
    secondDot.classList.remove("projectHow__itemDot_active");
  }

  if (currentScroll > thirdStageStart && currentScroll < endPosition) {
    thirdDot.classList.add("projectHow__itemDot_active");
    imageEl.style.opacity = 0;
    imageEl2.style.opacity = 0;
    imageEl3.style.opacity = 1;
  } else {
    thirdDot.classList.remove("projectHow__itemDot_active");
  }
});
