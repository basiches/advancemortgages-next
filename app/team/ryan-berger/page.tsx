import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Ryan Berger — Mortgage Agent Level 1' };

export default function Page() {
  return (
    <TeamBio
      name="Ryan Berger"
      role="Mortgage Agent Level 1"
      image="/images/team/ryan-berger.png"
      bio={[
        'Ryan is a licensed Mortgage Agent who helps Ontario homeowners understand their options at renewal, refinance, or first purchase.',
        'His approach: start with the math, not the sales pitch. Clients appreciate that he\'s just as honest about when refinancing doesn\'t make sense as when it does.',
      ]}
    />
  );
}
