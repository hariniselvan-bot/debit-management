// Smooth scroll animation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission alert
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
});
