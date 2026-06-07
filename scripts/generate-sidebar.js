const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const docsDir = path.join(repoRoot, 'docs');
const outFile = path.join(docsDir, '.vitepress', 'sidebar.json');

function isMarkdown(name) {
  return /\.md$/i.test(name);
}

function readmeLink(dir) {
  const candidates = ['README.md', 'index.md'];
  for (const c of candidates) {
    const p = path.join(dir, c);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const pages = [];
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      const children = walk(full);
      const readme = readmeLink(full);
      const text = it.name;
      const link = readme
        ? '/' + path.relative(docsDir, readme).replace(/\\/g, '/').replace(/(README\.md$|index\.md$)/i, '').replace(/\.md$/i, '')
        : null;
      const entry = { text, collapsible: true };
      if (link) entry.link = link === '/' ? '/' : link.replace(/\\/g, '/');
      if (children.length) entry.items = children;
      pages.push(entry);
    } else if (isMarkdown(it.name) && !/^README\.md$/i.test(it.name) && !/^index\.md$/i.test(it.name)) {
      pages.push({
        text: it.name.replace(/\.md$/i, ''),
        link: '/' + path.relative(docsDir, full).replace(/\\/g, '/').replace(/\.md$/i, '')
      });
    }
  }
  return pages;
}

function main() {
  if (!fs.existsSync(docsDir)) {
    console.error('docs/ directory not found at', docsDir);
    process.exit(1);
  }

  const sidebar = walk(docsDir);
  const dir = path.dirname(outFile);

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(sidebar, null, 2) + '\n', 'utf8');
  console.log('Wrote', outFile);
}

if (require.main === module) main();
