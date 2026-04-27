import Link from 'next/link';
import Image from 'next/image';
import { SITE, SERVICES } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image src="/images/footer-logo.svg" alt={SITE.name} width={140} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-xs font-semibold text-brand-accent mb-3">{SITE.fsra}</p>
            <p className="text-sm text-white/80 leading-relaxed mb-3">{SITE.description}</p>
            <div className="flex gap-4 text-sm mt-4">
              <a href={SITE.social.instagram} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Instagram</a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Facebook</a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener" className="text-white/80 hover:text-white">YouTube</a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about-us/" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact-us/" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/multistep/" className="hover:text-white">Get Pre-Approved</Link></li>
              <li><Link href="/team/" className="hover:text-white">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-white/80">
              {SERVICES.slice(0, 4).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href={SITE.mapUrl} target="_blank" rel="noopener" className="hover:text-white">{SITE.address}</a></li>
              <li><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></li>
              <li><a href={SITE.emailHref} className="hover:text-white">{SITE.email}</a></li>
              <li>{SITE.hours}</li>
              <li>Applications accepted 24/7</li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Advance Mortgages — Mortgage Brokerage (FSRA Licence #13493). All rights reserved. Programs, timelines, and amounts depend on lender approval, home value and applicant profile; not all applicants will qualify.</p>
          <div className="flex gap-4 shrink-0">
            <Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
