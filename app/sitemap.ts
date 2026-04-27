import type { MetadataRoute } from 'next';
import { SITE, SERVICES, TEAM } from '@/lib/constants';

const SERVICE_CATEGORIES = [
  'residential-services',
  'equity-loans',
  'mortgages',
  'commercial-services',
];

const STATIC_ROUTES = [
  '',
  'about-us',
  'contact-us',
  'multistep',
  'privacy-policy',
  'services',
  'team',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const url = (path: string) => `${SITE.url.replace(/\/$/, '')}/${path}${path ? '/' : ''}`;

  return [
    ...STATIC_ROUTES.map(p => ({ url: url(p), lastModified: now })),
    ...SERVICE_CATEGORIES.map(c => ({ url: url(`services/${c}`), lastModified: now })),
    ...SERVICES.map(s => ({ url: url(`services/${s.slug}`), lastModified: now })),
    ...TEAM.map(t => ({ url: url(`team/${t.slug}`), lastModified: now })),
  ];
}
