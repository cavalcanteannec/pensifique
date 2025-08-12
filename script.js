// Loading screen
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.getElementById('loading').classList.add('hide');
        }, 1500);
    });

    // Custom cursor
    const cursor = document.getElementById('cursor');
    const links = document.querySelectorAll('a, button, .learn-card, .problem-item, .price-card, .faq-question');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Particles background
    function createParticles() {
        const particles = document.getElementById('particles');
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particles.appendChild(particle);
        }
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // FAQ Toggle
    function toggleFaq(element) {
        const answer = element.nextElementSibling;
        const allQuestions = document.querySelectorAll('.faq-question');
        const allAnswers = document.querySelectorAll('.faq-answer');
        
        // Close all other FAQs
        allQuestions.forEach(q => {
            if (q !== element) {
                q.classList.remove('active');
            }
        });
        allAnswers.forEach(a => {
            if (a !== answer) {
                a.classList.remove('active');
            }
        });
        
        // Toggle current FAQ
        element.classList.toggle('active');
        answer.classList.toggle('active');
    }

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

    // 3D tilt effect for cards
    function addTiltEffect() {
        const cards = document.querySelectorAll('.learn-card, .price-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Advanced hover effects
    document.querySelectorAll('.learn-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 30px 60px rgba(220, 38, 38, 0.3), 0 0 50px rgba(220, 38, 38, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Buy button effect
    document.querySelectorAll('.buy-button, .btn-primary').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 30px 60px rgba(220, 38, 38, 0.6), 0 0 100px rgba(220, 38, 38, 0.3)';
        });
    });

    // Initialize everything
    document.addEventListener('DOMContentLoaded', function() {
        createParticles();
        addTiltEffect();
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Performance optimization
    if (navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
    }

    // Add urgency timer (optional)
    function addUrgencyTimer() {
        const timer = document.createElement('div');
        timer.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--primary-gradient);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: 600;
            z-index: 999;
            box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
        `;
        timer.innerHTML = '⏰ OFERTA EXPIRA EM: 23:59:45';
        document.body.appendChild(timer);
    }

    // Uncomment to add urgency timer
     addUrgencyTimer();
});

      