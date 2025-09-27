// Function to check the orientation and display the message
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // Show the message in portrait mode
        document.getElementById("landscape-message").style.display = "block";
    } else {
        // Hide the message in landscape mode
        document.getElementById("landscape-message").style.display = "none";
    }
}

// Event listener to detect when orientation changes
window.addEventListener("orientationchange", checkOrientation);

// Run on initial load to check current orientation
window.addEventListener("load", checkOrientation);
