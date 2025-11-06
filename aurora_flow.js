// JavaScript interactions for Aurora Studios landing page
// This script toggles the FAQ answers, manages the back‑to‑top button
// visibility and provides a simple reveal animation using IntersectionObserver.
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');
  // Show or hide back to top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
  // Smooth scroll back to top when clicked
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // FAQ toggle functionality
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
  // Intersection Observer for reveal animations (optional)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(el => revealObserver.observe(el));
});