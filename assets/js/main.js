/* =============================================
   KACIMI Portfolio — JS
   ============================================= */

// ---- Navbar scroll effect ----
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
    highlightNavLink();
});

// ---- Active nav link ----
function highlightNavLink() {
    const sections = document.querySelectorAll("section[id], header[id]");
    let current = "";
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120)
            current = section.getAttribute("id");
    });
    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current,
        );
    });
}

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            navLinksEl.classList.remove("open");
        }
    });
});

// ---- Mobile nav toggle ----
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");
if (navToggle) {
    navToggle.addEventListener("click", () =>
        navLinksEl.classList.toggle("open"),
    );
}

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
);

document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

// ---- Skill bars animation ----
const skillsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".skill-fill").forEach((bar) => {
                    const width = bar.getAttribute("data-width");
                    setTimeout(() => {
                        bar.style.width = width + "%";
                    }, 250);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.3 },
);

const skillsSection = document.querySelector("#skills");
if (skillsSection) skillsObserver.observe(skillsSection);

// ---- Typed.js ----
new Typed("#typed-description", {
    strings: [
        "À la recherche d'une alternance Consultant IT / Data",
        "Développeur BI &amp; Power BI",
        "Étudiant M1 S2IN · IAE Savoie Mont Blanc",
        "Python · SQL · Dash · Power BI",
    ],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 2200,
    loop: true,
    cursorChar: "|",
    smartBackspace: true,
});

// ---- EmailJS + Contact Form ----
(function () {
    try {
        emailjs.init("UtSd0KC2w_RkDDonM");
    } catch (e) {}
})();

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        const btnSpan = btn.querySelector("span");
        const originalText = btnSpan.textContent;

        btn.disabled = true;
        btnSpan.textContent = "Envoi en cours...";

        const templateParams = {
            from_name: document.getElementById("from_name").value,
            from_email: document.getElementById("from_email").value,
            message: document.getElementById("message").value,
        };

        emailjs
            .send("service_3aix9n5", "template_v14ztqh", templateParams)
            .then(() => {
                showToast("success", "Message envoyé !");
                contactForm.reset();
            })
            .catch(() => {
                showToast("error", "Erreur lors de l'envoi. Réessayez.");
            })
            .finally(() => {
                btn.disabled = false;
                btnSpan.textContent = originalText;
            });
    });
}

function showToast(type, message) {
    const existing = document.querySelector(".toast-notif");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast-notif";
    toast.innerHTML = message;
    toast.style.cssText = `
    position: fixed; bottom: 28px; right: 28px; z-index: 9999;
    background: ${type === "success" ? "#1a2e1a" : "#2e1a1a"};
    border: 1px solid ${type === "success" ? "#2d5a2d" : "#5a2d2d"};
    color: ${type === "success" ? "#7ecf7e" : "#cf7e7e"};
    font-family: 'DM Sans', sans-serif; font-size: 0.88rem;
    padding: 14px 20px; border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.35);
    opacity: 0; transform: translateY(10px);
    transition: all 0.25s ease;
  `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(0)";
    });
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 250);
    }, 3500);
}

// ---- Hero reveal on load ----
window.addEventListener("load", () => {
    document.querySelectorAll(".hero .reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), 150 + i * 120);
    });
});
