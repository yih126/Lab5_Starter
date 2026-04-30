// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.querySelector("#horn-select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.querySelector("#volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const button = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  // 🔊 dropdown change
  hornSelect.addEventListener("change", function() {
    const value = hornSelect.value;

    image.src = `assets/images/${value}.svg`;
    audio.src = `assets/audio/${value}.mp3`;
  });

  // 🔊 volume slider
  volumeSlider.addEventListener("input", function() {
    const volume = volumeSlider.value;

    // set audio volume (0-1)
    audio.volume = volume / 100;

    // change icon
    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // 🔊 play button
  button.addEventListener("click", function() {
    audio.play();

    // 🎉 confetti for party horn
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}