import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/constants';

export const alt = `${SITE.name} — Mortgage Brokerage in Ontario`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #1E3A5F 0%, #0E1B2D 100%)',
          padding: '80px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#5271FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 800,
              marginRight: '20px',
            }}
          >
            A
          </div>
          <div style={{ display: 'flex', fontSize: '32px', fontWeight: 600 }}>{SITE.name}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '76px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              marginBottom: '28px',
            }}
          >
            Your Home. Your Equity. Your Terms.
          </div>
          <div style={{ display: 'flex', fontSize: '30px', color: '#A6B5C9' }}>
            Licensed Ontario mortgage brokerage · {SITE.fsra} · 300+ lender partners
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', fontSize: '24px', color: '#A6B5C9' }}>
            {SITE.url.replace(/^https?:\/\//, '')}
          </div>
          <div
            style={{
              display: 'flex',
              padding: '14px 28px',
              borderRadius: '999px',
              background: '#5271FF',
              fontSize: '22px',
              fontWeight: 600,
            }}
          >
            Book a 15-min call
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
