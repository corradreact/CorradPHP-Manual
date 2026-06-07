const pages = [
  {
    category: 'Core Manual',
    items: [
      { title: 'Introduction', path: 'manual/introduction.md' },
      { title: 'Login Guide', path: 'manual/login-guide.md' },
      { title: 'Dashboard Overview', path: 'manual/dashboard-overview.md' },
      { title: 'Navigation Menu', path: 'manual/navigation-menu.md' },
      { title: 'Main Modules', path: 'manual/main-modules.md' },
      { title: 'Create New Record', path: 'manual/create-new-record.md' },
      { title: 'Edit Existing Record', path: 'manual/edit-existing-record.md' },
      { title: 'View Details', path: 'manual/view-details.md' },
      { title: 'Search and Filter', path: 'manual/search-and-filter.md' },
      { title: 'Upload Attachment', path: 'manual/upload-attachment.md' },
      { title: 'Approval Flow', path: 'manual/approval-flow.md' },
      { title: 'Reports', path: 'manual/reports.md' },
      { title: 'Common Errors', path: 'manual/common-errors.md' },
      { title: 'FAQ', path: 'manual/faq.md' },
      { title: 'Contact Support', path: 'manual/contact-support.md' }
    ]
  },
  {
    category: 'Profile',
    items: [
      { title: 'Profile Overview', path: 'manual/profile/overview.md' },
      { title: 'Edit Profile', path: 'manual/profile/edit-profile.md' },
      { title: 'Change Password', path: 'manual/profile/change-password.md' },
      { title: 'Forgot Password', path: 'manual/profile/forgot-password.md' },
      { title: 'Active Sessions', path: 'manual/profile/active-sessions.md' }
    ]
  }
];

const sidebarNav = document.getElementById('sidebarNav');
const contentBody = document.getElementById('contentBody');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');
let currentItem = null;

function createSidebar() {
  pages.forEach((group) => {
    const label = document.createElement('li');
    label.className = 'sidebar-category';
    label.textContent = group.category;
    sidebarNav.appendChild(label);

    group.items.forEach((item) => {
      const entry = document.createElement('li');
      entry.className = 'sidebar-item';
      const link = document.createElement('a');
      link.href = #;
      link.textContent = item.title;
      link.dataset.path = item.path;
      link.addEventListener('click', handleNavClick);
      entry.appendChild(link);
      sidebarNav.appendChild(entry);
    });
  });
}

function handleNavClick(event) {
  event.preventDefault();
  const link = event.currentTarget;
  loadPage(link.dataset.path, link.href.split('#')[1]);
}

function setActiveLink(hash) {
  const links = sidebarNav.querySelectorAll('a');
  links.forEach((link) => {
    const isActive = link.href.endsWith(#);
    link.classList.toggle('active', isActive);
    if (isActive) {
      currentItem = link;
    }
  });
}

async function loadPage(path, hash) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Page not found');
    }
    const text = await response.text();
    contentBody.innerHTML = convertMarkdown(text);
    document.title = PHP84 CORRAD User Manual — ;
    setActiveLink(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    contentBody.innerHTML = <div class="no-content">Halaman tidak boleh dimuatkan. Sila semak sambungan atau struktur fail.</div>;
  }
}

function formatInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong></strong>')
    .replace(/\*(.*?)\*/g, '<em></em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="" target="_blank" rel="noreferrer"></a>');
}

function convertMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let listType = null;

  const closeList = () => {
    if (listType === 'ul') html += '</ul>';
    if (listType === 'ol') html += '</ol>';
    listType = null;
  };

  lines.forEach((line) => {
    if (/^#{1,6}\s/.test(line)) {
      closeList();
      const level = line.match(/^#+/)[0].length;
      const content = line.slice(level).trim();
      html += <h></h>;
    } else if (/^>\s/.test(line)) {
      closeList();
      html += <blockquote></blockquote>;
    } else if (/^\d+\.\s/.test(line)) {
      if (listType !== 'ol') {
        closeList();
        html += '<ol>';
        listType = 'ol';
      }
      html += <li></li>;
    } else if (/^[-*]\s/.test(line)) {
      if (listType !== 'ul') {
        closeList();
        html += '<ul>';
        listType = 'ul';
      }
      html += <li></li>;
    } else if (line.trim() === '') {
      closeList();
    } else {
      closeList();
      html += <p></p>;
    }
  });

  closeList();
  return html;
}

function filterSidebar() {
  const query = searchInput.value.trim().toLowerCase();
  const items = sidebarNav.querySelectorAll('.sidebar-item');
  items.forEach((item) => {
    const link = item.querySelector('a');
    const text = link.textContent.toLowerCase();
    const match = text.includes(query);
    item.style.display = match || query === '' ? 'block' : 'none';
  });
}

function checkHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) {
    const first = sidebarNav.querySelector('a');
    if (first) {
      const path = first.dataset.path;
      const currentHash = first.href.split('#')[1];
      loadPage(path, currentHash);
      history.replaceState(null, '', #);
    }
    return;
  }
  const target = sidebarNav.querySelector([href$="#"]);
  if (target) {
    loadPage(target.dataset.path, hash);
  }
}

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 320 ? 'block' : 'none';
});

window.addEventListener('hashchange', checkHash);
searchInput.addEventListener('input', filterSidebar);

createSidebar();
checkHash();
