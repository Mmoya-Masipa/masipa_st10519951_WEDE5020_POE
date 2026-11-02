document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isOpen = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    const heroImages = ['hero.jpg', 'event.jpg', 'helping.jpg']; 
    let heroIndex = 0;

    setInterval(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImages[heroIndex]}')`;
    }, 4000);
}

const track = document.querySelector('.gallery-track');
const galleryImages = document.querySelectorAll('.gallery-track img');

if (track && galleryImages.length > 0) {
    let galleryIndex = 0;

    function slideGallery() {
        const slideWidth = galleryImages[0].offsetWidth + 20; 
        galleryIndex++;
        
        if (galleryIndex >= galleryImages.length - 2) {
            galleryIndex = 0;
        }
        
        track.style.transform = `translateX(-${galleryIndex * slideWidth}px)`;
    }

    setInterval(slideGallery, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteerForm');
 
    if (!form) return; 

    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(); 

        const name = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (name === "" || email === "" || message === "") {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.innerText = 'Error: Please fill in all required fields (Name, Email, and Message).';
        } else if (!email.match(emailPattern)) {
            formMessage.style.display = 'block';
            formMessage.style.color = 'red';
            formMessage.innerText = 'Error: Please enter a valid email address (e.g., name@example.com).';
        } else {
            formMessage.style.display = 'block';
            formMessage.style.color = 'green';
            formMessage.innerText = 'Success! Thank you for signing up to volunteer. We will be in touch soon.';
            form.reset(); 
        }
    });
});