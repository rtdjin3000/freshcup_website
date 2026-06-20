import Image from "next/image";
import { Trophy, Clock, MapPin } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import OrderButtons from "./OrderButtons";

export default function WorldCupPromo() {
  const wc = restaurant.worldCup;

  if (!wc?.active) {
    return null;
  }

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${wc.offer} ${wc.offerItems} — ${wc.eyebrow}`,
    description: `${wc.offer} ${wc.offerItems} ${wc.timing} at ${restaurant.fullName} in ${restaurant.city}. ${wc.fineprint}`,
    url: "https://fresh-cup.com/",
    image: `https://fresh-cup.com${wc.image}`,
    priceCurrency: "CAD",
    availabilityStarts: wc.startDate,
    availabilityEnds: wc.endDate,
    availability: "https://schema.org/InStock",
    offeredBy: {
      "@type": "Restaurant",
      name: restaurant.fullName,
      address: {
        "@type": "PostalAddress",
        streetAddress: restaurant.address,
        addressLocality: restaurant.city,
        addressRegion: restaurant.region,
        postalCode: restaurant.postalCode,
        addressCountry: "CA",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-greenDark via-brand-green to-brand-greenDark py-12 text-white md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* Decorative glows */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-peach/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-cream ring-1 ring-white/25 backdrop-blur-sm">
              <Trophy className="h-4 w-4 text-brand-peach" /> {wc.eyebrow}
            </span>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {wc.headline}
            </h2>

            <p className="mt-4 max-w-xl text-lg text-brand-cream/90">
              Your Don Mills fandom HQ. Get{" "}
              <span className="font-bold text-brand-peach">{wc.offer}</span> {wc.offerItems}{" "}
              {wc.timing}. Cheer on your team with a fresh cup in hand.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 ring-1 ring-white/15">
                <Clock className="h-4 w-4 text-brand-peach" /> During all game hours
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 ring-1 ring-white/15">
                <MapPin className="h-4 w-4 text-brand-peach" /> In-store · {restaurant.locatedIn}
              </span>
            </div>

            <div className="mt-7">
              <OrderButtons />
            </div>

            <p className="mt-4 text-xs text-brand-cream/60">{wc.fineprint}</p>
          </div>

          {/* Poster */}
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-2xl shadow-black/30">
            <Image
              src={wc.image}
              alt={`${restaurant.fullName} World Cup 2026 Watch Party — ${wc.offer} ${wc.offerItems} during all game hours`}
              width={1000}
              height={1280}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
