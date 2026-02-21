// ===========================
// HERO SECTION ANIMATIONS
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = "1";
    }, 100);
  }
});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    ".category-card, .feature-card, .about-content, .about-image",
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

// Initialize elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".category-card, .feature-card, .about-content, .about-image",
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
// CATEGORY CARD HOVER EFFECTS
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });
});

// ===========================
// FEATURE NUMBER ANIMATION
// ===========================
function animateNumbers() {
  const featureNumbers = document.querySelectorAll(".feature-number");

  featureNumbers.forEach((number) => {
    const rect = number.getBoundingClientRect();

    if (
      rect.top < window.innerHeight &&
      !number.classList.contains("animated")
    ) {
      number.classList.add("animated");
      number.style.animation = "pulse 0.5s ease";
    }
  });
}

// Add pulse animation
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

window.addEventListener("scroll", animateNumbers);
document.addEventListener("DOMContentLoaded", animateNumbers);
