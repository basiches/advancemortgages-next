import { SITE } from '@/lib/constants';

export default function CTASection() {
  return (
    <section className="py-16 bg-brand-primary">
      <div className="container text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to talk options?</h2>
        <p className="text-white/80 mb-8">Book a 15-minute pre-approval call — no pressure, just clear numbers.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary">Book a Call</a>
          <a href={SITE.phoneHref} className="btn-outline">Call {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}
