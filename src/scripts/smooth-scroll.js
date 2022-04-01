import scrollIntoView from "smooth-scroll-into-view-if-needed";

function scrollTo(id) {
  const elem = document.querySelector("#" + id);

  if (elem) {
    scrollIntoView(elem, {
      behavior: "smooth",
      scrollMode: "if-needed",
    });
  }
}

function detectTagInURL() {
  const current = window.location.pathname;
  const section = window.location.hash.replace("#", "");

  if (current === "/" && section) {
    scrollTo(section);
    console.log(section);
  }
}

document.body.addEventListener("click", (e) => {
  if (e.target.hasAttribute("scroll-to")) {
    scrollTo(e.target.getAttribute("scroll-to"));
  }
});

document.addEventListener("DOMContentLoaded", detectTagInURL);
