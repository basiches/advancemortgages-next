import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { TEAM, SITE } from '@/lib/constants';

export const metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Mortgage experts built on trust, transparency, and results."
        subtitle="We've spent years guiding Ontario homeowners through every stage of their mortgage journey."
      />

      <section className="py-16 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Who we are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Advance Mortgages is a licensed Ontario brokerage (FSRA #13493) that helps homeowners, buyers, and
              investors navigate the mortgage market with clarity. We work with 300+ lenders so our clients get real
              choice — not whatever one bank is willing to offer.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team is built around the idea that brokers should pick up the phone, explain the math, and advocate
              for their clients like their own family. Most of our new business comes from referrals, and we take that
              seriously.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-brand-primary mb-4">What sets us apart</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-brand-accent">✓</span> FSRA-licensed with transparent fee structure</li>
              <li className="flex gap-3"><span className="text-brand-accent">✓</span> Access to 300+ lenders across Canada</li>
              <li className="flex gap-3"><span className="text-brand-accent">✓</span> Specialists for self-employed, new-to-Canada, and private financing</li>
              <li className="flex gap-3"><span className="text-brand-accent">✓</span> 4.9★ average Google rating</li>
              <li className="flex gap-3"><span className="text-brand-accent">✓</span> 15-minute pre-approval call</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-muted">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-10 text-center">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {TEAM.map(m => (
              <Link key={m.slug} href={`/team/${m.slug}/`} className="group text-center">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-200 mb-3">
                  <Image src={m.image} alt={m.name} width={300} height={300} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="font-semibold text-brand-primary text-sm">{m.name}</h3>
                <p className="text-xs text-gray-600">{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
