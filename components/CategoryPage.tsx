import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { SERVICES } from '@/lib/constants';

type Props = {
  prefix: string;
  title: string;
  subtitle: string;
};

export default function CategoryPage({ prefix, title, subtitle }: Props) {
  const items = SERVICES.filter(s => s.slug.startsWith(prefix + '/'));
  return (
    <>
      <PageHero eyebrow="Services" title={title} subtitle={subtitle} />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {items.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image src={s.image} alt={s.title} width={400} height={300} className="w-full h-full object-cover group-hover:scale-105 transition" />
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

      <CTASection />
    </>
  );
}
