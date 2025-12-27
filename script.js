
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