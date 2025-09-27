// === Orientation Message Logic ===
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

// === Setup on DOM Ready ===
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("mainVideo");

  // Go fullscreen on play (user must click the play button)
  video.addEventListener("play", () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // iOS Safari
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
});

// === Listen for orientation and fullscreen changes ===
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
document.addEventListener("fullscreenchange", checkOrientation);
document.addEventListener("webkitfullscreenchange", checkOrientation);
document.addEventListener("mozfullscreenchange", checkOrientation);
document.addEventListener("msfullscreenchange", checkOrientation);
