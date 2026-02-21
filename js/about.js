// ===========================
// SCROLL REVEAL ANIMATION (Same as home.js)
// ===========================
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".vm-card, .value-card, .partner-item, .content-text, .content-image",
  );

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize elements for animation (Same as home.js)
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".vm-card, .value-card, .partner-item, .content-text, .content-image",
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Initial check
  revealOnScroll();
});

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// ===========================
// CARD HOVER EFFECTS (Same as home.js category cards)
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".vm-card, .value-card, .partner-item",
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });
});

// ===========================
// ICON ANIMATION (Same pulse animation as home.js feature numbers)
// ===========================
function animateIcons() {
  const icons = document.querySelectorAll(".vm-icon, .value-icon");

  icons.forEach((icon) => {
    const rect = icon.getBoundingClientRect();

    if (rect.top < window.innerHeight && !icon.classList.contains("animated")) {
      icon.classList.add("animated");
      icon.style.animation = "pulse 0.5s ease";
    }
  });
}

// Add pulse animation (Same as home.js)
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

window.addEventListener("scroll", animateIcons);
document.addEventListener("DOMContentLoaded", animateIcons);

