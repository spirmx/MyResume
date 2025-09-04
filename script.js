// Sticky profile toggle on scroll
const stickyProfile = document.getElementById("stickyProfile");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    stickyProfile.classList.add("show");
  } else {
    stickyProfile.classList.remove("show");
  }
});
// Modal QR
const modal = document.getElementById("qrModal");
const btnOpen = document.getElementById("openModal");
const btnClose = document.getElementById("closeModal");

btnOpen.addEventListener("click", () => modal.style.display = "flex");
btnClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
