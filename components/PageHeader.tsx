export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-pinkSoft blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-mint blur-3xl" />
      <div className="container-x relative py-14 text-center md:py-20">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-brand-greenDark sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-brand-greenDark/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
