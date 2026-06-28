import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Sparkles,
  Crown,
  Check,
  Clock,
  Users,
  CupSoda,
  Gift,
  CalendarHeart,
} from "lucide-react";
import { restaurant } from "@/data/restaurant";
import PartyInquiryForm from "@/components/PartyInquiryForm";

export const metadata: Metadata = {
  title: "Birthday Party Packages: Book the Café in North York",
  description:
    "🎂 Host your birthday party at Fresh Cup in Don Mills, North York. All-inclusive packages from $21.99/guest: bubble tea, snacks, egg waffles, croffles, setup & cleanup. Book the Boba Bash or a private café buyout.",
  keywords: [
    "birthday party North York",
    "bubble tea birthday party",
    "kids birthday party Don Mills",
    "boba party North York",
    "private party venue North York",
    "café birthday party",
    "Fresh Cup birthday packages",
    "birthday party venue Don Mills",
    "teen birthday party North York",
    "party room bubble tea",
  ],
  alternates: { canonical: "/birthday-parties" },
};

const siteUrl = "https://fresh-cup.com";

const heroLede =
  "Reserve our space, and we'll pour the boba, plate the cake, and run the whole celebration. Milk teas, slushes, egg waffles, croffles and good food, all in one spot in North York.";

const facts = [
  { icon: Clock, label: "2–3 hours, your space" },
  { icon: Users, label: "From 10 guests" },
  { icon: CupSoda, label: "Boba · dessert · hot food" },
  { icon: Sparkles, label: "Setup & cleanup on us" },
];

type Inclusion = { lead?: string; text: string };

type Pkg = {
  kicker: string;
  name: string;
  bestFor: string;
  price: string;
  priceNumeric: string;
  priceNote: string;
  ribbon: string;
  premium: boolean;
  includes: Inclusion[];
  gift: string;
};

const packages: Pkg[] = [
  {
    kicker: "Package One · 2 hours",
    name: "The Boba Bash",
    bestFor: "Best for kids, tweens & easy get-togethers",
    price: "$21.99",
    priceNumeric: "21.99",
    priceNote: "Minimum 10 guests · reserved (semi-private) seating area",
    ribbon: "Most popular",
    premium: false,
    includes: [
      {
        lead: "One drink each",
        text: "regular bubble milk tea, fruit slush or smoothie, with a free topping",
      },
      {
        lead: "One snack each",
        text: "fries, veg spring rolls, a hot dog or an egg & cheese bagel",
      },
      {
        lead: "One dessert each",
        text: "a scoop of ice cream or a share of our original egg waffle",
      },
      { text: "Tables set with cups, plates & napkins" },
      { text: "Bring your own cake, we'll chill, plate & serve it" },
      { text: "Full setup & cleanup handled by our team" },
    ],
    gift: "🎂 The birthday guest of honour's drink is on us.",
  },
  {
    kicker: "Package Two · 3 hours",
    name: "The Ultimate Sip & Celebrate",
    bestFor: "Best for milestones, teens, showers & bigger groups",
    price: "$34.99",
    priceNumeric: "34.99",
    priceNote: "Minimum 10 guests · private use of the whole café",
    ribbon: "Private buyout",
    premium: true,
    includes: [
      {
        lead: "One large premium drink each",
        text: "any milk tea, real-fruit smoothie, milkshake or matcha latte, with a topping",
      },
      {
        lead: "Hosted activity",
        text: "Build-Your-Own Boba Bar or decorate-your-own egg waffle / croffle",
      },
      {
        lead: "Shared hot-food spread",
        text: "chicken strips, wings, spring rolls & loaded fries, scaled to your group",
      },
      {
        lead: "Dessert finale each",
        text: "flavoured croffle + a scoop of ice cream",
      },
      { text: "Light balloon & table decor + a reserved photo corner" },
      { text: "Your own dedicated party host for the full 3 hours" },
      { text: "A take-home treat for every guest" },
    ],
    gift: "🎉 Guest of honour gets a free drink and a free dessert.",
  },
];

