import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  overview: string;
  bestFor: string[];
  howItWorks: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
};

export default function ServicePage({ title, subtitle, image, overview, bestFor, howItWorks, faq }: Props) {
  return (
    <>
      <PageHero eyebrow="Service" title={title} subtitle={subtitle} />

      <section className="py-16 bg-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-xl overflow-hidden bg-gray-100">
            <Image src={image} alt={title} width={600} height={450} className="w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{overview}</p>
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Best for</h3>
            <ul className="space-y-2 text-gray-700">
              {bestFor.map(item => (
                <li key={item} className="flex gap-3"><span className="text-brand-accent">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-muted">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-10 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-brand-primary mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faq && faq.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-8 text-center">Frequently asked</h2>
            <div className="space-y-4">
              {faq.map(item => (
                <details key={item.q} className="group bg-brand-muted rounded-lg p-5 cursor-pointer">
                  <summary className="font-semibold text-brand-primary flex justify-between items-center">
                    {item.q}
                    <span className="text-brand-accent group-open:rotate-180 transition">▾</span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
