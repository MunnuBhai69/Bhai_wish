// Wait for the page to load completely
window.onload = function() {
    const lines = document.querySelectorAll('.line');
    const scrollPrompt = document.getElementById('scrollPrompt');
    let lineIndex = 0;

    // Show lines when scrolling
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Display the "Scroll for more..." prompt when scrolling begins
        if (scrollPosition > 100) {
            scrollPrompt.classList.add('show');
        }

        // Show the lines one by one as the user scrolls
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            if (scrollPosition + windowHeight > line.offsetTop + 100) {
                line.style.opacity = 1;
                line.style.transform = 'translateY(0)';
                lineIndex++;
            }
        }
    });
};
