// Wait for the page to load completely
window.onload = function() {
    const lines = document.querySelectorAll('.line');
    const scrollPrompt = document.getElementById('scrollPrompt');

    // Show the "Scroll for more..." prompt when user starts scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollPrompt.classList.add('show');
        }
    });

    // IntersectionObserver to reveal lines as they come into view
    const observerOptions = {
        root: null,  // null means the viewport
        rootMargin: '0px',
        threshold: 0.5  // 50% of the element must be in the viewport
    };

    // Callback function to reveal lines when they come into view
    const revealLine = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const line = entry.target;
                line.style.opacity = 1;
                line.style.transform = 'translateY(0)';
                observer.unobserve(line);  // Stop observing after revealing
            }
        });
    };

    const observer = new IntersectionObserver(revealLine, observerOptions);

    // Observe each line to trigger animations
    lines.forEach(line => {
        observer.observe(line);
    });
};
