import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export default function DailySpecialPromo() {
  const dailySpecial = restaurant.dailySpecial;

  if (!dailySpecial?.active) {
    return null;
  }

  return (
    <section className="bg-gradient-to-br from-brand-peach/20 via-brand-cream to-brand-mint/20 py-12 md:py-16">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="eyebrow">Daily Deal</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-greenDark sm:text-4xl">
              Daily Specials for just {dailySpecial.priceDisplay}
            </h2>
            <p className="mt-3 max-w-2xl text-brand-greenDark/75">
              Every day features a new drink special to keep your week exciting.
              {" "}
              {dailySpecial.validFor}.
            </p>

            <div className="mt-6 grid gap-2 rounded-2xl bg-gradient-to-br from-white to-brand-cream/50 p-4 ring-1 ring-black/5 sm:grid-cols-2 backdrop-blur-sm">
              {dailySpecial.schedule.map((special) => (
                <div
                  key={special.day}
                  className="group relative flex flex-col items-start justify-center gap-1.5 rounded-xl bg-gradient-to-br from-brand-mint/60 to-brand-mint/30 px-4 py-3 ring-1 ring-black/5 transition-all duration-300 hover:from-brand-green/40 hover:to-brand-green/20 hover:ring-brand-green/50 hover:shadow-md hover:shadow-brand-green/20 hover:-translate-y-1"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-greenDark/70 transition-colors duration-300 group-hover:text-brand-green">
                    {special.day}
                  </span>
                  <span className="text-sm font-semibold text-brand-greenDark transition-colors duration-300 group-hover:text-brand-greenDark">
                    {special.item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/daily-special" className="btn btn-primary">
                See This Week&apos;s Specials
              </Link>
              <Link href="/menu" className="btn btn-outline">
                Order From Full Menu
              </Link>
            </div>
          </div>

          <Link href="/daily-special" className="group relative block overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-xl shadow-brand-green/10">
            <Image
              src={dailySpecial.image}
              alt="Fresh Cup daily specials menu"
              width={1600}
              height={900}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
