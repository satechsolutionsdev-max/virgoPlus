// ===========================
// DEALERSHIP APPLICATION FORM
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const dealershipForm = document.getElementById("dealershipForm");

  if (dealershipForm) {
    dealershipForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = this.querySelectorAll(
        "input[required], select[required], textarea[required]",
      );
      let isValid = true;
      let errorMessages = [];

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
              errorMessages.push("Please enter a valid email address.");
            }
          }

          // Phone validation
          if (input.type === "tel") {
            const phoneRegex = /^[0-9]{10}$/;
            const cleanPhone = input.value.replace(/\D/g, "");
            if (cleanPhone.length !== 10) {
              isValid = false;
              input.style.borderColor = "#cc0000";
              errorMessages.push("Please enter a valid 10-digit phone number.");
            }
          }

          // Number validation for years in business
          if (input.type === "number") {
            const years = parseInt(input.value);
            if (isNaN(years) || years < 0 || years > 100) {
              isValid = false;
              input.style.borderColor = "#cc0000";
              errorMessages.push("Please enter valid years in business.");
            }
          }
        }
      });

      if (isValid) {
        alert(
          "Thank you for your interest in partnering with Virgo Plus! Your dealership application has been submitted successfully. Our business development team will review your application and contact you within 3-5 business days.\n\nApplication Reference: DA" +
            Date.now(),
        );
        this.reset();

        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const uniqueErrors = [...new Set(errorMessages)];
        alert(
          uniqueErrors.length > 0
            ? uniqueErrors.join("\n")
            : "Please fill in all required fields correctly.",
        );
      }
    });
  }
});

// ===========================
// DEALER CARD ANIMATIONS
// ===========================
function animateDealerCards() {
  const dealerCards = document.querySelectorAll(
    ".dealer-card, .service-feature, .contact-box",
  );

  dealerCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const cardVisible = 100;

    if (cardTop < window.innerHeight - cardVisible) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

// Initialize cards for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedCards = document.querySelectorAll(
    ".dealer-card, .service-feature, .contact-box",
  );

  animatedCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
  });

  // Initial check
  setTimeout(animateDealerCards, 100);
});

window.addEventListener("scroll", animateDealerCards);

// ===========================
// OFFICE MAP ANIMATION
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const officeCard = document.querySelector(".office-card");

  if (officeCard) {
    officeCard.style.opacity = "0";
    officeCard.style.transform = "translateY(30px)";
    officeCard.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    setTimeout(() => {
      officeCard.style.opacity = "1";
      officeCard.style.transform = "translateY(0)";
    }, 200);
  }
});

// ===========================
// FORM INPUT VALIDATION (REAL-TIME)
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll(
    "#dealershipForm input, #dealershipForm select, #dealershipForm textarea",
  );

  formInputs.forEach((input) => {
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
// INDIA MAP INTERACTION (OPTIONAL)
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const mapCities = document.querySelectorAll(".india-map circle");

  mapCities.forEach((city) => {
    city.style.cursor = "pointer";

    city.addEventListener("mouseenter", function () {
      this.setAttribute("r", parseFloat(this.getAttribute("r")) + 2);
      this.style.transition = "all 0.3s ease";
    });

    city.addEventListener("mouseleave", function () {
      this.setAttribute("r", parseFloat(this.getAttribute("r")) - 2);
    });
  });
});

// ===========================
// SCROLL TO DEALERSHIP FORM
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;

  if (hash === "#dealership") {
    setTimeout(() => {
      const dealershipSection = document.getElementById("dealership");
      if (dealershipSection) {
        const headerOffset = 80;
        const elementPosition = dealershipSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 500);
  }
});

