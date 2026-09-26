const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

function handleContact(event) {
  event.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thanks! Please connect this form to your email service before publishing.";
  return false;
}
