import Link from "next/link";
import { Phone, ShoppingBag } from "lucide-react";
import { restaurant } from "@/data/restaurant";

/**
 * Persistent bottom action bar shown only on mobile.
 * Keeps a one-tap Call and Order path visible while scrolling.
 * Hidden on md+ (desktop has the sticky nav CTAs). Respects safe-area insets.
 */
export default function MobileOrderBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 shadow-[0_-4px_20px_-8px_rgba(0,0,0,0.2)] backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${restaurant.phone}`}
          className="btn-outline w-full min-h-[48px] text-base font-bold"
          aria-label={`Call Fresh Cup at ${restaurant.phoneDisplay}`}
        >
          <Phone className="h-5 w-5" /> Call
        </a>
        <Link
          href="/menu"
          className="btn-primary w-full min-h-[48px] text-base font-bold"
          aria-label="Order from Fresh Cup"
        >
          <ShoppingBag className="h-5 w-5" /> Order Now
        </Link>
      </div>
    </nav>
  );
}
