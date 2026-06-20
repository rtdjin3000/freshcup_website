import Link from "next/link";
import { Sparkles, Heart, Star, Zap } from "lucide-react";

export default function KidsFavorites() {
  const favorites = [
    {
      emoji: "🍓",
      name: "Strawberry Smoothie",
      desc: "Sweet, creamy & fruity",
      icon: Heart,
      color: "from-pink-400 to-brand-pink",
    },
    {
      emoji: "🧋",
      name: "Brown Sugar Boba",
      desc: "Chewy pearls, sweet vibes",
      icon: Zap,
      color: "from-amber-400 to-brand-peach",
    },
    {
      emoji: "🧇",
      name: "Bubble Waffle + Ice Cream",
      desc: "Crispy, fluffy & cold",
      icon: Sparkles,
      color: "from-yellow-300 to-orange-300",
    },
    {
      emoji: "🍦",
      name: "Rainbow Ice Cream",
      desc: "Pick your flavor",
      icon: Star,
      color: "from-purple-400 to-brand-pink",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-brand-pinkSoft/30 via-brand-mint/20 to-transparent py-10 md:py-14">
      <div className="container-x">
        <div className="mb-6 text-center">
          <div className="eyebrow mb-4 inline-block">
            <span>🎉 Fresh Cup Favorites</span>
          </div>
          <h2 className="section-title mb-4">What the Cool Kids Love ❤️</h2>
          <p className="text-lg text-brand-greenDark/70 max-w-2xl mx-auto">
            From fruity smoothies to crispy waffles, here are the drinks and treats that keep Fresh Cup packed with happy faces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {favorites.map((fav, i) => {
            const Icon = fav.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer ring-1 ring-white/50"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${fav.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-5xl">{fav.emoji}</span>
                    <Icon className="h-6 w-6 text-brand-green opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-brand-greenDark text-lg mb-0.5">
                    {fav.name}
                  </h3>
                  <p className="text-sm text-brand-greenDark/70">{fav.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="btn btn-primary px-8 py-4 text-lg font-bold rounded-2xl hover:shadow-xl hover:shadow-brand-green/30"
          >
            ✨ Explore All Flavours
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline px-8 py-4 text-lg font-bold rounded-2xl"
          >
            📍 Find Us
          </Link>
        </div>
      </div>
    </section>
  );
}
