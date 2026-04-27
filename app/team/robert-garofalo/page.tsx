import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Robert Garofalo — Mortgage Agent Level 2' };

export default function Page() {
  return (
    <TeamBio
      name="Robert Garofalo"
      role="Mortgage Agent Level 2"
      image="/images/team/robert-garofalo.png"
      bio={[
        'Robert is a licensed Mortgage Agent Level 2 specializing in residential purchases and refinances.',
        'Clients appreciate that he treats every file like it\'s his own — and that he\'s direct about what\'s realistic, rather than promising numbers the lender won\'t actually approve.',
      ]}
    />
  );
}
