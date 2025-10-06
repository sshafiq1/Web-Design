window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.classList.add('change-bg-color');
    } else {
        document.body.classList.remove('change-bg-color');
    }
});