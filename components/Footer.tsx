import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import OrderButtons from "./OrderButtons";

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-greenDark text-brand-cream">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Fresh Cup logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full bg-white p-0.5"
            />
            <span className="font-display text-2xl font-semibold">Fresh Cup</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-cream/75">
            {restaurant.tagline}. Freshly made in {restaurant.city}.
          </p>
          <div className="mt-5">
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-cream/75">
            <li><Link href="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link href="/bubble-tea-in-don-mills" className="hover:text-white">Bubble Tea in Don Mills</Link></li>
            <li><Link href="/bubble-tea-near-fairview-mall" className="hover:text-white">Near Fairview Mall</Link></li>
            <li><Link href="/boba-peanut-plaza" className="hover:text-white">Boba in Peanut Plaza</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Find Us</Link></li>
            <li><Link href="/review" className="hover:text-white">Leave a Review</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Visit Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-cream/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-peach" />
              <a href={restaurant.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {restaurant.address}, {restaurant.addressLine2}
                <span className="block text-brand-cream/55">Located in {restaurant.locatedIn}</span>
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-peach" />
              <a href={`tel:${restaurant.phone}`} className="hover:text-white">
                {restaurant.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
            <Clock className="h-5 w-5 text-brand-peach" /> Hours
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm text-brand-cream/75">
            {restaurant.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day.slice(0, 3)}</span>
                <span className="tabular-nums">{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-brand-cream/60">
            © {new Date().getFullYear()} {restaurant.fullName}. All rights reserved.
          </p>
          <OrderButtons size="sm" />
        </div>
      </div>
    </footer>
  );
}