const addons = [
  {
    name: "Extra guest",
    price: "$19 / $30",
    desc: "Beyond your package count (Boba Bash / Ultimate).",
  },
  {
    name: "Custom cake from our kitchen",
    price: "from $35",
    desc: "Skip the bakery run, we'll make it fresh.",
  },
  {
    name: "Personalized boba favour bottles",
    price: "$5.50 each",
    desc: "Sealed milk teas with your name & date on the label.",
  },
  {
    name: "Extra hour of space",
    price: "$75",
    desc: "Keep the party going past your window.",
  },
  {
    name: "Loot bags",
    price: "$6 each",
    desc: "Sweet treats & a drink voucher to take home.",
  },
  {
    name: "Private buyout (Boba Bash)",
    price: "+$100",
    desc: "Turn the 2-hour package into a private one.",
  },
];

const finePrint = [
  {
    label: "Capacity",
    text: "comfortably up to ~25 guests; ask us about larger groups.",
  },
  {
    label: "Deposit",
    text: "$100 (Boba Bash) or $150 (Ultimate) to lock your date, applied to your final bill.",
  },
  { label: "Final headcount", text: "confirmed 48 hours before the party." },
  {
    label: "Cancellation",
    text: "full deposit refund 14+ days out; reschedule within 14 days subject to availability.",
  },
  {
    label: "Outside food",
    text: "birthday cake is welcome; please leave other outside food & drink at home.",
  },
  {
    label: "Best availability",
    text: "weekday afternoons & weekend mornings. HST is extra.",
  },
];

