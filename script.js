// Simple counter for button clicks
let clickCount = 0;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const button = document.getElementById('demoButton');
    const countDisplay = document.getElementById('clickCount');
    
    // Add click event listener to button
    button.addEventListener('click', function() {
        clickCount++;
        countDisplay.textContent = `Button clicked: ${clickCount} times`;
        
        // Add a fun animation effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Log a welcome message to console
    console.log('Welcome to your GitHub Page! Feel free to customize this template.');
});
