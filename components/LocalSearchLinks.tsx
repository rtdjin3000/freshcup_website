import Link from "next/link";

const links = [
  {
    href: "/bubble-tea-in-don-mills",
    label: "Bubble Tea in Don Mills",
    desc: "Our main local page for Don Mills bubble tea searches.",
  },
  {
    href: "/bubble-tea-near-fairview-mall",
    label: "Bubble Tea Near Fairview Mall",
    desc: "For people searching near Fairview and Shops at Don Mills.",
  },
  {
    href: "/boba-peanut-plaza",
    label: "Boba in Peanut Plaza",
    desc: "Hyper-local page for your exact plaza location intent.",
  },
  {
    href: "/bubble-tea-north-york",
    label: "Bubble Tea North York",
    desc: "Broader city-intent page with local relevance.",
  },
];

export default function LocalSearchLinks() {
  return (
    <section className="container-x py-10">
      <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-8">
        <p className="eyebrow">Popular local searches</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
          Fresh Cup in Don Mills, North York
        </h2>
        <p className="mt-3 max-w-3xl text-brand-greenDark/75">
          Explore these local guides to find Fresh Cup faster when searching for boba and bubble tea in Don Mills.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl bg-brand-cream/70 p-4 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-green/10"
            >
              <p className="font-semibold text-brand-greenDark">{item.label}</p>
              <p className="mt-1 text-sm text-brand-greenDark/70">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
