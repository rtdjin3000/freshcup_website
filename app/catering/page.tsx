import type { Metadata } from "next";
import Link from "next/link";
import { Cake, Users, Sparkles, Calendar, Music, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";
import { restaurant } from "@/data/restaurant";
import { cateringCategory } from "@/data/menu";

export const metadata: Metadata = {
  title: "Catering & Events — Fresh Cup Bubble Tea in North York",
  description:
    "🧋 Fresh Cup catering for birthday parties, corporate events, book launches, and private celebrations. Book our cafe or order custom bubble tea packages for your special event in Don Mills, North York.",
  keywords: [
    "Fresh Cup catering",
    "bubble tea catering North York",
    "catering Don Mills",
    "birthday party catering",
    "event catering",
    "cafe rental",
    "book cafe",
    "private event space",
    "bubble tea party",
    "birthday bubble tea",
    "event planning",
  ],
  alternates: { canonical: "/catering" },
};

const eventTypes = [
  {
    icon: Cake,
    title: "Birthday Parties",
    desc: "Celebrate with customized bubble tea and treat packages. Perfect for any age group.",
    features: ["Custom drink packages", "Cake & waffle options", "Decorations available"],
  },
  {
    icon: Music,
    title: "Book/Album Launches",
    desc: "Create a memorable launch event with our premium catering and exclusive cafe space.",
    features: ["Full venue rental", "Custom packages", "Professional setup"],
  },
  {
    icon: Users,
    title: "Corporate & Group Events",
    desc: "Team celebrations, office parties, and networking events with bubble tea service.",
    features: ["Bulk packages", "Custom branding", "Flexible timing"],
  },
  {
    icon: Sparkles,
    title: "Private Celebrations",
    desc: "Anniversaries, engagements, and special milestones. Book our cafe for your moment.",
    features: ["Intimate gatherings", "Custom menu", "Full cafe control"],
  },
];

const packages = [
  {
    name: "Party Package (10 people)",
    price: "Starting $59.99",
    items: [
      "10 drinks of choice from our entire menu",
      "Cups, lids, and straws included",
      "Customizable for any preference",
      "48-hour advance notice required",
    ],
  },
  {
    name: "Party Package (20 people)",
    price: "Starting $109.99",
    items: [
      "20 drinks of choice from our entire menu",
      "Cups, lids, and straws included",
      "Mix & match any flavours",
      "Flexible pickup or delivery options",
    ],
  },
  {
    name: "Party Package (50 people)",
    price: "Starting $249.99",
    items: [
      "50 drinks of choice from our entire menu",
      "Premium service and setup",
      "Delivery included within Don Mills area",
      "Dedicated support team",
    ],
  },
  {
    name: "Birthday Bundle",
    price: "Starting $129.99",
    items: [
      "15 drinks of choice",
      "3 dozen assorted macarons",
      "Party decorations",
      "Ice cream scoops available",
    ],
  },
  {
    name: "Cafe Booking (2 hours)",
    price: "Starting $299.99",
    items: [
      "Private event space rental",
      "Seating for up to 15 guests",
      "10 complimentary drinks included",
      "Perfect for intimate gatherings",
    ],
  },
  {
    name: "Full Cafe Buyout (4 hours)",
    price: "Starting $499.99",
    items: [
      "Exclusive venue rental",
      "Entire café reserved for your event",
      "25 complimentary drinks included",
      "Setup and cleanup provided",
    ],
  },
];

const faqs = [
  {
    q: "How much advance notice do you need for catering?",
    a: "For packages under 20 people: 48 hours. For 20+ people or cafe booking: 1 week recommended to ensure availability and perfect planning.",
  },
  {
    q: "Can I customize the drink selection for my event?",
    a: "Absolutely! You can choose any flavours from our menu. Mix and match milk teas, fruit teas, lattes, smoothies, and juices. We'll prepare them exactly as you like — customized sugar and ice levels for each guest.",
  },
  {
    q: "Do you offer delivery for catering orders?",
    a: "Yes! Orders of 20+ drinks include delivery within Don Mills and surrounding areas. Smaller orders can arrange pickup at our location in Peanut Plaza.",
  },
  {
    q: "Can I add food items to my catering package?",
    a: "Yes! We can add bubble waffles, fluffy pancakes, macarons, snacks, and breakfast items to your order. Contact us for a custom quote.",
  },
  {
    q: "What's included with cafe booking?",
    a: "Your rental includes exclusive use of our space, seating for your guests, and complimentary drinks. You can BYOB, bring your own decorations, and play your own music. We handle setup and cleanup.",
  },
  {
    q: "Can I bring my own cake for a birthday party?",
    a: "Of course! You're welcome to bring your own cake or order from your favourite bakery. We provide plates, forks, and can help with serving.",
  },
];

export default function CateringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fresh Cup events"
        title="Celebrate with Fresh Cup"
        subtitle="Bubble tea catering for birthday parties, book launches, corporate events, and private celebrations."
      />

      {/* Event Types Grid */}
      <section className="container-x py-16">
        <div className="mb-16">
          <h2 className="section-title text-center mb-4">What can we celebrate with you?</h2>
          <p className="text-center text-brand-greenDark/70 max-w-2xl mx-auto">
            Whether it's a birthday, book launch, or milestone moment — Fresh Cup has catering packages and venue options for any celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, i) => {
            const Icon = event.icon;
            return (
              <div
                key={i}
                className="card p-6 hover:shadow-lg hover:shadow-brand-green/10 transition-all"
              >
                <Icon className="w-8 h-8 text-brand-green mb-3" />
                <h3 className="font-bold text-brand-greenDark mb-2">{event.title}</h3>
                <p className="text-sm text-brand-greenDark/70 mb-4">{event.desc}</p>
                <ul className="space-y-2">
                  {event.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-brand-greenDark/60">
                      <span className="text-brand-green mt-1">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-brand-mint/20 py-16">
        <div className="container-x">
          <h2 className="section-title text-center mb-4">Catering Packages</h2>
          <p className="text-center text-brand-greenDark/70 max-w-2xl mx-auto mb-16">
            From small intimate gatherings to large celebrations — we have a package for your event.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className="card p-8 flex flex-col">
                <h3 className="font-bold text-lg text-brand-greenDark mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-brand-green mb-4">{pkg.price}</div>
                <ul className="space-y-3 flex-1 mb-6">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-greenDark/75">
                      <span className="text-brand-green mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-full mt-auto">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-x py-16">
        <h2 className="section-title text-center mb-4">Catering FAQs</h2>
        <p className="text-center text-brand-greenDark/70 max-w-2xl mx-auto mb-12">
          Everything you need to know about booking Fresh Cup for your event.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="card p-6 group cursor-pointer hover:shadow-lg hover:shadow-brand-green/10 transition-all"
            >
              <summary className="flex items-center justify-between font-semibold text-brand-greenDark select-none">
                <span>{faq.q}</span>
                <span className="text-brand-green text-xl group-open:rotate-180 transition-transform">
                  ›
                </span>
              </summary>
              <p className="mt-4 text-brand-greenDark/70">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-green to-brand-greenLight py-16 text-white">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to book your catering package or reserve our cafe for your celebration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={`tel:${restaurant.phone}`} className="btn bg-white text-brand-green hover:bg-brand-mint">
              <Phone className="w-5 h-5" />
              Call us
            </a>
            <a href="/contact" className="btn bg-white/20 text-white border border-white/50 hover:bg-white/30">
              <Calendar className="w-5 h-5" />
              Visit us
            </a>
          </div>

          <p className="text-white/80">
            📍 {restaurant.address} | {restaurant.city}
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container-x py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h3 className="text-xl font-bold text-brand-greenDark mb-3">💬 Custom Quotes</h3>
            <p className="text-brand-greenDark/70 mb-4">
              Have a special event in mind that doesn't fit our standard packages? We offer fully customized catering solutions for any celebration.
            </p>
            <p className="text-sm text-brand-green font-semibold">
              Call us to discuss your specific needs!
            </p>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-bold text-brand-greenDark mb-3">🎉 Group Orders</h3>
            <p className="text-brand-greenDark/70 mb-4">
              Planning a work event, study group gathering, or sports team celebration? We specialize in bulk orders with fast turnaround.
            </p>
            <p className="text-sm text-brand-green font-semibold">
              Let us know your group size and date!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
