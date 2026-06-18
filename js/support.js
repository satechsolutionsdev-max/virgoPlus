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

// ===========================
// PRODUCT MODEL SEARCHABLE DROPDOWN
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("modelSelect");
  if (!wrapper) return;

  const input = document.getElementById("modelSelectInput");
  const hiddenInput = document.getElementById("productModel");
  const dropdown = document.getElementById("modelSelectList");

  const MODEL_DATA = {
    "ARC Welding Machines": [
      "ARC 200 HDI",
      "ARC 200I",
      "ARC 250D",
      "ARC 315D",
      "ARC 400 CI2",
      "ARC 400 G2",
      "ARC 400 GI",
      "ARC 400 HDIJ",
      "ARC 400 IJ2",
      "ARC 400GT",
      "ARC 400HDC2",
      "ARC 630-2T",
      "ARC 630GIJ",
      "ARC 1000I",
    ],
    "CNC Machines": ["P CNC 1530", "PG CNC 2530", "PG PP CNC 1530"],
    "Plasma Cutting Machines": [
      "CUT 40S",
      "CUT 60T",
      "CUT 60TM",
      "CUT 80",
      "CUT 100U2",
      "CUT 100M",
      "CUT 160IJ",
      "CUT 200CNC",
      "CUT 300CNC",
    ],
    "Laser Welding Machines": [
      "Hand Laser Welding Machine",
      "HLW1500W",
      "HLW2000W",
      "HLW3000W",
    ],
    "MIG Welding Machines": [
      "MIG 250IF",
      "MIG 250IS",
      "MIG 250WT",
      "MIG 300D",
      "MIG 400HDIJ",
      "MIG 400LG",
      "MIG 400VIJ2",
      "MIG 500 VIJ2",
      "MIG 500HDIJ",
      "Mig 500pulse",
      "MIG 630 HDIJ",
      "MIG 630 VIJ2",
    ],
    "SAW Welding Machines": ["SAW 1200IJ", "SAW 1250IJ"],
    "Stud Welding Machines": ["STUD 2500", "STUD 2500A"],
    "TIG Welding Machines": [
      "TIG 200 A",
      "TIG 200P AC_DC",
      "TIG 250D",
      "TIG 250P AC_DC",
      "TIG 300PT",
      "TIG 315P AC_DC",
      "TIG 400IJ",
      "TIG 400P AC_DC",
      "TIG 400P_DC",
      "TIG 500 AP AC_DC",
      "TIG 500P AC_DC",
      "TIG 630IJ",
    ],
    "Welding Accessories": ["ES 301", "ES 351S", "ES 401S", "ES 451", "WP 261"],
  };

  let activeIndex = -1;
  let visibleOptions = [];

  function highlightMatch(text, query) {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      text.slice(0, idx) +
      "<mark>" +
      text.slice(idx, idx + query.length) +
      "</mark>" +
      text.slice(idx + query.length)
    );
  }

  function renderDropdown(query = "") {
    dropdown.innerHTML = "";
    visibleOptions = [];
    const q = query.trim().toLowerCase();

    Object.entries(MODEL_DATA).forEach(([groupName, models]) => {
      const matches = models.filter((m) => m.toLowerCase().includes(q));
      if (matches.length === 0) return;

      const groupEl = document.createElement("div");
      groupEl.className = "model-select-group";

      const groupLabel = document.createElement("div");
      groupLabel.className = "model-select-group-label";
      groupLabel.textContent = groupName;
      groupEl.appendChild(groupLabel);

      matches.forEach((model) => {
        const optEl = document.createElement("div");
        optEl.className = "model-select-option";
        optEl.setAttribute("role", "option");
        optEl.innerHTML = highlightMatch(model, query);
        optEl.dataset.value = model;

        optEl.addEventListener("click", () => selectModel(model));
        groupEl.appendChild(optEl);
        visibleOptions.push(optEl);
      });

      dropdown.appendChild(groupEl);
    });

    if (visibleOptions.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "model-select-empty";
      noResults.textContent = "No matching models found";
      dropdown.appendChild(noResults);
    }

    activeIndex = -1;
  }

  function selectModel(model) {
    input.value = model;
    hiddenInput.value = model;
    closeDropdown();
    input.style.borderColor = "";
  }

  function openDropdown() {
    wrapper.classList.add("open");
    input.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    wrapper.classList.remove("open");
    input.setAttribute("aria-expanded", "false");
    activeIndex = -1;
  }

  function setActive(index) {
    visibleOptions.forEach((opt) => opt.classList.remove("active"));
    if (index >= 0 && index < visibleOptions.length) {
      visibleOptions[index].classList.add("active");
      visibleOptions[index].scrollIntoView({ block: "nearest" });
      activeIndex = index;
    }
  }

  input.addEventListener("focus", function () {
    renderDropdown(input.value === hiddenInput.value ? "" : input.value);
    openDropdown();
  });

  input.addEventListener("input", function () {
    hiddenInput.value = "";
    renderDropdown(input.value);
    openDropdown();
  });

  input.addEventListener("keydown", function (e) {
    if (!wrapper.classList.contains("open")) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(Math.min(activeIndex + 1, visibleOptions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(Math.max(activeIndex - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && visibleOptions[activeIndex]) {
        selectModel(visibleOptions[activeIndex].dataset.value);
      }
    } else if (e.key === "Escape") {
      closeDropdown();
    }
  });

  document.addEventListener("click", function (e) {
    if (!wrapper.contains(e.target)) {
      closeDropdown();
      // Revert text if nothing valid was selected
      if (input.value !== hiddenInput.value) {
        input.value = hiddenInput.value;
      }
    }
  });
});
