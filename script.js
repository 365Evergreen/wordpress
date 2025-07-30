document.addEventListener('DOMContentLoaded', function() {
    const stickyHeader = document.querySelector('.sticky-header');

    if (stickyHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Adjust this value as needed
                stickyHeader.classList.add('scrolled');
            } else {
                stickyHeader.classList.remove('scrolled');
            }
        });
    }
});