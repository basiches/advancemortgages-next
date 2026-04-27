import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { SITE } from '@/lib/constants';

type Props = {
  name: string;
  role: string;
  image: string;
  bio: string[];
  email?: string;
};

export default function TeamBio({ name, role, image, bio, email }: Props) {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-muted to-white py-12 md:py-16">
        <div className="container grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-start">
          <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square max-w-[280px] mx-auto md:mx-0">
            <Image src={image} alt={name} width={400} height={400} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-2">{role}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">{name}</h1>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
              {bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary">Book a Call</a>
              {email && <a href={`mailto:${email}`} className="btn-dark">Email {name.split(' ')[0]}</a>}
              <Link href="/team/" className="inline-flex items-center px-6 py-3 rounded-md border border-brand-primary text-brand-primary text-sm font-semibold hover:bg-brand-muted transition">
                ← Back to Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
