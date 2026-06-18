import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import { restaurant } from "@/data/restaurant";

const siteUrl = "https://fresh-cup.com";
const pagePath = "/bubble-tea-near-fairview-mall";

export const metadata: Metadata = {
  title: "Bubble Tea Near Fairview Mall",
  description:
    "Fresh Cup is a bubble tea shop near Fairview Mall in Don Mills. Hand-shaken boba, fruit tea, smoothies, fresh juice, coffee, and daily specials.",
  keywords: [
    "bubble tea near Fairview Mall",
    "boba near Fairview",
    "bubble tea Fairview Don Mills",
    "milk tea near Fairview Mall",
    "Don Mills bubble tea near me",
  ],
  alternates: { canonical: pagePath },
};

const faq = [
  {
    q: "Is Fresh Cup close to Fairview Mall?",
    a: "Yes. Fresh Cup is located at Peanut Plaza on Don Mills Road, a short drive from Fairview Mall.",
  },
  {
    q: "What can I order near Fairview Mall?",
    a: "You can order milk tea, fruit tea, slush, smoothies, fresh juice, bubble waffles, and snacks.",
  },
  {
    q: "Do you have delivery near Fairview?",
    a: "Yes. Delivery is available via Uber Eats, SkipTheDishes, DoorDash, and Fantuan.",
  },
];

function StructuredData() {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bubble Tea Near Fairview Mall",
        item: `${siteUrl}${pagePath}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export default function BubbleTeaNearFairviewMallPage() {
  return (
    <>
      <StructuredData />
      <PageHeader
        eyebrow="Local search"
        title="Bubble Tea Near Fairview Mall"
        subtitle="Fresh Cup in Don Mills is a nearby stop for hand-shaken boba, fruit drinks, and dessert snacks."
      />

      <section className="container-x py-10">
        <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 sm:p-9">
          <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
            Looking for bubble tea near Fairview?
          </h2>
          <p className="mt-4 max-w-3xl text-brand-greenDark/75">
            Fresh Cup is close to Fairview Mall and known for customizable bubble tea with fresh ingredients.
            Choose your sugar, ice, and toppings. We also serve smoothies, juices, coffee, and bubble waffles.
          </p>
          <p className="mt-4 text-brand-greenDark/75">
            Visit us at {restaurant.address}, {restaurant.addressLine2}, inside {restaurant.locatedIn}.
          </p>
          <div className="mt-6">
            <OrderButtons />
          </div>
        </div>
      </section>

      <section className="container-x pb-16">
        <h2 className="font-display text-3xl font-semibold text-brand-greenDark">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <summary className="cursor-pointer list-none font-semibold text-brand-greenDark">{item.q}</summary>
              <p className="mt-3 text-brand-greenDark/75">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/bubble-tea-in-don-mills" className="btn-outline px-6 py-3">Bubble Tea in Don Mills</Link>
          <Link href="/menu" className="btn-primary px-6 py-3">See Full Menu</Link>
          <Link href="/contact" className="btn-outline px-6 py-3">Get Directions</Link>
        </div>
      </section>
    </>
  );
}
