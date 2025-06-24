// Theme Switcher
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
});

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


