
// Modal Handling
function openModal(title, description, imgSrc) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerHTML = description; // Use innerHTML for formatted content
  document.getElementById("modal-image").src = imgSrc;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// Open from ID
function openProjectModal(projectId, imgSrc) {
  openModal("Project Details", projectDescriptions[projectId], imgSrc);
}
// Toggle hamburger dropdown menu
document.getElementById("hamburger-btn").addEventListener("click", function () {
  const menu = document.getElementById("hamburger-menu-items");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});

// Toggle theme inside menu
document.getElementById("theme-toggle-small").addEventListener("click", function () {
  const html = document.documentElement;
  const newTheme = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
});

