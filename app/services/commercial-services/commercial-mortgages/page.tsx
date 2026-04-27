import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'Commercial Mortgages' };

export default function Page() {
  return (
    <ServicePage
      title="Commercial Mortgages"
      subtitle="Financing for investment properties, commercial real estate, and business premises."
      image="/images/services/commercial.png"
      overview="Commercial mortgages are a different animal from residential — underwriting looks at the property's income, your experience, and the deal structure. We work with lenders across the commercial spectrum: multi-family, retail, industrial, mixed-use, and owner-occupied."
      bestFor={[
        'Multi-family rental acquisitions',
        'Owner-occupied commercial properties',
        'Mixed-use and retail buildings',
        'Investors scaling up their portfolio',
      ]}
      howItWorks={[
        { title: 'Deal review', body: 'We evaluate the property, your experience, and financial position to determine which lenders are the right fit.' },
        { title: 'Lender placement', body: 'Commercial lenders vary widely in appetite — we place your deal where it\'s most likely to get favorable terms.' },
        { title: 'Close and scale', body: 'Once closed, we stay available to support future acquisitions and refinances as your portfolio grows.' },
      ]}
      faq={[
        { q: 'How much down payment is required?', a: 'Typically 25–35% for most commercial deals; owner-occupied can be less. Depends on the property type and lender.' },
        { q: 'Do you work with first-time commercial investors?', a: 'Yes — we help build a story around your residential investment experience and business background.' },
      ]}
    />
  );
}
