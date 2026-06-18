export const restaurant = {
  name: "Fresh Cup",
  fullName: "Fresh Cup Bubble Tea & Café",
  tagline: "Bubble Tea · Fresh Juices · Smoothies · Coffee",
  shortDesc:
    "Hand-shaken bubble tea, 100% fresh-pressed juices, real fruit smoothies, espresso drinks, brewed coffee, bubble waffles, fluffy pancakes and sweet treats — made fresh to order in North York.",
  phoneDisplay: "(647) 518-0951",
  phone: "+16475180951",
  address: "3046 Don Mills Rd.",
  addressLine2: "North York, ON M2J 3C1",
  locatedIn: "Peanut Plaza",
  city: "North York",
  region: "ON",
  postalCode: "M2J 3C1",
  country: "CA",
  geo: { lat: 43.7786878, lng: -79.3475719 },
  rating: 4.4,
  reviewCount: 207,
  priceRange: "$1–10",
  mapsUrl: "https://maps.google.com/?q=Fresh+Cup+Bubble+Tea,+3046+Don+Mills+Rd,+North+York,+ON+M2J+3C1",
  mapsEmbed:
    "https://www.google.com/maps?q=3046+Don+Mills+Rd,+North+York,+ON+M2J+3C1&output=embed",
  // One-tap "Write a review" link.
  // UPGRADE (recommended): open Google Business Profile → "Ask for reviews",
  // copy the short link (looks like https://g.page/r/XXXX/review) and paste it
  // into `reviewUrl` below, then run `npm run review-qr` to regenerate the QR code.
  // The default below reliably opens the Fresh Cup listing where customers tap "Write a review".
  reviewUrl:
    "https://www.google.com/search?q=Fresh+Cup+Bubble+Tea+%26+Caf%C3%A9+3046+Don+Mills+Rd+North+York+reviews",
  ordering: {
    uberEats:
      "https://www.ubereats.com/ca/store/fresh-cup/AkTM4CFtTY6bIWv5hngbKg",
    skipTheDishes: "https://www.skipthedishes.com/fresh-cup-bubble-tea",
    doorDash:
      "https://www.doordash.com/store/fresh-cup-north-york-32103931/52514548/?event_type=autocomplete&pickup=false",
    fantuan:
      "https://www.fantuanorder.com/en-US/store/Restaurant/ca-31324?rTraceId=s-1-1-2067298929082449931",
  },
  social: {
    instagram: "https://www.instagram.com/freshcup.ontario/",
    facebook: "https://www.facebook.com/p/Fresh-Cup-61567289606413/",
    tiktok: "https://www.tiktok.com/@fresh.cup2",
  },
  // Seasonal hook — set active:false to remove the World Cup promo everywhere when it ends.
  worldCup: {
    active: true,
    eyebrow: "World Cup 2026 Watch Party",
    headline: "Catch every game at Fresh Cup",
    offer: "20% OFF",
    offerItems: "all bubble tea, snacks & desserts",
    timing: "during all World Cup game hours",
    fineprint: "Valid on regular priced items. In-store only. Excludes other promos.",
    image: "/images/world-cup-offer.jpg",
    // FIFA World Cup 2026: June 11 – July 19, 2026.
    startDate: "2026-06-11",
    endDate: "2026-07-19",
  },
  dailySpecial: {
    active: true,
    title: "Daily Specials",
    priceDisplay: "$5",
    image: "/images/Daily Specials.png",
    validFor: "Regular sized drinks without any toppings",
    schedule: [
      { day: "Monday", item: "Green Apple Milk Tea" },
      { day: "Tuesday", item: "Oreo Latte" },
      { day: "Wednesday", item: "Brown Sugar Milk Tea" },
      { day: "Thursday", item: "Strawberry Milkshake" },
      { day: "Friday", item: "Honeydew Slush" },
      { day: "Saturday", item: "Mango Fruit Tea" },
      { day: "Sunday", item: "Strawberry Banana Smoothie" },
    ],
  },
  // From Google Business Profile. 24h format hours; null = closed.
  hours: [
    { day: "Monday", open: "3:00 PM", close: "9:00 PM" },
    { day: "Tuesday", open: "3:00 PM", close: "9:00 PM" },
    { day: "Wednesday", open: "3:00 PM", close: "9:00 PM" },
    { day: "Thursday", open: "3:00 PM", close: "9:00 PM" },
    { day: "Friday", open: "3:00 PM", close: "9:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Sunday", open: "11:00 AM", close: "9:00 PM" },
  ],
};

export type Restaurant = typeof restaurant;
