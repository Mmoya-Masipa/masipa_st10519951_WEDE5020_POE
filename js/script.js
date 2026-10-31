document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        
        const isOpen = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });
});