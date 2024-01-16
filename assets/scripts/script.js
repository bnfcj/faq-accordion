"use strict";
const details = document.querySelectorAll(".accordion-details");
const accordionContainer = document.querySelector(".accordion-container");
accordionContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("accordion-details-question")) {
    details.forEach((detail) => {
      if (detail !== e.target.closest("details")) {
        detail.removeAttribute("open");
      }
    });
  }
});
