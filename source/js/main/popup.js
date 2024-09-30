"use strict";
(function () {
  // Modal open/close
  const popup = document.querySelector(".js-popup");

  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("js-popup-close")) {
      popup.classList.add("closed");
    }
  });
})();
