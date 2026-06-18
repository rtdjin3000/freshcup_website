import { MapPin, Clock, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import OrderButtons from "./OrderButtons";

export default function OrderCTA() {
  return (
    <section className="container-x py-10 md:py-14">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-green px-6 py-8 text-center text-white shadow-2xl shadow-brand-green/30 sm:px-12 md:py-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-brand-pink/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
            Craving boba? We&apos;ve got you.
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-brand-cream/85\">
            Order ahead for pickup or get it delivered to your door. Fresh, fast and made just the way you like it.
          </p>

          <div className="mt-4 flex justify-center\">
            <OrderButtons />
          </div>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
            >
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-peach" />
              <span className="text-sm">
                <span className="block font-semibold">Visit us</span>
                {restaurant.address}, {restaurant.city}
              </span>
            </a>
            <a
              href={`tel:${restaurant.phone}`}
              className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15"
            >
              <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-peach" />
              <span className="text-sm">
                <span className="block font-semibold">Call to order</span>
                {restaurant.phoneDisplay}
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-peach" />
              <span className="text-sm">
                <span className="block font-semibold">Open daily</span>
                Mon–Fri 3–9pm · Sat–Sun 11–9pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
