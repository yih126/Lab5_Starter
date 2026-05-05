// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const face = document.querySelector("#explore img");
  const textBox = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("#voice-select");
  const button = document.querySelector("button");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(function(voice, index) {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;

  button.addEventListener("click", function() {
    const utterance = new SpeechSynthesisUtterance(textBox.value);

    const selectedVoice = voices[voiceSelect.value];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = function() {
      face.src = "assets/images/smiling-open.png";
      face.alt = "Open mouth face";
    };

    utterance.onend = function() {
      face.src = "assets/images/smiling.png";
      face.alt = "Smiling face";
    };

    speechSynthesis.speak(utterance);
  });
}