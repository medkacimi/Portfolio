 // Initialisation de ScrollReveal
 ScrollReveal({
  reset: true, // Répéter l'animation à chaque apparition
  distance: '50px', // Distance de l'animation
  duration: 1000, // Durée de l'animation (en ms)
  delay: 500 // Délai avant le début de l'animation
});

// Animation pour les titres
ScrollReveal().reveal('h2', { origin: 'top' });

// Animation pour les sections
ScrollReveal().reveal('.section', { origin: 'bottom' });

// Animation pour les boutons
ScrollReveal().reveal('.project-button', { origin: 'left' });
 // Typed.js Configuration
 new Typed('#typed-description', {
  strings: [
    'Étudiant en L3 INGI',
    'Passionné par l\'Innovation Technologique'
  ],
  typeSpeed: 60,        // Vitesse de frappe (en millisecondes par caractère)
  backSpeed: 40,        // Vitesse de suppression du texte
  backDelay: 2000,      // Temps d'attente avant de sup
  loop: true,           // Continuous looping
  cursorChar: '|',      // Cursor character
  smartBackspace: true  // More natural backspacing
});

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

// Configuration du graphique radar pour visualiser les compétences
document.addEventListener('DOMContentLoaded', function() {
  // Récupération du contexte du canvas
  const ctx = document.getElementById('skillsChart').getContext('2d');
  
  // Création d'une nouvelle instance de Chart.js
  new Chart(ctx, {
    // Définition du type de graphique (radar pour une visualisation en toile d'araignée)
    type: 'bar',
    
    // Configuration des données du graphique
    data: {
      // Étiquettes pour chaque axe du radar
      labels: ['HTML/CSS', 'JavaScript', 'Microsoft Office', 'Bibliothéques Python'],
      
      // Définition des ensembles de données
      datasets: [
        {
          // Configuration pour HTML/CSS (bleu)
          label: 'HTML/CSS',
          data: [50, 0, 0], // Seule la première valeur est non nulle pour isoler la compétence
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Couleur de remplissage semi-transparente
          borderColor: 'rgba(54, 162, 235, 1)', // Couleur de la bordure
          borderWidth: 4,
          pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
        },
        {
          // Configuration pour JavaScript (jaune)
          label: 'JavaScript',
          data: [0, 40, 0],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 4,
          pointBackgroundColor: 'rgba(255, 206, 86, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 206, 86, 1)'
        },
        {
          // Configuration pour Microsoft Office (turquoise)
          label: 'Microsoft Office (Excel, Word, Powerpoint)',
          data: [0, 0, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 4,
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
        },
        {
          // Configuration pour Python (vert)
          label: 'Bibliothéques Python (Numpy, Pandas, Matplotlib)',
          data: [0, 0, 0, 20],
          backgroundColor: 'rgba(75, 192, 75, 0.2)',
          borderColor: 'rgba(75, 192, 75, 1)',
          borderWidth: 4,
          pointBackgroundColor: 'rgba(75, 192, 75, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 75, 1)'
        }
      ]
    },
    
    // Options de configuration du graphique
    options: {
      // Configuration des échelles
      scales: {
        r: {
          angleLines: {
            display: true // Affichage des lignes de grille radiales
          },
          suggestedMin: 0, // Valeur minimale de l'échelle
          suggestedMax: 100, // Valeur maximale de l'échelle
          ticks: {
            stepSize: 20 // Intervalle entre les graduations
          }
        }
      },
      
      // Configuration des plugins
      plugins: {
        // Position de la légende
        legend: {
          position: 'bottom'
        },
        
        // Configuration des info-bulles
        tooltip: {
          callbacks: {
            // Personnalisation du texte des info-bulles
            label: function(context) {
              const value = context.raw;
              if (value === 0) return null; // Ne pas afficher les valeurs nulles
              return `Niveau: ${value}%`;
            }
          }
        }
      }
    }
  });
});