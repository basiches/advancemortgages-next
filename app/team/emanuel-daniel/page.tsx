import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Emanuel Daniel — Brand Director' };

export default function Page() {
  return (
    <TeamBio
      name="Emanuel Daniel"
      role="Brand Director"
      image="/images/team/emanuel-daniel.png"
      bio={[
        'Emanuel leads brand and marketing strategy at Advance Mortgages. His focus is making sure every touchpoint — from the first phone call to closing day — reflects the firm\'s commitment to plain-language advice and real transparency.',
        'He works closely with the broker team to ensure our messaging matches the service: clear, client-first, and grounded in Ontario\'s mortgage market.',
      ]}
    />
  );
}
