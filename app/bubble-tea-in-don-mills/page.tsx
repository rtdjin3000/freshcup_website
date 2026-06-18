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
    "Looking for bubble tea in Don Mills? Fresh Cup in Peanut Plaza (3046 Don Mills Rd) serves hand-shaken boba, milk tea, fruit tea, smoothies, fresh juice, and bubble waffles — made to order with brown sugar tapioca, popping pearls and jelly.",
  keywords: [
    "bubble tea in Don Mills",
    "best bubble tea in Don Mills",
    "Don Mills boba",
    "bubble tea North York",
    "milk tea Don Mills",
    "fruit tea Don Mills",
    "boba near Peanut Plaza",
    "bubble tea near Fairview Mall",
    "bubble tea near Henry Farm",
    "bubble tea near Parkway Forest",
    "brown sugar boba Don Mills",
    "bubble tea with popping pearls North York",
    "bubble tea near North York General",
    "bubble tea Don Mills and Sheppard",
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
    a: "Yes. Fresh Cup offers rotating daily drink specials at $5 for a regular size with no toppings — Green Apple Milk Tea on Monday, Oreo Latte on Tuesday, Brown Sugar Milk Tea on Wednesday, and more. Visit our Daily Special page to see the full week.",
  },
  {
    q: "What toppings can I add to my bubble tea?",
    a: "Build your drink your way: brown sugar tapioca, classic tapioca, popping boba, popping pearls, lychee, mango, aloe, coconut jelly, grass jelly, strawberry and pineapple jelly. Most toppings are just 50 cents, with brown sugar tapioca and popping boba slightly more.",
  },
  {
    q: "What's the difference between milk tea and fruit tea?",
    a: "Milk tea is creamy and rich — great with brown sugar tapioca for the classic boba experience. Fruit tea is lighter and refreshing, brewed with real fruit and perfect with popping pearls or jelly. You choose the sugar and ice level on both.",
  },
  {
    q: "Is Fresh Cup close to Fairview Mall and Henry Farm?",
    a: "Yes. Fresh Cup is in Peanut Plaza at Don Mills Rd near Sheppard, a short drive from Fairview Mall, Henry Farm, Parkway Forest, Don Valley Village and North York General Hospital. There is plaza parking right outside.",
  },
  {
    q: "Do you have non-tea drinks?",
    a: "Plenty. Alongside bubble tea we make real-fruit smoothies, 100% fresh-pressed juices, espresso drinks, brewed coffee and matcha — plus bubble waffles, pancakes and sweet treats.",
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
        <h2 className="font-display text-3xl font-semibold text-brand-greenDark">
          Bubble tea near you in Don Mills &amp; North York
        </h2>
        <p className="mt-4 max-w-3xl text-brand-greenDark/75">
          Fresh Cup sits in Peanut Plaza on Don Mills Rd near Sheppard — easy to reach from across east
          North York. Whether you&apos;re shopping at Fairview Mall, heading home to Henry Farm or Parkway
          Forest, or grabbing a treat after an appointment at North York General, we&apos;re a quick stop
          with parking right outside the door.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Peanut Plaza", note: "We're right here — walk in for pickup." },
            { name: "Fairview Mall", note: "Minutes away near Don Mills & Sheppard." },
            { name: "Henry Farm", note: "A short drive for your daily boba." },
            { name: "Parkway Forest", note: "Quick delivery across the neighbourhood." },
            { name: "Don Valley Village", note: "Milk tea and smoothies to go." },
            { name: "North York General area", note: "Grab a fruit tea before or after a visit." },
          ].map((area) => (
            <div key={area.name} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <p className="flex items-center gap-2 font-semibold text-brand-greenDark">
                <MapPin className="h-5 w-5 text-brand-green" /> {area.name}
              </p>
              <p className="mt-2 text-sm text-brand-greenDark/75">{area.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-4">
        <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 sm:p-9">
          <h2 className="font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
            Popular orders &amp; how to build yours
          </h2>
          <p className="mt-4 max-w-3xl text-brand-greenDark/75">
            New to boba or just deciding? Here&apos;s what Don Mills regulars order most — and how to make it
            yours. Every drink lets you pick your sugar and ice level, then load it up with toppings.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-brand-mint/30 p-5 ring-1 ring-black/5">
              <p className="font-semibold text-brand-greenDark">Brown Sugar Milk Tea + brown sugar tapioca</p>
              <p className="mt-2 text-sm text-brand-greenDark/75">
                The classic boba experience — warm caramelised brown sugar with chewy pearls. Our top pick for
                first-timers.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-mint/30 p-5 ring-1 ring-black/5">
              <p className="font-semibold text-brand-greenDark">Mango Fruit Tea + lychee jelly &amp; popping pearls</p>
              <p className="mt-2 text-sm text-brand-greenDark/75">
                Light, fruity and refreshing. Add popping pearls for a burst in every sip.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-mint/30 p-5 ring-1 ring-black/5">
              <p className="font-semibold text-brand-greenDark">Oreo Latte or matcha for the coffee crowd</p>
              <p className="mt-2 text-sm text-brand-greenDark/75">
                Not in the mood for tea? We also pour espresso drinks, brewed coffee and creamy matcha.
              </p>
            </div>
            <div className="rounded-2xl bg-brand-mint/30 p-5 ring-1 ring-black/5">
              <p className="font-semibold text-brand-greenDark">Smoothie or fresh-pressed juice</p>
              <p className="mt-2 text-sm text-brand-greenDark/75">
                Real-fruit smoothies and 100% fresh juice for a lighter, no-tea option the whole family can
                share.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-brand-greenDark/70">
            Toppings from 50¢: tapioca, popping boba, lychee, mango, aloe, coconut jelly, grass jelly and more.{" "}
            <Link href="/menu" className="font-semibold text-brand-green hover:underline">
              See the full menu &amp; toppings
            </Link>
            .
          </p>
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
          <Link href="/bubble-tea-north-york" className="btn-outline px-6 py-3">
            Bubble Tea in North York
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
