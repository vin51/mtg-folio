document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const serviceInput = document.getElementById('service');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const serviceError = document.getElementById('serviceError');
    const messageError = document.getElementById('messageError');

    // Validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[\d\s-]{10,}$/;

    const showError = (element, message) => {
        element.style.display = 'block';
        element.textContent = message;
    };

    const hideError = (element) => {
        element.style.display = 'none';
        element.textContent = '';
    };

    const validateForm = () => {
        let isValid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            showError(nameError, 'Name is required');
            isValid = false;
        } else if (nameInput.value.trim().length < 2) {
            showError(nameError, 'Name must be at least 2 characters long');
            isValid = false;
        } else {
            hideError(nameError);
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            showError(emailError, 'Email is required');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError(emailError);
        }

        // Phone validation
        if (phoneInput.value.trim() === '') {
            showError(phoneError, 'Phone number is required');
            isValid = false;
        } else if (!phonePattern.test(phoneInput.value)) {
            showError(phoneError, 'Please enter a valid phone number');
            isValid = false;
        } else {
            hideError(phoneError);
        }

        // Service validation
        if (serviceInput.value === '') {
            showError(serviceError, 'Please select a service');
            isValid = false;
        } else {
            hideError(serviceError);
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            showError(messageError, 'Message is required');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageError, 'Message must be at least 10 characters long');
            isValid = false;
        } else {
            hideError(messageError);
        }

        return isValid;
    };

    // Real-time validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            hideError(nameError);
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailPattern.test(emailInput.value)) {
            hideError(emailError);
        }
    });

    phoneInput.addEventListener('input', () => {
        if (phonePattern.test(phoneInput.value)) {
            hideError(phoneError);
        }
    });

    serviceInput.addEventListener('change', () => {
        if (serviceInput.value !== '') {
            hideError(serviceError);
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length >= 10) {
            hideError(messageError);
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            form.reset();
        }
    });

    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});