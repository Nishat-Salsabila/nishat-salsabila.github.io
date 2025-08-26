document.addEventListener("DOMContentLoaded", function() {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li a");

    hamburger.addEventListener('click', () => {
        toggleMenu();
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
    
    function toggleMenu() {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    }

    // --- Header shadow on scroll ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Fade-in animation on scroll ---
    const faders = document.querySelectorAll('.fade-in');
    if (faders.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        faders.forEach(fader => {
            observer.observe(fader);
        });
    }

    // --- CV Modal Logic ---
    const cvLink = document.getElementById('cv-link');
    const modal = document.getElementById('cv-modal');
    const closeButton = document.querySelector('.modal .close-button');

    if (cvLink && modal) {
        cvLink.addEventListener('click', function(event) {
            // Prevent default link behavior only if it's not a direct download
            if (modal) {
                event.preventDefault();
                modal.classList.add('modal-active');
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.classList.remove('modal-active');
        });
    }

    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.classList.remove('modal-active');
            }
        });
    }
});