// ===========================
// HEAD OFFICE INTERACTIVE MAP
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const officeLat = 17.4432;
  const officeLng = 78.4983;

  // Initialize map centered on India to show full country context
  const map = L.map("head-office-map", {
    center: [20.5937, 78.9629],
    zoom: 5,
    scrollWheelZoom: false,
    zoomControl: true,
  });

  // OpenStreetMap tiles in English (Carto tiles show English labels)
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
      attribution: "",
      maxZoom: 19,
    },
  ).addTo(map);

  // Remove attribution control completely
  map.attributionControl.remove();

  // Custom Red Location Pin Icon
  const redPinIcon = L.divIcon({
    className: "",
    html: `
                    <div style="position:relative; width:36px; height:48px; cursor:pointer; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35));">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 48" width="36" height="48">
                            <path d="M18 0C8.059 0 0 8.059 0 18c0 13.5 18 30 18 30S36 31.5 36 18C36 8.059 27.941 0 18 0z" fill="#e53e3e"/>
                            <path d="M18 2C9.163 2 2 9.163 2 18c0 12.5 16 28 16 28S34 30.5 34 18C34 9.163 26.837 2 18 2z" fill="#fc5c5c"/>
                            <circle cx="18" cy="18" r="8" fill="white" opacity="0.95"/>
                            <circle cx="18" cy="18" r="5" fill="#c53030"/>
                        </svg>
                        <div style="
                            position:absolute;
                            top:-6px;
                            left:50%;
                            transform:translateX(-50%);
                            background:#e53e3e;
                            color:white;
                            font-size:9px;
                            font-weight:700;
                            padding:2px 5px;
                            border-radius:3px;
                            white-space:nowrap;
                            font-family:sans-serif;
                            letter-spacing:0.3px;
                        ">HEAD OFFICE</div>
                    </div>`,
    iconSize: [36, 54],
    iconAnchor: [18, 48],
    popupAnchor: [0, -50],
  });

  // Place red marker at office location
  const marker = L.marker([officeLat, officeLng], { icon: redPinIcon }).addTo(
    map,
  );

  // Popup content
  marker.bindPopup(
    `
                <div style="font-family: sans-serif; min-width: 200px; padding: 4px 0;">
                    <strong style="color:#0066cc; font-size:0.95rem;">Virgo Solutions India LLP</strong><br><br>
                    <span style="color:#374151; font-size:0.85rem; line-height:1.6;">
                        1st Floor, 5-5-80, SRI Srinivasa<br>
                        Commercial Complex,<br>
                        Ranigunj, Secunderabad - 500003<br>
                        <strong>Telangana, India</strong>
                    </span><br><br>
                    <a href="https://www.google.com/maps?q=17.4432,78.4983" target="_blank"
                       style="color:#0066cc; font-size:0.82rem; text-decoration:none; font-weight:600;">
                       Open in Google Maps &rarr;
                    </a>
                </div>
            `,
    { maxWidth: 250 },
  );

  // Click marker -> fly + zoom in smoothly
  marker.on("click", function () {
    map.flyTo([officeLat, officeLng], 16, {
      animate: true,
      duration: 1.8,
      easeLinearity: 0.25,
    });
    this.openPopup();
  });

  // Double-click map -> zoom back out to India view
  map.on("dblclick", function () {
    map.flyTo([20.5937, 78.9629], 5, {
      animate: true,
      duration: 1.5,
    });
  });

  // Open popup on load after short delay
  setTimeout(function () {
    //marker.openPopup(); //Auto pop --> if you want auto pop the remove the comment(Dev--Shuddhodan Ingale)
  }, 800);
});

