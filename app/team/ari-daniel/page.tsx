import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Ari Daniel — Principal Broker' };

export default function Page() {
  return (
    <TeamBio
      name="Ari Daniel"
      role="Principal Broker"
      image="/images/team/ari-daniel.png"
      bio={[
        'Ari is the Principal Broker at Advance Mortgages and the face of the firm\'s approach to client service: pick up the phone, explain the math, and advocate like family.',
        'With years of experience guiding Ontario homeowners through every kind of mortgage — from first-time purchases to complex private deals — Ari leads a team built on transparency, access to 300+ lenders, and an honest read of what each client actually needs.',
        'Licensed under FSRA #13493.',
      ]}
    />
  );
}
