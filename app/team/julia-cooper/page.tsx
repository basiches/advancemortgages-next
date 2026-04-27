import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Julia Cooper — Executive Office Manager' };

export default function Page() {
  return (
    <TeamBio
      name="Julia Cooper"
      role="Executive Office Manager"
      image="/images/team/julia-cooper.png"
      bio={[
        'Julia runs the day-to-day at Advance Mortgages. If your file is moving smoothly from application to funding, there\'s a good chance Julia is the reason.',
        'She coordinates across the broker team, lenders, and clients to keep deadlines tight and communication clear.',
      ]}
    />
  );
}
