window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.body.classList.add('background-color: #344338;');
    } else {
        document.body.classList.remove('background-color: #f6efe0;');
    }
});