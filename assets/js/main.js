// Gestion de l'effet de scroll sur la barre de navigation
// Ajoute une classe lorsque l'utilisateur défile la page
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    document.querySelector('.navbar').classList.add('navbar-scrolled');
  } else {
    document.querySelector('.navbar').classList.remove('navbar-scrolled');
  }
});

// Navigation fluide pour les liens internes
// Permet un défilement doux vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Configuration de l'observateur d'intersection
// Utilisé pour les animations au défilement
const observerOptions = {
  root: null,          // Utilise le viewport comme racine
  threshold: 0.1,      // Déclenche lorsque 10% de l'élément est visible
  rootMargin: '0px'    // Aucune marge supplémentaire
};

// Gestion des animations de fondu à l'entrée
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Application de l'observateur à tous les éléments avec la classe fade-in
document.querySelectorAll('.fade-in').forEach((element) => {
  observer.observe(element);
});

// Animation des barres de progression
// Met à jour la largeur des barres en fonction du pourcentage
function animateProgressBars() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const targetWidth = bar.parentElement.previousElementSibling.lastElementChild.textContent;
    bar.style.width = targetWidth;
  });
}

// Initialisation des barres de progression
// Déclenche l'animation lorsque la section est visible
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