import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import {
  drinkCategories,
  toppings,
  dessertCategory,
  snacksCategory,
  combosCategory,
  bubbleWafflesCategory,
  croflesCategory,
  specialsCategory,
  customizations,
} from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Full Menu — Bubble Tea, Fresh Juice, Smoothies & Coffee in Don Mills | Fresh Cup",
  description:
    "🧋 Fresh Cup menu in Don Mills: 50+ bubble tea flavours, milk tea, fruit tea, real fruit smoothies, 100% fresh juice, espresso, brewed coffee, lattes, cappuccinos, bubble waffles, fluffy pancakes, desserts and snacks. Fully customizable — order online or visit North York.",
  keywords: [
    "bubble tea menu",
    "bubble tea flavours Don Mills",
    "milk tea menu North York",
    "fruit tea menu",
    "bubble waffle menu",
    "fluffy pancakes menu",
    "fresh juice menu",
    "smoothie menu Don Mills",
    "coffee menu North York",
    "espresso Don Mills",
    "cappuccino North York",
    "latte Don Mills",
    "boba tea prices",
    "bubble tea customization",
  ],
  alternates: { canonical: "/menu" },
};

function price(n: number | string) {
  return typeof n === "number" ? `$${n.toFixed(2)}` : n;
}

const foodSections = [dessertCategory, bubbleWafflesCategory, croflesCategory, specialsCategory, snacksCategory, combosCategory];

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our menu"
        title="The full lineup"
        subtitle="50+ flavours across teas, juices, smoothies and treats. Every drink is customisable — choose your sugar, ice and toppings."
      />

      {restaurant.dailySpecial?.active && (
        <section className="container-x pt-8">
          <div className="rounded-2xl bg-gradient-to-r from-brand-greenDark to-brand-green p-5 text-white sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-cream/85">
              Daily Deal
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-semibold">
                Daily Specials {restaurant.dailySpecial.priceDisplay} — {restaurant.dailySpecial.validFor}
              </p>
              <a
                href="/daily-special"
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-greenDark"
              >
                View Daily Special Menu
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Quick category nav */}
      <div className="sticky top-16 z-30 border-y border-black/5 bg-brand-cream/90 backdrop-blur md:top-20">
        <div className="container-x flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {[...drinkCategories, ...foodSections].map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-greenDark ring-1 ring-black/5 transition-colors hover:bg-brand-mint hover:text-brand-green"
            >
              {c.name}
            </a>
          ))}
        </div>
      </div>

      {/* Customisation note */}
      <div className="container-x pt-10">
        <div className="flex flex-col gap-4 rounded-3xl bg-brand-mint p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <span className="font-bold text-brand-green">Sugar level: </span>
              <span className="text-brand-greenDark/75">{customizations.sugar.join(" · ")}</span>
            </div>
            <div>
              <span className="font-bold text-brand-green">Ice level: </span>
              <span className="text-brand-greenDark/75">{customizations.ice.join(" · ")}</span>
            </div>
          </div>
          <OrderButtons size="sm" />
        </div>
      </div>

      {/* Drink categories */}
      <div className="container-x space-y-16 py-14">
        {drinkCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-36">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
              {/* left: image + price card */}
              <div className="md:sticky md:top-36 md:self-start">
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl shadow-brand-green/10">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover"
                  />
                  {cat.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-greenDark shadow">
                      {cat.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex gap-2">
                  {cat.sizes.map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 rounded-2xl bg-white py-3 text-center ring-1 ring-black/5"
                    >
                      <p className="text-xs font-bold uppercase text-brand-greenDark/50">{s.label}</p>
                      <p className="font-display text-lg font-semibold text-brand-green">
                        ${s.price.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* right: details */}
              <div>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
                    {cat.name}
                  </h2>
                  {cat.temp && (
                    <span className="rounded-full bg-brand-cream px-3 py-1 text-xs font-semibold text-brand-greenDark/70 ring-1 ring-black/5">
                      {cat.temp}
                    </span>
                  )}
                </div>
                {cat.teaBase && (
                  <p className="mt-2 text-sm font-medium text-brand-green">
                    Tea base: {cat.teaBase}
                  </p>
                )}
                <p className="mt-3 max-w-xl text-brand-greenDark/70">{cat.blurb}</p>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-greenDark/45">
                  Flavours
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cat.flavours.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-white px-3.5 py-1.5 text-sm text-brand-greenDark ring-1 ring-black/5 transition-colors hover:bg-brand-mint hover:text-brand-green"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Toppings */}
      <section className="bg-white py-14">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">Add-ons</span>
            <h2 className="section-title mt-4">Toppings & extras</h2>
            <p className="mx-auto mt-3 max-w-lg text-brand-greenDark/70">
              Make it yours. Pile on the pearls, jelly and more.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {toppings.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between rounded-2xl bg-brand-cream px-5 py-3.5 ring-1 ring-black/5"
              >
                <span className="text-sm font-medium text-brand-greenDark">{t.name}</span>
                <span className="text-sm font-bold text-brand-green">
                  {typeof t.price === "number" ? `+$${t.price.toFixed(2)}` : t.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food sections */}
      <div className="container-x space-y-14 py-16">
        {foodSections.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-36">
            <div className="grid gap-8 md:grid-cols-[1fr_320px] md:gap-12">
              <div>
                <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
                  {sec.name}
                </h2>
                <p className="mt-3 max-w-xl text-brand-greenDark/70">{sec.blurb}</p>
                <ul className="mt-6 divide-y divide-black/5 rounded-3xl bg-white ring-1 ring-black/5">
                  {sec.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4 px-5 py-4">
                      <div>
                        <p className="font-semibold text-brand-greenDark">{item.name}</p>
                        {item.note && (
                          <p className="mt-0.5 text-xs text-brand-greenDark/55">{item.note}</p>
                        )}
                      </div>
                      <span className="whitespace-nowrap font-display text-lg font-semibold text-brand-green">
                        {price(item.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {sec.image && (
                <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl shadow-xl shadow-brand-green/10 md:block">
                  <Image
                    src={sec.image}
                    alt={sec.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-brand-green px-6 py-10 text-center text-white">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Ready to order?</h2>
          <p className="mt-2 text-brand-cream/85">Pickup or delivery — get your Fresh Cup fix now.</p>
          <div className="mt-6 flex justify-center">
            <OrderButtons />
          </div>
        </div>
      </section>
    </>
  );
}
