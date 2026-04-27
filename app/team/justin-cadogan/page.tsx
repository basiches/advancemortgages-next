import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Justin Cadogan — Mortgage Agent Level 2' };

export default function Page() {
  return (
    <TeamBio
      name="Justin Cadogan"
      role="Mortgage Agent Level 2"
      image="/images/team/justin-cadogan.png"
      bio={[
        'Justin is a licensed Mortgage Agent Level 2 with experience across residential, investment, and alternative lending.',
        'He\'s known for taking on deals that require creativity — unusual income, unique properties, aggressive timelines — and finding a lender match that works.',
      ]}
    />
  );
}
