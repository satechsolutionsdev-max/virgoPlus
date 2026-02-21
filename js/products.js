// ===========================
// PRODUCT CATEGORY FILTER
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productSections = document.querySelectorAll(".product-section");

  if (filterButtons.length > 0 && productSections.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Filter product sections
        productSections.forEach((section) => {
          const category = section.getAttribute("data-category");

          if (filterValue === "all") {
            section.classList.remove("hidden");
            section.style.display = "block";
          } else if (category === filterValue) {
            section.classList.remove("hidden");
            section.style.display = "block";
          } else {
            section.classList.add("hidden");
            section.style.display = "none";
          }
        });

        // Scroll to first visible product section
        if (filterValue !== "all") {
          const firstVisibleSection = document.querySelector(
            `.product-section[data-category="${filterValue}"]`,
          );
          if (firstVisibleSection) {
            setTimeout(() => {
              const headerOffset = 100;
              const elementPosition = firstVisibleSection.offsetTop;
              const offsetPosition = elementPosition - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }, 100);
          }
        }
      });
    });
  }
});

// // ===========================
// // PRODUCT DETAILS BUTTON
// // ===========================
// document.addEventListener("DOMContentLoaded", function () {
//   const detailButtons = document.querySelectorAll(".btn-details");

//   detailButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       const productCard = this.closest(".product-card");
//       const productName = productCard.querySelector("h3").textContent;

//       // In a real implementation, this would open a modal or navigate to product details
//       alert(
//         `For detailed specifications and pricing of ${productName}, please contact our sales team at sales@virgoplus.com or call +91-XXXX-XXXXXX`,
//       );
//     });
//   });
// });

// ===========================
// SCROLL TO CATEGORY FROM URL HASH
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;

  if (hash) {
    const categoryId = hash.substring(1); // Remove the '#'
    const filterButton = document.querySelector(
      `.filter-btn[data-filter="${categoryId}"]`,
    );

    if (filterButton) {
      // Trigger the filter
      filterButton.click();
    } else {
      // Direct scroll to section if it exists
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = targetSection.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 500);
      }
    }
  }
});

// ===========================
// PRODUCT CARD ANIMATION ON SCROLL
// ===========================
function animateProductCards() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardVisible = 100;

    if (cardTop < window.innerHeight - cardVisible) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initialize product cards for animation
document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
  });

  // Initial check
  setTimeout(animateProductCards, 100);
});

window.addEventListener("scroll", animateProductCards);
