const allCases = document.querySelectorAll(".case-card");
const casesContainer = document.querySelector(".cases-section__grid")
const allTags = document.querySelectorAll("[data-tag]")

function hideAllCases() {
    allCases.forEach(el => {
        el.remove()
    })
}

function showAllCases() {
    allCases.forEach(el => {
        casesContainer.append(el)

    })
}

function highlightActiveTag(tag) {
    allTags.forEach(el => {
        if (el.textContent === tag) {

            el.classList.add("active")
        } else {
            el.classList.remove("active")
        }
    })
}

function showMatchingCases(tag) {
    allCases.forEach(el => {
        const tags = el.getAttribute("data-category").split(",")

        if (tags.includes(tag)) {
            casesContainer.append(el)
        }
    })
}

document.body.addEventListener("click", e => {
    if (e.target.hasAttribute("data-tag")) {
        const tag = e.target.textContent;
        hideAllCases()
        highlightActiveTag(tag)

        if (tag.toLowerCase() === 'all projects') {
            showAllCases();
            return
        }

        showMatchingCases(tag)
    }
})