export default function BirthdayPartiesPage() {
  const priceValidUntil = `${new Date().getFullYear() + 1}-12-31`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": packages.map((pkg) => ({
      "@type": "Product",
      name: `${pkg.name} — Fresh Cup Birthday Party Package`,
      description: `${pkg.bestFor}. ${pkg.includes
        .map((i) => (i.lead ? `${i.lead}: ${i.text}` : i.text))
        .join(". ")}. ${pkg.priceNote}.`,
      category: "Birthday Party Package",
      brand: { "@type": "Brand", name: restaurant.fullName },
      offers: {
        "@type": "Offer",
        price: pkg.priceNumeric,
        priceCurrency: "CAD",
        priceValidUntil,
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/birthday-parties`,
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          minValue: 10,
          unitText: "guests",
        },
        seller: {
          "@type": "Restaurant",
          name: restaurant.fullName,
          telephone: restaurant.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: restaurant.address,
            addressLocality: restaurant.city,
            addressRegion: restaurant.region,
            postalCode: restaurant.postalCode,
            addressCountry: restaurant.country,
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-pinkSoft blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-mint blur-3xl" />
        <div className="container-x relative pb-6 pt-8 text-center md:py-24">
          <span className="eyebrow">Book the shop · throw the party</span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-brand-greenDark sm:text-5xl md:text-6xl">
            Birthday <span className="text-brand-pink">parties</span> on tap
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-brand-greenDark/75 md:text-lg">
            {heroLede}
          </p>

          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5 md:mt-8 md:gap-3">
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-brand-greenDark shadow-sm ring-1 ring-brand-green/15 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-brand-green" />
                  {f.label}
                </span>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-9">
            <a href="#book" className="btn-primary">
              <CalendarHeart className="h-5 w-5" />
              Request your date
            </a>
            <a href={`tel:${restaurant.phone}`} className="btn-outline">
              <Phone className="h-5 w-5" />
              Call to book
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="container-x pb-12 pt-4 md:py-20">
        <div className="mb-8 text-center md:mb-12">
          <span className="eyebrow">Two ways to celebrate</span>
          <h2 className="section-title mt-4">Party packages</h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-greenDark/70 md:text-lg">
            Per-guest pricing with everything handled. You bring the cake and the
            birthday crew, we do the rest.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 md:gap-8">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`card relative flex flex-col overflow-hidden p-6 md:p-10 ${
                pkg.premium
                  ? "bg-gradient-to-b from-white to-brand-peach/10 ring-2 ring-brand-peach/60"
                  : ""
              }`}
            >
              <span
                className={`mb-3 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-md ${
                  pkg.premium ? "bg-brand-greenDark" : "bg-brand-pink"
                }`}
              >
                {pkg.premium ? (
                  <Crown className="h-3.5 w-3.5" />
                ) : (
                  <Sparkles className="h-3.5 w-3.5" />
                )}
                {pkg.ribbon}
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-greenLight">
                {pkg.kicker}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold text-brand-greenDark md:text-4xl">
                {pkg.name}
              </h3>
              <p className="mt-1.5 font-display text-lg italic text-brand-greenDark/70">
                {pkg.bestFor}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-brand-green">
                  {pkg.price}
                </span>
                <span className="text-sm font-medium leading-tight text-brand-greenDark/70">
                  per guest
                  <br />+ HST
                </span>
              </div>
              <p className="mt-2 text-sm text-brand-greenDark/60">
                {pkg.priceNote}
              </p>

              <div className="my-6 h-px bg-brand-green/15" />

              <ul className="space-y-0.5">
                {pkg.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 border-b border-dotted border-brand-green/15 py-2.5 last:border-0"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" />
                    <span className="text-sm text-brand-greenDark/80">
                      {item.lead && (
                        <b className="font-semibold text-brand-greenDark">
                          {item.lead}:{" "}
                        </b>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-6 flex items-center gap-2 rounded-2xl border border-dashed px-4 py-3 text-sm font-medium ${
                  pkg.premium
                    ? "border-brand-peach bg-brand-peach/15 text-brand-boba"
                    : "border-brand-green/40 bg-brand-mint/50 text-brand-green"
                }`}
              >
                <Gift className="h-4 w-4 flex-shrink-0" />
                <span>{pkg.gift}</span>
              </div>

              <a
                href={`tel:${restaurant.phone}`}
                className={`mt-7 w-full ${
                  pkg.premium ? "btn-primary" : "btn-outline"
                }`}
              >
                <Phone className="h-5 w-5" />
                Book the {pkg.name.replace(/^The /, "")}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-brand-mint/25 py-10 md:py-20">
        <div className="container-x">
          <div className="mb-8 text-center md:mb-12">
            <span className="eyebrow">Make it yours</span>
            <h2 className="section-title mt-4">Add-ons & extras</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-greenDark/70 md:text-lg">
              Add any of these to either package when you book.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((a) => (
              <div key={a.name} className="card p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-brand-greenDark">
                    {a.name}
                  </h3>
                  <span className="whitespace-nowrap font-display text-xl font-bold text-brand-green">
                    {a.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-brand-greenDark/65">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK / INQUIRY */}
      <section id="book" className="container-x py-10 md:py-20">
        <div className="mb-8 text-center md:mb-10">
          <span className="eyebrow">Check your date</span>
          <h2 className="section-title mt-4">Request your party</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-greenDark/70 md:text-lg">
            Send us your details and we&apos;ll confirm availability, usually
            within a day. Prefer to talk? Call {restaurant.phoneDisplay}.
          </p>
        </div>
        <PartyInquiryForm />
      </section>

      {/* FINE PRINT */}
      <section className="container-x py-10 md:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-brand-greenDark p-6 text-brand-cream md:p-12">
          <h2 className="mb-6 text-center font-display text-3xl font-semibold text-white md:mb-8">
            Good to know
          </h2>
          <div className="grid gap-x-10 md:grid-cols-2">
            {finePrint.map((fp) => (
              <div
                key={fp.label}
                className="flex items-start gap-3 border-b border-white/10 py-3.5"
              >
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-peach" />
                <p className="text-sm text-brand-cream/80">
                  <b className="font-semibold text-white">{fp.label}:</b>{" "}
                  {fp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-green to-brand-greenLight py-10 text-white md:py-20">
        <div className="container-x text-center">
          <span className="eyebrow bg-white/15 text-white ring-white/30">
            Reserve your date
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Let&apos;s plan the party
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">
            Give us a call to check your date and lock it in. We&apos;ll take
            care of the boba, the food, and the mess.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${restaurant.phone}`}
              className="btn bg-white text-brand-green hover:bg-brand-mint"
            >
              <Phone className="h-5 w-5" />
              {restaurant.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="btn border border-white/50 bg-white/20 text-white hover:bg-white/30"
            >
              <MapPin className="h-5 w-5" />
              Find us
            </Link>
          </div>

          <p className="mt-6 text-white/80">
            📍 {restaurant.address}, {restaurant.addressLine2} · Located in{" "}
            {restaurant.locatedIn}
          </p>
        </div>
      </section>
    </>
  );
}
