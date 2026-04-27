import PageHero from '@/components/PageHero';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="py-16 bg-white">
        <div className="container max-w-3xl prose prose-slate">
          <p>
            Advance Mortgages (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of our clients
            and website visitors. This policy explains what information we collect, how we use it, and the choices you have.
          </p>

          <h2 className="text-2xl font-bold text-brand-primary mt-8 mb-3">Information we collect</h2>
          <p>
            We collect information you voluntarily provide when you request a pre-approval, contact us through a form, or
            communicate with one of our licensed brokers. This may include your name, email, phone number, and basic
            financial information needed to evaluate your mortgage application.
          </p>

          <h2 className="text-2xl font-bold text-brand-primary mt-8 mb-3">How we use your information</h2>
          <p>
            Your information is used to respond to your inquiry, evaluate mortgage options, and share those options with
            lenders on your behalf. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold text-brand-primary mt-8 mb-3">Security</h2>
          <p>
            We maintain reasonable administrative, technical, and physical safeguards designed to protect your personal
            information against unauthorized access, disclosure, or loss.
          </p>

          <h2 className="text-2xl font-bold text-brand-primary mt-8 mb-3">Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by contacting
            us at <a href={SITE.emailHref} className="text-brand-accent">{SITE.email}</a>.
          </p>

          <h2 className="text-2xl font-bold text-brand-primary mt-8 mb-3">Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a href={SITE.emailHref} className="text-brand-accent">{SITE.email}</a> or call{' '}
            <a href={SITE.phoneHref} className="text-brand-accent">{SITE.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
