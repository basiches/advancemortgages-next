import CategoryPage from '@/components/CategoryPage';

export const metadata = { title: 'Commercial Services' };

export default function Page() {
  return (
    <CategoryPage
      prefix="commercial-services"
      title="Commercial Mortgage Services"
      subtitle="Financing for multi-family, retail, industrial, and owner-occupied commercial properties."
    />
  );
}
