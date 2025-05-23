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
  

function goToProfile(event) {
  event.preventDefault();
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if(loggedInUser){
    window.location.href="../html/profile.html"
  }
  else{
     window.location.href="../html/registration.html"
  }
}
  document.addEventListener("DOMContentLoaded", function () {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  if (loggedInUser && loggedInUser.pic) {
    const navProfileImg = document.getElementById("navProfileImg");
    if (navProfileImg) {
      navProfileImg.src = loggedInUser.pic;
    }
  }
});