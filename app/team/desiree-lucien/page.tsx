import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Desiree Lucien — Mortgage Agent Level 1' };

export default function Page() {
  return (
    <TeamBio
      name="Desiree Lucien"
      role="Mortgage Agent Level 1"
      image="/images/team/desiree-lucien.png"
      bio={[
        'Desiree is a licensed Mortgage Agent Level 1 who works closely with first-time homebuyers and newcomers to Canada navigating the mortgage market for the first time.',
        'She takes the time to explain what pre-approval actually means, how much home you can really afford, and what the monthly payments will look like — not just today, but at renewal.',
      ]}
    />
  );
}
