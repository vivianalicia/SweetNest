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
const users = JSON.parse(sessionStorage.getItem("users") || "[]");
console.log(users);
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
          item.querySelector('.faq-answer').classList.remove('active');
        }
    });
    if (isActive) {
        faqItem.classList.remove('active');
        faqAnswer.classList.remove('active');
    } else {
      faqItem.classList.add('active');
      faqAnswer.classList.add('active');
    }
}