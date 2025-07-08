// === Initialize particles ===
function initParticles(theme = "dark") {
  const particleColors = theme === "dark"
    ? ["#00f0ff", "#ff00f0"]
    : ["#00aaff", "#ff66cc"];
  const lineColor = theme === "dark" ? "#00f0ff" : "#00aaff";

  particlesJS("particles-js", {
    particles: {
      number: { value: 120, density: { enable: true, value_area: 800 } },
      color: { value: particleColors },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 120,
        color: lineColor,
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

initParticles(document.documentElement.getAttribute("data-theme") || "dark");

// === Update particles without destroying ===
function updateParticlesForTheme(theme) {
  if (!window.pJSDom || !pJSDom.length) return;
  const pJS = pJSDom[0].pJS;

 if (theme === "dark") {
  pJS.particles.color.value = ["#00f0ff", "#ff00f0"];
  pJS.particles.line_linked.color = "#00f0ff";
} else {
  pJS.particles.color.value = ["#0077aa", "#cc3399"]; // darker blue + muted pink
  pJS.particles.line_linked.color = "#0077aa";         // matching dark teal-blue
}


  pJS.fn.particlesRefresh();
}

// === Theme Toggle ===
document.getElementById("theme-toggle-small").addEventListener("click", function () {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);

  updateParticlesForTheme(newTheme);
});

// === Modal Handling ===
function openModal(title, description, imgSrc) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerHTML = description;
  document.getElementById("modal-image").src = imgSrc;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  modal.style.display = "none";
  modalContent.classList.remove("modal-show"); // <-- This line is important
}

// === Hamburger Menu Toggle ===
const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerMenu = document.getElementById("hamburger-menu-items");

// Toggle menu visibility
hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("show");
});

// Close menu when a link is clicked
document.querySelectorAll("#hamburger-menu-items a").forEach(link => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show");
  });
});
function retriggerTypewriter() {
  const el = document.getElementById("typewriter-text");

  if (!el) return;

  el.style.animation = "none";           // Remove animation
  el.offsetHeight;                       // Trigger reflow
  el.style.animation = null;             // Reapply animation
}

