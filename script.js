// Wait for the page to load and reveal the first line immediately
document.addEventListener('DOMContentLoaded', function() {
    const firstLine = document.querySelector('.scroll-trigger'); // The first poem line with the scroll-trigger class
    firstLine.classList.add('visible'); // Immediately reveal the first line

    // Trigger the scroll indicator once the page has loaded
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.classList.add('visible'); // Make the scroll button appear
});

// Scroll to the next section when user clicks on the "Scroll for more" text
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});

// Scroll trigger function to reveal poem lines as the user scrolls
window.addEventListener('scroll', function() {
    const scrollLines = document.querySelectorAll('.scroll-trigger'); // All poem lines with the scroll-trigger class
    const windowHeight = window.innerHeight; // Get the height of the window (viewport)
    const scrollIndicator = document.querySelector('.scroll-indicator'); // The scroll button

    // Loop through each poem line and reveal it as it comes into view
    scrollLines.forEach(function(line) {
        const lineTop = line.getBoundingClientRect().top; // Get the position of the line relative to the viewport

        // If the line is within the viewport, make it visible
        if (lineTop < windowHeight - 100) { // Trigger when 100px away from the bottom of the viewport
            line.classList.add('visible'); // Add the visible class to reveal the line
        }
    });

    // Show the scroll button when user scrolls 100px down
    if (window.scrollY > 100) {
        scrollIndicator.classList.add('visible');
    } else {
        scrollIndicator.classList.remove('visible');
    }
});
