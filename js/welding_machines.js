// Tab functionality
function openTab(evt, tabName) {
  var i, tabContent, tabButtons;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("active");
  }

  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Image gallery functionality
function changeImage(element, imageSrc) {
  document.getElementById("mainImage").src = imageSrc;

  var thumbnails = document.getElementsByClassName("thumbnail");
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove("active");
  }

  element.classList.add("active");
}

// ===============================
// Cursor Based Image Zoom
// ===============================
const zoomWrapper = document.querySelector(".zoom-wrapper");
const zoomImage = document.getElementById("mainImage");

zoomWrapper.addEventListener("mousemove", function (e) {
  const rect = zoomWrapper.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  zoomImage.style.transformOrigin = xPercent + "% " + yPercent + "%";
});

zoomWrapper.addEventListener("mouseenter", function () {
  zoomImage.style.transform = "scale(2)";
});

zoomWrapper.addEventListener("mouseleave", function () {
  zoomImage.style.transform = "scale(1)";
});

// ===============================
// Share Button
// ===============================
const shareBtn = document.getElementById("shareBtn");
const shareDropdown = document.getElementById("shareDropdown");

shareBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  shareDropdown.classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (!shareBtn.closest(".share-btn-wrapper").contains(e.target)) {
    shareDropdown.classList.remove("open");
  }
});

function getPageInfo() {
  return {
    url: window.location.href,
    title: document.title,
    text: "Check out the Virgo Plus ARC 200 HDI – Advanced IGBT Inverter DC MMA Welder.",
  };
}

document.getElementById("shareWhatsapp").addEventListener("click", function () {
  const { url, text } = getPageInfo();
  window.open(
    `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
    "_blank",
  );
  shareDropdown.classList.remove("open");
});

document.getElementById("shareFacebook").addEventListener("click", function () {
  const { url } = getPageInfo();
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    "_blank",
    "width=600,height=400",
  );
  shareDropdown.classList.remove("open");
});

document
  .getElementById("shareInstagram")
  .addEventListener("click", function () {
    alert(
      "To share on Instagram, copy the link and paste it in your story or DM.",
    );
    shareDropdown.classList.remove("open");
  });

document.getElementById("shareLinkedin").addEventListener("click", function () {
  const { url } = getPageInfo();
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    "_blank",
    "width=600,height=400",
  );
  shareDropdown.classList.remove("open");
});

document.getElementById("copyLink").addEventListener("click", function () {
  const { url } = getPageInfo();
  const label = document.getElementById("copyLinkText");
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      label.textContent = "✓ Copied!";
      setTimeout(() => {
        label.textContent = "Copy Link";
      }, 2000);
    });
  } else {
    const el = document.createElement("textarea");
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    label.textContent = "✓ Copied!";
    setTimeout(() => {
      label.textContent = "Copy Link";
    }, 2000);
  }
  shareDropdown.classList.remove("open");
});
