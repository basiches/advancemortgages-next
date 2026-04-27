import PageHero from '@/components/PageHero';
import FormStub from '@/components/FormStub';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Get Pre-Approved' };

export default function MultistepPage() {
  return (
    <>
      <PageHero
        eyebrow="Pre-Approval"
        title="Get pre-approved in 15 minutes."
        subtitle="Tell us a little about what you're looking for and we'll come back with real numbers — no obligation."
      />

      <section className="py-16 bg-white">
        <div className="container max-w-2xl">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <FormStub variant="multistep" />
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Prefer to talk? Call <a href={SITE.phoneHref} className="text-brand-accent font-semibold">{SITE.phone}</a> or{' '}
            <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="text-brand-accent font-semibold">
              book a 15-min call
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
