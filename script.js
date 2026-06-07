const searchInput = document.getElementById('searchInput');
const navLinks = Array.from(document.querySelectorAll('.sidebar-list a'));
const sections = Array.from(document.querySelectorAll('.content-section'));
const backToTopButton = document.getElementById('backToTop');
const sidebarItems = Array.from(document.querySelectorAll('.sidebar-list li'));

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href').slice(1);
  const section = document.getElementById(targetId);

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

navLinks.forEach((link) => link.addEventListener('click', scrollToSection));

function updateActiveNav() {
  const offset = window.scrollY + window.innerHeight * 0.25;
  let activeId = sections[0].id;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    if (offset >= sectionTop) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', isActive);
  });
}

function filterSections() {
  const query = searchInput.value.trim().toLowerCase();
  let matchedCount = 0;

  sections.forEach((section, index) => {
    const title = section.querySelector('h2')?.textContent.toLowerCase() || '';
    const text = section.textContent.toLowerCase();
    const match = title.includes(query) || text.includes(query);

    if (query === '' || match) {
      section.style.display = 'block';
      sidebarItems[index].style.display = 'block';
      matchedCount += 1;
    } else {
      section.style.display = 'none';
      sidebarItems[index].style.display = 'none';
    }
  });

  if (matchedCount === 0) {
    if (!document.querySelector('.no-results')) {
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.textContent = 'No matching sections found. Please try another keyword.';
      document.querySelector('.content-area').prepend(noResults);
    }
  } else {
    const existing = document.querySelector('.no-results');
    if (existing) existing.remove();
  }
}

function toggleBackToTop() {
  if (window.scrollY > 360) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  updateActiveNav();
  toggleBackToTop();
});

searchInput.addEventListener('input', filterSections);

updateActiveNav();
