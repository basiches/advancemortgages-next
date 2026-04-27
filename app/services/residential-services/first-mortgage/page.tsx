import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'First Mortgage' };

export default function Page() {
  return (
    <ServicePage
      title="First Mortgage"
      subtitle="Buying a home? We shop 300+ lenders so you land the right mortgage — not just any mortgage."
      image="/images/services/first-mortgage.png"
      overview="A first mortgage is the primary loan on your home. Whether you're a first-time buyer or moving up, we help you understand what you qualify for, negotiate rates, and structure terms that fit your life — fixed vs. variable, term length, prepayment privileges, and more."
      bestFor={[
        'First-time homebuyers',
        'Move-up buyers trading up properties',
        'Borrowers wanting lender choice beyond their bank',
        'Anyone who wants the math explained plainly',
      ]}
      howItWorks={[
        { title: 'Pre-approval', body: 'We review income, credit, and savings to determine your realistic budget — typically a 15-minute call.' },
        { title: 'Rate shopping', body: 'We negotiate on your behalf across our lender network to secure competitive terms.' },
        { title: 'Close with confidence', body: 'We coordinate with your lawyer and lender through closing so nothing falls through the cracks.' },
      ]}
      faq={[
        { q: 'How much down payment do I need?', a: 'In Canada, 5% down minimum for homes up to $500K; higher thresholds apply above. We\'ll walk you through the exact math for your situation.' },
        { q: 'Fixed or variable rate?', a: 'Depends on your risk tolerance, timeline, and market conditions. We explain both and help you decide — no pressure.' },
      ]}
    />
  );
}