// ===========================
// PAN-INDIA NETWORK MAP
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("pan-india-map")) return;

  const panMap = L.map("pan-india-map", {
    center: [22.5, 82.0],
    zoom: 5,
    scrollWheelZoom: false,
    zoomControl: true,
    doubleClickZoom: false,
  });

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    { attribution: "", maxZoom: 19 },
  ).addTo(panMap);

  panMap.attributionControl.remove();

  function makeRedIcon(label) {
    return L.divIcon({
      className: "",
      html: `<div style="position:relative;width:32px;height:44px;cursor:pointer;filter:drop-shadow(0 3px 5px rgba(0,0,0,0.3))">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 44" width="32" height="44">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 28 16 28S32 28 32 16C32 7.163 24.837 0 16 0z" fill="#e53e3e"/>
          <path d="M16 2C8.268 2 2 8.268 2 16c0 11 14 26 14 26S30 27 30 16C30 8.268 23.732 2 16 2z" fill="#fc5c5c"/>
          <circle cx="16" cy="16" r="7" fill="white" opacity="0.95"/>
          <circle cx="16" cy="16" r="4.5" fill="#c53030"/>
        </svg>
        <div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#e53e3e;color:white;font-size:8px;font-weight:700;padding:2px 5px;border-radius:3px;white-space:nowrap;font-family:sans-serif;">${label}</div>
      </div>`,
      iconSize: [32, 52],
      iconAnchor: [16, 44],
      popupAnchor: [0, -46],
    });
  }

  function makeBlueIcon(label) {
    return L.divIcon({
      className: "",
      html: `<div style="position:relative;width:30px;height:42px;cursor:pointer;filter:drop-shadow(0 3px 5px rgba(0,0,0,0.3))">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 42" width="30" height="42">
          <path d="M15 0C6.716 0 0 6.716 0 15c0 11 15 27 15 27S30 26 30 15C30 6.716 23.284 0 15 0z" fill="#0066cc"/>
          <path d="M15 2C7.82 2 2 7.82 2 15c0 10 13 24 13 24S28 25 28 15C28 7.82 22.18 2 15 2z" fill="#3385d6"/>
          <circle cx="15" cy="15" r="6.5" fill="white" opacity="0.95"/>
          <circle cx="15" cy="15" r="4" fill="#0052a3"/>
        </svg>
        <div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);background:#0066cc;color:white;font-size:8px;font-weight:700;padding:2px 5px;border-radius:3px;white-space:nowrap;font-family:sans-serif;">${label}</div>
      </div>`,
      iconSize: [30, 50],
      iconAnchor: [15, 42],
      popupAnchor: [0, -44],
    });
  }

  function popupHtml(title, subtitle, address, gmapsUrl) {
    return `<div style="font-family:sans-serif;min-width:210px;padding:4px 0;">
      <strong style="color:#0066cc;font-size:0.92rem;">${title}</strong><br>
      <span style="color:#9ca3af;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">${subtitle}</span><br><br>
      <span style="color:#374151;font-size:0.83rem;line-height:1.7;">${address}</span><br><br>
      <a href="${gmapsUrl}" target="_blank" style="color:#0066cc;font-size:0.82rem;text-decoration:none;font-weight:600;">Open in Google Maps &rarr;</a>
    </div>`;
  }

  const locations = [
    {
      lat: 17.4432,
      lng: 78.4983,
      type: "red",
      label: "HEAD OFFICE",
      title: "Virgo Solutions India LLP",
      subtitle: "Head Office",
      address:
        "1st Floor, 5-5-80, SRI Srinivasa Commercial Complex,<br>Ranigunj, Secunderabad - 500003<br><strong>Telangana, India</strong>",
      gmaps: "https://www.google.com/maps?q=17.4432,78.4983",
    },
    {
      lat: 19.296,
      lng: 73.0631,
      type: "blue",
      label: "Mumbai",
      title: "Mumbai & Maharashtra",
      subtitle: "West India",
      address:
        "Godown No 4, J3, Ground Floor, Kasturi Complex,<br>Old Agra Road, Anjur Phata, Rahanal Village,<br>Bhiwandi - 421302, Maharashtra",
      gmaps: "https://www.google.com/maps?q=19.2960,73.0631",
    },
    {
      lat: 28.6842,
      lng: 77.3066,
      type: "blue",
      label: "Delhi NCR",
      title: "Delhi NCR",
      subtitle: "North India",
      address:
        "485/A/7b, Dilshad Garden Industrial Area,<br>Ahinsa Compound, G.T. Road,<br>New Delhi - 110095",
      gmaps: "https://www.google.com/maps?q=28.6842,77.3066",
    },
    {
      lat: 21.2514,
      lng: 81.6296,
      type: "blue",
      label: "Raipur",
      title: "Raipur & Chhattisgarh",
      subtitle: "Central India",
      address:
        "Shop No 1, Mahalaxmi Tower,<br>Opp Deshbandhu School Gali, Kelkar Para,<br>Raipur - 492001, Chhattisgarh",
      gmaps: "https://www.google.com/maps?q=21.2514,81.6296",
    },
    {
      lat: 22.7196,
      lng: 75.8577,
      type: "blue",
      label: "Indore",
      title: "Indore & Madhya Pradesh",
      subtitle: "Central India",
      address:
        "Shop No Lg-6, Labh Shri Complex,<br>Mall Godam Road Near New Siyaganj,<br>Indore - 452007, Madhya Pradesh",
      gmaps: "https://www.google.com/maps?q=22.7196,75.8577",
    },
    {
      lat: 22.5726,
      lng: 88.3639,
      type: "blue",
      label: "Kolkata",
      title: "Kolkata & West Bengal",
      subtitle: "East India",
      address:
        "1st Floor, 7 No. Swallow Lane 233,<br>Old Chaina Bazar,<br>Kolkata - 700001, West Bengal",
      gmaps: "https://www.google.com/maps?q=22.5726,88.3639",
    },
    {
      lat: 22.995,
      lng: 72.601,
      type: "blue",
      label: "Ahmedabad",
      title: "Ahmedabad & Gujarat",
      subtitle: "West India",
      address:
        "Shop No A17, Ground Floor, Tejendra Complex,<br>Opp. CMC, Odhav,<br>Ahmedabad - 382415, Gujarat",
      gmaps: "https://www.google.com/maps?q=22.9950,72.6010",
    },
  ];

  locations.forEach(function (loc) {
    const icon =
      loc.type === "red" ? makeRedIcon(loc.label) : makeBlueIcon(loc.label);
    const marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(panMap);
    marker.bindPopup(
      popupHtml(loc.title, loc.subtitle, loc.address, loc.gmaps),
      { maxWidth: 260 },
    );
    marker.on("click", function () {
      panMap.flyTo([loc.lat, loc.lng], 13, { animate: true, duration: 1.5 });
      this.openPopup();
    });
  });

  panMap.on("dblclick", function () {
    panMap.flyTo([22.5, 82.0], 5, { animate: true, duration: 1.5 });
  });
});
