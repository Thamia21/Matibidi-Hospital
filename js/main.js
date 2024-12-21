// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-dark');
                navbar.classList.remove('bg-primary');
            } else {
                navbar.classList.add('bg-primary');
                navbar.classList.remove('bg-dark');
            }
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .section-title, .hero-content');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('fade-in');
            }
        });
    };

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run it once on load
    animateOnScroll();
});

// Emergency Contact Button
const emergencyBtn = document.getElementById('emergency-contact');
if (emergencyBtn) {
    emergencyBtn.addEventListener('click', function() {
        window.location.href = 'tel:+27137730758';
    });
}

// Department Filter (if on departments page)
const departmentFilter = document.getElementById('department-filter');
if (departmentFilter) {
    departmentFilter.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const departments = document.querySelectorAll('.department-card');
        
        departments.forEach(dept => {
            const title = dept.querySelector('.card-title').textContent.toLowerCase();
            const description = dept.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                dept.style.display = 'block';
            } else {
                dept.style.display = 'none';
            }
        });
    });
}

// Service Hours Toggle
const serviceHours = document.querySelectorAll('.service-hours');
serviceHours.forEach(hours => {
    const toggle = hours.querySelector('.hours-toggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            const content = hours.querySelector('.hours-content');
            content.classList.toggle('show');
            toggle.textContent = content.classList.contains('show') ? 'Show Less' : 'Show More';
        });
    }
});
