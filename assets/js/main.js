 // Navbar scroll effect
 window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('navbar-scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('navbar-scrolled');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade in animation on scroll
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((element) => {
  observer.observe(element);
});

// Animate progress bars
function animateProgressBars() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
    bar.style.width = targetWidth;
  });
}

// Initialize progress bars when skills section is visible
const skillsSection = document.querySelector('#skills');
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      skillsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

skillsObserver.observe(skillsSection);
