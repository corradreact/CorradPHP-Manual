const sidebarNav = document.getElementById('sidebarNav');
const contentBody = document.getElementById('contentBody');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');

const pages = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Introduction', path: 'docs/getting-started/introduction.md' },
      { title: 'How to Login', path: 'docs/getting-started/login.md' },
      { title: 'Dashboard Overview', path: 'docs/getting-started/dashboard.md' },
      { title: 'Sidebar Navigation Overview', path: 'docs/getting-started/sidebar-navigation.md' }
    ]
  },
  {
    category: 'System Administrator',
    items: [
      { title: 'Overview', path: 'docs/system-administrator/overview.md' },
      { title: 'Active Sessions', path: 'docs/system-administrator/active-sessions.md' }
    ]
  },
  {
    category: 'System Settings',
    items: [
      { title: 'Overview', path: 'docs/system-settings/overview.md' },
      { title: 'System Configuration', path: 'docs/system-settings/system-configuration.md' },
      { title: 'Database Connections', path: 'docs/system-settings/database-connections.md' },
      { title: 'Reference Data', path: 'docs/system-settings/reference-data.md' },
      { title: 'LDAP Editor', path: 'docs/system-settings/ldap-editor.md' },
      { title: 'JWT Server', path: 'docs/system-settings/jwt-server.md' }
    ]
  },
  {
    category: 'Editors & Tools',
    items: [
      { title: 'Overview', path: 'docs/editors-tools/overview.md' },
      { title: 'Message Editor', path: 'docs/editors-tools/message-editor.md' },
      { title: 'Translation Editor', path: 'docs/editors-tools/translation-editor.md' },
      { title: 'SMTP Editor', path: 'docs/editors-tools/smtp-editor.md' },
      { title: 'Migration Manager', path: 'docs/editors-tools/migration-manager.md' }
    ]
  },
  {
    category: 'Pages & Navigation',
    items: [
      { title: 'Overview', path: 'docs/pages-navigation/overview.md' },
      { title: 'Menu Editor', path: 'docs/pages-navigation/menu-editor.md' },
      { title: 'Page Studio', path: 'docs/pages-navigation/page-studio.md' },
      { title: 'Page Editor', path: 'docs/pages-navigation/page-editor.md' },
      { title: 'Control / Trigger Editor', path: 'docs/pages-navigation/control-trigger-editor.md' }
    ]
  },
  {
    category: 'Logic & API',
    items: [
      { title: 'Overview', path: 'docs/logic-api/overview.md' },
      { title: 'API Configuration', path: 'docs/logic-api/api-configuration.md' },
      { title: 'Business Logic', path: 'docs/logic-api/business-logic.md' },
      { title: 'Integration Settings', path: 'docs/logic-api/integration-settings.md' }
    ]
  },
  {
    category: 'Data & Monitoring',
    items: [
      { title: 'Overview', path: 'docs/data-monitoring/overview.md' },
      { title: 'Logs', path: 'docs/data-monitoring/logs.md' },
      { title: 'Monitoring Dashboard', path: 'docs/data-monitoring/monitoring-dashboard.md' },
      { title: 'Audit Trail', path: 'docs/data-monitoring/audit-trail.md' }
    ]
  },
  {
    category: 'User Administrator',
    items: [
      { title: 'Overview', path: 'docs/user-administrator/overview.md' },
      { title: 'User Management', path: 'docs/user-administrator/user-management.md' },
      { title: 'Roles & Permissions', path: 'docs/user-administrator/roles-permissions.md' },
      { title: 'Access Control', path: 'docs/user-administrator/access-control.md' }
    ]
  },
  {
    category: 'Showcase',
    items: [
      { title: 'Overview', path: 'docs/showcase/overview.md' },
      { title: 'Example Pages', path: 'docs/showcase/example-pages.md' },
      { title: 'Demo Modules', path: 'docs/showcase/demo-modules.md' }
    ]
  },
  {
    category: 'FAQ & Support',
    items: [
      { title: 'Common Issues', path: 'docs/faq-support/common-issues.md' },
      { title: 'Troubleshooting', path: 'docs/faq-support/troubleshooting.md' },
      { title: 'Contact Support', path: 'docs/faq-support/contact-support.md' }
    ]
  }
];

const allLinks = [];

function createSidebar() {
  pages.forEach((section) => {
    const label = document.createElement('li');
    label.className = 'sidebar-category';
    label.textContent = section.category;
    sidebarNav.appendChild(label);

    section.items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'sidebar-item';
      const a = document.createElement('a');
      const hash = item.path.replace(/^docs\//, '').replace(/\.md$/, '');
      a.href = `#${hash}`;
      a.textContent = item.title;
      a.dataset.path = item.path;
      a.addEventListener('click', handleNavClick);
      li.appendChild(a);
      sidebarNav.appendChild(li);
      allLinks.push(a);
    });
  });
}

function handleNavClick(event) {
  event.preventDefault();
  const link = event.currentTarget;
  const index = allLinks.indexOf(link);
  const hash = link.getAttribute('href').replace('#', '');
  loadPage(link.dataset.path, index, hash);
}

function updateActiveLink(currentHash) {
  allLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentHash}`;
    link.classList.toggle('active', isActive);
  });
}

function renderPagination(currentIndex) {
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;
  pagination.innerHTML = '';

  const createButton = (label, index) => {
    const button = document.createElement('button');
    button.textContent = label;
    if (index < 0 || index >= allLinks.length) {
      button.disabled = true;
    } else {
      button.addEventListener('click', () => {
        const link = allLinks[index];
        const hash = link.getAttribute('href').replace('#', '');
        loadPage(link.dataset.path, index, hash);
      });
    }
    return button;
  };

  pagination.appendChild(createButton('Previous', previousIndex));
  pagination.appendChild(createButton('Next', nextIndex));
}

async function loadPage(path, index, hash) {
  contentBody.innerHTML = '<div class="loading-card">Memuatkan manual...</div>';
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Page not found');
    }
    const markdown = await response.text();
    const html = marked.parse(markdown);
    contentBody.innerHTML = html;
    updateActiveLink(hash);
    renderPagination(index);
    window.location.hash = hash;
    document.title = `PHP84 CORRAD User Manual | ${allLinks[index]?.textContent || 'Manual'}`;
  } catch (error) {
    contentBody.innerHTML = '<div class="no-content">Halaman tidak dapat dimuatkan. Sila gunakan Live Server atau semak struktur fail.</div>';
    pagination.innerHTML = '';
  }
}

function loadInitialPage() {
  const hash = window.location.hash.replace('#', '');
  const targetLink = allLinks.find((link) => link.getAttribute('href') === `#${hash}`);
  if (targetLink) {
    const index = allLinks.indexOf(targetLink);
    loadPage(targetLink.dataset.path, index, hash);
    return;
  }

  const defaultLink = allLinks[0];
  if (defaultLink) {
    const index = 0;
    const defaultHash = defaultLink.getAttribute('href').replace('#', '');
    loadPage(defaultLink.dataset.path, index, defaultHash);
  }
}

function filterSidebar() {
  const query = searchInput.value.trim().toLowerCase();
  const items = [...sidebarNav.querySelectorAll('.sidebar-item')];
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? 'block' : 'none';
  });
}

function toggleBackToTop() {
  backToTopButton.style.display = window.scrollY > 320 ? 'block' : 'none';
}

searchInput.addEventListener('input', filterSidebar);
backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', toggleBackToTop);
window.addEventListener('hashchange', loadInitialPage);

createSidebar();
loadInitialPage();
