export const intersection = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.classList.add('show-animation');
                });
                observer.unobserve(entry.target);
            } else {
                requestAnimationFrame(() => {
                    entry.target.classList.remove('show-animation');
                });
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.animation, .animation-reverse, .animation-bottom');
    hiddenElements.forEach((el) => observer.observe(el));
}