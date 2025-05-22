function scrollToSection() {
    const heroSection = document.querySelector(".hero-section-2");
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    }
}

const fadeSections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.5
  });

  fadeSections.forEach(section => {
    observer.observe(section);
  });