'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt={SITE.name} width={180} height={40} priority className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <div key={link.href} className="relative group">
              <Link href={link.href} className="text-sm font-medium text-brand-text hover:text-brand-accent transition">
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="bg-white shadow-lg rounded-md py-2 min-w-[220px] border border-gray-100">
                    {link.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-text hover:bg-brand-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.phoneHref} className="text-sm font-semibold text-brand-primary">
            {SITE.phone}
          </a>
          <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary">
            Book a Call
          </a>
        </div>

        {/* Mobile: phone CTA + burger */}
        <div className="flex lg:hidden items-center gap-3">
          <a href={SITE.phoneHref} className="text-sm font-semibold text-brand-primary">
            Call
          </a>
          <button
            aria-label="Toggle menu"
            className="p-2 text-brand-text"
            onClick={() => setMobileOpen(v => !v)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container py-4 flex flex-col gap-1">
            <button
              onClick={() => setServiceOpen(v => !v)}
              className="flex items-center justify-between py-2 text-sm font-medium text-brand-text"
            >
              Services
              <span className={`transition ${serviceOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>
            {serviceOpen && (
              <div className="pl-4 flex flex-col gap-1 pb-2">
                {NAV_LINKS[0].children!.map(child => (
                  <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="py-1 text-sm text-brand-text/80">
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
            {NAV_LINKS.slice(1).map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-medium text-brand-text"
              >
                {link.label}
              </Link>
            ))}
            <a href={SITE.bookCallUrl} target="_blank" rel="noopener" className="btn-primary mt-3 w-full">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
