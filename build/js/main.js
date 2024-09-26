"use strict";
(function () {
  let upButton = document.querySelector(".up");

  if (upButton) {
    window.onscroll = function () {
      if (window.pageYOffset > 260) {
        upButton.classList.add("up--shown");
      } else {
        upButton.classList.remove("up--shown");
      }
    };
  }
})();

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

"use strict";
(function () {
  const nav = document.querySelector('.js-nav');
  const toggler = document.querySelector('.js-nav-toggler');
  const closeButtons = document.querySelectorAll('.js-nav-close');
  const links = nav.querySelectorAll('.js-scroll');

  toggler.addEventListener('click', () => {
    nav.classList.toggle('is-active');
  })

  closeButtons.forEach((item)=> {

    item.addEventListener('click', () => {
      console.log('here?');
      closeNav();
    })
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeNav();
    })
  })


  function closeNav() {
    nav.classList.remove('is-active');
  }


})();

"use strict";
(function () {
  new Swiper(".js-slider", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper__next",
      prevEl: ".swiper__prev",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 13,
      },

      738: {
        slidesPerView: "auto",
        loop: true,
        slidesPerView: 3,
        spaceBetween: 13,
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
})();

"use strict";
(function () {
  window.scroll = new SmoothScroll(".js-scroll", {
    speed: 800,
    speedAsDuration: true,
    easing: "easeOutQuad",
  });
})();

"use strict";
(function () {
  function changeTimezone(date, ianatz) {
    var invdate = new Date(
      date.toLocaleString("en-US", {
        timeZone: ianatz,
      })
    );

    var diff = invdate.getTime() - date.getTime();

    return new Date(date.getTime() - diff);
  }

  // конечная дата
  const x = new Date("2024-10-01T17:00:00");
  // часовой пояс
  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  var deadline = changeTimezone(x, "Europe/Moscow");
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    // const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    // $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    $minutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    // $seconds.dataset.title = declensionNum(seconds, [
    //   "секунда",
    //   "секунды",
    //   "секунд",
    // ]);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  // const $seconds = document.querySelector(".timer__seconds");
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
})();

"use strict";
(function () {
  const video = document.querySelector(".js-video");
  const play = document.querySelector(".js-video-play");

  play.addEventListener("click", () => {
    video.play();
    play.classList.add("playing");
  });

  video.addEventListener("click", () => {
    video.pause();
    play.classList.remove("playing");
  });
})();
