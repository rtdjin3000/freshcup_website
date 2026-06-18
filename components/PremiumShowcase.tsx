import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

type ShowcaseItem = {
  name: string;
  category: string;
  desc: string;
  icon: string;
  image: string;
  imagePosition?: string;
  badge: string;
  href: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    name: "Signature Bubble Tea",
    category: "Premium Creations",
    desc: "House specials with unique combinations. Brown Sugar Crème Brûlée, Matcha Latte with Boba & more.",
    icon: "✨",
    image: "/images/hero.jpg",
    badge: "House Special",
    href: "/menu#signature-bubble-tea",
  },
  {
    name: "Handcrafted Coffee",
    category: "Specialty Espresso",
    desc: "Bold, smooth specialty coffee drinks. From classic Cappuccino to our signature Dirty Matcha.",
    icon: "☕",
    image: "/images/Coffee.png",
    imagePosition: "50% 50%",
    badge: "Artisan",
    href: "/menu#coffee",
  },
  {
    name: "Bubble Waffles",
    category: "Crispy Indulgence",
    desc: "Crispy, fluffy Hong Kong bubble waffles in wild flavours. Taro, Oreo, Matcha, Strawberry & more.",
    icon: "🧇",
    image: "/images/Bubble Waffle.jpg",
    imagePosition: "50% 50%",
    badge: "Customizable",
    href: "/menu#bubble-waffles",
  },
  {
    name: "Crofles",
    category: "The Ultimate Hybrid",
    desc: "Flaky croissant meets crispy waffle. French pastry elegance meets Asian indulgence.",
    icon: "🥐",
    image: "/images/Biscoff Croffle.jpg",
    imagePosition: "50% 50%",
    badge: "Premium",
    href: "/menu#crofles",
  },
];

export default function PremiumShowcase() {
  return (
    <section className="container-x py-14 md:py-18">
      <div className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-pink" />
          <span className="eyebrow">🎯 OUR SPECIALTIES</span>
          <Sparkles className="h-5 w-5 text-brand-pink" />
        </div>
        <h2 className="section-title">Premium Menu Highlights</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-greenDark/70">
          Explore our signature creations and specialty items crafted with premium ingredients and passion.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {showcaseItems.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-mint to-brand-mint/60 p-5 transition-all hover:shadow-xl hover:shadow-brand-green/20 hover:-translate-y-1 cursor-pointer">
              {/* Badge */}
              <div className="absolute right-3 top-3 inline-block rounded-full bg-brand-pink/20 px-3 py-1 text-xs font-bold text-brand-pink backdrop-blur-sm">
                {item.badge}
              </div>

              {/* Icon & Header */}
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold">{item.icon}</p>
                  <h3 className="mt-2 font-bold text-brand-greenDark text-lg leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-pink mt-1">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative mb-4 h-32 w-full overflow-hidden rounded-lg bg-brand-green/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                />
              </div>

              {/* Description */}
              <p className="text-sm text-brand-greenDark/80 leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-green group-hover:text-brand-greenDark transition-colors">
                View Menu
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 text-center">
        <Link
          href="/menu"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-green to-brand-greenLight px-8 py-3 font-semibold text-white shadow-lg shadow-brand-green/30 transition-all hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          Explore Full Menu
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
