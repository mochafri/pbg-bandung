import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jasa-pbgbandung.com';

  // Routes
  const routes = ['', '/projects', '/services/pbg', '/services/syariah', '/services/konservasi'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Project IDs
  const projectIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const projectRoutes = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
