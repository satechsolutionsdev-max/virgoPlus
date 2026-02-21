// ===========================
// FAQ ACCORDION
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  if (faqQuestions.length > 0) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains("active");

        // Close all FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active");
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
          faqItem.classList.add("active");
        }
      });
    });
  }
});

// ===========================
// WARRANTY FORM VALIDATION
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const warrantyForm = document.getElementById("warrantyForm");

  if (warrantyForm) {
    warrantyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = this.querySelectorAll("input[required]");
      let isValid = true;
      let errorMessage = "";

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#cc0000";
        } else {
          input.style.borderColor = "";

          // Email validation
          if (input.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
              isValid = false;
              input.style.borderColor = "#cc0000";
              errorMessage = "Please enter a valid email address.";
            }
          }

          // Phone validation
          if (input.type === "tel") {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(input.value.replace(/\D/g, ""))) {
              isValid = false;
              input.style.borderColor = "#cc0000";
              errorMessage = "Please enter a valid 10-digit phone number.";
            }
          }
        }
      });

      if (isValid) {
        alert(
          "Thank you for registering your product! Your warranty has been activated. You will receive a confirmation email shortly.",
        );
        this.reset();
      } else {
        alert(errorMessage || "Please fill in all required fields correctly.");
      }
    });
  }
});

// ===========================
// SERVICE REQUEST FORM
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const serviceForm = document.getElementById("serviceForm");

  if (serviceForm) {
    serviceForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = this.querySelectorAll(
        "input[required], select[required], textarea[required]",
      );

      const fileInput = document.getElementById("invoiceUpload");

      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#cc0000";
        } else {
          input.style.borderColor = "";
        }
      });

      // File validation
      if (fileInput) {
        const file = fileInput.files[0];

        if (!file) {
          alert("Please upload your purchase invoice.");
          isValid = false;
        } else {
          const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
          const maxSize = 5 * 1024 * 1024; // 5MB

          if (!allowedTypes.includes(file.type)) {
            alert("Only JPG, PNG or PDF files are allowed.");
            isValid = false;
          }

          if (file.size > maxSize) {
            alert("File size must be less than 5MB.");
            isValid = false;
          }
        }
      }

      if (isValid) {
        alert(
          "Your service request has been submitted successfully! Our service team will contact you within 24 hours.\nService Request ID: SR" +
            Date.now(),
        );
        this.reset();
      }
    });
  }
});

// ===========================
// CONTACT FORM
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = this.querySelectorAll(
        "input[required], select[required], textarea[required]",
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "#cc0000";
        } else {
          input.style.borderColor = "";

          // Email validation
          if (input.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
              isValid = false;
              input.style.borderColor = "#cc0000";
            }
          }
        }
      });

      if (isValid) {
        alert(
          "Thank you for contacting us! We have received your message and will respond within 24 hours.",
        );
        this.reset();
      } else {
        alert("Please fill in all required fields correctly.");
      }
    });
  }
});

// ===========================
// SMOOTH SCROLL TO SECTIONS
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const supportCards = document.querySelectorAll(".support-card");

  supportCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Only if it's a link
      if (this.tagName === "A") {
        const targetId = this.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    });
  });
});

// ===========================
// FORM INPUT REAL-TIME VALIDATION
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const allInputs = document.querySelectorAll("input, textarea, select");

  allInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.hasAttribute("required") && !this.value.trim()) {
        this.style.borderColor = "#cc0000";
      } else {
        this.style.borderColor = "";
      }
    });

    input.addEventListener("input", function () {
      if (this.style.borderColor === "rgb(204, 0, 0)" && this.value.trim()) {
        this.style.borderColor = "";
      }
    });
  });
});
