// Show or hide orientation message
function checkOrientation() {
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const messageBox = document.getElementById("landscape-message");

  const isFullscreen =
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;

  if (!isFullscreen) {
    messageBox.style.display = isPortrait ? "block" : "none";
  }
}

// Auto fullscreen on play
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("mainVideo");

  video.addEventListener("play", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
});

// Trigger orientation checks
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
document.addEventListener("fullscreenchange", checkOrientation);
document.addEventListener("webkitfullscreenchange", checkOrientation);
document.addEventListener("mozfullscreenchange", checkOrientation);
