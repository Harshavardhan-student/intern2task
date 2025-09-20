// Enhanced interactivity for the internship document
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click tracking for task buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);

            // Track button clicks (in real app, you'd send this to analytics)
            const taskCard = this.closest('.task-card');
            if (taskCard) {
                const taskTitle = taskCard.querySelector('.task-title').textContent;
                console.log(`Button clicked: ${this.textContent} for task: ${taskTitle}`);
            }
        });
    });

    // Add hover effects for resource links
    document.querySelectorAll('.resource-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Progress indicator (simulated)
    function updateProgress() {
        const cards = document.querySelectorAll('.task-card');
        cards.forEach((card, index) => {
            // Simulate different completion states
            const progress = Math.floor(Math.random() * 101);
            
            // Add progress indicator if it doesn't exist
            if (!card.querySelector('.progress-bar')) {
                const progressContainer = document.createElement('div');
                progressContainer.className = 'progress-container';
                progressContainer.style.cssText = `
                    margin: 1rem 0;
                    background: #f1f5f9;
                    border-radius: 10px;
                    overflow: hidden;
                    height: 8px;
                `;
                
                const progressBar = document.createElement('div');
                progressBar.className = 'progress-bar';
                progressBar.style.cssText = `
                    height: 100%;
                    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
                    width: ${progress}%;
                    transition: width 0.3s ease;
                    border-radius: 10px;
                `;
                
                const progressText = document.createElement('div');
                progressText.className = 'progress-text';
                progressText.style.cssText = `
                    font-size: 0.75rem;
                    color: #64748b;
                    margin-top: 0.25rem;
                    text-align: center;
                `;
                progressText.textContent = `Progress: ${progress}%`;
                
                progressContainer.appendChild(progressBar);
                
                const requirementsDiv = card.querySelector('.requirements');
                if (requirementsDiv) {
                    requirementsDiv.appendChild(progressContainer);
                    requirementsDiv.appendChild(progressText);
                }
            }
        });
    }

    // Initialize progress after a brief delay
    setTimeout(updateProgress, 1000);

    // Add typing animation to header title
    const headerTitle = document.querySelector('.header-title');
    if (headerTitle) {
        const originalText = headerTitle.textContent;
        headerTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                headerTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing animation after page load
        setTimeout(typeWriter, 500);
    }

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.task-card, .resource-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Add copy functionality for contact email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Also copy to clipboard
            const email = this.href.replace('mailto:', '');
            navigator.clipboard.writeText(email).then(() => {
                // Show brief feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = '#10b981';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 1500);
            }).catch(() => {
                console.log('Could not copy email to clipboard');
            });
        });
    });
});

// Add some fun easter eggs
let konami = [];
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konami.push(e.keyCode);
    if (konami.length > konamiCode.length) {
        konami.shift();
    }
    
    if (konami.join(',') === konamiCode.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 10000);
        
        // Add CSS for rainbow effect
        if (!document.getElementById('rainbow-style')) {
            const style = document.createElement('style');
            style.id = 'rainbow-style';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
    }
});