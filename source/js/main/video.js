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
