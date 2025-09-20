document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.body;

    function toggleMenu() {
        menuToggle.classList.toggle('menu-open');
        mobileMenu.classList.toggle('open');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking on menu links
    const menuLinks = document.querySelectorAll('.mobile-menu .menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
});