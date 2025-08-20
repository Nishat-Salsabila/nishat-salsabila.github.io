document.addEventListener('DOMContentLoaded', () => {

    // --- Header Shadow on Scroll ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only apply smooth scroll to internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // --- Fade-in Animation on Scroll ---
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- MODIFIED CV MODAL LOGIC ---
    const cvModal = document.getElementById('cv-modal');
    const cvLink = document.getElementById('cv-link');
    const closeButton = document.querySelector('.close-button');

    // Function to open the modal
    const openModal = () => {
        cvModal.classList.add('modal-active');
    };

    // Function to close the modal
    const closeModal = () => {
        cvModal.classList.remove('modal-active');
    };

    // Open the modal on link click
    if (cvLink) {
        cvLink.addEventListener('click', (e) => {
            e.preventDefault(); 
            openModal();
        });
    }

    // Close the modal with the close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close the modal if the user clicks the background overlay
    if (cvModal) {
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                closeModal();
            }
        });
    }

    // Close the modal with the Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cvModal.classList.contains('modal-active')) {
            closeModal();
        }
    });

});
