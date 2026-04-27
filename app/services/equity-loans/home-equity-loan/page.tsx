import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'Home Equity Loan' };

export default function Page() {
  return (
    <ServicePage
      title="Home Equity Loan"
      subtitle="Access a lump sum against your home's equity with predictable payments."
      image="/images/services/home-equity-loan.png"
      overview="A home equity loan gives you a one-time lump sum secured by your home, repaid in fixed installments over a set term. Rates are typically lower than unsecured credit, making it ideal for large one-time expenses."
      bestFor={[
        'Renovations or major home projects',
        'Education costs',
        'Debt consolidation at a lower rate',
        'Homeowners who prefer fixed payments',
      ]}
      howItWorks={[
        { title: 'Tell us your goal', body: 'We start by understanding what you need the funds for and your timeline.' },
        { title: 'Compare offers', body: 'We gather quotes from our lender network to find the right structure.' },
        { title: 'Close and fund', body: 'Funds are disbursed as a lump sum; you make fixed monthly payments through the term.' },
      ]}
      faq={[
        { q: 'How is this different from a HELOC?', a: 'A home equity loan is a fixed lump sum with fixed payments; a HELOC is a revolving line you can draw from as needed.' },
        { q: 'What are typical terms?', a: 'Terms commonly range from 5–20 years depending on the lender and your profile.' },
      ]}
    />
  );
}
