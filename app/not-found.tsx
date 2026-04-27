import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This page slipped through the closing"
        subtitle="The link you followed is broken or the page has moved. Let's get you back on track."
      />
      <section className="container py-16 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/services/" className="btn-dark">Browse services</Link>
          <Link href="/contact-us/" className="btn-dark">Contact us</Link>
        </div>
      </section>
    </>
  );
}
