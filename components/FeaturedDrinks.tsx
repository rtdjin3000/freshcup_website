import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Featured = {
  name: string;
  desc: string;
  price: string;
  image: string;
  tag?: string;
};

const featured: Featured[] = [
  {
    name: "Taro Milk Tea",
    desc: "Creamy, nutty and naturally sweet, a fan favourite.",
    price: "from $5.99",
    image: "/images/taro-milk-tea.jpg",
    tag: "Bestseller",
  },
  {
    name: "Brown Sugar Boba",
    desc: "Warm caramelised brown sugar with chewy tapioca.",
    price: "from $5.99",
    image: "/images/brown-sugar-milk-tea.jpg",
    tag: "Signature",
  },
  {
    name: "Mango Slush",
    desc: "Icy, fruity and ridiculously refreshing.",
    price: "from $6.49",
    image: "/images/mango-slush.jpg",
  },
  {
    name: "Real Mango Smoothie",
    desc: "Pure mango blended smooth and creamy, real fruit only.",
    price: "from $6.99",
    image: "/images/Real Mango Smoothie.jpg",
    tag: "New",
  },
  {
    name: "Peach Fruit Tea",
    desc: "Fresh-brewed tea with juicy peach. Light & bright.",
    price: "from $5.49",
    image: "/images/peach-fruit-tea.jpg",
  },
  {
    name: "Strawberry Smoothie",
    desc: "Real strawberries blended thick and creamy.",
    price: "from $6.99",
    image: "/images/strawberry-milkshake.jpg",
  },
  {
    name: "Watermelon Juice",
    desc: "100% fresh-pressed. Nothing but the fruit.",
    price: "from $7.49",
    image: "/images/watermelon-juice.jpg",
    tag: "Fresh",
  },
  {
    name: "Bubble Waffle + Ice Cream",
    desc: "Crispy HK bubble waffle with a scoop on top.",
    price: "from $7.49",
    image: "/images/egg-waffle-ice-cream.jpg",
    tag: "Dessert",
  },
];

export default function FeaturedDrinks() {
  return (
    <section className="container-x py-12 md:py-16">
      <div className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-start">
        <div className="flex-1">
          <span className="eyebrow">🌟 Fan Favourites</span>
          <h2 className="section-title mt-2\">Crowd-pleasers, freshly made</h2>
          <p className="mt-1 max-w-xl text-lg text-brand-greenDark/70 leading-relaxed\">
            Discover what keeps customers coming back. Every drink is hand-shaken, customizable and made fresh to order.
          </p>
        </div>
        <Link
          href="/menu"
          className="group inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-greenDark transition-colors whitespace-nowrap"
        >
          View full menu
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {featured.map((d) => (
          <article
            key={d.name}
            className="card group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-mint/30 to-brand-pink/20">
              <Image
                src={d.image}
                alt={d.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-125"
              />
              {d.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-green shadow-md ring-1 ring-white/50">
                  ✓ {d.tag}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="p-4\">
              <div className="flex items-start justify-between gap-2\">
                <h3 className="font-display text-lg font-bold leading-tight text-brand-greenDark group-hover:text-brand-green transition-colors\">
                  {d.name}
                </h3>
              </div>
              <p className="mt-1 text-sm text-brand-greenDark/70 line-clamp-2\">{d.desc}</p>
              <p className="mt-2 text-sm font-bold bg-gradient-to-r from-brand-green to-brand-greenLight bg-clip-text text-transparent\">
                {d.price}
              </p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity\">
                <span className="text-xs font-semibold text-brand-green">← Customize & order</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
