// dark mode
const toggle = document.querySelector('.toggle-mode');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
// Toggle search box
  const searchToggleBtn = document.getElementById("searchToggleBtn");
  const searchBox = document.getElementById("searchBox");

  searchToggleBtn.addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });