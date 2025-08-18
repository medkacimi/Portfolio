// Configuration de EmailJS
(function() {
  // Initialisation de EmailJS avec votre clé publique
  emailjs.init("UtSd0KC2w_RkDDonM");
})();

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Afficher un indicateur de chargement
  const submitButton = this.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Envoi en cours...';

  // Récupération des données du formulaire
  const templateParams = {
    from_name: document.getElementById('from_name').value,
    from_email: document.getElementById('from_email').value,
    message: document.getElementById('message').value
  };

  // Envoi de l'email via EmailJS
  emailjs.send('service_3aix9n5', 'template_v14ztqh', templateParams)
    .then(function(response) {
      // Succès
      showAlert('success', 'Message envoyé avec succès !');
      document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
      // Erreur
      showAlert('danger', 'Une erreur est survenue lors de l\'envoi du message.');
      console.error('EmailJS error:', error);
    })
    .finally(function() {
      // Réactiver le bouton
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    });
});

// Fonction pour afficher les alertes
function showAlert(type, message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
  alertDiv.role = 'alert';
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  
  document.getElementById('contact-form').insertAdjacentElement('afterend', alertDiv);
  
  // Auto-fermeture après 5 secondes
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}

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
    'Étudiant en M1 S2IN',
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

// Configuration du graphique de compétences
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('skillsChart').getContext('2d');
  
  // Définition des données des compétences
  const skillsData = {
    labels: [
      'Développement Front-end',
      'Outils Microsoft',
      'Data Analysis',
      'Langages de programmation'
    ],
    datasets: [
      {
        label: 'HTML/CSS',
        data: [90, 0, 0, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      },
      {
        label: 'JavaScript',
        data: [70, 0, 0, 0],
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2
      },
      {
        label: 'Excel',
        data: [0, 80, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
      },
      {
        label: 'Word/PowerPoint',
        data: [0, 85, 0, 0],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2
      },
      {
        label: 'Python (Numpy, Pandas)',
        data: [0, 0, 75, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      },
      {
        label: 'Data Visualization',
        data: [0, 0, 70, 0],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 2
      },
      {
        label: 'Python',
        data: [0, 0, 0, 75],
        backgroundColor: 'rgba(75, 192, 75, 0.5)',
        borderColor: 'rgba(75, 192, 75, 1)',
        borderWidth: 2
      },
      {
        label: 'Scilab',
        data: [0, 0, 0, 65],
        backgroundColor: 'rgba(255, 99, 71, 0.5)',
        borderColor: 'rgba(255, 99, 71, 1)',
        borderWidth: 2
      }
    ]
  };

  // Configuration avancée du graphique
  const config = {
    type: 'bar',
    data: skillsData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          titleFont: {
            size: 14
          },
          bodyFont: {
            size: 13
          },
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + '%';
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 12
            }
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            },
            stepSize: 20,
            font: {
              size: 12
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  };

  // Création du graphique
  new Chart(ctx, config);
});
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .skills-chart-container {
      position: relative;
      height: 400px;
      width: 100%;
      margin: 20px 0;
    }

    #skillsChart {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background-color: white;
      padding: 20px;
    }

    @media (max-width: 768px) {
      .skills-chart-container {
        height: 500px;
      }
    }
  </style>
`);
