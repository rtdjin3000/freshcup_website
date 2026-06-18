import { Leaf, Sparkles, SlidersHorizontal, IceCream2 } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "100% Real Fruit",
    desc: "Juices & smoothies pressed and blended from real, fresh fruit — never syrups.",
  },
  {
    icon: SlidersHorizontal,
    title: "Made Your Way",
    desc: "Pick your sugar, ice and toppings. Tapioca, popping pearls, jelly & more.",
  },
  {
    icon: Sparkles,
    title: "Shaken to Order",
    desc: "Every cup is freshly shaken when you order. No pre-made, no shortcuts.",
  },
  {
    icon: IceCream2,
    title: "Sweet Treats",
    desc: "Hong Kong bubble waffles, fluffy pancakes, scooped ice cream and savoury snacks to match.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container-x">
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl bg-brand-cream p-6 md:p-7 ring-1 ring-black/5 transition-all hover:bg-brand-mint hover:shadow-lg hover:shadow-brand-green/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green text-white shadow-lg shadow-brand-green/25 group-hover:scale-110 transition-transform">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-2 font-display text-lg md:text-xl font-semibold text-brand-greenDark">
                {it.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-greenDark/70\">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
