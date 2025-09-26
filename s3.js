// Function to check the orientation and display the message
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById("landscape-message").style.display = "block"; // Show the message in portrait
    } else {
        document.getElementById("landscape-message").style.display = "none"; // Hide the message in landscape
    }
}

// Event listener to detect when orientation changes
window.addEventListener("orientationchange", function() {
    checkOrientation();
});

// Run on initial load to check current orientation
checkOrientation();
