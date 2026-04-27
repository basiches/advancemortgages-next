import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'Mortgage Refinance' };

export default function Page() {
  return (
    <ServicePage
      title="Mortgage Refinance"
      subtitle="Lower your payment, access equity, or consolidate debt — we'll run the numbers to see if refinancing makes sense."
      image="/images/services/second-mortgage.png"
      overview="Refinancing replaces your existing mortgage with a new one — ideally at a better rate, a new term, or with cash out to use for other goals. It's not always the right move, so we start with the math."
      bestFor={[
        'Homeowners facing higher renewal rates',
        'Consolidating high-interest debt into your mortgage',
        'Accessing equity for renovations or investing',
        'Changing term length or payment structure',
      ]}
      howItWorks={[
        { title: 'Run the numbers', body: 'We compare your current mortgage to available alternatives including penalties, fees, and long-term cost.' },
        { title: 'Shop the market', body: 'If refinancing makes sense, we negotiate terms across our lender network.' },
        { title: 'Switch and save', body: 'We coordinate discharge and closing so the transition is smooth.' },
      ]}
      faq={[
        { q: 'Will I pay a penalty to break my mortgage?', a: 'Usually yes — but the savings often outweigh it. We calculate the break-even before you commit.' },
        { q: 'How much equity can I access?', a: 'Refinances in Canada generally allow access up to 80% of your home\'s appraised value.' },
      ]}
    />
  );
}
