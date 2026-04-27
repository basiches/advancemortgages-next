# advancemortgages-next

Standalone Next.js 15 marketing site for **Advance Mortgages** (FSRA #13493). Built with the App Router, Tailwind CSS, and React Server Components. No WordPress backend required — the site renders entirely from local code and assets.

## Stack

- **Next.js 15** (App Router, static rendering)
- **React 19**
- **Tailwind CSS 3.4**
- **TypeScript**

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start        # http://localhost:3000
```

## Structure

```
app/
  layout.tsx                 Root layout (Header + Footer wrap every page)
  page.tsx                   Homepage
  globals.css                Tailwind entry + brand tokens
  about-us/page.tsx
  contact-us/page.tsx
  multistep/page.tsx         Get-pre-approved page (form stub)
  privacy-policy/page.tsx
  services/                  Services index + category + leaf pages
  team/                      Team index + 9 bio pages
components/
  Header.tsx                 Sticky header with responsive mobile nav
  Footer.tsx                 4-column footer
  PageHero.tsx               Reusable page hero
  CTASection.tsx             Reusable "Ready to talk?" CTA
  FormStub.tsx               Contact / multistep form placeholder
  ServicePage.tsx            Shared service-page template
  CategoryPage.tsx           Shared service-category template
  TeamBio.tsx                Shared team-bio template
lib/
  constants.ts               Site-wide constants (SITE, SERVICES, TEAM, NAV, PARTNERS)
public/
  images/                    Logo, team photos, service images, partner logos
  favicon.ico
```

## Routes (27)

```
/                                                    Home
/about-us/
/contact-us/
/multistep/                                          (form stub)
/privacy-policy/
/services/
/services/residential-services/
/services/residential-services/heloc/
/services/residential-services/first-mortgage/
/services/equity-loans/
/services/equity-loans/home-equity-loan/
/services/equity-loans/mortgage-refinance/
/services/mortgages/
/services/mortgages/self-employed-mortgage/
/services/mortgages/private-mortgage/
/services/commercial-services/
/services/commercial-services/commercial-mortgages/
/team/
/team/ari-daniel/
/team/emanuel-daniel/
/team/tom-terzakis/
/team/desiree-lucien/
/team/ryan-berger/
/team/julia-cooper/
/team/justin-cadogan/
/team/kelvin-cuma/
/team/robert-garofalo/
```

All routes are statically generated at build time.

## Known TODOs

- **Form backend** — `/multistep` and `/contact-us` forms are placeholders. Wire up Resend, Formspree, or similar to actually capture leads.
- **Design pass** — structure, content, and responsive layout are in place; a visual polish pass (colours, spacing, imagery refinements) is the next iteration.
- **Service and team bio copy** — placeholder bodies are in place; final copy should come from the Advance Mortgages team.

## Deploy

Any Node host will work. The simplest path is **Vercel**: connect this repo and it deploys on push. Because every route is static, it will also run fine on Cloudflare Pages, Netlify, or any static host — just run `next build` first.

## License

Copyright © Advance Mortgages. All rights reserved.
