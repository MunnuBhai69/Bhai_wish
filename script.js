document.addEventListener('DOMContentLoaded', function () {
    const poemLines = document.querySelectorAll('.poem-line');
    let index = 0;

    function showLine() {
        if (index < poemLines.length) {
            poemLines[index].classList.add('visible');
            index++;
        }
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition >= poemLines[index].offsetTop) {
            showLine();
        }
    });

    // Start the poem on the first scroll
    showLine();
});
