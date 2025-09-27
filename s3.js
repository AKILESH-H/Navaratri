function checkOrientation() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const messageBox = document.getElementById("landscape-message");

    const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

    if (!isFullscreen) {
        if (isPortrait) {
            messageBox.style.display = "block";
        } else {
            messageBox.style.display = "none";
        }
    }
}

// Handle orientation changes and window resize
window.addEventListener("load", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation);

// === AUTO FULLSCREEN ON PLAY ===
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("mainVideo");

    video.addEventListener("play", function () {
        // Try to enter fullscreen on play (only works if user initiated)
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Safari
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); // IE
        }
    });
});
