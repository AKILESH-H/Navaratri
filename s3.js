function checkOrientation() {
    const messageBox = document.getElementById("landscape-message");

    // Check if device is in portrait mode
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isPortrait) {
        messageBox.style.display = "block";
    } else {
        messageBox.style.display = "none";
    }
}

// Run on initial load
window.addEventListener("DOMContentLoaded", checkOrientation);

// Run on orientation change or window resize
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation);
