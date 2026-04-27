import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'HELOC — Home Equity Line of Credit' };

export default function Page() {
  return (
    <ServicePage
      title="Home Equity Line of Credit (HELOC)"
      subtitle="Flexible access to your home's equity — borrow what you need, when you need it."
      image="/images/services/heloc.png"
      overview="A HELOC lets you tap into your home's equity with a revolving credit line rather than a lump sum. You pay interest only on what you use, making it a flexible tool for renovations, investments, debt consolidation, or unexpected expenses."
      bestFor={[
        'Homeowners with meaningful equity (typically 20%+)',
        'Renovations, tuition, investment properties',
        'Consolidating higher-interest debt',
        'Flexible access without refinancing',
      ]}
      howItWorks={[
        { title: 'Quick assessment', body: 'We review your equity, income, and credit profile to determine your borrowing capacity.' },
        { title: 'Lender match', body: 'We shop your application across our network of 300+ lenders to find the best rate and terms.' },
        { title: 'Funding', body: 'Once approved, you have ongoing access to funds up to your credit limit — draw as needed.' },
      ]}
      faq={[
        { q: 'How much can I borrow?', a: 'Most lenders allow up to 65% of your home\'s appraised value when combined with your existing mortgage (max 80% total).' },
        { q: 'What\'s the interest rate?', a: 'HELOC rates are typically prime + a margin; we\'ll shop the best available rate for your profile.' },
        { q: 'Are there fees?', a: 'Some HELOCs have setup or appraisal fees. We explain every line item up front — no surprises.' },
      ]}
    />
  );
}
