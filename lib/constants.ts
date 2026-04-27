export const SITE = {
  name: 'Advance Mortgages',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://advancemortgages.ca',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NT75HW84',
  description:
    'Advance Mortgages has provided expert mortgage guidance and trusted financial solutions for clients across Ontario. Licensed under FSRA #13493, partnered with over 300 lenders.',
  phone: '(647) 615-7458',
  phoneHref: 'tel:+16476157458',
  email: 'info@advancemortgages.ca',
  emailHref: 'mailto:info@advancemortgages.ca',
  address: '1275 Finch Ave W, Unit 404, North York, ON M3J 2G5',
  mapUrl: 'https://maps.app.goo.gl/geSZPGBioz3zHv1X9',
  hours: 'Office Hours: 8:00 AM – 8:00 PM',
  fsra: 'FSRA #13493',
  bookCallUrl: 'https://meetings.hubspot.com/ari-daniel/15min-approval-call',
  social: {
    instagram: 'https://www.instagram.com/advancemortgages.ca/',
    facebook: 'https://www.facebook.com/people/Advance-Mortgages/61551691995581/',
    youtube: 'https://www.youtube.com/@AdvanceMortgagesGroupInc/videos',
  },
};

export const SERVICES = [
  { slug: 'residential-services/heloc', title: 'HELOC', image: '/images/services/heloc.png' },
  { slug: 'equity-loans/home-equity-loan', title: 'Home Equity Loan', image: '/images/services/home-equity-loan.png' },
  { slug: 'residential-services/first-mortgage', title: 'First Mortgage', image: '/images/services/first-mortgage.png' },
  { slug: 'equity-loans/mortgage-refinance', title: 'Mortgage Refinance', image: '/images/services/second-mortgage.png' },
  { slug: 'mortgages/self-employed-mortgage', title: 'Self-Employed Mortgage', image: '/images/services/first-mortgage.png' },
  { slug: 'mortgages/private-mortgage', title: 'Private Mortgage', image: '/images/services/home-equity-loan.png' },
  { slug: 'commercial-services/commercial-mortgages', title: 'Commercial Mortgages', image: '/images/services/commercial.png' },
];

export const TEAM = [
  { slug: 'ari-daniel', name: 'Ari Daniel', role: 'Principal Broker', image: '/images/team/ari-daniel.png' },
  { slug: 'emanuel-daniel', name: 'Emanuel Daniel', role: 'Brand Director', image: '/images/team/emanuel-daniel.png' },
  { slug: 'tom-terzakis', name: 'Tom Terzakis', role: 'Mortgage Broker', image: '/images/team/tom-terzakis.png' },
  { slug: 'desiree-lucien', name: 'Desiree Lucien', role: 'Mortgage Agent Level 1', image: '/images/team/desiree-lucien.png' },
  { slug: 'ryan-berger', name: 'Ryan Berger', role: 'Mortgage Agent Level 1', image: '/images/team/ryan-berger.png' },
  { slug: 'julia-cooper', name: 'Julia Cooper', role: 'Executive Office Manager', image: '/images/team/julia-cooper.png' },
  { slug: 'justin-cadogan', name: 'Justin Cadogan', role: 'Mortgage Agent Level 2', image: '/images/team/justin-cadogan.png' },
  { slug: 'kelvin-cuma', name: 'Kelvin Cuma', role: 'Mortgage Agent Level 2', image: '/images/team/kelvin-cuma.png' },
  { slug: 'robert-garofalo', name: 'Robert Garofalo', role: 'Mortgage Agent Level 2', image: '/images/team/robert-garofalo.png' },
];

export const NAV_LINKS = [
  { label: 'Services', href: '/services/', children: SERVICES.map(s => ({ label: s.title, href: `/services/${s.slug}/` })) },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'Get Pre-Approved', href: '/multistep/' },
];

export const PARTNERS = [
  { src: '/images/partners/scotiabank.svg', alt: 'Scotiabank' },
  { src: '/images/partners/td.svg', alt: 'TD' },
  { src: '/images/partners/bmo.svg', alt: 'BMO' },
  { src: '/images/partners/nbc.svg', alt: 'National Bank of Canada' },
  { src: '/images/partners/rbc.svg', alt: 'RBC' },
  { src: '/images/partners/haventree.png', alt: 'Haventree Bank' },
  { src: '/images/partners/first-national.png', alt: 'First National' },
  { src: '/images/partners/home-trust.png', alt: 'Home Trust' },
];
