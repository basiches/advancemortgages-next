import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { TEAM } from '@/lib/constants';

export const metadata = { title: 'Our Team' };

export default function TeamIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Licensed brokers who actually pick up the phone."
        subtitle="Meet the people behind Advance Mortgages. We're FSRA-licensed, experienced, and proud to serve Ontario homeowners."
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TEAM.map(m => (
              <Link key={m.slug} href={`/team/${m.slug}/`} className="group text-center">
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                  <Image src={m.image} alt={m.name} width={300} height={300} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h3 className="font-semibold text-brand-primary">{m.name}</h3>
                <p className="text-sm text-gray-600">{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
