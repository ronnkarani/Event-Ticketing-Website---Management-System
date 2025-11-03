// ========================== MAIN.JS (Fixed) ==========================
window.HERO_IMAGES = [
  "/static/images/hero1.png",
  "/static/images/hero2.png",
  "/static/images/hero4.png"
];

document.addEventListener("DOMContentLoaded", () => {
  // HERO ROTATION
  const heroSection = document.getElementById("hero");
  let heroIndex = 0;
  function rotateHeroBackground() {
    if (!heroSection) return;
    heroSection.style.setProperty(
      "--hero-bg",
      `url(${window.HERO_IMAGES[heroIndex]})`
    );
    heroSection.style.backgroundImage = `url(${window.HERO_IMAGES[heroIndex]})`;
    heroIndex = (heroIndex + 1) % window.HERO_IMAGES.length;
  }
  rotateHeroBackground();
  setInterval(rotateHeroBackground, 6000);

  // NAVBAR / HAMBURGER
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const mobileContainer = document.getElementById("mobileMenuContainer");

  if (hamburger && navLinks && mobileContainer) {
    // Clone navLinks for mobile
    const mobileMenu = navLinks.cloneNode(true);
    mobileMenu.id = "mobileMenu";
    mobileMenu.classList.add("mobile-menu");
    mobileContainer.appendChild(mobileMenu);

    // Toggle visibility
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("open");
      mobileContainer.classList.toggle("active");
    });
  }

  // Simple dropdown toggle (desktop)
  document.querySelectorAll(".has-dropdown").forEach(drop => {
    const button = drop.querySelector(".drop-toggle");
    const menu = drop.querySelector(".dropdown");
    if (button && menu) {
      button.addEventListener("click", e => {
        e.stopPropagation();
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      });
    }
  });

  // Close dropdowns on outside click
  document.addEventListener("click", e => {
    if (!e.target.closest(".has-dropdown")) {
      document.querySelectorAll(".dropdown").forEach(d => (d.style.display = "none"));
    }
  });
});
