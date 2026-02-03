//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
let currentAudio = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");

    // stop current sound if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // stop button
    if (button.classList.contains("stop")) {
      return;
    }

    // play new sound
    currentAudio = new Audio(`./sounds/${sound}.mp3`);
    currentAudio.play();
  });
});
