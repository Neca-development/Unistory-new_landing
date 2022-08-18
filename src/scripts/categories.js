import scrollIntoView from "smooth-scroll-into-view-if-needed";

const allCases = document.querySelectorAll(".case-card");
const casesContainer = document.querySelector(".cases-section__grid");
const allTags = document.querySelectorAll("[data-tag]");

function hideAllCases() {
  allCases.forEach((el) => {
    el.remove();
  });
}

function showAllCases() {
  allCases.forEach((el) => {
    casesContainer.append(el);
  });
}

function highlightActiveTag(tag) {
  allTags.forEach((el) => {
    if (el.textContent === tag) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function showMatchingCases(tag) {
  allCases.forEach((el) => {
    const tags = el.getAttribute("data-category").split(",");

    if (tags.includes(tag)) {
      casesContainer.append(el);
    }
  });
}

function addTagToUrl(tag) {
  const isPortfolioPage = window.location.href.includes("portfolio");

  const host = window.location.origin;
  const urlPath = host + "/portfolio.html?category=" + tag;
  const pageTitle = "Portfolio | " + tag;
  const html = document.body.innerHTML;

  window.history.pushState({ html, pageTitle }, "", urlPath);
  if (isPortfolioPage === false) {
    window.location.reload();
  }
}

function selectCategory(tag) {
  const firstCase = casesContainer?.querySelector(".case-card");

  addTagToUrl(tag);
  highlightActiveTag(tag);
  hideAllCases();

  if (tag.toLowerCase() === "all projects") {
    showAllCases();
    return;
  }

  showMatchingCases(tag);

  if (!firstCase) {
    return;
  }

  setTimeout(() => {
    scrollIntoView(casesContainer, {
      behavior: "smooth",
      scrollMode: "if-needed",
    });
  }, 350);
}

function detectTagInURL() {
  if (window.location.href.includes("?category=")) {
    const tag = window.location.href.split("?category=")[1];
    selectCategory(tag);
  }
}

document.body.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-tag")) {
    const tag = e.target.textContent;
    selectCategory(tag);
  }
});

document.addEventListener("DOMContentLoaded", detectTagInURL);
