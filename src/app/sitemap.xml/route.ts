export async function GET() {
  const baseUrl = 'https://tdme.net';
  const pages = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '/industrial', priority: '0.9', changefreq: 'monthly' },
    { path: '/transmission', priority: '0.8', changefreq: 'monthly' },
    { path: '/transmission/sdh-sonet', priority: '0.8', changefreq: 'monthly' },
    { path: '/transmission/mpls-tp', priority: '0.8', changefreq: 'monthly' },
    { path: '/transmission/carrier-ethernet', priority: '0.8', changefreq: 'monthly' },
    { path: '/grms', priority: '0.9', changefreq: 'monthly' },
    { path: '/bittel', priority: '0.8', changefreq: 'monthly' },
    { path: '/jacob-jensen', priority: '0.8', changefreq: 'monthly' },
    { path: '/esim', priority: '0.9', changefreq: 'monthly' },
    { path: '/network-monitoring', priority: '0.8', changefreq: 'monthly' },
    { path: '/temperature-compliance', priority: '0.8', changefreq: 'monthly' },
    { path: '/carrier', priority: '0.7', changefreq: 'monthly' },
    { path: '/security', priority: '0.8', changefreq: 'monthly' },
    { path: '/data-transmission', priority: '0.8', changefreq: 'monthly' },
    { path: '/industrial-applications', priority: '0.8', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'monthly' },
    { path: '/projects', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
