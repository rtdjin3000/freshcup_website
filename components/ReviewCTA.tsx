import Link from "next/link";
import { Star } from "lucide-react";
import { restaurant } from "@/data/restaurant";

/**
 * Compact "Leave us a review" call-to-action band.
 * `variant="band"` (default) = full-width green band for page sections.
 * `variant="card"` = bordered card to drop inside a column/grid.
 */
export default function ReviewCTA({
  variant = "band",
}: {
  variant?: "band" | "card";
}) {
  const stars = (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-brand-peach text-brand-peach" />
      ))}
    </div>
  );

  if (variant === "card") {
    return (
      <div className="card p-6 text-center">
        {stars}
        <h2 className="mt-3 font-display text-2xl font-semibold text-brand-greenDark">
          Enjoyed your visit?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-brand-greenDark/70">
          A 30-second Google review helps your neighbours find us — and means the world to our small team.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={restaurant.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Star className="h-4 w-4" /> Leave a Google review
          </a>
          <Link href="/review" className="btn-outline">
            See how
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="container-x py-10 md:py-14">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-cream px-6 py-10 text-center shadow-xl shadow-brand-green/10 ring-1 ring-black/5 sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-pinkSoft blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-mint blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          {stars}
          <h2 className="mt-4 font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
            Loved your Fresh Cup?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-greenDark/70">
            Rated {restaurant.rating}★ by {restaurant.reviewCount}+ guests. Leave a quick Google review —
            it takes 30 seconds and helps more Don Mills locals discover us.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={restaurant.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Star className="h-4 w-4" /> Leave a Google review
            </a>
            <Link href="/review" className="btn-outline">
              Scan &amp; review at the counter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
