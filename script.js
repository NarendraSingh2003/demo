
document.addEventListener("DOMContentLoaded", function () {

  const openBtn  = document.getElementById("openFormBtn");
  const closeBtn = document.getElementById("closeFormBtn");
  const popup    = document.getElementById("popupForm");

  // Open popup
  openBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });

  // Close popup
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Close on outside click
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

});



window.addEventListener("load", function () {

  const counters = document.querySelectorAll(".count-up");
  console.log("Counters found:", counters.length); // DEBUG

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let current = 0;

    counter.textContent = "0";

    const increment = Math.max(1, Math.floor(target / 100));

    function updateCounter() {
      current += increment;

      if (current < target) {
        counter.textContent = current.toLocaleString();
        setTimeout(updateCounter, 16); // smoother than RAF
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    updateCounter();
  });

});



  document.querySelectorAll(".rating-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
      box.style.transition = "transform .3s ease";
    });
  });


  