import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Kelvin Cuma — Mortgage Agent Level 2' };

export default function Page() {
  return (
    <TeamBio
      name="Kelvin Cuma"
      role="Mortgage Agent Level 2"
      image="/images/team/kelvin-cuma.png"
      bio={[
        'Kelvin is a licensed Mortgage Agent Level 2 with a strong focus on investor clients and portfolio refinancing.',
        'He brings a practical, numbers-first approach to every deal — making sure the terms we negotiate still make sense three years in, not just at closing.',
      ]}
    />
  );
}
