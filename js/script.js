// Carrousel (activé)
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelector('.slides');
    const indicators = document.querySelectorAll('.indicators span');

    if (slides && indicators.length) {
        function showSlide(index) {
            slides.style.transform = `translateX(-${index * 25}%)`;
            indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % 4;
            showSlide(currentSlide);
        }

        // Auto slide every 3 seconds
        setInterval(nextSlide, 3000);

        // Click on indicators
        indicators.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                currentSlide = i;
                showSlide(i);
            });
        });
    }
});

// Validation des formulaires
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    alert(`Veuillez remplir le champ ${input.previousElementSibling.textContent}`);
                    valid = false;
                }
            });
            if (!valid) {
                event.preventDefault();
            }
        });
    });
});

// Check if logged in
document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const currentUser = localStorage.getItem('currentUser');
    if (loggedIn === 'true' && currentUser) {
        const signSpan = document.querySelector('.sign span');
        if (signSpan) {
            signSpan.textContent = `Bonjour, ${currentUser}`;
        }
    }
});

// Handle register
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            // Save user
            const user = { username, email, password };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
            registerForm.reset();
        });
    }
});

// Handle login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.email === email && user.password === password) {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('currentUser', user.username);
                alert('Connexion réussie !');
                window.location.href = 'index.html';
            } else {
                alert('Email ou mot de passe incorrect.');
            }
        });
    }
});

// Reveal on scroll
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('section, .project');
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => {
        el.classList.add('reveal');
        io.observe(el);
    });
});

// Smooth scroll for same-page anchors
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }
});
