 // JavaScript to handle scroll-triggered animations using Intersection Observer API
 document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
});
