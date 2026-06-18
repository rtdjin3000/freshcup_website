import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "About Fresh Cup — Premium Bubble Tea Café in Don Mills, North York",
  description:
    "🧋 Discover Fresh Cup in Don Mills, North York: a bubble tea café serving hand-shaken boba, fresh-pressed juices, real fruit smoothies, espresso, brewed coffee, lattes, cappuccinos, bubble waffles and fluffy pancakes.",
  keywords: [
    "Fresh Cup about",
    "bubble tea shop North York",
    "bubble tea cafe Don Mills",
    "best bubble tea Fairview",
    "premium bubble tea",
    "fresh juice cafe",
    "coffee cafe Don Mills",
    "espresso North York",
    "smoothie cafe North York",
  ],
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Leaf,
    title: "Real ingredients",
    desc: "We press juices from real fruit and brew our tea fresh. No powders pretending to be flavour.",
  },
  {
    icon: Sparkles,
    title: "Made to order",
    desc: "Your drink is shaken when you order it, customised to your exact sugar and ice level.",
  },
  {
    icon: Heart,
    title: "Neighbourhood love",
    desc: "We're proud to be a local favourite — a friendly spot to relax, study or grab a treat.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Fresh by name, fresh by nature"
        subtitle="A North York bubble tea café built on real fruit, real flavour and a whole lot of boba."
      />

      <section className="container-x grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-brand-green/10">
          <Image
            src="/images/mango-slush.jpg"
            alt="Fresh Cup drinks"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="section-title">Pouring happiness, one cup at a time</h2>
          <p className="mt-5 text-brand-greenDark/75">
            Fresh Cup was born from a love of great bubble tea and a belief that it should be made
            with real, honest ingredients. From our signature brown sugar boba to fresh-pressed
            watermelon juice, everything is crafted in-house, the moment you order.
          </p>
          <p className="mt-4 text-brand-greenDark/75">
            We&apos;re more than just drinks. Bubble waffles, fluffy pancakes, scooped ice cream and
            savoury snacks round out a menu that has something for everyone — whether you&apos;re here
            for a quick refresher or a sweet hangout with friends.
          </p>
          <p className="mt-4 text-brand-greenDark/75">
            You&apos;ll find us inside {restaurant.locatedIn} at {restaurant.address} in {restaurant.city}.
            Come say hi.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <div className="text-center">
            <span className="eyebrow">What we stand for</span>
            <h2 className="section-title mt-4">Little things, done right</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl bg-brand-cream p-8 text-center ring-1 ring-black/5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green text-white shadow-lg shadow-brand-green/25">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-greenDark">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-greenDark/65">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="rounded-[2rem] bg-brand-mint px-6 py-12 text-center">
          <h2 className="section-title">Come taste the difference</h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-greenDark/70">
            Browse the menu and find your new favourite cup.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="btn-primary px-7 py-3.5">See the Menu</Link>
            <Link href="/contact" className="btn-outline px-7 py-3.5">Find Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
