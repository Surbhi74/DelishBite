// Smooth scroll for all anchor links
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Newsletter Form Submit Alert
document.querySelector('.newsletter form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  if (email.trim()) {
    alert(`Thanks for subscribing, ${email}!`);
    this.reset();
  } else {
    alert('Please enter a valid email.');
  }
});
