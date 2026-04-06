const toggleBtn = document.getElementById("theme-toggle");

// default theme
document.body.classList.add("dark");

// load saved theme
if (localStorage.getItem("theme")) {
  document.body.className = localStorage.getItem("theme");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  // save theme
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});