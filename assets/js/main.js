// ---- Custom Cursor ----
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (cursorDot && cursorRing) {
    let mouseX = 0,
        mouseY = 0;
    let ringX = 0,
        ringY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    });

    function animateCursor() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document
        .querySelectorAll("a, button, .project-card, .stat-card, .lang-card")
        .forEach((el) => {
            el.addEventListener("mouseenter", () =>
                cursorRing.classList.add("hovering"),
            );
            el.addEventListener("mouseleave", () =>
                cursorRing.classList.remove("hovering"),
            );
        });
}

// ---- Navbar scroll effect ----
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    highlightNavLink();
});

// ---- Active nav link ----
function highlightNavLink() {
    const sections = document.querySelectorAll("section[id], header[id]");
    let current = "";
    sections.forEach((section) => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) current = section.getAttribute("id");
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current)
            link.classList.add("active");
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
    navToggle.addEventListener("click", () => {
        navLinksEl.classList.toggle("open");
    });
}

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = i * 0.08 + "s";
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
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
                    }, 200);
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
        "Étudiant en M1 S2IN",
        "Développeur Front-end",
        "Passionné par l'Innovation Digitale",
        "Data Enthusiast",
    ],
    typeSpeed: 55,
    backSpeed: 35,
    backDelay: 2200,
    loop: true,
    cursorChar: "",
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
                showToast("success", "Message envoyé avec succès !");
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
    toast.className = "toast-notif toast-" + type;
    toast.innerHTML = `
    <span>${type === "success" ? "✓" : "✕"}</span>
    <span>${message}</span>
  `;
    toast.style.cssText = `
    position: fixed; bottom: 32px; right: 32px; z-index: 9999;
    display: flex; align-items: center; gap: 12px;
    background: ${type === "success" ? "#00d4aa" : "#ff5555"};
    color: #fff; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500;
    padding: 16px 24px; border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    transform: translateY(20px); opacity: 0;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    });
    setTimeout(() => {
        toast.style.transform = "translateY(20px)";
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ---- Hero reveal on load ----
window.addEventListener("load", () => {
    document.querySelectorAll(".hero .reveal").forEach((el, i) => {
        setTimeout(
            () => {
                el.style.transitionDelay = "0s";
                el.classList.add("visible");
            },
            200 + i * 150,
        );
    });
});
