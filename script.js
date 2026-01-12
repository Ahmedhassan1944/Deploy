// Enhanced animations and interactions
window.addEventListener('scroll', function() {
    const portfollaxBg = document.querySelector('.portfolio-parallax-bg');
    const scrolled = window.pageYOffset;
    const parallaxSpeed = scrolled * 0.3;
    
    if (portfollaxBg) {
        portfollaxBg.style.transform = `translateY(${parallaxSpeed}px)`;
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0.3';
            section.style.transform = 'translateY(20px)';
        }
    });

    // Portfolio cards staggered animation
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        }
    });
});

// Add smooth scrolling and animation effects
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sections with hidden state
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0.3';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    // Initialize portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.8)';
    });

    // Add staggered animation to fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });

    // Enhanced hover effects for contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05) rotateZ(2deg)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
        });
    });

    // Add click animations to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) rotateY(5deg)';
            }, 150);
        });
    });

    // Add typing animation to profile name
    const profileName = document.querySelector('.profile-name');
    if (profileName) {
        const text = profileName.textContent;
        profileName.textContent = '';
        profileName.style.borderRight = '3px solid #0d5e64';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                profileName.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    profileName.style.borderRight = 'none';
                }, 1000);
            }
        };
        setTimeout(typeWriter, 1000);
    }

    // Add floating animation to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        setInterval(() => {
            if (!profileImage.matches(':hover')) {
                profileImage.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    profileImage.style.transform = 'translateY(0)';
                }, 1500);
            }
        }, 3000);
    }

    // Trigger initial scroll event
    window.dispatchEvent(new Event('scroll'));
});
