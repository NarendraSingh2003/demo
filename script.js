// ================= FINAL JS ONLY =================

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- FAST HERO SLIDER ---------- */
  const heroCarousel = document.querySelector("#heroCarousel");

  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 1800,   // fast auto slide (ms)
      ride: "carousel",
      pause: false,     // do not stop on hover
      wrap: true,       // infinite loop
      touch: true       // mobile swipe
    });
  }

  /* ---------- FAST ACTIVE MENU ON SCROLL ---------- */
  const navLinks = document.querySelectorAll(".main-menu .nav-link");
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      root: null,
      rootMargin: "-35% 0px -50% 0px", // early trigger
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));

});

