import type { Metadata } from "next";
import Image from "next/image";
import { Star, Smartphone, Printer, QrCode, Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Leave Fresh Cup a Review: Rate Us on Google | Bubble Tea in Don Mills",
  description:
    "Loved your visit to Fresh Cup Bubble Tea & Café in Don Mills? Tap the button or scan the QR code to leave a quick Google review. Thank you for supporting our local team!",
  keywords: [
    "Fresh Cup review",
    "rate Fresh Cup",
    "Fresh Cup Google review",
    "review bubble tea Don Mills",
    "Fresh Cup North York review",
  ],
  alternates: { canonical: "/review" },
};

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thank you"
        title="Leave us a review"
        subtitle="Your feedback helps more Don Mills neighbours discover Fresh Cup, and it only takes 30 seconds."
      />

      <section className="container-x py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* One-tap review */}
          <div className="card flex flex-col p-8 text-center">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-brand-peach text-brand-peach" />
              ))}
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-brand-greenDark sm:text-3xl">
              Review us on Google
            </h2>
            <p className="mx-auto mt-3 max-w-md text-brand-greenDark/70">
              Rated {restaurant.rating}★ by {restaurant.reviewCount}+ guests. One tap opens Google.
              Choose your stars, add a line about your favourite drink, and you&apos;re done.
            </p>
            <div className="mt-6 flex flex-1 flex-col justify-end">
              <a
                href={restaurant.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-mobile-lg mx-auto w-full max-w-xs"
              >
                <Smartphone className="h-5 w-5" /> Tap to leave a review
              </a>
              <p className="mt-3 text-xs text-brand-greenDark/50">
                Opens Google in a new tab. No app required.
              </p>
            </div>
          </div>

          {/* Printable QR */}
          <div className="card flex flex-col p-8 text-center">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-green">
                <QrCode className="h-4 w-4" /> Print for the counter
              </span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-brand-greenDark sm:text-3xl">
              Scan to review
            </h2>
            <div className="mx-auto mt-5 w-full max-w-[260px] overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-black/5">
              <Image
                src="/images/review-qr.png"
                alt="QR code to leave Fresh Cup a Google review"
                width={400}
                height={400}
                className="h-auto w-full"
              />
            </div>
            <p className="mx-auto mt-4 max-w-md text-sm text-brand-greenDark/70">
              Point your phone camera at the code to open our Google review page. Print this card and
              place it by the register or on tables.
            </p>
            <div className="mt-5 flex flex-1 flex-col justify-end">
              <a
                href="/images/review-qr.png"
                download="fresh-cup-review-qr.png"
                className="btn-outline mx-auto w-full max-w-xs"
              >
                <Printer className="h-4 w-4" /> Download QR for printing
              </a>
            </div>
          </div>
        </div>

        {/* Thank-you note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl bg-brand-cream p-5 text-sm text-brand-greenDark/75 ring-1 ring-black/5">
          <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-pink" />
          <p>
            Fresh Cup is a small, independent café in {restaurant.locatedIn}, {restaurant.city}. Every
            review genuinely helps our team and lets us keep making your favourite bubble tea, fresh
            juice, and egg waffles. Thank you for the support! 💚
          </p>
        </div>
      </section>
    </>
  );
}
