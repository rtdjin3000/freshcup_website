import type { Metadata } from "next";
import { Poppins, Fraunces } from "next/font/google";
import "./globals.css";
import { restaurant } from "@/data/restaurant";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import MobileOrderBar from "@/components/MobileOrderBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://fresh-cup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Fresh Cup Bubble Tea & Café | Bubble Tea in Don Mills, North York",
    template: "%s | Fresh Cup Bubble Tea & Café",
  },
  description:
    "Bubble tea in Don Mills, North York. Fresh Cup serves hand-shaken boba, real fruit smoothies, fresh-pressed juices, coffee, bubble waffles, and desserts at Peanut Plaza.",
  keywords: [
    // Core product
    "bubble tea North York",
    "boba North York",
    "boba tea Don Mills",
    "bubble tea Don Mills",
    "bubble tea in Don Mills",
    "best bubble tea in Don Mills",
    "Don Mills bubble tea shop",
    "milk tea North York",
    "fresh bubble tea",
    "best bubble tea Don Mills",
    "premium bubble tea North York",
    "bubble tea Fairview",
    "boba tea Fairview",
    
    // Fresh juices
    "fresh juice North York",
    "fresh juice Don Mills",
    "cold-pressed juice North York",
    "fruit juice bar",
    "healthy juice cafe",
    "smoothies North York",
    "smoothies Don Mills",
    "real fruit smoothies North York",

    // Coffee
    "coffee North York",
    "coffee Don Mills",
    "coffee shop North York",
    "coffee shop Don Mills",
    "espresso North York",
    "espresso Don Mills",
    "brewed coffee North York",
    "latte North York",
    "latte Don Mills",
    "cappuccino North York",
    "cappuccino Don Mills",
    "cafe serving coffee North York",
    
    // Desserts & food
    "bubble waffles North York",
    "bubble waffles Don Mills",
    "fluffy pancakes North York",
    "waffle cafe Don Mills",
    "bubble waffles",
    "ice cream North York",
    "dessert cafe North York",
    
    // Location-based
    "Don Mills bubble tea",
    "Don Mills cafe",
    "Fairview bubble tea",
    "Fairview cafe",
    "Peanut Plaza",
    "Peanut Plaza bubble tea",
    "North York bubble tea shop",
    "North York tea cafe",
    
    // Competitive positioning
    "best bubble tea Don Mills",
    "premium tea cafe",
    "custom flavour bubble tea",
    "hand-shaken bubble tea",
    
    // Youth & kids
    "kids bubble tea",
    "bubble tea for kids",
    "fun drinks for kids",
    "kids cafe North York",
    "family-friendly bubble tea",
    "teens bubble tea",
    "youth cafe",
    "colorful drinks kids",
    "sweet treats for kids",
    "boba for beginners",
    "first bubble tea",
    
    // Mobile searches
    "bubble tea near me",
    "boba shop near me",
    "cafe near me North York",
    "ice cream near me",
    "waffle cafe near me",
    "quick snack North York",
    "after school snacks",
    "hang out spots North York",
    
    // Service-based
    "bubble tea near Fairview Mall",
    "bubble tea delivery North York",
    "bubble tea order online",
    "boba tea takeout",
    "best bubble tea near me",

    // Promotional intent
    "daily special drinks North York",
    "daily bubble tea special Don Mills",
    "$5 drink special North York",
    "Fresh Cup daily specials",

    // Brand searches
    "Fresh Cup Bubble Tea",
    "Fresh Cup cafe",
    "Fresh Cup North York",
    "Fresh Cup Don Mills",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: restaurant.fullName,
    title: "Fresh Cup Bubble Tea & Café | North York",
    description: restaurant.shortDesc,
    images: [{ url: "/images/hero.jpg", width: 1400, height: 1400, alt: "Fresh Cup bubble tea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Cup Bubble Tea & Café | North York",
    description: restaurant.shortDesc,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: siteUrl },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
};

function StructuredData() {
  const mainSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}#restaurant`,
    name: restaurant.fullName,
    description: "Bubble tea cafe and coffee spot in Don Mills, North York serving boba, fresh-pressed juices, real fruit smoothies, espresso drinks, brewed coffee, lattes, cappuccinos, bubble waffles, fluffy pancakes and desserts.",
    image: `${siteUrl}/images/hero.jpg`,
    url: siteUrl,
    telephone: restaurant.phone,
    priceRange: restaurant.priceRange,
    servesCuisine: ["Bubble Tea", "Coffee", "Fresh Juice", "Smoothies", "Desserts", "Asian Snacks"],
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address,
      addressLocality: restaurant.city,
      addressRegion: restaurant.region,
      postalCode: restaurant.postalCode,
      addressCountry: restaurant.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurant.rating,
      reviewCount: restaurant.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: restaurant.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: to24(h.open),
      closes: to24(h.close),
    })),
    hasMenu: `${siteUrl}/menu`,
    areaServed: [
      {
        "@type": "City",
        name: "Don Mills",
      },
      {
        "@type": "City",
        name: "North York",
      },
    ],
    ...(restaurant.dailySpecial?.active
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Daily Specials",
            url: `${siteUrl}/daily-special`,
            itemListElement: restaurant.dailySpecial.schedule.map((entry) => ({
              "@type": "Offer",
              name: `${entry.day} Daily Special — ${entry.item}`,
              price: "5.00",
              priceCurrency: "CAD",
              availability: "https://schema.org/InStock",
              description: `${entry.item}. ${restaurant.dailySpecial.validFor}.`,
              url: `${siteUrl}/daily-special`,
            })),
          },
        }
      : {}),
    sameAs: [
      "https://www.instagram.com/freshcup.ontario/",
      "https://www.facebook.com/p/Fresh-Cup-61567289606413/",
      "https://www.tiktok.com/@fresh.cup2",
      "https://www.ubereats.com/ca/store/fresh-cup/AkTM4CFtTY6bIWv5hngbKg",
      "https://www.skipthedishes.com/fresh-cup-bubble-tea",
      "https://www.doordash.com/store/fresh-cup-north-york-32103931/52514548/?event_type=autocomplete&pickup=false",
      "https://www.fantuanorder.com/en-US/store/Restaurant/ca-31324?rTraceId=s-1-1-2067298929082449931",
    ],
    potentialAction: {
      "@type": "OrderAction",
      target: [
        {
          "@type": "EntryPoint",
          urlTemplate: "https://www.ubereats.com/ca/store/fresh-cup/AkTM4CFtTY6bIWv5hngbKg",
          actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
        },
        {
          "@type": "EntryPoint",
          urlTemplate: "https://www.skipthedishes.com/fresh-cup-bubble-tea",
          actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
        },
        {
          "@type": "EntryPoint",
          urlTemplate: "https://www.doordash.com/store/fresh-cup-north-york-32103931/52514548/?event_type=autocomplete&pickup=false",
          actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
        },
        {
          "@type": "EntryPoint",
          urlTemplate: "https://www.fantuanorder.com/en-US/store/Restaurant/ca-31324?rTraceId=s-1-1-2067298929082449931",
          actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes Fresh Cup special?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fresh Cup offers 50+ flavour combinations with real fruit juices, customizable sugar & ice levels, plus house bubble waffles and fluffy pancakes. We use premium ingredients, hand-shake every drink, fresh-press juices daily, and deliver exceptional customer service in Don Mills.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Fresh Cup Bubble Tea located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Fresh Cup is located at ${restaurant.address} in Peanut Plaza, North York, Ontario. We're conveniently near Fairview Mall and Don Mills.`,
        },
      },
      {
        "@type": "Question",
        name: "What are Fresh Cup's hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monday-Friday: 3:00 PM - 9:00 PM, Saturday-Sunday: 11:00 AM - 9:00 PM. Call (647) 518-0951 to confirm.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer delivery or takeout?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Order online via Uber Eats, SkipTheDishes, DoorDash, or Fantuan for delivery and takeout. Walk-ins are also welcome.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between milk tea and fruit tea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Milk tea uses creamy tea with milk, toppings, and customizable sweetness. Fruit tea blends real fruit with tea for a fresher, lighter taste. Both come with 12+ topping options.",
        },
      },
      {
        "@type": "Question",
        name: "Are bubble waffles vegan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our bubble waffles contain eggs by default, and some toppings may include dairy. Ask staff about customization options for your dietary needs.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function to24(t: string) {
  const [time, mer] = t.split(" ");
  let [h, m] = time.split(":").map(Number);
  if (mer === "PM" && h !== 12) h += 12;
  if (mer === "AM" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <StructuredData />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileOrderBar />
      </body>
    </html>
  );
}
