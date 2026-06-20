import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Daily Special Drinks: $5 Every Day in Don Mills",
  description:
    "Fresh Cup Daily Specials in North York: a different featured drink every day for $5. Monday to Sunday daily drink deal in Don Mills. Regular size, no toppings.",
  keywords: [
    "daily special bubble tea North York",
    "daily drink special Don Mills",
    "Fresh Cup daily specials",
    "$5 bubble tea North York",
    "weekday drink deals North York",
    "weekend drink deals Don Mills",
  ],
  alternates: { canonical: "/daily-special" },
};

const siteUrl = "https://fresh-cup.com";

export default function DailySpecialPage() {
  const special = restaurant.dailySpecial;

  if (!special?.active) {
    return null;
  }

  const imageUrl = `${siteUrl}${encodeURI(special.image)}`;
  // Recommended by Google: keep priceValidUntil in the future to avoid stale offers.
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": special.schedule.map((entry) => ({
      "@type": "Product",
      name: `${entry.item} — ${entry.day} Daily Special`,
      image: imageUrl,
      description: `${entry.day}'s Fresh Cup daily special: ${entry.item} for ${special.priceDisplay}. ${special.validFor}.`,
      category: "Bubble Tea",
      brand: {
        "@type": "Brand",
        name: restaurant.fullName,
      },
      offers: {
        "@type": "Offer",
        price: "5.00",
        priceCurrency: "CAD",
        priceValidUntil,
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/daily-special`,
        seller: {
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
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHeader
        eyebrow="Daily deal"
        title="Daily Specials"
        subtitle={`A different featured drink every day for just ${special.priceDisplay}. ${special.validFor}.`}
      />

      <section className="container-x pb-10">
        <div className="overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-xl shadow-brand-green/10">
          <Image
            src={special.image}
            alt="Fresh Cup daily specials poster"
            width={1920}
            height={1080}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-x py-8">
        <div className="rounded-3xl bg-gradient-to-br from-white to-brand-cream/30 p-6 ring-1 ring-black/5 md:p-8 backdrop-blur-sm">
          <h2 className="font-display text-2xl font-semibold text-brand-greenDark md:text-3xl">
            This Week&apos;s Daily Special Lineup
          </h2>
          <p className="mt-2 text-brand-greenDark/70">
            Visit in-store or order online while supplies last. Hover over any day for details!
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {special.schedule.map((entry) => (
              <div
                key={entry.day}
                className="group relative flex flex-col items-start justify-between gap-3 rounded-2xl bg-gradient-to-br from-brand-mint/60 to-brand-mint/30 px-5 py-4 ring-1 ring-black/5 transition-all duration-300 hover:from-brand-green/50 hover:to-brand-green/20 hover:ring-brand-green/50 hover:shadow-lg hover:shadow-brand-green/20 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Animated background glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-green/0 via-transparent to-brand-green/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col gap-2 w-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-greenDark/70 transition-colors duration-300 group-hover:text-brand-green">
                    {entry.day}
                  </p>
                  <p className="font-semibold text-brand-greenDark transition-colors duration-300 group-hover:text-brand-greenDark line-clamp-2">
                    {entry.item}
                  </p>
                  <p className="text-sm font-bold text-brand-green transition-all duration-300 group-hover:text-brand-greenDark group-hover:scale-110 origin-left">
                    {special.priceDisplay}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <OrderButtons />
          </div>
        </div>
      </section>
    </>
  );
}
