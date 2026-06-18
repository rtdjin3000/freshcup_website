import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import { restaurant } from "@/data/restaurant";

const siteUrl = "https://fresh-cup.com";
const pagePath = "/boba-peanut-plaza";

export const metadata: Metadata = {
  title: "Boba in Peanut Plaza, Don Mills",
  description:
    "Fresh Cup serves boba in Peanut Plaza, Don Mills. Try milk tea, fruit tea, fresh juice, smoothies, and daily specials made to order.",
  keywords: [
    "boba Peanut Plaza",
    "bubble tea Peanut Plaza",
    "Don Mills boba shop",
    "Peanut Plaza bubble tea",
    "bubble tea 3046 Don Mills Rd",
  ],
  alternates: { canonical: pagePath },
};

export default function BobaPeanutPlazaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Neighbourhood"
        title="Boba in Peanut Plaza"
        subtitle="Fresh Cup is your local boba and bubble tea stop in Peanut Plaza, Don Mills."
      />

      <section className="container-x py-10">
        <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 sm:p-9">
          <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
            Fresh Cup at Peanut Plaza
          </h2>
          <p className="mt-4 max-w-3xl text-brand-greenDark/75">
            We are located inside {restaurant.locatedIn} at {restaurant.address}, {restaurant.addressLine2}.
            If you are searching for boba in Peanut Plaza, Fresh Cup offers premium ingredients, fast service,
            and a wide selection of drinks and dessert snacks.
          </p>
          <p className="mt-4 text-brand-greenDark/75">
            Call {restaurant.phoneDisplay} or order online for pickup and delivery.
          </p>
          <div className="mt-6">
            <OrderButtons />
          </div>
        </div>
      </section>

      <section className="container-x pb-16">
        <h2 className="font-display text-3xl font-semibold text-brand-greenDark">Popular local pages</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/bubble-tea-in-don-mills" className="btn-outline px-6 py-3">Bubble Tea in Don Mills</Link>
          <Link href="/bubble-tea-near-fairview-mall" className="btn-outline px-6 py-3">Near Fairview Mall</Link>
          <Link href="/bubble-tea-north-york" className="btn-outline px-6 py-3">Bubble Tea North York</Link>
          <Link href="/menu" className="btn-primary px-6 py-3">See Full Menu</Link>
        </div>
      </section>
    </>
  );
}
