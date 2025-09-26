// Detect device orientation
function checkOrientation() {
    const landscapePrompt = document.getElementById('landscape-prompt');

    // If the window is in portrait mode, show the prompt
    if (window.innerHeight > window.innerWidth) {
        landscapePrompt.style.display = 'block';
    } else {
        landscapePrompt.style.display = 'none';
    }
}

// Run the check on load and resize
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
