import PageHero from '@/components/PageHero';
import FormStub from '@/components/FormStub';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a licensed broker."
        subtitle="We typically respond within one business day. For urgent questions, give us a call."
      />

      <section className="py-16 bg-white">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-brand-primary mb-4">Get in touch</h2>
            <FormStub variant="contact" />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Phone</h3>
              <a href={SITE.phoneHref} className="text-xl font-semibold text-brand-primary hover:text-brand-accent">
                {SITE.phone}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Email</h3>
              <a href={SITE.emailHref} className="text-lg text-brand-primary hover:text-brand-accent">
                {SITE.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Office</h3>
              <a href={SITE.mapUrl} target="_blank" rel="noopener" className="text-lg text-brand-primary hover:text-brand-accent">
                {SITE.address}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Hours</h3>
              <p className="text-lg text-brand-primary">{SITE.hours}</p>
              <p className="text-sm text-gray-600">Applications accepted 24/7.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">Book directly</h3>
              <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary">
                15-min Pre-Approval Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
