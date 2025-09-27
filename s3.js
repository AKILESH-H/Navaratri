// Function to check the orientation and display the message
function checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    const messageBox = document.getElementById("landscape-message");

    if (isPortrait) {
        messageBox.style.display = "block";
    } else {
        messageBox.style.display = "none";
    }
}

// Run on page load
window.addEventListener("load", checkOrientation);

// Listen for changes in orientation or screen size
window.addEventListener("orientationchange", checkOrientation);
window.addEventListener("resize", checkOrientation);
