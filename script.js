// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Scroll reveal animation
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add("in-view"));
}

// Simple lightbox for gallery images
(function setupLightbox() {
  const images = document.querySelectorAll(".gallery img");
  if (!images.length) return;

  const backdrop = document.createElement("div");
  backdrop.className = "lightbox-backdrop";
  const img = document.createElement("img");
  img.className = "lightbox-image";
  backdrop.appendChild(img);
  document.body.appendChild(backdrop);

  images.forEach(el => {
    el.addEventListener("click", () => {
      img.src = el.src;
      backdrop.classList.add("open");
    });
  });

  backdrop.addEventListener("click", () => {
    backdrop.classList.remove("open");
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") backdrop.classList.remove("open");
  });
})();
