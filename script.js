const toggleBtn = document.getElementById("theme-toggle");

// load saved theme
if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  }
});