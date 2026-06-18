import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import { restaurant } from "@/data/restaurant";

const pagePath = "/bubble-tea-north-york";

export const metadata: Metadata = {
  title: "Bubble Tea North York - Fresh Cup",
  description:
    "Fresh Cup Bubble Tea & Cafe in North York serves hand-shaken milk tea, fruit tea, smoothies, fresh juice, coffee, and bubble waffles.",
  keywords: [
    "bubble tea North York",
    "best bubble tea North York",
    "North York boba",
    "milk tea North York",
    "fruit tea North York",
  ],
  alternates: { canonical: pagePath },
};

export default function BubbleTeaNorthYorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="North York"
        title="Bubble Tea in North York"
        subtitle="Fresh Cup in Don Mills serves North York with hand-shaken boba, fresh drinks, and dessert favourites."
      />

      <section className="container-x py-10">
        <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 sm:p-9">
          <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
            Fresh bubble tea for North York
          </h2>
          <p className="mt-4 max-w-3xl text-brand-greenDark/75">
            Fresh Cup is a Don Mills destination for North York bubble tea lovers. Our menu includes classic milk tea,
            fruit tea, slush, smoothies, fresh-pressed juices, espresso drinks, and daily specials.
          </p>
          <p className="mt-4 text-brand-greenDark/75">
            Visit us at {restaurant.address}, {restaurant.addressLine2}, or order online from your preferred platform.
          </p>
          <div className="mt-6">
            <OrderButtons />
          </div>
        </div>
      </section>

      <section className="container-x pb-16">
        <h2 className="font-display text-3xl font-semibold text-brand-greenDark">Explore more</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/bubble-tea-in-don-mills" className="btn-outline px-6 py-3">Bubble Tea in Don Mills</Link>
          <Link href="/bubble-tea-near-fairview-mall" className="btn-outline px-6 py-3">Near Fairview Mall</Link>
          <Link href="/boba-peanut-plaza" className="btn-outline px-6 py-3">Boba in Peanut Plaza</Link>
          <Link href="/contact" className="btn-primary px-6 py-3">Visit Fresh Cup</Link>
        </div>
      </section>
    </>
  );
}
