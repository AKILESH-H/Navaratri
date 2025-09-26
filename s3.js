// Get the video element
const video = document.getElementById('video');

// Get the custom control buttons
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Play/Pause Button
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Progress Bar (Updates while playing)
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

// Seek video using the progress bar
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
});

// Fullscreen Button
fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
});
