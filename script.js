// Get elements
const animationContainer = document.getElementById('animation-container');
const logoVideo = document.getElementById('logo-video');
const mainScreen = document.getElementById('main-screen');

// Set video to play for exactly 5 seconds
let videoPlayed = false;

// Function to transition to main screen
function transitionToMainScreen() {
    if (!videoPlayed) {
        videoPlayed = true;
        
        // Fade out animation container
        animationContainer.classList.add('fade-out');
        
        // Wait for fade animation to complete, then show main screen
        setTimeout(() => {
            animationContainer.style.display = 'none';
            mainScreen.classList.add('show');
        }, 500);
    }
}

// Set 5 second timer
setTimeout(transitionToMainScreen, 5000);

// Also listen for video ended event as backup
logoVideo.addEventListener('ended', transitionToMainScreen);

// Ensure video plays
logoVideo.play().catch(error => {
    console.log('Autoplay prevented:', error);
});
