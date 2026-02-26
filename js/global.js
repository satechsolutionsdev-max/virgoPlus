// ===========================
// MOBILE MENU TOGGLE
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  function closeMenu() {
    mobileToggle.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Close menu only on plain nav links — NOT on dropdown triggers
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      // Skip links that are inside a .nav-item (dropdown trigger)
      if (link.closest(".nav-item")) return;
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = mobileToggle.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        navMenu.classList.contains("active")
      ) {
        closeMenu();
      }
    });
  }
});

// ===========================
// DROPDOWN TOGGLE (all .nav-item dropdowns)
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".nav-item");

  dropdownItems.forEach(function (dropdown) {
    const navLink = dropdown.querySelector(":scope > .nav-link");
    if (!navLink) return;

    navLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // prevent outside-click handler firing
      // Close other open dropdowns first
      dropdownItems.forEach(function (other) {
        if (other !== dropdown) other.classList.remove("active");
      });
      dropdown.classList.toggle("active");
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    dropdownItems.forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });
});

// ===========================
// STICKY HEADER ON SCROLL
// ===========================
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// ===========================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Skip if it's just '#' or empty
    if (targetId === "#" || targetId === "") {
      e.preventDefault();
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===========================
// FORM SUBMISSION HANDLER (GENERIC)
// ===========================
function handleFormSubmit(formId, successMessage) {
  const form = document.getElementById(formId);

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validate form
      const inputs = form.querySelectorAll(
        "input[required], textarea[required], select[required]",
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#cc0000";
        } else {
          input.style.borderColor = "";
        }
      });

      if (isValid) {
        // Show success message
        alert(
          successMessage ||
            "Form submitted successfully! We will get back to you soon.",
        );
        form.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }
}

// ===========================
// LAZY LOADING IMAGES (IF NEEDED)
// ===========================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ===============================
// Universal Active Navbar
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // Home special case
    if (
      (currentPage === "" || currentPage === "/") &&
      linkPage === "index.html"
    ) {
      link.classList.add("active");
    }
  });
});
