document.addEventListener('DOMContentLoaded', () => {
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, no need to observe anymore
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add micro-interaction: Button pulse effect placeholder
  const ctaButtons = document.querySelectorAll('.btn-cta');
  ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  });
});
