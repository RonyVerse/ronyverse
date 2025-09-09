// পেজ লোডে থিম রি-লোড
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

// থিম টগল ফাংশন
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  if (isDark) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// সার্চ টগল (আগের মতো)
const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchBox = document.getElementById('searchBox');

searchToggleBtn.addEventListener('click', () => {
  const isActive = searchBox.classList.toggle('active');
  searchToggleBtn.textContent = isActive ? '✖️' : '🔍';
  searchBox.setAttribute('aria-hidden', !isActive);
});



// api/tools
fetch('http://localhost:5000/api/tools')
      .then(res => res.json())
      .then(data => {
        console.log(data); // কনসোলে দেখাবে
        const container = document.getElementById('tools');
        data.forEach(tool => {
          const div = document.createElement('div');
          div.textContent = tool.name + " - " + tool.category;
          container.appendChild(div);
        });
      });