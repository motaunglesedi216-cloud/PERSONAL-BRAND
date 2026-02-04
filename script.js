// Elite button glow
const heroButton = document.querySelector("#hero button");

if (heroButton) {
  heroButton.addEventListener("mouseenter", () => {
    heroButton.style.boxShadow =
      "0 12px 30px rgba(127, 90, 240, 0.35)";
  });

  heroButton.addEventListener("mouseleave", () => {
    heroButton.style.boxShadow = "none";
  });
}

// Calm reveal on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(24px)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});

// Calm nav hover refinement
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.opacity = "0.85";
  });

  link.addEventListener("mouseleave", () => {
    link.style.opacity = "1";
  });
});
