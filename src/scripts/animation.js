// Can also be included with a regular script tag
import Typed from "typed.js";

var options = {
  strings: ["<span>development</span>"],
  typeSpeed: 60
};

new Typed(".typed", options);

function numberIncreamenter(selector, increment, decimals, suffix = null) {
  const el = document.querySelector(selector)

  if (!el) {
    return
  }

  const val = parseFloat(el.textContent, 10);
  const speed = 1500 / (val / increment);
  let currVal = 0;

  const interval = setInterval(() => {
    if (val === currVal) {
      clearInterval(interval)

      if (suffix !== null) {
        el.innerHTML = currVal + suffix
      }

      return
    }
    currVal = Number(Number(currVal + increment).toFixed(decimals))
    el.innerHTML = currVal
  }, speed);
}

numberIncreamenter("#upworkRating", 0.1, 1)
numberIncreamenter("#developedProjects", 1, 1, "+")
numberIncreamenter("#repeatCustomers", 1, 1, "%")