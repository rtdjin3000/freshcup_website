"use client";

import { Coffee, Leaf, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewItem {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  href: string;
  bgClass: string;
}

const RecentlyAdded = () => {
  const newItems: NewItem[] = [
    {
      category: "Coffee Collection",
      icon: <Coffee className="w-6 h-6" />,
      items: [
        "Espresso",
        "Brewed Coffee",
        "Cappuccino",
        "Mochaccino",
        "Mocha Latte",
        "Caramel Latte",
        "Rose Latte",
        "Vanilla Latte",
      ],
      color: "from-amber-100 to-orange-100",
      bgClass: "bg-amber-50 border-amber-200 hover:border-amber-400",
      href: "/menu#coffee",
    },
    {
      category: "Premium Matcha",
      icon: <Leaf className="w-6 h-6" />,
      items: [
        "Mango Matcha Latte",
        "Coconut Matcha Latte",
        "Matcha Milkshake",
        "Matcha Slush",
      ],
      color: "from-green-100 to-emerald-100",
      bgClass: "bg-green-50 border-green-200 hover:border-green-400",
      href: "/menu#matcha",
    },
    {
      category: "Artisan Foams",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Strawberry Foam",
        "Matcha Foam",
        "Mango Foam",
        "Coconut Foam",
        "Whipping Cream",
      ],
      color: "from-pink-100 to-rose-100",
      bgClass: "bg-pink-50 border-pink-200 hover:border-pink-400",
      href: "/menu",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-brand-mint/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-3">
            Recently Added ✨
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest menu additions — premium coffee varieties, luxurious matcha options, and artisan foam toppings.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {newItems.map((item) => (
            <Link key={item.category} href={item.href}>
              <div
                className={`h-full p-6 rounded-2xl border-2 transition-all cursor-pointer ${item.bgClass}`}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-${item.category === "Coffee Collection" ? "amber" : item.category === "Premium Matcha" ? "green" : "pink"}-600`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-green">
                    {item.category}
                  </h3>
                </div>

                {/* Items List */}
                <ul className="space-y-2 mb-6">
                  {item.items.map((menuItem) => (
                    <li
                      key={menuItem}
                      className="text-sm text-gray-700 flex items-center"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mr-2" />
                      {menuItem}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="text-sm font-semibold text-brand-green hover:text-brand-pink transition-colors flex items-center">
                  View Menu →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/menu">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand-green to-brand-green hover:shadow-lg rounded-full font-semibold text-white transition-all hover:scale-105">
              Explore Full Menu
              <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
