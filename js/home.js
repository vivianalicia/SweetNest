function scrollToSection() {
    const heroSection = document.querySelector(".hero-section-2");
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    }
}