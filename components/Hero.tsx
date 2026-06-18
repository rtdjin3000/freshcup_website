import Image from "next/image";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import OrderButtons from "./OrderButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-white to-brand-mint/10">
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-brand-mint to-brand-mint/0 blur-3xl opacity-60 animate-pulse" />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-gradient-to-bl from-brand-pinkSoft to-brand-pinkSoft/0 blur-3xl opacity-50 animate-pulse [animation-delay:1s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-6 py-12 md:grid-cols-2 md:gap-6 md:py-16">
        {/* Left side */}
        <div className="animate-fade-up text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20 backdrop-blur-sm">
            📍 North York · {restaurant.locatedIn}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] text-brand-greenDark sm:text-6xl lg:text-7xl">
            Sip the{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-brand-green via-brand-greenLight to-brand-green bg-clip-text text-transparent">
                freshest
              </span>
              <svg
                className="absolute -bottom-3 left-0 h-4 w-full text-brand-pink"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 8 Q 25 2 50 8 T 100 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                />
              </svg>
            </span>{" "}
            boba in town
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-brand-greenDark/75 md:mx-0">
            {restaurant.shortDesc}
          </p>
          <p className="mt-3 text-sm text-brand-greenDark/70 md:text-left text-center">
            Looking for bubble tea in Don Mills?{" "}
            <Link href="/bubble-tea-in-don-mills" className="font-semibold text-brand-green underline-offset-2 hover:underline">
              See why locals choose Fresh Cup
            </Link>
            .
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 md:flex-row md:items-start">
            <Link
              href="/menu"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-brand-green to-brand-greenLight px-8 py-4 font-semibold text-white shadow-lg shadow-brand-green/30 transition-all hover:shadow-xl hover:shadow-brand-green/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">✨ See the Menu</span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-green bg-white/80 px-8 py-4 font-semibold text-brand-green transition-all hover:bg-brand-mint hover:border-brand-greenDark backdrop-blur-sm"
            >
              <MapPin className="h-5 w-5" />
              Find Us
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <OrderButtons size="sm" className="justify-center md:justify-start" />
            <p className="text-xs text-brand-greenDark/60 md:text-left text-center">
              🚚 Fast delivery via Uber Eats & SkipTheDishes
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(restaurant.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-yellow-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-brand-greenDark/70">
              <span className="font-bold text-brand-green text-base">{restaurant.rating}⭐</span> on Google ·{" "}
              <span className="font-semibold text-brand-green">{restaurant.reviewCount}+</span> reviews
            </p>
          </div>
        </div>

        {/* Right - hero image with premium effects */}
        <div className="relative mx-auto flex max-w-md items-center justify-center md:max-w-none">
          <div className="relative aspect-square w-full max-w-md h-full min-h-96">
            {/* premium gradient background */}
            <div className="absolute inset-3 rounded-[3rem] bg-gradient-to-br from-brand-pink/50 via-brand-peach/30 to-brand-mint/40 backdrop-blur-xl opacity-80" />

            {/* main image with glassmorphism */}
            <div className="absolute inset-0 overflow-hidden rounded-[3rem] shadow-2xl ring-1 ring-white/50 backdrop-blur-3xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              <Image
                src="/images/hero.jpg"
                alt="Fresh Cup signature bubble tea"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            {/* floating premium chips */}
            <div className="absolute -left-4 top-10 animate-bob rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl ring-1 ring-white/50 sm:-left-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-green">🧋 50+ Flavours</p>
              <p className="text-[11px] text-brand-greenDark/70 font-medium">Fully customizable</p>
            </div>

            <div className="absolute -right-3 bottom-12 animate-bob rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl ring-1 ring-white/50 [animation-delay:1s] sm:-right-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-pink">🍓 Real Fruit</p>
              <p className="text-[11px] text-brand-greenDark/70 font-medium">Fresh daily</p>
            </div>

            <div className="absolute left-4 -bottom-3 animate-bob rounded-2xl bg-white/90 backdrop-blur-md px-5 py-4 shadow-xl ring-1 ring-white/50 [animation-delay:2s]">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-green">🧇 Bubble Waffles</p>
              <p className="text-[11px] text-brand-greenDark/70 font-medium">Hong Kong style</p>
            </div>
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative border-y border-brand-green/10 bg-brand-green py-3">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-brand-cream">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10">
              {["Milk Tea", "Fruit Tea", "Fresh Juice", "Smoothies", "Slush", "Bubble Waffles", "Ice Cream", "Brown Sugar Boba"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em]">
                    {item}
                    <span className="text-brand-peach">●</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
