import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'Private Mortgage' };

export default function Page() {
  return (
    <ServicePage
      title="Private Mortgage"
      subtitle="When banks say no, a private mortgage can unlock short-term financing based on equity rather than strict income documentation."
      image="/images/services/home-equity-loan.png"
      overview="Private mortgages are short-term loans from private lenders or investors, secured against your home's equity. They're a bridge — not a long-term solution — used when credit issues, unusual income, or speed require flexibility banks don't offer."
      bestFor={[
        'Bridge financing during a life transition',
        'Credit repair situations',
        'Unique properties banks won\'t fund',
        'Equity take-out when traditional channels are blocked',
      ]}
      howItWorks={[
        { title: 'Assess the exit plan', body: 'Private is short-term — we start by mapping the exit (refinance, sale, etc.) before recommending it.' },
        { title: 'Match to a lender', body: 'We have relationships with established private lenders across Ontario with competitive terms.' },
        { title: 'Fund quickly', body: 'Private deals can close in days, not weeks, when your situation requires it.' },
      ]}
      faq={[
        { q: 'Are rates much higher?', a: 'Yes — private rates run above bank rates to compensate for risk. We\'re always honest about whether it\'s worth it.' },
        { q: 'How long is the term?', a: 'Typically 6–24 months, long enough to resolve the underlying issue and refinance back to a traditional lender.' },
      ]}
    />
  );
}
