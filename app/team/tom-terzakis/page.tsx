import TeamBio from '@/components/TeamBio';

export const metadata = { title: 'Tom Terzakis — Mortgage Broker' };

export default function Page() {
  return (
    <TeamBio
      name="Tom Terzakis"
      role="Mortgage Broker"
      image="/images/team/tom-terzakis.png"
      bio={[
        'Tom is a licensed Mortgage Broker who specializes in structuring deals for clients other brokers shy away from — self-employed income, credit rebuilds, and complex private financing.',
        'Clients describe him as patient, persistent, and unusually good at explaining what the mortgage contract actually says.',
      ]}
    />
  );
}
