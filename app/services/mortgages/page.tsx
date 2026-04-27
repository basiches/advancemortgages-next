import CategoryPage from '@/components/CategoryPage';

export const metadata = { title: 'Specialty Mortgages' };

export default function Page() {
  return (
    <CategoryPage
      prefix="mortgages"
      title="Specialty Mortgages"
      subtitle="Self-employed, private, and alternative lending for borrowers outside the traditional bank box."
    />
  );
}
