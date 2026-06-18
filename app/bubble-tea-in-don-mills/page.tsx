import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import ReviewCTA from "@/components/ReviewCTA";
import { restaurant } from "@/data/restaurant";

const pagePath = "/bubble-tea-in-don-mills";
const siteUrl = "https://fresh-cup.com";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Best Bubble Tea in Don Mills, North York",
  description:
    "Looking for bubble tea in Don Mills? Fresh Cup in Peanut Plaza serves hand-shaken boba, milk tea, fruit tea, smoothies, fresh juice, and bubble waffles.",
  keywords: [
    "bubble tea in Don Mills",
    "best bubble tea in Don Mills",
    "Don Mills boba",
    "bubble tea North York",
    "milk tea Don Mills",
    "fruit tea Don Mills",
    "boba near Peanut Plaza",
    "bubble tea near Fairview",
  ],
  alternates: { canonical: pagePath },
};

const faq = [
  {
    q: "Where can I get bubble tea in Don Mills?",
    a: "Fresh Cup Bubble Tea & Cafe is located in Peanut Plaza at 3046 Don Mills Rd, North York. We serve milk teas, fruit teas, smoothies, and fresh juice made to order.",
  },
  {
    q: "Does Fresh Cup offer delivery in Don Mills?",
    a: "Yes. You can order Fresh Cup through Uber Eats, SkipTheDishes, DoorDash, and Fantuan for delivery and takeout in Don Mills and nearby North York areas.",
  },
  {
    q: "What are your hours in Don Mills?",
    a: "Fresh Cup is open Monday to Friday from 3:00 PM to 9:00 PM, and Saturday to Sunday from 11:00 AM to 9:00 PM.",
  },
  {
    q: "Do you have daily specials?",
    a: "Yes. Fresh Cup offers rotating daily drink specials. Visit our Daily Special page to see the lineup for each day.",
  },
];

function StructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bubble Tea in Don Mills",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function BubbleTeaInDonMillsPage() {
  return (
    <>
      <StructuredData />
      <PageHeader
        eyebrow="Local guide"
        title="Bubble Tea in Don Mills"
        subtitle="Fresh Cup is your local stop in Peanut Plaza for hand-shaken bubble tea, real fruit drinks, and sweet snacks."
      />

      <section className="container-x py-10">
        <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 sm:p-9">
          <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
            Why people in Don Mills choose Fresh Cup
          </h2>
          <p className="mt-4 max-w-3xl text-brand-greenDark/75">
            If you are searching for bubble tea in Don Mills, freshness and consistency matter. At Fresh Cup,
            every drink is made to order with customizable sugar and ice levels. Choose from classic milk tea,
            fruit tea, slush, smoothies, and fresh-pressed juice.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-brand-mint/30 p-4 ring-1 ring-black/5">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-greenDark/70">Google Rating</p>
              <p className="mt-1 flex items-center gap-1 text-xl font-bold text-brand-green">
                <Star className="h-5 w-5 fill-current" /> {restaurant.rating}
              </p>
            </div>
            <div className="rounded-2xl bg-brand-mint/30 p-4 ring-1 ring-black/5">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-greenDark/70">Location</p>
              <p className="mt-1 text-base font-semibold text-brand-greenDark">{restaurant.locatedIn}</p>
            </div>
            <div className="rounded-2xl bg-brand-mint/30 p-4 ring-1 ring-black/5">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-greenDark/70">Phone</p>
              <a href={`tel:${restaurant.phone}`} className="mt-1 block text-base font-semibold text-brand-green hover:underline">
                {restaurant.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-4">
        <div className="rounded-3xl bg-brand-green px-6 py-10 text-white sm:px-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Order bubble tea in minutes</h2>
          <p className="mt-2 text-brand-cream/90">
            Pickup or delivery across Don Mills and North York.
          </p>
          <div className="mt-6">
            <OrderButtons />
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        <h2 className="font-display text-3xl font-semibold text-brand-greenDark">Find us in Don Mills</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <p className="flex items-center gap-2 font-semibold text-brand-greenDark">
              <MapPin className="h-5 w-5 text-brand-green" /> Address
            </p>
            <p className="mt-2 text-brand-greenDark/75">
              {restaurant.address}, {restaurant.addressLine2}
            </p>
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-semibold text-brand-green hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <p className="flex items-center gap-2 font-semibold text-brand-greenDark">
              <Clock className="h-5 w-5 text-brand-green" /> Hours
            </p>
            <ul className="mt-2 space-y-1 text-brand-greenDark/75">
              {restaurant.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>
                    {h.open} - {h.close}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-16">
        <h2 className="font-display text-3xl font-semibold text-brand-greenDark">FAQ: Bubble tea in Don Mills</h2>
        <div className="mt-6 space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <summary className="cursor-pointer list-none font-semibold text-brand-greenDark">{item.q}</summary>
              <p className="mt-3 text-brand-greenDark/75">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/menu" className="btn-primary px-6 py-3">
            View Full Menu
          </Link>
          <Link href="/daily-special" className="btn-outline px-6 py-3">
            See Daily Specials
          </Link>
          <Link href="/bubble-tea-near-fairview-mall" className="btn-outline px-6 py-3">
            Near Fairview Mall
          </Link>
          <Link href="/boba-peanut-plaza" className="btn-outline px-6 py-3">
            Boba in Peanut Plaza
          </Link>
          <Link href="/contact" className="btn-outline px-6 py-3">
            Get Directions
          </Link>
        </div>
      </section>

      <ReviewCTA />
    </>
  );
}
