"use strict";
(function () {
  // Modal open/close
  const modal = document.querySelector(".js-modal");
  const modalOpen = document.querySelectorAll(".js-modal-open");
  const modalClose = document.querySelectorAll(".js-modal-close");

  // Event Listeners
  modalOpen.forEach((openButton) => {
    openButton.addEventListener("click", () => {
      openModal();
    });
  });

  modalClose.forEach((button) => {
    button.addEventListener("click", () => {
      closeModal();
    });
  });

  // Functions

  function openModal() {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("is-open");

      // disableBodyScroll(modal, options);
      // document.querySelector('html').classList.add('is-locked');
    }, 0);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    setTimeout(() => {
      modal.style.display = "none";
      // enableBodyScroll(modal);

      // document.querySelector('html').classList.remove('is-locked');
    }, 200);
  }
})();
