"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { restaurant } from "@/data/restaurant";

type Testimonial = {
  name: string;
  quote: string;
  image: string;
  alt: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Fresh Cup Guest",
    quote:
      "One of our favorite Don Mills spots. Drinks are fresh, pearls are perfect, and service is always warm.",
    image: "/images/testimonials/customer-01.jpg",
    alt: "Smiling Fresh Cup customer enjoying a fresh drink in our Don Mills cafe",
  },
  {
    name: "Kyle",
    quote:
      "Loved the waffle cup and boba. Chill vibe, friendly team, and great photos every visit.",
    image: "/images/testimonials/customer-05.jpg",
    alt: "Happy Fresh Cup customer holding a boba milk tea",
  },
  {
    name: "Don Mills Regular",
    quote:
      "Fresh Cup is our go-to for bubble tea runs. Consistent quality and super photogenic drinks.",
    image: "/images/testimonials/customer-02.jpg",
    alt: "Regular Fresh Cup customer with a milk tea in North York",
  },
  {
    name: "Couple Visit",
    quote:
      "A cozy date spot with consistently great drinks. We always enjoy the quality and friendly service.",
    image: "/images/testimonials/customer-03.jpg",
    alt: "Couple enjoying bubble tea together at Fresh Cup",
  },
  {
    name: "Weekend Group",
    quote:
      "Great place to hang out with friends. Fast service, awesome drinks, and a cozy vibe.",
    image: "/images/testimonials/customer-04.jpg",
    alt: "Group of friends hanging out with drinks at Fresh Cup",
  },
  {
    name: "Waffle Fan",
    quote:
      "The waffle cup was crispy, warm, and so good with toppings. We keep recommending it to friends.",
    image: "/images/testimonials/customer-08.jpg",
    alt: "Fresh Cup customer holding a Hong Kong bubble waffle cup",
  },
  {
    name: "Birthday Crew",
    quote:
      "Perfect place for family celebrations. Kids had an amazing time with treats and colorful drinks.",
    image: "/images/testimonials/customer-07.jpg",
    alt: "Child enjoying a bubble waffle treat at Fresh Cup",
  },
  {
    name: "Storefront Family",
    quote:
      "The kids had an amazing visit and loved the treats. Fresh Cup has become a family favorite.",
    image: "/images/testimonials/customer-06.jpg",
    alt: "Kids visiting the Fresh Cup storefront in Don Mills",
  },
];

export default function GoogleTestimonials() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-x">
        <div className="mb-6 text-center">
          <div className="eyebrow mb-4 inline-block">Google Customer Reviews</div>
          <h2 className="section-title mb-3">Fresh Cup Love From Real Customers</h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-brand-greenDark/70">
            Appreciation moments and review highlights from our Google profile.
            Thank you for making Fresh Cup one of Don Mills' favorite bubble tea cafes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="group overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-mint/20">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero.jpg";
                  }}
                />
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-brand-greenDark/80">"{item.quote}"</p>
                <p className="mt-2 text-sm font-semibold text-brand-green">{item.name}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Read All Google Reviews ({restaurant.reviewCount}+)
          </Link>
        </div>
      </div>
    </section>
  );
}
