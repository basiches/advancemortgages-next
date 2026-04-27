import ServicePage from '@/components/ServicePage';

export const metadata = { title: 'Self-Employed Mortgage' };

export default function Page() {
  return (
    <ServicePage
      title="Self-Employed Mortgage"
      subtitle="Being your own boss shouldn't cost you a mortgage. We work with lenders who understand self-employed income."
      image="/images/services/first-mortgage.png"
      overview="Self-employed borrowers often pay themselves in ways that look unusual on paper — dividends, draws, retained earnings. Many banks say no to income that a specialized lender would approve. We know who those lenders are."
      bestFor={[
        'Sole proprietors and incorporated business owners',
        'Contractors and freelancers',
        'Borrowers denied by major banks',
        'Anyone with non-traditional income documentation',
      ]}
      howItWorks={[
        { title: 'Documentation review', body: 'We help you assemble the right mix of NOAs, T1s, business financials, and bank statements.' },
        { title: 'Lender matching', body: 'Our network includes lenders who specialize in self-employed applications with competitive rates.' },
        { title: 'Approval and close', body: 'We guide you from application through funding with clear communication at every step.' },
      ]}
      faq={[
        { q: 'How long do I need to be self-employed?', a: 'Most lenders look for a 2-year track record, but some programs accept less — we\'ll find the right fit.' },
        { q: 'Are rates higher?', a: 'Some self-employed products carry a premium, but many "A-lender" options are available with strong documentation. We\'ll shop both.' },
      ]}
    />
  );
}
