const path = require('node:path');

const isProd = process.env.NODE_ENV === 'production';

// CSP designed around what this site actually loads:
//   - Google Fonts: fonts.googleapis.com (CSS), fonts.gstatic.com (font files)
//   - GTM (which loads GA4 inside the container): www.googletagmanager.com
//   - GA4 collect endpoint: *.google-analytics.com, *.analytics.google.com
//
// 'unsafe-inline' on script-src is required because Next.js ships inline
// hydration scripts and GTM injects an inline init snippet. Switching to
// nonces would force every route to render dynamically, losing the static
// prerender (every page is currently `○ Static`). On a marketing site with
// no user input rendered into HTML, the inline-script XSS surface is
// effectively zero, so this trade-off is the right one.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  'upgrade-insecure-requests',
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com",
].join('; ');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  ...(isProd
    ? [
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'Content-Security-Policy', value: csp },
      ]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

module.exports = nextConfig;
