// Auto Alpina Auctions - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

  // =====================
  // Active nav link
  // =====================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // =====================
  // Smooth scroll for anchor links
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =====================
  // Contact form submission
  // =====================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // =====================
  // Enquiry form on vehicle detail
  // =====================
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successMsg = document.getElementById('enquirySuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        enquiryForm.reset();
        setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // =====================
  // Scroll-to-top button
  // =====================
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
  scrollBtn.id = 'scrollTopBtn';
  scrollBtn.setAttribute('aria-label', 'Back to top');
  Object.assign(scrollBtn.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: 'var(--primary)',
    color: '#fff',
    border: 'none',
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
    cursor: 'pointer',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    zIndex: '9999',
    transition: 'opacity 0.3s, transform 0.3s'
  });
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =====================
  // Number animation for hero stats
  // =====================
  function animateCount(el, target, duration) {
    const start = 0;
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      el.textContent = current + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count || el.textContent);
        if (!isNaN(target)) {
          animateCount(el, target, 1500);
          observer.unobserve(el);
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.count-anim').forEach(el => observer.observe(el));

});
