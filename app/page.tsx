import Link from 'next/link';
import Image from 'next/image';
import { SITE, SERVICES, PARTNERS, TEAM } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-brand-muted to-white overflow-hidden">
        <div className="container py-16 md:py-24 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-xs font-medium shadow-sm mb-6">
            <span className="text-brand-accent font-bold">4.9</span>
            <span className="text-gray-600">Highly rated by Ontario homeowners</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight mb-4">
            Your Home. Your Equity. Your Terms.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">Book your 15-minute pre-approval call now.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary">
              Book a Call
            </a>
            <Link href="/multistep/" className="btn-dark">
              Get Pre-Approved
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-6">
            Partnered with 300+ lenders across Ontario
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80">
            {PARTNERS.map(p => (
              <Image
                key={p.src}
                src={p.src}
                alt={p.alt}
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-brand-muted">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Mortgage solutions that fit your life</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-brand-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-brand-accent font-medium">Learn more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Why Advance Mortgages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Expert guidance from licensed brokers who put clients first.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We&apos;ve helped Ontario homeowners navigate every kind of mortgage — from first homes to private financing.
              Licensed under FSRA #13493 and partnered with over 300 lenders, we negotiate on your behalf to get terms that
              actually fit your life.
            </p>
            <ul className="space-y-3">
              {[
                'Licensed FSRA #13493 brokerage',
                '300+ lender network — broad product access',
                'Transparent advice, no pressure',
                'Fast pre-approval in 15 minutes',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand-accent mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/about-us/" className="btn-dark">Learn More About Us</Link>
            </div>
          </div>
          <div className="bg-brand-muted rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-brand-primary">300+</p>
                <p className="text-sm text-gray-600 mt-1">Lender partners</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-primary">4.9★</p>
                <p className="text-sm text-gray-600 mt-1">Average review</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-primary">15 min</p>
                <p className="text-sm text-gray-600 mt-1">Pre-approval call</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-brand-primary">24/7</p>
                <p className="text-sm text-gray-600 mt-1">Application intake</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="py-16 md:py-24 bg-brand-muted">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">Meet the Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Licensed brokers who actually pick up the phone</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TEAM.slice(0, 4).map(m => (
              <Link key={m.slug} href={`/team/${m.slug}/`} className="group text-center">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 mb-3">
                  <Image src={m.image} alt={m.name} width={300} height={300} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="font-semibold text-brand-primary">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.role}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/team/" className="btn-dark">Meet the Whole Team</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-primary">
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to move forward?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Book a quick 15-minute pre-approval call and get clear numbers you can actually plan with.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary">Book a Call</a>
            <a href={SITE.phoneHref} className="btn-outline">Call {SITE.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
