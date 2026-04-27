import CategoryPage from '@/components/CategoryPage';

export const metadata = { title: 'Residential Services' };

export default function Page() {
  return (
    <CategoryPage
      prefix="residential-services"
      title="Residential Mortgage Services"
      subtitle="First mortgages, HELOCs, and residential financing for Ontario homeowners."
    />
  );
}
