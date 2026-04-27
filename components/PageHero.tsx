type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-gradient-to-b from-brand-muted to-white py-14 md:py-20">
      <div className="container text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
