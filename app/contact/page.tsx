import type { Metadata } from "next";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import ReviewCTA from "@/components/ReviewCTA";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Visit Fresh Cup: Bubble Tea Café Location & Hours in Don Mills | North York",
  description: `📍 Fresh Cup bubble tea and coffee café is located at ${restaurant.address}, Peanut Plaza. Hours: Mon-Fri 3-9PM, Sat-Sun 11-9PM. Call (647) 518-0951 or order online via Uber Eats, SkipTheDishes, DoorDash, or Fantuan.`,
  keywords: [
    "Fresh Cup address",
    "Fresh Cup hours",
    "Fresh Cup Don Mills",
    "Fresh Cup Peanut Plaza",
    "bubble tea near Fairview",
    "bubble tea Fairview Mall",
    "coffee shop Don Mills",
    "espresso North York",
    "Fresh Cup phone",
    "Fresh Cup contact",
  ],
  alternates: { canonical: "/contact" },
};

const today = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date().getDay()];
};

export default function ContactPage() {
  const current = today();
  return (
    <>
      <PageHeader
        eyebrow="Find us"
        title="Come visit Fresh Cup"
        subtitle={`Inside ${restaurant.locatedIn} in ${restaurant.city}. Pop in for a cup or order online.`}
      />

      <section className="container-x grid gap-10 py-14 lg:grid-cols-2">
        {/* Info */}
        <div className="space-y-5">
          <div className="card p-6">
            <h2 className="font-display text-2xl font-semibold text-brand-greenDark">Visit us</h2>
            <ul className="mt-5 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-mint text-brand-green">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-greenDark">Address</p>
                  <p className="text-sm text-brand-greenDark/70">
                    {restaurant.address}, {restaurant.addressLine2}
                  </p>
                  <p className="text-sm text-brand-greenDark/50">Located in {restaurant.locatedIn}</p>
                  <a
                    href={restaurant.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-green hover:text-brand-greenDark"
                  >
                    <Navigation className="h-4 w-4" /> Get directions
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-mint text-brand-green">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-greenDark">Phone</p>
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="text-sm font-medium text-brand-green hover:underline"
                  >
                    {restaurant.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <OrderButtons />
            </div>
          </div>

          {/* Hours */}
          <div className="card p-6">
            <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-brand-greenDark">
              <Clock className="h-6 w-6 text-brand-green" /> Hours
            </h2>
            <ul className="mt-4 divide-y divide-black/5">
              {restaurant.hours.map((h) => {
                const isToday = h.day === current;
                return (
                  <li
                    key={h.day}
                    className={`flex items-center justify-between py-3 ${
                      isToday ? "font-bold text-brand-green" : "text-brand-greenDark/75"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {h.day}
                      {isToday && (
                        <span className="rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="tabular-nums">
                      {h.open} – {h.close}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-brand-green/10 ring-1 ring-black/5">
          <iframe
            title="Fresh Cup location map"
            src={restaurant.mapsEmbed}
            className="h-full min-h-[400px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <ReviewCTA />
    </>
  );
}
